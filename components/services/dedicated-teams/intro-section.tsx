import { SectionReveal } from "@/components/ui/section-reveal"

export function DedicatedTeamsIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-200/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <SectionReveal>
              <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-6 leading-tight">
                What Is a Dedicated Software Team?
              </h2>
              <div className="h-1.5 w-16 bg-blue-600 rounded-full" />
            </SectionReveal>
          </div>
          <div className="lg:col-span-7">
            <SectionReveal delay={100}>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed bg-slate-50/80 p-8 sm:p-10 rounded-2xl border border-slate-200/60 shadow-sm">
                <p>
                  A dedicated software team is a full-time team of engineers who work exclusively on your product, project, or platform. Unlike short-term outsourcing, this model is designed for continuity, product knowledge, and long-term collaboration.
                </p>
                <p>
                  With <span className="font-bold text-slate-900">TECUNIQUE</span>, clients can interview and select team members, define priorities, manage delivery direction, and work directly with the team, while TECUNIQUE handles the operational responsibilities in India.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
