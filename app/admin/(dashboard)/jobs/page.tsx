import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search, Edit2, Trash2, ExternalLink } from "lucide-react"
import Link from "next/link"
import { jobs as staticJobs } from "@/lib/jobs-data"
import { Badge } from "@/components/ui/badge"
import clientPromise from "@/lib/db"

export const dynamic = "force-dynamic"

async function getJobs() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const dbJobs = await db.collection("jobs").find({}).sort({ createdAt: -1 }).toArray()
    
    return [...dbJobs, ...staticJobs]
  } catch (e) {
    console.error(e)
    return staticJobs
  }
}

export default async function ManageJobs() {
  const jobs = await getJobs()

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Manage Careers</h1>
          <p className="text-muted-foreground mt-2">Add, edit, or remove job openings from the careers page.</p>
        </div>
        <Button className="rounded-xl" asChild>
          <Link href="/admin/jobs/new">
            <Plus className="mr-2 h-4 w-4" />
            New Job Opening
          </Link>
        </Button>
      </div>

      <Card className="border-border/60 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border/40 bg-muted/20 flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="w-full bg-white border border-border/60 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
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
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {jobs.map((job: any, index: number) => (
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
