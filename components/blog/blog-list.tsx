"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowRight, Search, X } from "lucide-react"

export default function BlogList({ initialBlogs }: { initialBlogs: any[] }) {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBlogs = useMemo(() => {
    return initialBlogs.filter((post) => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [initialBlogs, searchQuery])

  return (
    <div className="space-y-8">
      {/* Search Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-border/60">
        <div className="text-sm text-muted-foreground font-medium order-2 sm:order-1">
          {filteredBlogs.length === 0 ? (
            "No articles match your search."
          ) : (
            <>Showing <span className="font-bold text-foreground">{filteredBlogs.length}</span> {filteredBlogs.length === 1 ? 'article' : 'articles'}</>
          )}
        </div>
        
        <div className="relative w-full sm:max-w-md order-1 sm:order-2 group">
          <div className="absolute inset-0 bg-primary/10 blur-md rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
          <div className="relative bg-slate-50 border border-border/80 rounded-xl shadow-sm overflow-hidden flex items-center p-1.5 focus-within:bg-white focus-within:border-primary/40 transition-colors">
            <div className="flex h-9 w-9 items-center justify-center text-muted-foreground ml-1">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="text"
              placeholder="Search articles, insights, tech trends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none px-2 py-1.5 text-sm text-foreground placeholder:text-muted-foreground/60"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors mr-1"
              >
                <X className="h-4 w-4 text-slate-500" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredBlogs.map((post: any) => (
          <Card key={post._id || post.slug} className="group flex flex-col overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-3">
                <Badge 
                  variant="secondary" 
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    post.category?.toLowerCase().includes("atlassian") || 
                    post.category?.toLowerCase().includes("jira") || 
                    post.category?.toLowerCase().includes("confluence")
                      ? "bg-[#0052CC] text-white border-transparent hover:bg-[#0052CC]/90"
                      : "bg-primary/5 text-primary border-primary/10"
                  }`}
                >
                  {post.category}
                </Badge>
              </div>
              <Link href={`/blog/${post.slug}`} className="block min-h-[3.5rem]">
                <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h2>
              </Link>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/70">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime || "5 min read"}
                  </span>
                </div>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex items-center text-sm font-bold text-primary hover:text-primary/80 transition-colors group/link"
              >
                Read Article
                <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
