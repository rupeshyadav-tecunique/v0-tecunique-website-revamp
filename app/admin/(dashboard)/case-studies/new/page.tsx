import CaseStudyForm from "@/components/admin/case-study-form"
import { Card } from "@/components/ui/card"

export default function NewCaseStudy() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Add New Case Study</h1>
        <p className="text-muted-foreground mt-2">Fill in the details below to publish a new case study.</p>
      </div>

      <Card className="p-6 border-border/60 shadow-sm">
        <CaseStudyForm />
      </Card>
    </div>
  )
}
