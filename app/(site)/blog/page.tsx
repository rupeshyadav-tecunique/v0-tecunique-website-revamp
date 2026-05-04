import type { Metadata } from "next"
import Link from "next/link"
import clientPromise from "@/lib/db"
import BlogList from "@/components/blog/blog-list"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & Articles",
  description: "Tech Trends Unwrapped: A Dive into Modern Software Engineering Articles. Insights on software development, quality assurance, and technology trends.",
}

async function getBlogs() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const dbBlogs = await db.collection("blogs").find({ isDraft: false }).sort({ createdAt: -1 }).toArray()
    
    // Convert Mongo objects to plain JS objects (serializable)
    return dbBlogs.map(blog => ({
      ...blog,
      _id: blog._id.toString(),
      createdAt: blog.createdAt?.toISOString(),
      date: blog.date || new Date().toISOString()
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs()

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

      {/* Blog Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BlogList initialBlogs={blogs} />
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
