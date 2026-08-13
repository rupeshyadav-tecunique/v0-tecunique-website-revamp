import { CheckCircle2, Lock, Cpu, Infinity } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const atlassianCapabilities = [
  {
    title: "Jira Workflow Testing",
    description: "Validate app behaviour across Jira workflows, transitions, validators, conditions, and post-functions where applicable.",
    icon: CheckCircle2
  },
  {
    title: "Permission & Role Testing",
    description: "Validate permissions, roles, access rules, and related app behaviour.",
    icon: Lock
  },
  {
    title: "Marketplace App Regression",
    description: "Regression testing across supported Jira versions and environments to identify compatibility issues.",
    icon: Cpu
  },
  {
    title: "App Automation Support",
    description: "Automation support for repeatable Jira app workflows using relevant frameworks and tooling.",
    icon: Infinity
  }
]

export function QAAtlassian() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">Atlassian App QA Experience</h2>
          <p className="text-lg text-muted-foreground">
            Our experience includes long-term QA and automation support for Jira Marketplace apps, covering workflow validation, regression testing, release testing, and automated test coverage. Tooling and frameworks used across relevant engagements have included ACLI, GINT, Groovy, Gradle, Playwright, and Selenium.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {atlassianCapabilities.map((card, index) => (
            <SectionReveal key={card.title} delay={index * 100}>
              <div className="h-full bg-[var(--neutral-slate-50)] border border-[var(--neutral-slate-100)] rounded-3xl p-8 hover:shadow-xl hover:border-[var(--brand-blue)]/20 transition-all duration-300">
                <card.icon className="h-8 w-8 text-[var(--brand-blue)] mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
