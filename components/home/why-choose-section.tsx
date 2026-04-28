import Link from "next/link"
import { Target, Heart, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    title: "One-Stop Solution",
    description: "Comprehensive software services under one roof - from development to testing to support.",
    icon: Target,
  },
  {
    title: "Customer Focus",
    description: "We put our customers first, ensuring every solution aligns with your business objectives.",
    icon: Heart,
  },
  {
    title: "Commitment",
    description: "Dedicated to delivering excellence and maintaining long-term partnerships with our clients.",
    icon: Award,
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Your Trusted Technology Partner
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We leverage our extensive experience and talented resource pool to deliver top-notch IT services for businesses globally. Over the years, we have succeeded in keeping up the trust placed in us by our customers and established long-term relations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="relative text-center p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <reason.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/about">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
