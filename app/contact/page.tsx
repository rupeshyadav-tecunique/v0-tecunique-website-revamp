import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with TECUNIQUE. Let's discuss how we can help with your software development, quality assurance, and IT outsourcing needs.",
}

const contactInfo = [
  {
    title: "Email",
    value: "sales@tecunique.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+91 915 746 0525",
    icon: Phone,
  },
  {
    title: "Address",
    value: "1002, Neptune Edge, Sarabhai Campus, Alkapuri, Vadodara – 390007",
    icon: MapPin,
  },
  {
    title: "Hours",
    value: "Mon - Sat: 8:00 AM - 8:00 PM IST",
    icon: Clock,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-border/50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Get in Touch</p>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
              {"Let's build something great together"}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to transform your software development journey? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-5">
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-2">
              <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Contact Details</h2>
              <div className="mt-6 space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{info.title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 border-t border-border/50 pt-8">
                <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Why Partner With Us</h2>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-display text-3xl text-primary">95%</p>
                    <p className="mt-1 text-xs text-muted-foreground">Client Retention</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-primary">15+</p>
                    <p className="mt-1 text-xs text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl text-primary">92%</p>
                    <p className="mt-1 text-xs text-muted-foreground">Team Retention</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-foreground">Send us a message</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
