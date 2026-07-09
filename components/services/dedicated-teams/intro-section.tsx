import { SectionReveal } from "@/components/ui/section-reveal"

export function DedicatedTeamsIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-200/50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionReveal className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">What Is a Dedicated Software Team?</h2>
          <div className="space-y-6 text-xl text-slate-600 leading-relaxed text-left bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
            <p>
              A dedicated software team is a full-time team of engineers who work exclusively on your product, project, or platform. Unlike short-term outsourcing, this model is designed for continuity, product knowledge, and long-term collaboration.
            </p>
            <p>
              With TECUNIQUE, clients can interview and select team members, define priorities, manage delivery direction, and work directly with the team, while TECUNIQUE handles the operational responsibilities in India.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
