import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/ui/section-reveal"

export function UnifiedCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[var(--neutral-slate-50)] border-t border-border/40">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/5 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10 text-center">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[var(--neutral-slate-200)] mb-8 shadow-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Ready to scale your software capabilities?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6 tracking-tight max-w-3xl mx-auto leading-tight">
            Let's Build Something <span className="text-gradient-brand">Great Together</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need a dedicated team, custom product engineering, QA automation, or Atlassian app support, we have the experts ready to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 h-14 text-base group bg-primary hover:bg-primary/90 text-white border-none w-full sm:w-auto transition-all hover:scale-105 shadow-brand-button" asChild>
              <Link href="/contact">
                Discuss Your Requirement
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base w-full sm:w-auto border-[var(--neutral-slate-200)] text-[var(--neutral-slate-700)] hover:bg-[var(--neutral-slate-100)] hover:text-foreground transition-colors bg-white shadow-sm" asChild>
              <Link href="/services">
                View All Services
              </Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
