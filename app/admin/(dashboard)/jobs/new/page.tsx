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
  Plus, 
  Trash2, 
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  Layers
} from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

export default function NewJobPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [requirements, setRequirements] = useState<string[]>([""])

  const addRequirement = () => setRequirements([...requirements, ""])
  const removeRequirement = (index: number) => {
    const newReqs = requirements.filter((_, i) => i !== index)
    setRequirements(newReqs.length ? newReqs : [""])
  }
  const updateRequirement = (index: number, value: string) => {
    const newReqs = [...requirements]
    newReqs[index] = value
    setRequirements(newReqs)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const title = formData.get("title") as string
    
    const jobData = {
      title,
      department: formData.get("department"),
      location: formData.get("location"),
      type: formData.get("type"),
      experience: formData.get("experience"),
      description: formData.get("description"),
      requirements: requirements.filter(r => r.trim() !== ""),
      postedDate: new Date().toISOString().split('T')[0],
      slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
    }

    try {
      const res = await fetch("/api/admin/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      })

      if (res.ok) {
        toast.success("Job posting created successfully!")
        router.push("/admin/jobs")
        router.refresh()
      } else {
        toast.error("Failed to create job posting")
      }
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild className="rounded-full">
          <Link href="/admin/jobs">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Post New Job</h1>
          <p className="text-muted-foreground mt-1">Create a new career opportunity at TECUNIQUE.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 pb-12">
        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Basic Information
            </CardTitle>
            <CardDescription>Position details and classification</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" name="title" placeholder="e.g. Senior Full Stack Developer" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" name="department" placeholder="e.g. Engineering, QA, Sales" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="location" name="location" className="pl-10" placeholder="e.g. Vadodara, India (Remote)" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Employment Type</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="type" name="type" className="pl-10" placeholder="e.g. Full-time, Contract" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="experience" name="experience" className="pl-10" placeholder="e.g. 5+ Years, Senior" required />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Role Description & Requirements
            </CardTitle>
            <CardDescription>What the role involves and what you're looking for</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                placeholder="Write a compelling description of the role..." 
                className="min-h-[150px] resize-none"
                required 
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Key Requirements</Label>
                <Button type="button" variant="outline" size="sm" onClick={addRequirement} className="h-8">
                  <Plus className="mr-2 h-3 w-3" />
                  Add Row
                </Button>
              </div>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <div key={index} className="flex gap-2">
                    <Input 
                      value={req} 
                      onChange={(e) => updateRequirement(index, e.target.value)}
                      placeholder={`Requirement #${index + 1}`}
                      required
                    />
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeRequirement(index)}
                      disabled={requirements.length === 1 && !requirements[0]}
                      className="text-muted-foreground hover:text-rose-500 shrink-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-end gap-4">
          <Button variant="ghost" type="button" asChild>
            <Link href="/admin/jobs">Cancel</Link>
          </Button>
          <Button type="submit" disabled={isLoading} className="rounded-xl px-8 shadow-lg shadow-primary/20">
            {isLoading ? "Saving..." : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Publish Job Opening
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
