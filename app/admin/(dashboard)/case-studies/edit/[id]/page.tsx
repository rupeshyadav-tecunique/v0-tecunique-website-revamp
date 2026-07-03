import CaseStudyForm from "@/components/admin/case-study-form"
import { Card } from "@/components/ui/card"
import clientPromise from "@/lib/db"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

async function getCaseStudy(id: string) {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const study = await db.collection("case-studies").findOne({ id })
    
    if (!study) return null

    return {
      ...study,
      _id: study._id.toString(),
      createdAt: study.createdAt?.toISOString(),
    }
  } catch (error) {
    console.error(error)
    return null
  }
}

export default async function EditCaseStudy({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const study = await getCaseStudy(id)

  if (!study) {
    notFound()
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Edit Case Study: {study.client}</h1>
        <p className="text-muted-foreground mt-2">Update the information below.</p>
      </div>

      <Card className="p-6 border-border/60 shadow-sm">
        <CaseStudyForm initialData={study} />
      </Card>
    </div>
  )
}
