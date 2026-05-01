import EditBlogForm from "@/components/admin/edit-blog-form"
import clientPromise from "@/lib/db"
import { ObjectId } from "mongodb"
import { notFound } from "next/navigation"

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  let blog = null
  try {
    const client = await clientPromise
    const db = client.db("tecunique")

    // Try both ObjectId and string ID
    blog = await db.collection("blogs").findOne({ _id: new ObjectId(id) })
    if (!blog) {
      blog = await db.collection("blogs").findOne({ id: id })
    }
  } catch (e) {
    // If ObjectId conversion fails, try string ID
    const client = await clientPromise
    const db = client.db("tecunique")
    blog = await db.collection("blogs").findOne({ id: id })
  }

  if (!blog) {
    notFound()
  }

  // Sanitize for client
  const serializedBlog = {
    ...blog,
    _id: blog._id.toString(),
    createdAt: blog.createdAt?.toISOString(),
  }

  return <EditBlogForm blog={serializedBlog} />
}
