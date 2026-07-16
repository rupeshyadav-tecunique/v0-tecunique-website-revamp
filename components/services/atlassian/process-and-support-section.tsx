import { SectionReveal } from "@/components/ui/section-reveal"

const processSteps = [
  {
    step: "01",
    title: "Understand App Context",
    description: "We understand your app, users, Jira workflows, technology stack, and specific support needs."
  },
  {
    step: "02",
    title: "Build The Right Team",
    description: "You evaluate and approve developers, QA engineers, and automation specialists that fit your culture."
  },
  {
    step: "03",
    title: "Align with Process",
    description: "The team works within your existing Jira backlog, Slack/Teams channels, and sprint plans."
  },
  {
    step: "04",
    title: "Support Long-Term",
    description: "We help maintain continuity, product knowledge, QA coverage, and consistent release rhythms."
  }
]

export function AtlassianProcessAndSupport() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <SectionReveal>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#0052CC] mb-6">
              Dedicated Teams for Atlassian App Work
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We assemble the right expertise that seamlessly fits your tools, sprint processes, and release expectations.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((card, index) => (
            <SectionReveal key={card.title} delay={index * 100}>
              <div className="bg-white rounded-xl border border-slate-200 p-8 h-full flex flex-col hover:shadow-lg transition-all group">
                <div className="text-4xl font-light text-slate-300 mb-6 group-hover:text-[#0052CC] transition-colors">
                  {card.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
