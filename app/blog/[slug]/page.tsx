import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { getBlogPost as getStaticBlogPost, getRecentPosts } from "@/lib/blog-data"
import { CalendarDays, Clock, ArrowLeft, ArrowRight, User } from "lucide-react"
import clientPromise from "@/lib/db"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

async function getBlogPost(slug: string) {
  // Check static data first
  const staticPost = getStaticBlogPost(slug)
  if (staticPost) return staticPost

  // Check MongoDB
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const dbPost = await db.collection("blogs").findOne({ slug })
    return dbPost ? {
      ...dbPost,
      _id: dbPost._id.toString(),
      createdAt: dbPost.createdAt?.toISOString(),
    } : null
  } catch (e) {
    return null
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: (post as any).title,
    description: (post as any).excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== slug)

  return (
    <>
      {/* Article Header */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          <Badge variant="secondary" className="mb-4">
            {(post as any).category}
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {(post as any).title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {(post as any).author}
            </span>
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {new Date((post as any).date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {(post as any).readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            {(post as any).content.split("\n\n").map((paragraph: string, index: number) => {
              const renderFormattedText = (text: string) => {
                const parts = text.split(/(\*\*[^*]+\*\*)/g)
                return parts.map((part, i) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={i} className="text-foreground font-bold">{part.slice(2, -2)}</strong>
                  }
                  return part
                })
              }

              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }

              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter((item) => item.startsWith("- "))
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {renderFormattedText(item.replace("- ", ""))}
                      </li>
                    ))}
                  </ul>
                )
              }

              if (paragraph.match(/^\d+\./)) {
                const items = paragraph.split("\n").filter((item) => item.match(/^\d+\./))
                return (
                  <ol key={index} className="list-decimal pl-6 space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i} className="text-muted-foreground">
                        {renderFormattedText(item.replace(/^\d+\.\s*/, ""))}
                      </li>
                    ))}
                  </ol>
                )
              }

              return (
                <p key={index} className="text-muted-foreground leading-relaxed my-4">
                  {renderFormattedText(paragraph)}
                </p>
              )
            })}
          </article>

          {/* Share and Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className="bg-muted/30 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground text-center mb-12">
              More Articles
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.slice(0, 3).map((relatedPost) => (
                <Card key={relatedPost.slug} className="group flex flex-col overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg">
                  <CardHeader className="pb-4">
                    <Badge variant="secondary" className="w-fit text-xs mb-3">
                      {relatedPost.category}
                    </Badge>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
