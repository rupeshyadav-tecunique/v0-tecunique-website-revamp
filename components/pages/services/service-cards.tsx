import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { serviceCards } from "@/lib/data/services.data"

export function ServicesCards() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[var(--neutral-slate-50)] relative border-t border-border/50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--brand-blue)]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[var(--brand-blue)]/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <SectionReveal>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-display mb-4">
              Choose the Right Service
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore four ways TECUNIQUE can support your software product and engineering needs.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {serviceCards.map((service, index) => {
            const Icon = service.icon
            return (
              <SectionReveal key={service.id} delay={index * 100} className="h-full">
                <div className="group relative flex flex-col h-full bg-white rounded-2xl border border-[var(--neutral-slate-200)] p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:border-[var(--brand-blue)]/30">
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-blue)] text-[var(--brand-blue)] mb-6 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground leading-tight">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-8 text-[1.05rem]">
                      {service.text}
                    </p>

                    {/* Feature List */}
                    <div className="mt-auto pt-8 border-t border-[var(--neutral-slate-100)]">
                      <h4 className="font-semibold text-[var(--neutral-slate-400)] text-xs tracking-wider uppercase mb-5">
                        BEST FOR
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-10">
                        {service.bestFor.map((item) => (
                          <li key={item} className="flex items-center gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-[var(--brand-blue)] shrink-0" />
                            <span className="text-muted-foreground text-sm font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Action */}
                      <div className="flex items-center">
                        <Link 
                          href={service.ctaHref} 
                          className="group/link inline-flex items-center gap-2 text-[var(--brand-blue)] font-bold hover:text-[var(--brand-blue-hover)] transition-colors"
                        >
                          {service.ctaText}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
