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
import { Paperclip, Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface ApplicationModalProps {
  jobTitle: string
  children?: React.ReactNode
  className?: string
}

interface FormDataState {
  firstName: string
  lastName: string
  email: string
  phone: string
  linkedin: string
  coverLetter: string
}

interface FieldErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  linkedin?: string
  coverLetter?: string
  resume?: string
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/
const URL_REGEX = /^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/\S*)?$/i

export function ApplicationModal({ jobTitle, children, className }: ApplicationModalProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  
  const [formData, setFormData] = useState<FormDataState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    coverLetter: ""
  })
  
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState<string | null>(null)
  const [errors, setErrors] = useState<FieldErrors>({})

  const validateField = (name: keyof FormDataState | "resume", value: string | File | null): string | undefined => {
    switch (name) {
      case "firstName":
        if (!value || typeof value !== "string" || !value.trim()) return "First name is required."
        if (value.trim().length < 2) return "First name must be at least 2 characters."
        return undefined
      case "lastName":
        if (!value || typeof value !== "string" || !value.trim()) return "Last name is required."
        if (value.trim().length < 2) return "Last name must be at least 2 characters."
        return undefined
      case "email":
        if (!value || typeof value !== "string" || !value.trim()) return "Email address is required."
        if (!EMAIL_REGEX.test(value.trim())) return "Please enter a valid email address (e.g. name@domain.com)."
        return undefined
      case "phone":
        if (!value || typeof value !== "string" || !value.trim()) return "Phone number is required."
        if (/[a-zA-Z]/.test(value)) return "Phone number cannot contain letters."
        if (!PHONE_REGEX.test(value.trim())) return "Please enter a valid phone number (7 to 15 digits)."
        return undefined
      case "linkedin":
        if (value && typeof value === "string" && value.trim()) {
          if (!URL_REGEX.test(value.trim())) return "Please enter a valid LinkedIn URL (e.g. https://linkedin.com/in/username)."
        }
        return undefined
      case "coverLetter":
        if (!value || typeof value !== "string" || !value.trim()) return "Cover letter is required."
        if (value.trim().length < 10) return "Please provide at least 10 characters."
        return undefined
      case "resume":
        if (!value) return "Please upload your resume (PDF, DOC, DOCX)."
        return undefined
      default:
        return undefined
    }
  }

  const validateAll = (): boolean => {
    const newErrors: FieldErrors = {}
    
    newErrors.firstName = validateField("firstName", formData.firstName)
    newErrors.lastName = validateField("lastName", formData.lastName)
    newErrors.email = validateField("email", formData.email)
    newErrors.phone = validateField("phone", formData.phone)
    newErrors.linkedin = validateField("linkedin", formData.linkedin)
    newErrors.coverLetter = validateField("coverLetter", formData.coverLetter)
    newErrors.resume = validateField("resume", file)

    // Remove undefined keys
    Object.keys(newErrors).forEach(k => {
      if (!newErrors[k as keyof FieldErrors]) delete newErrors[k as keyof FieldErrors]
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setServerError(null)

    if (hasSubmitted) {
      const err = validateField(name as keyof FormDataState, value)
      setErrors(prev => ({ ...prev, [name]: err }))
    }
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
    if (!newOpen) {
      setTimeout(() => {
        setIsSuccess(false)
        setServerError(null)
        setErrors({})
        setHasSubmitted(false)
        setFile(null)
        setFileName(null)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          linkedin: "",
          coverLetter: ""
        })
      }, 300)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServerError(null)
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      const allowedExts = [".pdf", ".doc", ".docx"]
      const isExtValid = allowedExts.some(ext => selectedFile.name.toLowerCase().endsWith(ext))
      
      if (!isExtValid) {
        const msg = "Invalid file type. Only .pdf, .doc, and .docx files are allowed."
        if (hasSubmitted) {
          setErrors(prev => ({ ...prev, resume: msg }))
        }
        toast.error(msg)
        e.target.value = ''
        setFile(null)
        setFileName(null)
        return
      }

      if (selectedFile.size > 5 * 1024 * 1024) {
        const msg = "File is too large. Maximum size is 5MB."
        if (hasSubmitted) {
          setErrors(prev => ({ ...prev, resume: msg }))
        }
        toast.error(msg)
        e.target.value = ''
        setFile(null)
        setFileName(null)
        return
      }

      setFile(selectedFile)
      setFileName(selectedFile.name)
      if (hasSubmitted) {
        setErrors(prev => ({ ...prev, resume: undefined }))
      }
    } else {
      setFile(null)
      setFileName(null)
      if (hasSubmitted) {
        setErrors(prev => ({ ...prev, resume: "Please upload your resume (PDF, DOC, DOCX)." }))
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setServerError(null)
    setHasSubmitted(true)

    if (!validateAll()) {
      toast.error("Please fill in all required fields correctly.")
      return
    }

    setIsSubmitting(true)

    const formPayload = new FormData()
    formPayload.append("jobTitle", jobTitle)
    formPayload.append("firstName", formData.firstName.trim())
    formPayload.append("lastName", formData.lastName.trim())
    formPayload.append("email", formData.email.trim())
    formPayload.append("phone", formData.phone.trim())
    if (formData.linkedin.trim()) {
      formPayload.append("linkedin", formData.linkedin.trim())
    }
    formPayload.append("coverLetter", formData.coverLetter.trim())
    if (file) {
      formPayload.append("resume", file)
    }

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: formPayload,
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        const errorMsg = typeof data.error === 'string' 
          ? data.error 
          : (data.error?.message || "Failed to submit application. Please try again.")
        throw new Error(errorMsg)
      }

      setIsSuccess(true)
      toast.success("Application submitted successfully! We will be in touch soon.")
    } catch (err: any) {
      const msg = err.message || "An unexpected error occurred. Please try again."
      setServerError(msg)
      toast.error(msg)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children || (
          <Button size="lg" className={cn("rounded-xl px-8 font-semibold", className)}>
            Apply Now
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        {isSuccess ? (
          <div className="py-8 px-2 flex flex-col items-center text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center animate-in zoom-in-75 duration-300">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <DialogTitle className="text-2xl font-display font-semibold">Application Received!</DialogTitle>
            <DialogDescription className="text-muted-foreground max-w-md text-base leading-relaxed">
              Thank you for applying for the <strong className="text-foreground">{jobTitle}</strong> position. Our talent acquisition team will review your profile and reach out soon.
            </DialogDescription>
            <div className="pt-4 w-full">
              <Button 
                onClick={() => handleOpenChange(false)} 
                className="w-full h-11 rounded-xl font-medium"
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-display">Apply for {jobTitle}</DialogTitle>
              <DialogDescription>
                Fill out the form below and attach your resume. Our HR team will review your application.
              </DialogDescription>
            </DialogHeader>

            {serverError && (
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm leading-relaxed">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <span>{serverError}</span>
              </div>
            )}

            <ScrollArea className="max-h-[calc(90vh-9rem)] pr-4 -mr-4">
              <form onSubmit={handleSubmit} noValidate className="space-y-5 mt-2 pb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName">First Name <span className="text-destructive">*</span></Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John" 
                      disabled={isSubmitting} 
                      className={cn(hasSubmitted && errors.firstName && "border-destructive focus-visible:ring-destructive/30")}
                    />
                    {hasSubmitted && errors.firstName && (
                      <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName">Last Name <span className="text-destructive">*</span></Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      disabled={isSubmitting} 
                      className={cn(hasSubmitted && errors.lastName && "border-destructive focus-visible:ring-destructive/30")}
                    />
                    {hasSubmitted && errors.lastName && (
                      <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      disabled={isSubmitting} 
                      className={cn(hasSubmitted && errors.email && "border-destructive focus-visible:ring-destructive/30")}
                    />
                    {hasSubmitted && errors.email && (
                      <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000" 
                      disabled={isSubmitting} 
                      className={cn(hasSubmitted && errors.phone && "border-destructive focus-visible:ring-destructive/30")}
                    />
                    {hasSubmitted && errors.phone && (
                      <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                  <Input 
                    id="linkedin" 
                    name="linkedin" 
                    type="url" 
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/johndoe" 
                    disabled={isSubmitting} 
                    className={cn(hasSubmitted && errors.linkedin && "border-destructive focus-visible:ring-destructive/30")}
                  />
                  {hasSubmitted && errors.linkedin && (
                    <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.linkedin}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="coverLetter">Cover Letter / Note <span className="text-destructive">*</span></Label>
                  <Textarea 
                    id="coverLetter" 
                    name="coverLetter" 
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're a great fit for this role..." 
                    className={cn("min-h-[110px] resize-none", hasSubmitted && errors.coverLetter && "border-destructive focus-visible:ring-destructive/30")}
                    disabled={isSubmitting}
                  />
                  {hasSubmitted && errors.coverLetter && (
                    <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.coverLetter}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label>Resume / CV <span className="text-destructive">*</span></Label>
                  <div className="flex items-center gap-3">
                    <Label 
                      htmlFor="resume" 
                      className={cn(
                        "flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-muted/50 px-4 text-sm font-medium transition-colors hover:bg-muted",
                        isSubmitting && "opacity-50 pointer-events-none",
                        hasSubmitted && errors.resume && "border-destructive bg-destructive/5 text-destructive"
                      )}
                    >
                      <Paperclip className={cn("h-4 w-4", hasSubmitted && errors.resume ? "text-destructive" : "text-muted-foreground")} />
                      {fileName ? (
                        <span className="text-foreground truncate max-w-[220px] font-medium">{fileName}</span>
                      ) : (
                        <span className={cn(hasSubmitted && errors.resume ? "text-destructive" : "text-muted-foreground")}>
                          Upload Resume (PDF, DOCX)
                        </span>
                      )}
                    </Label>
                    <Input 
                      id="resume" 
                      name="resume" 
                      type="file" 
                      accept=".pdf,.doc,.docx" 
                      className="hidden" 
                      onChange={handleFileChange}
                      disabled={isSubmitting}
                    />
                  </div>
                  {hasSubmitted && errors.resume ? (
                    <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.resume}
                    </p>
                  ) : (
                    <p className="text-xs text-muted-foreground">Max file size: 5MB (.pdf, .doc, .docx)</p>
                  )}
                </div>

                <Button type="submit" className="w-full h-12 text-base rounded-xl mt-2" disabled={isSubmitting}>
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

                <p className="text-center text-xs text-muted-foreground pt-1">
                  Prefer direct email? Send your CV to{" "}
                  <a href={`mailto:careers@tecunique.com?subject=${encodeURIComponent(`Application for ${jobTitle}`)}`} className="text-primary font-semibold hover:underline">
                    careers@tecunique.com
                  </a>
                </p>
              </form>
            </ScrollArea>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
