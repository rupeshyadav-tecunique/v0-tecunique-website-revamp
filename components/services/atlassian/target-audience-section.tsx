import { Store, Cloud, Users, RefreshCcw } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const whoIsThisFor = [
  {
    title: "Marketplace App Vendors",
    description: "For teams building or maintaining Jira apps listed on the Atlassian Marketplace.",
    icon: Store
  },
  {
    title: "SaaS / ISV Teams",
    description: "For software companies integrating their products with Jira or Atlassian Cloud.",
    icon: Cloud
  },
  {
    title: "Product Engineering Leaders",
    description: "For teams that need dedicated developers, QA engineers, or automation specialists.",
    icon: Users
  },
  {
    title: "App Modernization Teams",
    description: "For teams improving older apps, moving toward Forge, or strengthening Cloud readiness.",
    icon: RefreshCcw
  }
]

export function AtlassianTargetAudience() {
  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-6">Built for Atlassian App Vendors and Product Teams</h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoIsThisFor.map((card, index) => (
            <SectionReveal key={card.title} delay={index * 100}>
              <div className="h-full bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                <card.icon className="h-8 w-8 text-[#0052CC] mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{card.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
