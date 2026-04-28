import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with TECUNIQUE. Let's discuss how we can help with your software development, quality assurance, and IT outsourcing needs.",
}

const contactInfo = [
  {
    title: "Email Us",
    description: "Our team will respond within 24 hours",
    value: "contact@tecunique.com",
    icon: Mail,
  },
  {
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm IST",
    value: "+91-XXX-XXX-XXXX",
    icon: Phone,
  },
  {
    title: "Visit Us",
    description: "Our headquarters",
    value: "Vadodara, Gujarat, India",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    description: "We operate across time zones",
    value: "Mon - Fri: 9:00 AM - 6:00 PM IST",
    icon: Clock,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {"Let's Talk"}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {"Ready to transform your software development journey? Get in touch with us to discuss how TECUNIQUE can help you build dedicated teams, develop quality software, and scale your business."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of these channels.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="border-border/50">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Why Partner with TECUNIQUE?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              With 15+ years of engineering excellence, we bring transparency, collaboration, and domain expertise to every project. Our cost-effective, professional, and proactive software service delivery makes us one of the best-in-class software services companies.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">95%</p>
                <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Customer Retention
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">92%</p>
                <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Employee Retention
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">15+</p>
                <p className="mt-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Years in Business
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
