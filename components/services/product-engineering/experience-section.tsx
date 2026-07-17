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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SectionReveal delay={100} className="h-full">
              <div className="bg-white rounded-2xl p-6 border border-[var(--neutral-slate-200)] shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full flex flex-col">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider leading-relaxed">Product Engineering & Data Platforms</h3>
                <div className="flex flex-wrap items-center gap-6 mt-auto">
                  <img src="/images/companies/oppscience.svg" alt="OPPSCIENCE" className="h-7 w-auto object-contain" />
                  <img src="/images/companies/customer_matrix.webp" alt="CustomerMatrix" className="h-7 w-auto object-contain" />
                  <img src="/images/companies/polyspot.webp" alt="PolySpot" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={200} className="h-full">
              <div className="bg-white rounded-2xl p-6 border border-[var(--neutral-slate-200)] shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full flex flex-col">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider leading-relaxed">Atlassian App Products</h3>
                <div className="flex flex-wrap items-center gap-6 mt-auto">
                  <span className="text-muted-foreground font-medium whitespace-nowrap">
                    Appfire
                  </span>
                  <img src="/images/companies/innovalog.png" alt="Innovalog" className="h-8 w-auto object-contain" />
                  <img src="/images/companies/quotilabs.png" alt="Qotilabs" className="h-8 w-auto object-contain" />
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={300} className="h-full">
              <div className="bg-white rounded-2xl p-6 border border-[var(--neutral-slate-200)] shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full flex flex-col">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider leading-relaxed">Dedicated / Offshore Teams</h3>
                <div className="flex flex-wrap items-center gap-6 mt-auto">
                  <img src="/images/companies/skyselect.svg" alt="SkySelect" className="h-8 w-auto object-contain" />
                  <span className="text-muted-foreground font-medium whitespace-nowrap">
                    eXtensi
                  </span>
                  <span className="text-muted-foreground font-medium whitespace-nowrap">
                    Validat
                  </span>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={400} className="h-full">
              <div className="bg-white rounded-2xl p-6 border border-[var(--neutral-slate-200)] shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full">
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider leading-relaxed">QA & Automation Support</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
