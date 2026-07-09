import Link from "next/link"
import { ArrowRight, HelpCircle } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const decisions = [
  {
    need: "I need full-time engineers working with my team",
    service: "Dedicated Software Teams",
    href: "/services/dedicated-teams",
  },
  {
    need: "I need Jira app development, QA, or Forge/Connect support",
    service: "Atlassian App Development & QA",
    href: "/services/atlassian",
  },
  {
    need: "I need manual QA, regression, or automation testing",
    service: "Software QA & Automation Testing",
    href: "/services/qa",
  },
  {
    need: "I need product features, backend work, integrations, or maintenance",
    service: "Product Engineering & Custom Software Development",
    href: "/services/product-engineering",
  },
]

export function DecisionGuide() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <SectionReveal>
            <span className="section-pill mb-6 mx-auto inline-flex">
              <HelpCircle className="h-4 w-4" />
              Decision Guide
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display mb-6">
              Not Sure Which Service Fits?
            </h2>
            <p className="text-lg text-slate-600">
              Find the right engagement model based on your current engineering needs.
            </p>
          </SectionReveal>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {decisions.map((item, index) => (
              <SectionReveal key={index} delay={index * 100}>
                <Link href={item.href} className="group block h-full">
                  <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col relative overflow-hidden">
                    
                    <div className="mb-6 relative z-10">
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">If you say:</p>
                      <p className="text-xl font-medium text-slate-900 leading-snug">"{item.need}"</p>
                    </div>
                    
                    <div className="mt-auto relative z-10 pt-6 border-t border-slate-200 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1">Recommended Service</p>
                        <p className="font-bold text-slate-900">{item.service}</p>
                      </div>
                      <div className="bg-blue-100 text-blue-600 rounded-full p-2 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
