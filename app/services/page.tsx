import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Code, TestTube, Building, Laptop, Globe, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore TECUNIQUE's comprehensive software services - Dedicated teams, software development, quality assurance, and IT staff augmentation.",
}

const mainServices = [
  {
    id: "dedicated-teams",
    title: "Dedicated Development",
    description: "Custom-made software development teams of experienced, skilled, reliable, & professional resources, built specific to your requirements, enables building scalable, secure, and robust software solutions.",
    details: "In the past 15 years, we have developed custom dedicated software development and quality assurance teams for a diverse array of industry verticals, including ISVs, start-ups, and enterprises.",
    icon: Users,
  },
  {
    id: "qa",
    title: "Software QA Teams",
    description: "Custom-made software QA teams of experienced, skilled, reliable, & professional resources, built specific to your requirements, enables delivering scalable, secure, and robust software solutions.",
    details: "In the past 15 years, we have built custom dedicated software quality assurance teams for a diverse array of industry verticals, including ISVs, start-ups, and enterprises.",
    icon: TestTube,
  },
  {
    id: "augmentation",
    title: "IT Staff Augmentation",
    description: "Overcome the gap between demand and supply for skilled teams through an innovative and best recruiting model backed by a dedicated client-centric software team.",
    details: "We offer staff augmentation services, which help to revamp your team and boost the development process.",
    icon: Building,
  },
  {
    id: "offshore",
    title: "Offshore Development",
    description: "Ramp up your software development and scale up quickly. With 15+ years of expertise in the software industry, we can help set up offshore teams while ensuring quick turn-around and high quality development.",
    details: "You can set up offshore development centers in India with TECUNIQUE for developing, testing, and deploying software solutions.",
    icon: Globe,
  },
]

const additionalServices = [
  {
    title: "Product Development",
    description: "Our product design and development services ensure iterative development using advanced technologies for faster time-to-market, robustness, and scalability.",
    icon: Laptop,
  },
  {
    title: "Application Development",
    description: "We have 15+ years of experience in building & delivering reliable B2B & B2C web applications for many startups and enterprises across diverse domains.",
    icon: Code,
  },
  {
    title: "Software QA and Testing",
    description: "We are a highly rated and experienced software quality assurance & testing company, leveraging our potential and expertise to deliver quality tested applications.",
    icon: TestTube,
  },
]

const benefits = [
  "Dedicated project managers",
  "Flexible engagement models",
  "Transparent communication",
  "Agile development methodology",
  "24/7 support availability",
  "Cost-effective solutions",
  "Skilled resource pool",
  "Quick team scaling",
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Empower Your Business with Self-Organizing Teams Built with UNIQUENESS
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We offer custom dedicated teams built specifically for you, holding expertise in the technologies specified by you. We can build a dedicated team of talented engineers to build reliable, scalable, and quality software solutions based on the technology stack of your preference.
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">What We Offer</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our Core Services
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">{service.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{service.description}</p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{service.details}</p>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50 flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Additional Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive software solutions to meet all your business needs
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {additionalServices.map((service) => (
              <Card key={service.title} className="border-border/50 bg-card">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Why Partner with TECUNIQUE?
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                As a trusted software outsourcing company, we stay on schedule, scale the teams and ensure top-notch product quality in our deliveries. Even when working remotely with us, you will have the flexibility and complete control over the project, just like you do with your in-house team.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Looking for Expert Software Services?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Unlock our capabilities of custom software development services, product development, and quality assurance for businesses of all sizes and shapes.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
