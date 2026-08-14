import { FileCode2, GitMerge, ServerCog, TestTube2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const automationCards = [
  {
    title: "Playwright / Selenium Automation",
    description: "Automate critical browser workflows and repeatable regression scenarios.",
    icon: TestTube2
  },
  {
    title: "API Testing",
    description: "Automated validation of REST/GraphQL APIs, backend services, and integrations where applicable.",
    icon: ServerCog
  },
  {
    title: "JUnit / Java-Based Testing",
    description: "Java-based automated tests and supporting test frameworks where appropriate.",
    icon: FileCode2
  },
  {
    title: "CI/CD Test Integration",
    description: "Integrate automated test execution with build and release pipelines to provide earlier feedback.",
    icon: GitMerge
  }
]

export function AutomationCapability() {
  return (
    <section className="py-24 bg-[var(--brand-blue)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">Automation QA for Faster, Safer Releases</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            We design and maintain automated test coverage for repeatable product workflows, helping reduce manual regression effort and provide faster feedback during release cycles.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {automationCards.map((card, index) => (
            <SectionReveal key={card.title} delay={index * 100}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white mb-6">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{card.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
