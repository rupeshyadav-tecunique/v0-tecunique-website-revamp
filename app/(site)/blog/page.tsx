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
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
      >
        {/* Animated blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 animate-blob"
            style={{ background: "radial-gradient(circle, #a5b4fc 0%, #c4b5fd 50%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 animate-blob"
            style={{
              background: "radial-gradient(circle, #93c5fd 0%, #a5b4fc 50%, transparent 70%)",
              animationDelay: "4s",
              animationDuration: "16s",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <span className="section-pill mb-6 inline-flex">
              <Sparkles className="h-3 w-3" />
              Tech Trends
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight text-balance">
              Tech Trends <span className="gradient-text">Unwrapped</span>
            </h1>
            <p className="mt-6 text-xl text-primary font-medium">
              A Dive into Modern Software Engineering Articles
            </p>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Embark on a Journey of Technological Discovery with Our Insightful Blogs and Articles. Navigating the Digital Landscape, We Unveil Tomorrow&apos;s Tech Today, Offering In-Depth Analysis, Expert Perspectives, and Cutting-Edge Insights.
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
