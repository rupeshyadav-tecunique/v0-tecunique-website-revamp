import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white"
      style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #93c5fd 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        <SectionReveal className="mx-auto max-w-4xl">
          <div className="section-pill mb-6 mx-auto inline-flex">
            <Sparkles className="h-3 w-3" />
            Our Services
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-4">
            On-Demand Engineering Teams & <br className="hidden lg:block" />
            <span className="gradient-text">Custom Atlassian Solutions</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We empower industry leaders with dedicated software talent and specialized Atlassian ecosystem expertise to accelerate growth.
          </p>
          <div className="mt-8 flex items-center justify-center gap-6">
            <Button size="lg" className="rounded-xl px-10 h-12 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5" asChild>
              <Link href="/contact">
                Discuss Your Requirement
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
