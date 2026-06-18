import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Sparkles } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"
import { SectionReveal } from "@/components/ui/section-reveal"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with TECUNIQUE. Let's discuss how we can help with your software development, quality assurance, and IT outsourcing needs.",
}

const contactInfo = [
  {
    title: "Email Us",
    description: "Our team will respond within 24 hours",
    value: "sales@tecunique.com",
    icon: Mail,
  },
  {
    title: "Call Us",
    description: "Mon-Fri from 8am to 8pm IST",
    value: "+91 915 746 0525",
    icon: Phone,
  },
  {
    title: "Visit Us",
    description: "Our headquarters",
    value: "1002, Neptune Edge, Sarabhai Campus, Alkapuri, Vadodara – 390007",
    icon: MapPin,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
      >
        {/* Animated blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 animate-blob"
            style={{ background: "radial-gradient(circle, #a5b4fc 0%, #c4b5fd 50%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 animate-blob"
            style={{
              background: "radial-gradient(circle, #93c5fd 0%, #a5b4fc 50%, transparent 70%)",
              animationDelay: "4s",
              animationDuration: "16s",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <span className="section-pill mb-6 inline-flex">
              <Sparkles className="h-3 w-3" />
              Get in Touch
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight text-balance">
              Let&apos;s <span className="gradient-text">Talk</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ready to transform your software development journey? Get in touch with us to discuss how TECUNIQUE can help you build dedicated teams, develop quality software, and scale your business.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <SectionReveal direction="right">
              <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </SectionReveal>

            {/* Contact Information */}
            <SectionReveal direction="left">
              <h2 className="text-2xl font-bold text-foreground mb-2">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of these channels.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="border-border/50 transition-all hover:shadow-md group">
                    <CardHeader className="pb-0">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-base">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                      <p className="mt-1 font-medium text-foreground">{info.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(170deg, #f8f7ff 0%, #ede9fe 45%, #f0f9ff 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Why Partner with <span className="gradient-text">TECUNIQUE?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              With 15+ years of engineering excellence, we bring transparency, collaboration, and domain expertise to every project. Our cost-effective, professional, and proactive software service delivery makes us one of the best-in-class software services companies.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                { value: "95%", label: "Customer Retention" },
                { value: "92%", label: "Employee Retention" },
                { value: "15+", label: "Years in Business" },
              ].map((stat, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl border-white/60 shadow-sm transition-transform hover:-translate-y-1">
                  <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

          </>
  )
}
