import { ShieldCheck } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function ServicesTrustProof() {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <SectionReveal>
            <span className="section-pill mb-6 mx-auto inline-flex">
              <ShieldCheck className="h-4 w-4" />
              Trusted Partners
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display mb-6">
              Built Through Long-Term Client Relationships
            </h2>
            <p className="text-lg text-slate-600">
              TECUNIQUE has supported international software companies across Atlassian apps, product engineering, QA, data platforms, and offshore development teams.
            </p>
          </SectionReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SectionReveal delay={100} className="h-full">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-full">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Atlassian Apps</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                  Appfire
                </span>
                <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                  <img src="/images/companies/innovalog.png" alt="Innovalog" className="h-5 object-contain" />
                </span>
                <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                  <img src="/images/companies/quotilabs.png" alt="Qotilabs" className="h-5 object-contain" />
                </span>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={200} className="h-full">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-full">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Product Engineering & Data Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                  <img src="/images/companies/oppscience.svg" alt="OPPSCIENCE" className="h-4 object-contain" />
                </span>
                <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                  <img src="/images/companies/customer_matrix.webp" alt="CustomerMatrix" className="h-4 object-contain" />
                </span>
                <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                  <img src="/images/companies/polyspot.webp" alt="PolySpot" className="h-3 object-contain" />
                </span>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={300} className="h-full">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-full">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">ODC / Offshore Teams</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                  <img src="/images/companies/skyselect.svg" alt="SkySelect" className="h-4 object-contain" />
                </span>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={400} className="h-full">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-full">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Product Development & Support</h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                  eXtensi
                </span>
                <span className="inline-flex items-center justify-center px-3 py-2 bg-slate-100 rounded text-sm text-slate-700 font-medium h-10">
                  Validat
                </span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
