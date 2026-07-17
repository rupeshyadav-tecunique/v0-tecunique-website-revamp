import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function CareersHero() {
  return (
    <section className="bg-gradient-to-b from-muted/50 to-background py-20 lg:py-32 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
            We're Hiring!
          </Badge>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-6">
            Build Your Future with <span className="gradient-text">TECUNIQUE</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            Be a part of a self-organized team that dares to be different. We put our workforce on top priority and value uniqueness in every individual.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-xl shadow-lg hover:shadow-xl transition-all group" asChild>
              <Link href="#openings">
                View Openings
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl bg-white/50 backdrop-blur-sm" asChild>
              <Link href="/about">
                Our Culture
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
