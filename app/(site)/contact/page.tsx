import type { Metadata } from "next"
import { ContactSection } from "@/components/pages/contact/contact-section"

export const metadata: Metadata = {
  title: "Contact Us | TECUNIQUE",
  description: "Contact TECUNIQUE to discuss dedicated software teams, product engineering, QA & automation, or Atlassian app development and QA requirements.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/30">
      <ContactSection />
    </div>
  )
}
