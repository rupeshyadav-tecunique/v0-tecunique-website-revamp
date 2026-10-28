import CaseStudyForm from "@/components/pages/admin/case-study-form"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewCaseStudyPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild className="rounded-full">
          <Link href="/admin/case-studies">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Add New Case Study</h1>
          <p className="text-muted-foreground mt-1">Publish a client success story, engineering challenge, and results.</p>
        </div>
      </div>

      <Card className="p-6 border-border/60 shadow-sm">
        <CaseStudyForm />
      </Card>
    </div>
  )
}

