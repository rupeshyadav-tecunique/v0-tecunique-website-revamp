"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Edit2, Trash2, ExternalLink, AlertTriangle, Search, X } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function JobTable({ jobs }: { jobs: any[] }) {
  const router = useRouter()
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [jobs, searchQuery])

  const handleDelete = async () => {
    if (!deleteId) return

    setIsDeleting(true)
    try {
      const res = await fetch(`/api/admin/jobs/${deleteId}`, {
        method: "DELETE",
      })

      if (res.ok) {
        toast.success("Job opening deleted")
        router.refresh()
      } else {
        toast.error("Failed to delete job")
      }
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setIsDeleting(false)
      setDeleteId(null)
    }
  }

  return (
    <>
      <div className="p-4 border-b border-border/40 bg-muted/20 flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search jobs by title, department, or location..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-border/60 rounded-lg py-2 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="text-xs text-muted-foreground">
          {filteredJobs.length} {filteredJobs.length === 1 ? 'opening' : 'openings'} found
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/40 text-sm font-semibold text-muted-foreground">
              <th className="px-6 py-4">Job Title</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Location</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job: any, index: number) => (
                <tr key={job._id || `static-${job.id || index}`} className="hover:bg-muted/10 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">
                    <div>
                      {job.title}
                      <Link href={`/careers/${job.slug}`} target="_blank" className="ml-2 inline-block text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="secondary">{job.department}</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{job.location}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{job.type}</td>
                  <td className="px-6 py-4">
                    {job.isActive ? (
                      <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">Active</Badge>
                    ) : (
                      <Badge variant="outline" className="text-muted-foreground border-border bg-muted/50">Inactive</Badge>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary" asChild>
                        <Link href={`/admin/jobs/edit/${job._id || job.id}`}>
                          <Edit2 className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setDeleteId(job._id || job.id)}
                        className="h-8 w-8 text-muted-foreground hover:text-rose-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                  No job openings found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent className="rounded-2xl border-border/60 shadow-xl">
          <AlertDialogHeader>
            <div className="h-12 w-12 rounded-full bg-rose-50 flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6 text-rose-600" />
            </div>
            <AlertDialogTitle className="text-xl font-bold">Delete Job Opening?</AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              This action cannot be undone. This will permanently remove the job posting from your careers page.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-6 gap-3">
            <AlertDialogCancel className="rounded-xl border-border/60">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={(e) => {
                e.preventDefault()
                handleDelete()
              }}
              disabled={isDeleting}
              className="rounded-xl bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-200 transition-all"
            >
              {isDeleting ? "Deleting..." : "Delete Job"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
