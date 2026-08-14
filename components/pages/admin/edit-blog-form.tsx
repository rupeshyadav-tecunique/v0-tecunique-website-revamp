"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  ArrowLeft, 
  Save, 
  FileText,
  Image as ImageIcon,
  User,
  Calendar,
  Tag,
  Type
} from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

export default function EditBlogForm({ blog }: { blog: any }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const title = formData.get("title") as string
    
    const updateData = {
      title,
      excerpt: formData.get("excerpt"),
      content: formData.get("content"),
      author: formData.get("author"),
      category: formData.get("category"),
      date: formData.get("date"),
      slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
      isDraft: (e.nativeEvent as any).submitter.name === "draft"
    }

    try {
      const res = await fetch(`/api/admin/blogs/${blog._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      })

      if (res.ok) {
        toast.success("Blog post updated successfully!")
        router.push("/admin/blog")
        router.refresh()
      } else {
        toast.error("Failed to update blog post")
      }
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild className="rounded-full">
          <Link href="/admin/blog">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Edit Article</h1>
          <p className="text-muted-foreground mt-1">Update your insights and updates.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5 text-primary" />
                  Content Editor
                </CardTitle>
                <CardDescription>Edit your story</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Article Title</Label>
                  <Input 
                    id="title" 
                    name="title" 
                    defaultValue={blog.title}
                    placeholder="Enter a catchy title..." 
                    className="text-lg font-semibold py-6" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt / Summary</Label>
                  <Textarea 
                    id="excerpt" 
                    name="excerpt" 
                    defaultValue={blog.excerpt}
                    placeholder="Brief summary to hook the reader..." 
                    className="min-h-[80px] resize-none"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Main Content (Markdown supported)</Label>
                  <Textarea 
                    id="content" 
                    name="content" 
                    defaultValue={blog.content}
                    placeholder="The heart of your article..." 
                    className="min-h-[400px] font-mono text-sm leading-relaxed"
                    required 
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-wider">Publication Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="author" name="author" defaultValue={blog.author} className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="category" name="category" defaultValue={blog.category} className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Publish Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="date" name="date" type="date" defaultValue={blog.date} className="pl-10" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3">
              <Button type="submit" name="publish" disabled={isLoading} className="w-full rounded-xl py-6 shadow-lg shadow-primary/20">
                {isLoading ? "Saving..." : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Update & Publish
                  </>
                )}
              </Button>
              <Button variant="ghost" type="submit" name="draft" disabled={isLoading} className="w-full">
                {isLoading ? "Saving..." : "Save as Draft"}
              </Button>
              <Button variant="outline" type="button" asChild className="w-full border-dashed">
                <Link href="/admin/blog">Cancel</Link>
              </Button>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}
