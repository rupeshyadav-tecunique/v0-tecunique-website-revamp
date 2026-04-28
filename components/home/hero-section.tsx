import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted via-background to-accent/30 py-24 lg:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            15+ Years of Excellence
          </p>
          <h1 className="font-display text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Trusted Software Engineering & Atlassian Apps Expertise
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl max-w-2xl mx-auto">
            Scale with confidence. Dedicated teams delivering Atlassian apps and high-quality software at speed.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                {"Let's Talk"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
