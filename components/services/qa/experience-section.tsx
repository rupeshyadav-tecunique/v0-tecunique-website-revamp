import { SectionReveal } from "@/components/ui/section-reveal"
import { ShieldCheck, Search, Users, Cpu } from "lucide-react"

export function QAExperience() {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Experience Across Product and Marketplace Teams</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our teams have worked with leading product companies and Atlassian Marketplace vendors to deliver high-quality releases, stable apps, and reliable automation at scale.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SectionReveal delay={100}>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center flex flex-col items-center h-full hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-[#0052CC]">
                <Cpu className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Atlassian App QA</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                JMWE, JMCF, Rich Filters, Appfire, Innovalog, Qotilabs
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center flex flex-col items-center h-full hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-indigo-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Product Engineering QA</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                OPPSCIENCE, CustomerMatrix, PolySpot, Validat
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={300}>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center flex flex-col items-center h-full hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                <Search className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-slate-900 mb-3 text-lg">Automation QA</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Playwright, Selenium, JUnit, API testing, CI/CD test support
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={400}>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center flex flex-col items-center h-full hover:shadow-md transition-shadow">
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
