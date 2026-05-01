import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Shield, Users, Lightbulb, Fingerprint, ArrowRight } from "lucide-react"
import CultureGallery from "@/components/about/culture-gallery"

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
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              About Us
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
                <p className="text-4xl font-bold text-primary lg:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
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
                  <p className="text-6xl font-bold text-primary">15+</p>
                  <p className="mt-2 text-lg font-medium text-foreground">Years of Excellence</p>
                  <p className="mt-1 text-sm text-muted-foreground">Delivering Quality Software Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
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

      {/* Leadership Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Leadership</h2>
            <p className="mt-4 text-lg text-muted-foreground">The strategic vision and wisdom behind TecUnique</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-center bg-muted/20 p-8 rounded-3xl border border-border/50 transition-all hover:shadow-lg">
                <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-2xl bg-muted">
                  <img src={`https://placehold.co/400x400/png?text=Director+${i}`} alt={`Director ${i}`} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Director Name {i}</h3>
                  <p className="text-primary font-semibold mb-4">Managing Director</p>
                  <p className="text-muted-foreground italic text-sm leading-relaxed">
                    "Leading with integrity and a commitment to excellence has always been our core philosophy. We take pride in the family we've built here at TecUnique."
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veterans Section - 15+ Years */}
      <section className="py-20 lg:py-28 bg-muted/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">The Core Pillars</h2>
            <p className="mt-4 text-lg text-muted-foreground">Celebrating our members with 15+ years of dedicated service</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-6 bg-card p-6 rounded-2xl border border-border/40 shadow-sm transition-all hover:border-primary/30">
                <div className="h-32 w-32 shrink-0 rounded-xl bg-muted overflow-hidden">
                  <img src={`https://placehold.co/200x200/png?text=Veteran+${i}`} alt={`Veteran ${i}`} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Expert Name {i}</h4>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">15+ Years at TecUnique</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "Being part of this journey for over 15 years has been incredibly fulfilling. I've watched us grow from a small group to a global engineering powerhouse, all while maintaining our unique culture."
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Corner - Dummy Gallery */}
      <section className="py-20 lg:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Cultural Corner</h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Life at TecUnique is about more than just code. We celebrate every milestone, festival, and achievement as one big family.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">30+</div>
              <div className="text-sm font-medium">Uniquens <br /><span className="text-muted-foreground">Celebrating Together</span></div>
            </div>
          </div>

          <CultureGallery />
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
