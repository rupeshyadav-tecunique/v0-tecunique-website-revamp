import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/blog-data"
import { CalendarDays, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & Articles",
  description: "Tech Trends Unwrapped: A Dive into Modern Software Engineering Articles. Insights on software development, quality assurance, and technology trends.",
}

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Tech Trends Unwrapped
            </h1>
            <p className="mt-2 text-xl text-primary font-medium">
              A Dive into Modern Software Engineering Articles
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Embark on a Journey of Technological Discovery with Our Insightful Blogs and Articles. Navigating the Digital Landscape, We Unveil Tomorrow&apos;s Tech Today, Offering In-Depth Analysis, Expert Perspectives, and Cutting-Edge Insights.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="group flex flex-col overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
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

      {/* CTA Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Looking for Expert Software Services?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Unlock our capabilities of custom software development services, product development, and quality assurance for businesses of all sizes and shapes.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
