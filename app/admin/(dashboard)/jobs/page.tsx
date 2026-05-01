import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search } from "lucide-react"
import Link from "next/link"
import clientPromise from "@/lib/db"
import JobTable from "@/components/admin/job-table"

export const dynamic = "force-dynamic"

async function getJobs() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const dbJobs = await db.collection("jobs").find({}).sort({ createdAt: -1 }).toArray()
    
    return dbJobs.map(job => ({
      ...job,
      _id: job._id.toString(),
      createdAt: job.createdAt?.toISOString(),
    }))
  } catch (e) {
    console.error(e)
    return []
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
        <JobTable jobs={jobs} />
      </Card>
    </div>
  )
}
