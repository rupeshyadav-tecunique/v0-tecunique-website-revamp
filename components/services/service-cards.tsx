import Link from "next/link"
import { Users, Layers, TestTube2, Code2, ArrowRight, CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const services = [
  {
    id: "dedicated-teams",
    title: "Dedicated Software Teams",
    icon: Users,
    color: "indigo",
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
    color: "blue",
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
    color: "purple",
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
    title: "Product Engineering & Custom Software Development",
    icon: Code2,
    color: "cyan",
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
    <section id="services" className="py-24 lg:py-32 bg-slate-50 relative border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <SectionReveal>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display">
              Choose the Right Engagement Area
            </h2>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <SectionReveal key={service.id} delay={index * 100} className="h-full">
                <div className="flex flex-col h-full bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shrink-0 bg-slate-100 text-slate-600`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold font-display text-slate-900">{service.title}</h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                    {service.text}
                  </p>

                  <div className="mt-auto">
                    <h4 className="font-semibold text-slate-900 mb-4">Best for:</h4>
                    <ul className="space-y-3 mb-8">
                      {service.bestFor.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-slate-100">
                      <Link href={service.ctaHref} className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group/link">
                        {service.ctaText}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
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
