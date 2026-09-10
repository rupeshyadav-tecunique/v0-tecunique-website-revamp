"use client"
 
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Send, AlertCircle, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

const services = [
  "Dedicated Software Teams",
  "Product Engineering & Custom Software",
  "Software QA & Automation Testing",
  "Atlassian App Development & QA",
  "Not Sure / Other",
]

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  })

  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string): string | undefined => {
    const trimmed = (value || "").trim()
    switch (name) {
      case "name":
        if (!trimmed) return "Name cannot be empty or only spaces."
        if (trimmed.length < 2) return "Name must be at least 2 characters."
        return undefined
      case "email":
        if (!trimmed) return "Work email is required."
        if (!EMAIL_REGEX.test(trimmed)) return "Please enter a valid email address (e.g. name@company.com)."
        return undefined
      case "message":
        if (!trimmed) return "Message cannot be empty or only spaces."
        if (trimmed.length < 10) return "Please enter at least 10 characters."
        return undefined
      default:
        return undefined
    }
  }

  const validateAll = (): boolean => {
    const newErrors: ContactFormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message)
    }

    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key as keyof ContactFormErrors]) {
        delete newErrors[key as keyof ContactFormErrors]
      }
    })

    setErrors(newErrors)
    setTouched({
      name: true,
      email: true,
      message: true
    })

    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setServerError(null)

    if (touched[name]) {
      const err = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: err }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const err = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: err }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setServerError(null)

    const formElement = e.currentTarget
    const formValues = new FormData(formElement)
    
    // Honeypot check
    const honeypot = formValues.get("confirm_email")
    if (honeypot) {
      setTimeout(() => {
        setIsSubmitted(true)
        setIsSubmitting(false)
      }, 1000)
      return
    }

    if (!validateAll()) {
      toast.error("Please fill in all mandatory fields with valid information.")
      return
    }

    setIsSubmitting(true)

    const data = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      service: formData.service,
      message: formData.message.trim(),
    }

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const responseData = await response.json().catch(() => ({}))

      if (response.ok) {
        setIsSubmitted(true)
        toast.success("Message sent successfully!")
      } else {
        const errorMsg = typeof responseData.error === 'string'
          ? responseData.error
          : (responseData.error?.message || "Failed to send message. Please try again.")
        setServerError(errorMsg)
        toast.error(errorMsg)
      }
    } catch (error: any) {
      const errorMsg = error.message || "An unexpected error occurred. Please try again."
      setServerError(errorMsg)
      toast.error(errorMsg)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-xl border border-border bg-muted/30 p-8 text-center animate-in zoom-in-95 duration-300">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-foreground">Thank You!</h3>
        <p className="mt-2 text-muted-foreground">
          Your message has been received. Our team will get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-xl"
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: "",
              email: "",
              company: "",
              service: "",
              message: ""
            })
            setErrors({})
            setTouched({})
          }}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {serverError && (
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm leading-relaxed">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="John Doe"
          disabled={isSubmitting}
          className={cn(touched.name && errors.name && "border-destructive focus-visible:ring-destructive/30")}
        />
        {touched.name && errors.name && (
          <p className="text-xs text-destructive flex items-center gap-1 mt-1">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Work Email <span className="text-destructive">*</span></Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="john@company.com"
          disabled={isSubmitting}
          className={cn(touched.email && errors.email && "border-destructive focus-visible:ring-destructive/30")}
        />
        {touched.email && errors.email && (
          <p className="text-xs text-destructive flex items-center gap-1 mt-1">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company Name</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          placeholder="Your Company"
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service Interested In</Label>
        <Select 
          name="service"
          value={formData.service}
          onValueChange={(val) => setFormData(prev => ({ ...prev, service: val }))}
          disabled={isSubmitting}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Honeypot field — hidden from users, but bots will fill it */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="confirm_email"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Tell us about your product, team requirements, or current engineering challenge..."
          rows={5}
          disabled={isSubmitting}
          className={cn("resize-none", touched.message && errors.message && "border-destructive focus-visible:ring-destructive/30")}
        />
        {touched.message && errors.message && (
          <p className="text-xs text-destructive flex items-center gap-1 mt-1">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full rounded-xl" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link>. Your information will be handled in accordance with our privacy practices.
      </p>
    </form>
  )
}
