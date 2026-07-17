import type { Metadata } from "next"
import clientPromise from "@/lib/db"
import BlogList from "@/components/blog/blog-list"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Sparkles } from "lucide-react"

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
      <section 
        className="brand-hero-bg relative overflow-hidden py-20 lg:py-32 flex items-center min-h-[60vh]"
      >
        {/* Animated blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="brand-orb-indigo absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 animate-blob"
          />
          <div
            className="brand-orb-blue absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 animate-blob"
            style={{
              animationDelay: "4s",
              animationDuration: "16s",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
              Engineering <span className="gradient-text">Insights.</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Deep-dive technical articles, architectural patterns, and industry insights from our senior engineering team.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BlogList initialBlogs={blogs} />
        </div>
      </section>

      {/* CTA Section */}
          </>
  )
}
