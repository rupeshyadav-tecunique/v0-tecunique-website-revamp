import { Store, Cloud, Users, RefreshCcw, Target } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const whoIsThisFor = [
  {
    title: "Marketplace App Vendors",
    description: "For teams building or maintaining Jira apps listed on the Atlassian Marketplace.",
    icon: Store,
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconBg: "bg-blue-500/20 text-blue-700",
  },
  {
    title: "SaaS / ISV Teams",
    description: "For software companies integrating their products with Jira, Atlassian Cloud, or Marketplace app workflows.",
    icon: Cloud,
    gradient: "from-sky-500/10 to-blue-500/10",
    iconBg: "bg-sky-500/20 text-sky-700",
  },
  {
    title: "Product Engineering Leaders",
    description: "For teams that need dedicated developers, QA engineers, or automation specialists.",
    icon: Users,
    gradient: "from-indigo-500/10 to-purple-500/10",
    iconBg: "bg-indigo-500/20 text-indigo-700",
  },
  {
    title: "App Modernization Teams",
    description: "For teams improving older apps, moving toward Forge, or strengthening Cloud readiness.",
    icon: RefreshCcw,
    gradient: "from-purple-500/10 to-fuchsia-500/10",
    iconBg: "bg-purple-500/20 text-purple-700",
  }
]

export function AtlassianTargetAudience() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/50 border border-slate-300 mb-6">
            <Target className="h-4 w-4 text-slate-700" />
            <span className="text-sm font-semibold text-slate-900">Who Is This For?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
            Built for Atlassian App Vendors and Product Teams
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {whoIsThisFor.map((card, index) => (
            <SectionReveal key={card.title} delay={index * 100}>
              <div className={`relative h-full overflow-hidden rounded-[2rem] border border-border/60 bg-white p-8 lg:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300 ${card.iconBg}`}>
                    <card.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">{card.description}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
