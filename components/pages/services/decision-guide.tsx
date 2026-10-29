import Link from "next/link"
import { ArrowRight, HelpCircle } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { ServicesHubContent } from "@/lib/data/pages-content.data"
import { InlineText } from "@/components/admin/visual-editor/inline-text"

const defaultDecisions = [
  {
    need: "I need full-time engineers working with my team.",
    service: "Dedicated Software Teams",
    href: "/services/dedicated-teams",
  },
  {
    need: "I need product development, enhancements, backend work, integrations, or maintenance.",
    service: "Product Engineering & Custom Software",
    href: "/services/product-engineering",
  },
  {
    need: "I need manual QA, regression, automation, or release testing.",
    service: "Software QA & Automation Testing",
    href: "/services/qa",
  },
  {
    need: "I need Jira app development, Forge engineering, Connect modernization, or Marketplace app QA.",
    service: "Atlassian App Development & QA",
    href: "/services/atlassian",
  },
]

interface DecisionGuideProps {
  content?: Partial<ServicesHubContent> & Record<string, any>
}

export function DecisionGuide({ content }: DecisionGuideProps = {}) {
  const decisionGuideBadge = content?.decisionGuideBadge || "Decision Guide"
  const decisionGuideTitle = content?.decisionGuideTitle || "Not Sure Which Service Fits?"
  const decisionGuideSubtitle =
    content?.decisionGuideSubtitle ||
    "Find the right service based on your current product and engineering needs."

  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <SectionReveal>
            <span className="section-pill mb-6 mx-auto inline-flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4" />
              <InlineText page="services" field="decisionGuideBadge" initialValue={decisionGuideBadge} />
            </span>
            <InlineText
              page="services"
              field="decisionGuideTitle"
              initialValue={decisionGuideTitle}
              as="h2"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display mb-6 block"
            />
            <InlineText
              page="services"
              field="decisionGuideSubtitle"
              initialValue={decisionGuideSubtitle}
              as="p"
              className="text-lg text-slate-600 block"
            />
          </SectionReveal>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {defaultDecisions.map((item, index) => {
              const needText = content?.[`decision_${index}_need`] || item.need
              const serviceText = content?.[`decision_${index}_service`] || item.service

              return (
                <SectionReveal key={index} delay={index * 100}>
                  <Link href={item.href} className="group block h-full">
                    <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col relative overflow-hidden">
                      
                      <div className="mb-6 relative z-10">
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">If you say:</p>
                        <p className="text-xl font-medium text-slate-900 leading-snug">
                          &ldquo;
                          <InlineText
                            page="services"
                            field={`decision_${index}_need`}
                            initialValue={needText}
                            as="span"
                          />
                          &rdquo;
                        </p>
                      </div>
                      
                      <div className="mt-auto relative z-10 pt-6 border-t border-slate-200 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-1">Recommended Service</p>
                          <InlineText
                            page="services"
                            field={`decision_${index}_service`}
                            initialValue={serviceText}
                            as="p"
                            className="font-bold text-slate-900 block"
                          />
                        </div>
                        <div className="bg-blue-100 text-blue-600 rounded-full p-2 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
