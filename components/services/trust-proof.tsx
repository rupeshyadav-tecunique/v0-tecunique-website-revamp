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
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-full flex flex-col">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider leading-relaxed">Atlassian Apps</h3>
              <div className="flex flex-wrap items-center gap-6 mt-auto">
                <span className="text-slate-600 font-medium whitespace-nowrap">
                  Appfire
                </span>
                <img src="/images/companies/innovalog.png" alt="Innovalog" className="h-8 w-auto object-contain" />
                <img src="/images/companies/quotilabs.png" alt="Qotilabs" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={200} className="h-full">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-full flex flex-col">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider leading-relaxed">Product Engineering & Data Platforms</h3>
              <div className="flex flex-wrap items-center gap-6 mt-auto">
                <img src="/images/companies/oppscience.svg" alt="OPPSCIENCE" className="h-7 w-auto object-contain" />
                <img src="/images/companies/customer_matrix.webp" alt="CustomerMatrix" className="h-7 w-auto object-contain" />
                <img src="/images/companies/polyspot.webp" alt="PolySpot" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={300} className="h-full">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-full flex flex-col">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider leading-relaxed">ODC / Offshore Teams</h3>
              <div className="flex flex-wrap items-center gap-6 mt-auto">
                <img src="/images/companies/skyselect.svg" alt="SkySelect" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={400} className="h-full">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-full flex flex-col">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider leading-relaxed">Product Development & Support</h3>
              <div className="flex flex-wrap items-center gap-6 mt-auto">
                <span className="text-slate-600 font-medium whitespace-nowrap">
                  eXtensi
                </span>
                <span className="text-slate-600 font-medium whitespace-nowrap">
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
