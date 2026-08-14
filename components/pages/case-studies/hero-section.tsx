import { SectionReveal } from "@/components/ui/section-reveal"

export function CaseStudiesHero() {
  return (
    <section
      className="brand-hero-bg relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="brand-orb-indigo-simple absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" />
        <div className="brand-orb-blue absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" />
        <div className="brand-grid-bg absolute inset-0 opacity-[0.025]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        <SectionReveal className="mx-auto max-w-4xl">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-6">
            Client Work & <br className="hidden sm:block"/>
            <span className="gradient-text">Long-Term Engineering Partnerships</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A look at how TECUNIQUE has supported software product companies, Atlassian app vendors, data platforms, and technology businesses through dedicated teams, QA, automation, support, and long-term engineering collaboration.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
