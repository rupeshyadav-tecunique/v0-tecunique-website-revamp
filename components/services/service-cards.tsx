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
    <section id="services" className="py-24 lg:py-32 bg-slate-50 relative border-t border-border/50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

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
                <div className="group relative flex flex-col h-full bg-white rounded-[2rem] p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  
                  {/* Top Gradient Line */}
                  <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${service.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Subtle Gradient Glow on Hover */}
                  <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                  
                  {/* Outer Border with Hover Effect */}
                  <div className="absolute inset-0 rounded-[2rem] border border-border/60 group-hover:border-primary/20 transition-colors duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl shrink-0 ${service.bgLight} ${service.textLight} shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground leading-tight">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-8 text-[1.05rem]">
                      {service.text}
                    </p>

                    {/* Feature List */}
                    <div className="mt-auto">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                        Best for
                      </h4>
                      <ul className="space-y-3 mb-10 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                        {service.bestFor.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full ${service.bgLight} flex items-center justify-center`}>
                              <CheckCircle2 className={`h-3.5 w-3.5 ${service.textLight}`} />
                            </div>
                            <span className="text-muted-foreground font-medium text-sm leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Action */}
                      <div className="pt-6 border-t border-border/60 flex items-center justify-between">
                        <Link 
                          href={service.ctaHref} 
                          className="group/link inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
                        >
                          {service.ctaText}
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 group-hover/link:bg-primary group-hover/link:text-white transition-all duration-300">
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                          </div>
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
