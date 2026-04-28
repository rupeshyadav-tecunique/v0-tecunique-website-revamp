import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Shield, Users, Lightbulb, Fingerprint, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about TECUNIQUE - A trusted software services company delivering IT solutions worldwide since 2010.",
}

const stats = [
  { value: "95%", label: "Customer Retention" },
  { value: "92%", label: "Employee Retention" },
  { value: "15+", label: "Years in Business" },
]

const values = [
  {
    title: "Respect",
    description: "Our practice demands respect and openness towards each other, the communities around us, and society.",
    icon: Heart,
  },
  {
    title: "Exceptional Value",
    description: "Our offerings and proven solutions create a unique competitive advantage and value for our clients.",
    icon: Award,
  },
  {
    title: "Authenticity",
    description: "We take the trust placed in us seriously and work hard to earn it every day. We never make a promise that we cannot keep.",
    icon: Shield,
  },
  {
    title: "Responsible",
    description: "With our clients' and colleagues' best interest at heart, we act responsibly and communicate with clarity.",
    icon: Users,
  },
  {
    title: "Confident",
    description: "We meet every challenge with respect and confidence. We trust in our abilities and the difference we can make.",
    icon: Lightbulb,
  },
  {
    title: "Unique Approach",
    description: "We meticulously examine each client's case & depending on their needs, we engage the dedicated model and team.",
    icon: Fingerprint,
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-border/50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Who We Are</p>
            <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground sm:text-5xl text-balance">
              About TECUNIQUE
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Since our inception in 2010, TECUNIQUE has been delivering IT solutions and services worldwide. We combine business domain knowledge, proven methodologies, and the technical expertise of highly skilled software professionals to yield high-quality solutions that add value to businesses.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border/50 bg-card p-8 text-center"
              >
                <p className="font-display text-4xl text-primary lg:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
                We are relentless in our pursuit of customer success
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We are fast and flexible in our execution, consistently delivering above and beyond our customer expectations. We combine business domain knowledge, proven methodologies, and the technical expertise of highly skilled software professionals.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our solutions yield high-quality outcomes that add value to businesses. Since 2010, we have been serving diverse development requirements of businesses of all sizes, from startups to established enterprises.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-display text-6xl text-primary">15+</p>
                  <p className="mt-2 text-lg font-medium text-foreground">Years of Excellence</p>
                  <p className="mt-1 text-sm text-muted-foreground">Delivering Quality Software Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="border-border/50 bg-card">
                <CardContent className="pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl text-balance">
              Our Team
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We are led by dexterous and ingenious information technology experts, business strategists, and solution architects, who provide in-depth industry experience and form the core of our commitment to innovation. Together we help our clients to accelerate growth and be future-ready with our reliable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Our Culture
            </h2>
            <p className="mt-2 text-xl text-primary-foreground/90">
              Your IDEA + Our Policy = Employee-centric WORK CULTURE
            </p>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              We believe work culture doesn&apos;t just help attract amazing people, it amplifies their abilities and allows them to do their best. We are UNIQUENS. We dare to be different.
            </p>
            <p className="mt-4 text-primary-foreground/80 leading-relaxed">
              We believe an organization with employee-centric culture welcomes open communication, encourages feedback, provides psychological safety, and inspires innovation. We put our workforce on top priority.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Ready to Work Together?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {"Let's discuss how TECUNIQUE can help accelerate your business growth with our expert software services."}
            </p>
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us
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
