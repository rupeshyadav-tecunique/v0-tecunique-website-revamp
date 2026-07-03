import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import clientPromise from "@/lib/db"
import CaseStudyTable from "@/components/admin/case-study-table"

export const dynamic = "force-dynamic"

async function getCaseStudies() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const dbCaseStudies = await db.collection("case-studies").find({}).sort({ createdAt: -1 }).toArray()
    
    return dbCaseStudies.map(study => ({
      ...study,
      _id: study._id.toString(),
      createdAt: study.createdAt?.toISOString(),
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}

export default async function ManageCaseStudies() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Manage Case Studies</h1>
          <p className="text-muted-foreground mt-2">Publish, edit, or remove case studies.</p>
        </div>
        <Button className="rounded-xl" asChild>
          <Link href="/admin/case-studies/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Case Study
          </Link>
        </Button>
      </div>

      <Card className="border-border/60 shadow-sm overflow-hidden">
        <CaseStudyTable caseStudies={caseStudies} />
      </Card>
    </div>
  )
}
