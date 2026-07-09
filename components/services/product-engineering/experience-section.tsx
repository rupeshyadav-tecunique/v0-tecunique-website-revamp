import { SectionReveal } from "@/components/ui/section-reveal"
import { ShieldCheck, Database, AppWindow, Users, TestTube2 } from "lucide-react"

export function ProductEngineeringExperience() {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <SectionReveal>
            <span className="section-pill mb-6 mx-auto inline-flex">
              <ShieldCheck className="h-4 w-4" />
              Trusted Experience
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display mb-6">
              Product Engineering Experience Across Long-Term Client Relationships
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              TECUNIQUE has supported international software companies across product engineering, data platforms, QA, automation, Atlassian apps, and offshore development team models. Our work is built around continuity, practical engineering support, and long-term collaboration.
            </p>
          </SectionReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SectionReveal delay={100} className="h-full">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-bold font-display text-slate-900 mb-4 text-lg">Product Engineering & Data Platforms</h3>
              <div className="mt-auto">
                <p className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider">Trusted By</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                    <img src="/images/companies/oppscience.svg" alt="OPPSCIENCE" className="h-4 object-contain" />
                  </span>
                  <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                    <img src="/images/companies/customer_matrix.webp" alt="CustomerMatrix" className="h-5 object-contain" />
                  </span>
                  <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                    <img src="/images/companies/polyspot.webp" alt="PolySpot" className="h-4 object-contain" />
                  </span>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={200} className="h-full">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <AppWindow className="w-6 h-6" />
              </div>
              <h3 className="font-bold font-display text-slate-900 mb-4 text-lg">Atlassian App Products</h3>
              <div className="mt-auto">
                <p className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider">Trusted By</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                    Appfire
                  </span>
                  <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                    <img src="/images/companies/innovalog.png" alt="Innovalog" className="h-6 object-contain" />
                  </span>
                  <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                    <img src="/images/companies/quotilabs.png" alt="Qotilabs" className="h-6 object-contain" />
                  </span>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={300} className="h-full">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold font-display text-slate-900 mb-4 text-lg">Dedicated / Offshore Teams</h3>
              <div className="mt-auto">
                <p className="text-sm font-medium text-slate-500 mb-3 uppercase tracking-wider">Trusted By</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                    <img src="/images/companies/skyselect.svg" alt="SkySelect" className="h-4 object-contain" />
                  </span>
                  <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                    eXtensi
                  </span>
                  <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                    Validat
                  </span>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={400} className="h-full">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <TestTube2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold font-display text-slate-900 mb-4 text-lg">QA & Automation Support</h3>
              <div className="mt-auto">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Dedicated QA and automation teams across long-term product work.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
