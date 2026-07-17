import { CheckCircle2, Lock, Cpu, Infinity } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const atlassianCapabilities = [
  {
    title: "Jira Workflow Testing",
    description: "Validate app behaviour across Jira workflows, transitions, and conditions.",
    icon: CheckCircle2
  },
  {
    title: "Permission & Role Testing",
    description: "Thorough testing of permissions, roles, and security.",
    icon: Lock
  },
  {
    title: "Marketplace App Regression",
    description: "Ensure stability across Jira versions and environments.",
    icon: Cpu
  },
  {
    title: "App Automation Support",
    description: "Automation support for Jira app flows using relevant tools.",
    icon: Infinity
  }
]

export function QAAtlassian() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">QA Experience for Atlassian and Jira Apps</h2>
          <p className="text-lg text-muted-foreground">
            We have strong QA experience across Atlassian platforms and Marketplace apps. Relevant tool experience includes ACLI, GINT, Groovy, Gradle, Playwright, and Selenium.
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
