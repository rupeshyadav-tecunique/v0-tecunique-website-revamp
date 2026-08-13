import { SectionReveal } from "@/components/ui/section-reveal"
import { ShieldCheck, Search, Users, Cpu } from "lucide-react"

export function QAExperience() {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Experience Across Product and Marketplace Teams</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            TECUNIQUE has supported QA, automation, regression testing, and release validation across software products and Atlassian Marketplace apps through long-term product and dedicated-team engagements.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SectionReveal delay={100}>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-left flex flex-col items-start h-full hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-brand-blue">
                <Cpu className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Atlassian Marketplace QA</h4>
              <p className="text-sm text-slate-900 font-semibold mb-2">
                JMWE &middot; JMCF &middot; Rich Filters
              </p>
              <p className="text-xs text-slate-500 leading-relaxed mt-auto">
                Experience across Innovalog, Appfire and Qotilabs relationships
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-left flex flex-col items-start h-full hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-indigo-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Product & Platform QA</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                OPPSCIENCE, CustomerMatrix, PolySpot and Validat
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={300}>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-left flex flex-col items-start h-full hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                <Search className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Automation QA</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Playwright &middot; Selenium &middot; JUnit &middot; API Testing &middot; CI/CD Test Support
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={400}>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-left flex flex-col items-start h-full hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-slate-600">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Long-Term QA Teams</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dedicated QA engineers working as part of client product teams
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
