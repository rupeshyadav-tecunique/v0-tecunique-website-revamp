import { Wrench, Settings2, HeadphonesIcon, CalendarCheck, FileSearch, UserCheck, Workflow, Repeat } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const longTermSupportCards = [
  {
    title: "Enhancements & Maintenance",
    description: "Ongoing feature improvements, bug fixes, and product refinements.",
    icon: Wrench
  },
  {
    title: "Compatibility Support",
    description: "Support for platform changes, API updates, browser changes, and app behaviour checks.",
    icon: Settings2
  },
  {
    title: "L2 / L3 Technical Support",
    description: "Issue analysis, debugging, reproduction, and engineering-level product support.",
    icon: HeadphonesIcon
  },
  {
    title: "Release Cycle Support",
    description: "Dedicated QA and development support across planned releases.",
    icon: CalendarCheck
  }
]

const processSteps = [
  {
    title: "1. Understand App Context",
    description: "We understand your app, users, Jira workflows, technology stack, and support needs.",
    icon: FileSearch
  },
  {
    title: "2. Build the Right Team",
    description: "You evaluate and approve developers, QA engineers, automation engineers, or support engineers.",
    icon: UserCheck
  },
  {
    title: "3. Align with Your Process",
    description: "The team works with your tools, backlog, sprint process, communication channels, and release plans.",
    icon: Workflow
  },
  {
    title: "4. Support Long-Term Delivery",
    description: "We help maintain continuity, product knowledge, QA coverage, and release rhythm.",
    icon: Repeat
  }
]

export function AtlassianProcessAndSupport() {
  return (
    <>
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-6">Long-Term Support for Marketplace Products</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Many Atlassian apps need ongoing engineering attention after the first release. TECUNIQUE supports long-term development, QA, maintenance, bug fixing, compatibility checks, and support workflows for product teams.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {longTermSupportCards.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 100}>
                <div className="h-full bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <card.icon className="h-8 w-8 text-[#0052CC] mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{card.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">Dedicated Teams for Atlassian App Work</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              TECUNIQUE can provide dedicated developers, QA engineers, automation QA engineers, and support engineers who work with your tools, sprint process, product priorities, and release expectations.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-800" />
            {processSteps.map((step, index) => (
              <SectionReveal key={step.title} delay={index * 100} className="relative">
                <div className="bg-slate-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-slate-900">
                  <step.icon className="h-10 w-10 text-blue-400" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
