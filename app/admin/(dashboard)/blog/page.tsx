import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search, Edit2, Trash2, ExternalLink, Calendar, User } from "lucide-react"
import Link from "next/link"
import { blogPosts as staticBlogs } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import clientPromise from "@/lib/db"

export const dynamic = "force-dynamic"

async function getBlogs() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const dbBlogs = await db.collection("blogs").find({}).sort({ createdAt: -1 }).toArray()
    
    // Merge static blogs with DB blogs for the management view
    // In a real app, you might migrate all static ones to DB once
    return [...dbBlogs, ...staticBlogs]
  } catch (e) {
    console.error(e)
    return staticBlogs
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
        <div className="p-4 border-b border-border/40 bg-muted/20 flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full bg-white border border-border/60 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/40 text-sm font-semibold text-muted-foreground">
                <th className="px-6 py-4">Article</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {blogs.map((post: any, index: number) => (
                <tr key={post._id || `static-${post.id || index}`} className="hover:bg-muted/10 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-20 rounded-lg bg-muted overflow-hidden relative border border-border/40 flex-shrink-0">
                        <Image src={post.image || "/images/blog/blog1.jpg"} alt="" fill className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="truncate max-w-[300px]">{post.title}</span>
                          <Link href={`/blog/${post.slug}`} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </div>
                        <div className="flex items-center gap-3 mt-1 text-[11px] text-muted-foreground uppercase tracking-widest font-bold">
                          <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                          <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">Published</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{post.category}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-rose-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
