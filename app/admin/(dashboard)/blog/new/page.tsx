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
import Image from "next/image"

export default function NewBlogPostPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [previewImage, setPreviewImage] = useState("/images/blog/blog1.jpg") // Mock default

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const title = formData.get("title") as string
    
    const blogData = {
      title,
      excerpt: formData.get("excerpt"),
      content: formData.get("content"),
      author: formData.get("author"),
      category: formData.get("category"),
      date: formData.get("date"),
      readTime: "5 min read", 
      image: "/images/blog/blog1.jpg", 
      slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
      isDraft: (e.nativeEvent as any).submitter.name === "draft"
    }

    try {
      const res = await fetch("/api/admin/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      })

      if (res.ok) {
        toast.success(blogData.isDraft ? "Draft saved successfully!" : "Blog post published successfully!")
        router.push("/admin/blog")
        router.refresh()
      } else {
        toast.error("Failed to save blog post")
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
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Write New Article</h1>
          <p className="text-muted-foreground mt-1">Share insights and updates with the TECUNIQUE community.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5 text-primary" />
                  Content Editor
                </CardTitle>
                <CardDescription>Write your story here</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Article Title</Label>
                  <Input id="title" name="title" placeholder="Enter a catchy title..." className="text-lg font-semibold py-6" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt / Summary</Label>
                  <Textarea 
                    id="excerpt" 
                    name="excerpt" 
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
                    placeholder="The heart of your article..." 
                    className="min-h-[400px] font-mono text-sm leading-relaxed"
                    required 
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar / Settings */}
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
                    <Input id="author" name="author" className="pl-10" defaultValue="TECUNIQUE Team" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="category" name="category" className="pl-10" placeholder="e.g. Technology, Culture" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Publish Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="date" name="date" type="date" className="pl-10" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-wider">Blog Image</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-xl bg-muted flex items-center justify-center border border-dashed border-border/60">
                   <div className="text-center">
                     <ImageIcon className="mx-auto h-8 w-8 text-muted-foreground/40 mb-2" />
                     <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60">Image Coming Soon</p>
                   </div>
                </div>
                <p className="text-[10px] text-muted-foreground text-center leading-relaxed">Image upload will be available in a future update. For now, a default placeholder will be used.</p>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3">
              <Button type="submit" name="publish" disabled={isLoading} className="w-full rounded-xl py-6 shadow-lg shadow-primary/20">
                {isLoading ? "Publishing..." : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Publish Post
                  </>
                )}
              </Button>
              <Button variant="ghost" type="submit" name="draft" disabled={isLoading} className="w-full">
                {isLoading ? "Saving..." : "Save as Draft"}
              </Button>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}
