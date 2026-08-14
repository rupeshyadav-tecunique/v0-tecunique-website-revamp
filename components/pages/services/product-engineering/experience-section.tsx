import { SectionReveal } from "@/components/ui/section-reveal"
import { ShieldCheck, Database, AppWindow, Users, TestTube2 } from "lucide-react"

export function ProductEngineeringExperience() {
  return (
    <section className="py-24 bg-[var(--neutral-slate-50)] relative border-t border-[var(--neutral-slate-200)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <SectionReveal>
            <span className="section-pill mb-6 mx-auto inline-flex">
              <ShieldCheck className="h-4 w-4" />
              Trusted Experience
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-display mb-6">
              Product Engineering Experience Across Long-Term Client Relationships
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              TECUNIQUE has supported international software companies across product engineering, data platforms, QA, automation, Atlassian apps, and offshore development team models. Our work is built around continuity, practical engineering support, and long-term collaboration.
            </p>
          </SectionReveal>
        </div>

          <SectionReveal delay={100}>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--neutral-slate-200)]/60 shadow-sm mb-8 md:mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                
                {/* Col 1 */}
                <div className="flex flex-col">
                  <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-6">Product Eng & Data</h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
                    <img src="/images/companies/oppscience.svg" alt="OPPSCIENCE" className="h-6 w-auto max-w-[110px] object-contain" />
                    <img src="/images/companies/customer_matrix.webp" alt="CustomerMatrix" className="h-7 w-auto max-w-[110px] object-contain" />
                    <img src="/images/companies/polyspot.webp" alt="PolySpot" className="h-7 w-auto max-w-[110px] object-contain" />
                  </div>
                </div>

                {/* Col 2 */}
                <div className="flex flex-col">
                  <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-6">Atlassian App Products</h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
                    <span className="text-xl font-bold text-slate-700 tracking-tight">Appfire</span>
                    <img src="/images/companies/innovalog.png" alt="Innovalog" className="h-7 w-auto max-w-[110px] object-contain" />
                    <img src="/images/companies/quotilabs.png" alt="Qotilabs" className="h-7 w-auto max-w-[110px] object-contain" />
                  </div>
                </div>

                {/* Col 3 */}
                <div className="flex flex-col">
                  <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-6">QA Automation & Support</h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
                    <img src="/images/companies/extensi.png" alt="eXtensi" className="h-7 w-auto max-w-[110px] object-contain" />
                    <img src="/images/companies/Validat.png" alt="Validat" className="h-7 w-auto max-w-[110px] object-contain" />
                  </div>
                </div>

                {/* Col 4 */}
                <div className="flex flex-col">
                  <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-6">Offshore Team Setup</h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
                    <img src="/images/companies/skyselect.svg" alt="SkySelect" className="h-6 w-auto max-w-[130px] object-contain" />
                  </div>
                </div>

              </div>
            </div>
          </SectionReveal>
      </div>
    </section>
  )
}
