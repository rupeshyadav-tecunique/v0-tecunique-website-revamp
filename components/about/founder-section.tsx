import { SectionReveal } from "@/components/ui/section-reveal"
import { PenLine, Quote, Users, HeartHandshake, RefreshCw } from "lucide-react"

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
              Our goal is to be a dependable engineering partner for software companies that value continuity, practical execution, and people who stay with the product long enough to understand it deeply.
            </p>
          </div>
        </SectionReveal>

        {/* Founder Section and Proof Points */}
        <SectionReveal delay={200}>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 lg:gap-14 items-center md:items-stretch justify-center">

            {/* Left Side: Founder Note Card */}
            <div className="md:w-5/12 w-full flex flex-col justify-center">
              <div className="bg-white rounded-lg p-8 sm:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 relative overflow-hidden group">
                {/* Optional background decoration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-50/50 rounded-full blur-2xl group-hover:bg-indigo-100/50 transition-colors duration-500"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-indigo-50 text-brand-indigo px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-wider uppercase mb-5">
                    <PenLine className="w-3 h-3" />
                    Founder Note
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">Jaydeep Chhasatia</h3>
                  <p className="text-sm text-slate-500 font-medium mb-5">Founder / CEO, TECUNIQUE</p>

                  <div className="w-8 h-0.5 bg-indigo-100 mb-6"></div>

                  <div className="flex gap-3">
                    <Quote className="w-8 h-8 text-indigo-200 fill-indigo-200 shrink-0" />
                    <p className="text-slate-700 italic font-medium leading-relaxed text-[15px] pt-1">
                      "For me, a good client relationship means clear accountability, straightforward communication, and being accessible when an important decision or issue needs attention."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Separator */}
            <div className="hidden md:block w-px bg-slate-200/70 my-8 shrink-0"></div>

            {/* Right Side: Features List */}
            <div className="md:w-6/12 w-full flex flex-col justify-center space-y-6">
              {/* Item 1 */}
              <div className="flex gap-4 pb-6 border-b border-slate-100/80">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Long-Tenured Core Team</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Long-tenured people with deep product and client context.</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 pb-6 border-b border-slate-100/80">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Trust & Ownership Culture</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">A work environment built around trust, flexibility, and ownership.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Client Continuity</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Teams are structured to preserve knowledge and reduce repeated onboarding.</p>
                </div>
              </div>
            </div>

          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
