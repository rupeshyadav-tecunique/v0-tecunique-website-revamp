import { SectionReveal } from "@/components/ui/section-reveal"
import { Sparkles } from "lucide-react"

export function CaseStudiesHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-10 lg:pt-16 lg:pb-12 bg-white border-b border-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="brand-orb-indigo-simple absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl" />
        <div className="brand-orb-blue absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl" />
        <div className="brand-grid-bg absolute inset-0 opacity-[0.02]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10 text-center">
        <SectionReveal className="mx-auto max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full border border-blue-200/80 bg-blue-50/70 text-blue-600">
            <Sparkles className="h-3.5 w-3.5" />
            Case Studies
          </span>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.15]">
            Client Work & <span className="text-blue-600">Long-Term Engineering Partnerships</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            See how TECUNIQUE supports software product companies and Atlassian app vendors through dedicated teams, product engineering, QA automation, and long-term engineering partnerships.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
