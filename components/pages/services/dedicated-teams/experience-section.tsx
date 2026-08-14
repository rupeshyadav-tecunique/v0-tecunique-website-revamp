import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Code, ShieldCheck, BookOpen } from "lucide-react"

export function DedicatedTeamsExperience() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-[var(--neutral-slate-50)] border-t border-[var(--neutral-slate-200)]/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">Built Through Long-Term Client Relationships</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              TECUNIQUE has supported international software companies through long-term development, QA, automation, support, and product maintenance engagements across Atlassian apps, product engineering, data platforms, and offshore teams.
            </p>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-[var(--neutral-slate-200)]/60 shadow-sm mb-8 md:mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                
                {/* Col 1 */}
                <div className="flex flex-col">
                  <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-6">Atlassian App Vendors</h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
                    <span className="text-xl font-bold text-slate-700 tracking-tight">Appfire</span>
                    <img src="/images/companies/innovalog.png" alt="Innovalog" className="h-7 w-auto max-w-[110px] object-contain" />
                    <img src="/images/companies/quotilabs.png" alt="Qotilabs" className="h-7 w-auto max-w-[110px] object-contain" />
                  </div>
                </div>

                {/* Col 2 */}
                <div className="flex flex-col">
                  <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-6">Product Eng & Data</h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
                    <img src="/images/companies/oppscience.svg" alt="OPPSCIENCE" className="h-6 w-auto max-w-[110px] object-contain" />
                    <img src="/images/companies/customer_matrix.webp" alt="CustomerMatrix" className="h-7 w-auto max-w-[110px] object-contain" />
                    <img src="/images/companies/polyspot.webp" alt="PolySpot" className="h-7 w-auto max-w-[110px] object-contain" />
                  </div>
                </div>

                {/* Col 3 */}
                <div className="flex flex-col">
                  <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-6">Offshore Team Setup</h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
                    <img src="/images/companies/skyselect.svg" alt="SkySelect" className="h-6 w-auto max-w-[130px] object-contain" />
                  </div>
                </div>

                {/* Col 4 */}
                <div className="flex flex-col">
                  <h3 className="font-bold text-xs uppercase tracking-widest text-muted-foreground mb-6">Product Dev & Support</h3>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
                    <span className="text-xl font-bold text-slate-700 tracking-tight">eXtensi</span>
                    <span className="text-xl font-bold text-slate-700 tracking-tight">Validat</span>
                  </div>
                </div>

              </div>
            </div>
          </SectionReveal>

          {/* Testimonial (Innovalog highlight) */}
          <div className="mt-8 md:mt-12 w-full">
            <SectionReveal>
              <div className="bg-white border border-[var(--neutral-slate-200)]/60 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14 shadow-sm relative">
                
                {/* Left Side: Logo & Name */}
                <div className="flex flex-col items-center text-center shrink-0 w-full md:w-56">
                  <div className="h-28 w-28 rounded-full bg-white shadow-sm flex items-center justify-center p-4 mb-5 border border-slate-100">
                    <Image src="/images/companies/innovalog.png" alt="Innovalog" width={80} height={80} className="object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Innovalog</h3>
                  <p className="text-sm text-muted-foreground">Atlassian Marketplace Products</p>
                </div>

                {/* Vertical Separator */}
                <div className="hidden md:block w-px bg-[var(--neutral-slate-200)] self-stretch shrink-0" />

                {/* Right Side: Content */}
                <div className="flex flex-col w-full text-center md:text-left">
                  <div className="inline-flex items-center self-center md:self-start gap-2 px-3 py-1 rounded-full bg-[var(--surface-blue)] text-brand-blue text-sm font-semibold mb-6">
                    Client Relationship Highlight
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Long-Term Development & QA Collaboration
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Our long-term collaboration with Innovalog included dedicated development and QA support for Atlassian Marketplace products, helping retain product knowledge and maintain engineering continuity over time.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--neutral-slate-200)] text-sm font-medium text-foreground shadow-sm">
                      <Code className="w-4 h-4 text-brand-blue" />
                      Dedicated Development
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--neutral-slate-200)] text-sm font-medium text-foreground shadow-sm">
                      <ShieldCheck className="w-4 h-4 text-brand-blue" />
                      QA Support
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--neutral-slate-200)] text-sm font-medium text-foreground shadow-sm">
                      <BookOpen className="w-4 h-4 text-brand-blue" />
                      Product Knowledge Continuity
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

        </div>
      </section>
    </>
  )
}
