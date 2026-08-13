import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function CareersHero({ hasOpenings }: { hasOpenings: boolean }) {
  return (
    <section className="bg-gradient-to-b from-muted/50 to-background py-20 lg:py-32 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {hasOpenings && (
            <Badge className="mb-4 px-4 py-1.5 text-sm font-semibold bg-brand-blue/10 text-brand-blue border-brand-blue/20 hover:bg-brand-blue/20">
              WE'RE HIRING!
            </Badge>
          )}
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-6">
            Build Your Future with <span className="text-brand-blue">TECUNIQUE</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Join a collaborative software team where people are trusted to take ownership, work independently, and grow through meaningful product and engineering work.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {hasOpenings ? (
              <Button size="lg" className="rounded-xl shadow-lg hover:shadow-xl transition-all group bg-brand-blue hover:bg-brand-blue-hover h-12 px-8 text-base" asChild>
                <Link href="#openings">
                  View Openings
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            ) : (
              <Button size="lg" className="rounded-xl shadow-lg hover:shadow-xl transition-all group bg-brand-blue hover:bg-brand-blue-hover h-12 px-8 text-base" asChild>
                <a href="mailto:careers@tecunique.com">
                  Send Your Resume
                </a>
              </Button>
            )}
            
            <Button size="lg" variant="outline" className="rounded-xl bg-white/50 backdrop-blur-sm h-12 px-8 text-base border-2 hover:bg-slate-50" asChild>
              <Link href="/about#culture">
                Explore Our Culture
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
