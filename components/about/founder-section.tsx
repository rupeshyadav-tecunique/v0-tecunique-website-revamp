import { SectionReveal } from "@/components/ui/section-reveal"

export function AboutFounder() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-200/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-8">
            Founder-Led, Relationship-Driven
          </h2>
          <div className="text-xl text-slate-600 leading-relaxed space-y-6">
            <p>
              TECUNIQUE has been built with a long-term view: create stable engineering teams, keep communication transparent, and focus on meaningful client relationships.
            </p>
            <p>
              Our goal is not to be the biggest vendor, but to be a dependable partner for software companies that value continuity, practical execution, and people who stay with the product long enough to understand it deeply.
            </p>
          </div>
        </SectionReveal>

        {/* Founder Section and Proof Points */}
        <div className="max-w-4xl mx-auto text-left flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <p className="text-xl font-medium text-slate-900 mt-6">Jaydeep Chhasatia</p>
            <p className="text-slate-500">Founder / Managing Director, TECUNIQUE</p>
          </div>
          <div className="md:w-1/2 space-y-6 border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 md:pl-10">
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Stable Core Team</h4>
              <p className="text-slate-600 text-sm">Long-tenured people with deep product and client context.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Low-Attrition Culture</h4>
              <p className="text-slate-600 text-sm">A work environment built around trust, flexibility, and ownership.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Client Continuity</h4>
              <p className="text-slate-600 text-sm">Teams are structured to preserve knowledge and reduce repeated onboarding.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
