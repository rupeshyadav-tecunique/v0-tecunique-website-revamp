import { SectionReveal } from "@/components/ui/section-reveal"

export function DedicatedTeamsIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-[var(--neutral-slate-200)]/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6 leading-tight">
                What Is a Dedicated Software Team?
              </h2>
              <div className="h-1.5 w-16 bg-brand-blue rounded-full" />
            </SectionReveal>
          </div>
          <div className="lg:col-span-7">
            <SectionReveal delay={100}>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed bg-[var(--neutral-slate-50)]/80 p-8 sm:p-10 rounded-2xl border border-[var(--neutral-slate-200)]/60 shadow-sm">
                <p>
                  A dedicated software team is a full-time group of software professionals who work exclusively on your product, project, or platform. Unlike short-term outsourcing, this model is designed for continuity, product knowledge, and long-term collaboration.
                </p>
                <p>
                  With <span className="font-bold text-foreground">TECUNIQUE</span>, you interview and select the team members, set priorities and technical direction, and work directly with the team. We handle employment, HR, payroll, infrastructure, and operational administration in India.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
