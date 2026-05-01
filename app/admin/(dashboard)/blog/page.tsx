import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search } from "lucide-react"
import Link from "next/link"
import clientPromise from "@/lib/db"
import BlogTable from "@/components/admin/blog-table"

export const dynamic = "force-dynamic"

async function getBlogs() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const dbBlogs = await db.collection("blogs").find({}).sort({ createdAt: -1 }).toArray()
    
    return dbBlogs.map(blog => ({
      ...blog,
      _id: blog._id.toString(),
      createdAt: blog.createdAt?.toISOString(),
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}

export default async function ManageBlogs() {
  const blogs = await getBlogs()

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Manage Blogs</h1>
          <p className="text-muted-foreground mt-2">Publish, edit, or archive articles on the TECUNIQUE blog.</p>
        </div>
        <Button className="rounded-xl" asChild>
          <Link href="/admin/blog/new">
            <Plus className="mr-2 h-4 w-4" />
            Write New Post
          </Link>
        </Button>
      </div>

      <Card className="border-border/60 shadow-sm overflow-hidden">
        <BlogTable blogs={blogs} />
      </Card>
    </div>
  )
}
