import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"

export function DedicatedTeamsExperience() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Built Through Long-Term Client Relationships</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              TECUNIQUE has supported international software companies across Atlassian apps, product engineering, QA, data platforms, and offshore development teams. Our dedicated team model has been used for long-term development, QA, automation, support, and product maintenance engagements.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Col 1 */}
            <SectionReveal delay={100} className="h-full">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full flex flex-col">
                <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Atlassian App Vendors</h3>
                <div className="flex flex-wrap items-center gap-6 mt-auto">
                  <span className="text-slate-600 font-medium whitespace-nowrap">
                    Appfire
                  </span>
                  <img src="/images/companies/innovalog.png" alt="Innovalog" className="h-8 w-auto object-contain" />
                  <img src="/images/companies/quotilabs.png" alt="Qotilabs" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </SectionReveal>

            {/* Col 2 */}
            <SectionReveal delay={200} className="h-full">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full flex flex-col">
                <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider leading-relaxed">Product Engineering & Data Platforms</h3>
                <div className="flex flex-wrap items-center gap-6 mt-auto">
                  <img src="/images/companies/oppscience.svg" alt="OPPSCIENCE" className="h-7 w-auto object-contain" />
                  <img src="/images/companies/customer_matrix.webp" alt="CustomerMatrix" className="h-7 w-auto object-contain" />
                  <img src="/images/companies/polyspot.webp" alt="PolySpot" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </SectionReveal>

            {/* Col 3 */}
            <SectionReveal delay={300} className="h-full">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full flex flex-col">
                <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider leading-relaxed">ODC / Offshore Team Setup</h3>
                <div className="flex flex-wrap items-center gap-6 mt-auto">
                  <img src="/images/companies/skyselect.svg" alt="SkySelect" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </SectionReveal>

            {/* Col 4 */}
            <SectionReveal delay={400} className="h-full">
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full flex flex-col">
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

      {/* Testimonial (David Fischer / Innovalog highlight) */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-200/50 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center">
            <div className="flex flex-col items-center mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
                Client Relationship Highlight
              </span>
            </div>
            <p className="text-2xl font-medium leading-relaxed text-slate-900 mb-8 max-w-3xl mx-auto">
              TECUNIQUE’s long-term collaboration with Innovalog included dedicated development and QA support for Atlassian Marketplace products, helping preserve product knowledge and engineering continuity over time.
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="h-14 w-14 rounded-full mb-4 border-2 border-white shadow-md overflow-hidden relative">
                <Image src="/images/companies/innovalog.png" alt="Innovalog" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-slate-900">Innovalog</div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
