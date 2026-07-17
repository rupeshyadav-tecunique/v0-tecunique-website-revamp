import { SectionReveal } from "@/components/ui/section-reveal"

export function CaseStudiesHero() {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white"
      style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #93c5fd 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
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
