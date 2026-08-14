"use client"

import { useState } from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Paperclip, Loader2, Send } from "lucide-react"
import { toast } from "sonner"

interface ApplicationModalProps {
  jobTitle: string
  children: React.ReactNode
}

export function ApplicationModal({ jobTitle, children }: ApplicationModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File is too large. Maximum size is 5MB.")
        e.target.value = ''
        setFileName(null)
        return
      }
      setFileName(file.name)
    } else {
      setFileName(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append("jobTitle", jobTitle)

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formData, // Browser automatically sets correct Content-Type for multipart/form-data
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to submit application")
      }

      toast.success("Application submitted successfully! We will be in touch soon.")
      setOpen(false)
    } catch (error: any) {
      toast.error(error.message || "An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Apply for {jobTitle}</DialogTitle>
          <DialogDescription>
            Fill out the form below and attach your resume. Our HR team will review your application.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-8rem)] pr-4 -mr-4">
          <form onSubmit={handleSubmit} className="space-y-6 mt-2 pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name <span className="text-destructive">*</span></Label>
              <Input id="firstName" name="firstName" required placeholder="John" disabled={isSubmitting} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name <span className="text-destructive">*</span></Label>
              <Input id="lastName" name="lastName" required placeholder="Doe" disabled={isSubmitting} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
              <Input id="email" name="email" type="email" required placeholder="john@example.com" disabled={isSubmitting} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
              <Input id="phone" name="phone" type="tel" required placeholder="+1 (555) 000-0000" disabled={isSubmitting} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
            <Input id="linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/johndoe" disabled={isSubmitting} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="coverLetter">Cover Letter / Note <span className="text-destructive">*</span></Label>
            <Textarea 
              id="coverLetter" 
              name="coverLetter" 
              required 
              placeholder="Tell us why you're a great fit for this role..." 
              className="min-h-[120px] resize-none"
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-2">
            <Label>Resume / CV <span className="text-destructive">*</span></Label>
            <div className="flex items-center gap-3">
              <Label 
                htmlFor="resume" 
                className={`flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/50 px-4 text-sm font-medium transition-colors hover:bg-muted ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}
              >
                <Paperclip className="h-4 w-4 text-muted-foreground" />
                {fileName ? <span className="text-foreground truncate max-w-[200px]">{fileName}</span> : <span className="text-muted-foreground">Upload Resume (PDF, DOCX)</span>}
              </Label>
              <Input 
                id="resume" 
                name="resume" 
                type="file" 
                accept=".pdf,.doc,.docx" 
                required 
                className="hidden" 
                onChange={handleFileChange}
                disabled={isSubmitting}
              />
            </div>
            <p className="text-xs text-muted-foreground">Max file size: 5MB</p>
          </div>

          <Button type="submit" className="w-full h-12 text-base rounded-xl" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Application...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Application
              </>
            )}
          </Button>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
