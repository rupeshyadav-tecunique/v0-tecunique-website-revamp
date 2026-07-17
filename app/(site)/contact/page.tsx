import type { Metadata } from "next"
import { ContactSection } from "@/components/contact/contact-section"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with TECUNIQUE. Let's discuss how we can help with your software development, quality assurance, and IT outsourcing needs.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/30">
      <ContactSection />
    </div>
  )
}
