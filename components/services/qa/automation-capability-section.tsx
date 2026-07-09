import { FileCode2, GitMerge, ServerCog, TestTube2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const automationCards = [
  {
    title: "Playwright / Selenium Automation",
    description: "Browser-based automation for critical app flows and regression scenarios.",
    icon: TestTube2
  },
  {
    title: "API Testing",
    description: "Validation of backend services, integrations, and REST API behaviour.",
    icon: ServerCog
  },
  {
    title: "JUnit / Java-Based Testing",
    description: "Support for Java-based test frameworks where applicable.",
    icon: FileCode2
  },
  {
    title: "CI/CD Test Integration",
    description: "Automated test execution aligned with build and release pipelines.",
    icon: GitMerge
  }
]

export function AutomationCapability() {
  return (
    <section className="py-24 bg-[#0052CC] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">Automation QA for Faster, Safer Releases</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            We build maintainable automation frameworks and test suites that speed up testing, reduce risk, and improve long-term quality.
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
                <p className="text-blue-100 text-sm leading-relaxed">{card.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
