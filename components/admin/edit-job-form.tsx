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
  Briefcase, 
  MapPin, 
  Clock, 
  GraduationCap, 
  Building2,
  ListChecks
} from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

export default function EditJobForm({ job }: { job: any }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const title = formData.get("title") as string
    
    const updateData = {
      title,
      department: formData.get("department"),
      location: formData.get("location"),
      type: formData.get("type"),
      experience: formData.get("experience"),
      description: formData.get("description"),
      requirements: (formData.get("requirements") as string).split("\n").filter(r => r.trim() !== ""),
      slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    }

    try {
      const res = await fetch(`/api/admin/jobs/${job._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      })

      if (res.ok) {
        toast.success("Job opening updated successfully!")
        router.push("/admin/jobs")
        router.refresh()
      } else {
        toast.error("Failed to update job")
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
          <Link href="/admin/jobs">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Edit Job Opening</h1>
          <p className="text-muted-foreground mt-1">Update role details and requirements.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Role Details
                </CardTitle>
                <CardDescription>Main information about the position</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" name="title" defaultValue={job.title} placeholder="e.g. Senior Backend Engineer" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    defaultValue={job.description}
                    placeholder="Describe the role and responsibilities..." 
                    className="min-h-[150px] resize-none"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements (One per line)</Label>
                  <Textarea 
                    id="requirements" 
                    name="requirements" 
                    defaultValue={job.requirements.join("\n")}
                    placeholder="List the skills and qualifications needed..." 
                    className="min-h-[200px] font-mono text-sm"
                    required 
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-wider">Classification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="department" name="department" defaultValue={job.department} className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="location" name="location" defaultValue={job.location} className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Employment Type</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="type" name="type" defaultValue={job.type} className="pl-10" placeholder="e.g. Full-time, Remote" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Experience Level</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="experience" name="experience" defaultValue={job.experience} className="pl-10" placeholder="e.g. 5+ Years" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3">
              <Button type="submit" disabled={isLoading} className="w-full rounded-xl py-6 shadow-lg shadow-primary/20">
                {isLoading ? "Saving..." : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                )}
              </Button>
              <Button variant="ghost" type="button" asChild className="w-full">
                <Link href="/admin/jobs">Cancel</Link>
              </Button>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}
