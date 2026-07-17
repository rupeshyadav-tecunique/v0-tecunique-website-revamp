import Link from "next/link"
import { Users, Layers, TestTube2, Code2, ArrowRight, CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const services = [
  {
    id: "dedicated-teams",
    title: "Dedicated Software Teams",
    icon: Users,
    color: "from-indigo-500 to-blue-600",
    bgLight: "bg-indigo-500/10",
    textLight: "text-indigo-600",
    shadow: "shadow-indigo-500/20",
    text: "Build full-time development, QA, automation, DevOps, or support teams in India. You select the team; TECUNIQUE manages recruitment, onboarding, HR, payroll, infrastructure, NDA, and continuity.",
    bestFor: [
      "Long-term product development",
      "Team expansion",
      "Offshore engineering capacity",
      "Client-selected talent",
    ],
    ctaText: "Explore Dedicated Teams",
    ctaHref: "/services/dedicated-teams",
  },
  {
    id: "atlassian",
    title: "Atlassian App Development & QA",
    icon: Layers,
    color: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-500/10",
    textLight: "text-blue-600",
    shadow: "shadow-blue-500/20",
    text: "Build, test, automate, and support Jira apps with dedicated engineering and QA teams. We support Forge, Connect, REST APIs, Marketplace app QA, integrations, and long-term product maintenance.",
    bestFor: [
      "Atlassian Marketplace vendors",
      "Jira app teams",
      "Forge / Connect work",
      "Marketplace app QA",
    ],
    ctaText: "Explore Atlassian Services",
    ctaHref: "/services/atlassian",
  },
  {
    id: "qa-automation",
    title: "Software QA & Automation Testing",
    icon: TestTube2,
    color: "from-purple-500 to-pink-500",
    bgLight: "bg-purple-500/10",
    textLight: "text-purple-600",
    shadow: "shadow-purple-500/20",
    text: "Strengthen product quality with dedicated QA and automation teams. We support manual QA, regression testing, Playwright, Selenium, JUnit, API testing, CI/CD integration, and release validation.",
    bestFor: [
      "Product QA",
      "Regression ownership",
      "Automation frameworks",
      "Release confidence",
    ],
    ctaText: "Explore QA Services",
    ctaHref: "/services/qa",
  },
  {
    id: "product-engineering",
    title: "Product Engineering & Custom Software",
    icon: Code2,
    color: "from-indigo-500 to-blue-500",
    bgLight: "bg-indigo-500/10",
    textLight: "text-indigo-600",
    shadow: "shadow-indigo-500/20",
    text: "Build, enhance, and maintain software products, web applications, backend systems, integrations, and cloud-ready platforms with dedicated engineering teams.",
    bestFor: [
      "Web applications",
      "Backend systems",
      "API integrations",
      "Product enhancement",
    ],
    ctaText: "Explore Product Engineering",
    ctaHref: "/services/product-engineering",
  },
]

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
              Choose the Right Engagement Area
            </h2>
            <p className="text-lg text-muted-foreground">
              Select the service that aligns with your strategic goals and operational needs.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <SectionReveal key={service.id} delay={index * 100} className="h-full">
                <div className="group relative flex flex-col h-full bg-white rounded-2xl border border-[var(--neutral-slate-200)] p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:border-[var(--brand-blue)]/30">
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
