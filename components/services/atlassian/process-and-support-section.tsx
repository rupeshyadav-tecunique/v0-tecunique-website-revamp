import { Wrench, Settings2, HeadphonesIcon, CalendarCheck, FileSearch, UserCheck, Workflow, Repeat, CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const longTermSupportCards = [
  {
    title: "Enhancements & Maintenance",
    description: "Ongoing feature improvements, bug fixes, and product refinements.",
    icon: Wrench,
    className: "md:col-span-2 lg:col-span-2 lg:row-span-1"
  },
  {
    title: "Compatibility Support",
    description: "Support for platform changes, API updates, browser changes, and app behaviour checks.",
    icon: Settings2,
    className: "md:col-span-1 lg:col-span-1 lg:row-span-1"
  },
  {
    title: "L2 / L3 Technical Support",
    description: "Issue analysis, debugging, reproduction, and engineering-level product support.",
    icon: HeadphonesIcon,
    className: "md:col-span-1 lg:col-span-1 lg:row-span-1"
  },
  {
    title: "Release Cycle Support",
    description: "Dedicated QA and development support across planned releases.",
    icon: CalendarCheck,
    className: "md:col-span-2 lg:col-span-2 lg:row-span-1"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Understand App Context",
    description: "We understand your app, users, Jira workflows, technology stack, and support needs.",
    icon: FileSearch
  },
  {
    step: "02",
    title: "Build the Right Team",
    description: "You evaluate and approve developers, QA engineers, automation engineers, or support engineers.",
    icon: UserCheck
  },
  {
    step: "03",
    title: "Align with Your Process",
    description: "The team works with your tools, backlog, sprint process, communication channels, and release plans.",
    icon: Workflow
  },
  {
    step: "04",
    title: "Support Long-Term Delivery",
    description: "We help maintain continuity, product knowledge, QA coverage, and release rhythm.",
    icon: Repeat
  }
]

export function AtlassianProcessAndSupport() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-white relative border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
              Long-Term Support for Marketplace Products
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many Atlassian apps need ongoing engineering attention after the first release. TECUNIQUE supports long-term development, QA, maintenance, bug fixing, compatibility checks, and support workflows for product teams.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {longTermSupportCards.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 100} className={card.className}>
                <div className="h-full bg-slate-50 border border-border/60 rounded-[2rem] p-8 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group flex flex-col">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-border/50 text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm">
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] invert" />
        
        {/* Decorative Gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-[128px] opacity-10" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary rounded-full blur-[128px] opacity-10" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">How We Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 mb-6">
              Dedicated Teams for Atlassian App Work
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              TECUNIQUE can provide dedicated developers, QA engineers, automation QA engineers, and support engineers who work with your tools, sprint process, product priorities, and release expectations.
            </p>
          </SectionReveal>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />

            <div className="space-y-12">
              {processSteps.map((step, index) => {
                const isEven = index % 2 !== 0
                return (
                  <SectionReveal key={step.step} delay={100} className="relative">
                    <div className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                      
                      {/* Content */}
                      <div className={`flex-1 w-full pl-20 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">{step.description}</p>
                      </div>

                      {/* Number / Node */}
                      <div className="absolute left-0 md:left-1/2 top-0 md:top-2 md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-slate-100 z-10 shadow-sm text-primary font-display text-xl font-bold group-hover:border-blue-100 transition-colors">
                        {step.step}
                      </div>

                      {/* Empty Space for Grid Alignment */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </SectionReveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
