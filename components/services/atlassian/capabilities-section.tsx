import { Code2, Puzzle, Webhook, CloudCog, CheckCircle2, ShieldCheck, Key, Rocket, TestTube2, ServerCog, FileCode2, GitMerge } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const whatWeSupport = [
  {
    title: "Jira App Development",
    description: "Support for app features, workflows, UI, backend logic, REST APIs, and product enhancements.",
    icon: Code2
  },
  {
    title: "Forge & Connect Work",
    description: "Development and maintenance support for Atlassian Forge and Connect-based apps.",
    icon: Puzzle
  },
  {
    title: "Integrations & Customizations",
    description: "Connect Jira apps with third-party systems, internal tools, APIs, and product workflows.",
    icon: Webhook
  },
  {
    title: "Cloud App Modernization",
    description: "Support for Cloud readiness, app improvements, API changes, and migration-related engineering work.",
    icon: CloudCog
  }
]

const qaCards = [
  {
    title: "Functional QA",
    description: "Validate app features, workflows, screens, configurations, and user journeys.",
    icon: CheckCircle2
  },
  {
    title: "Regression Testing",
    description: "Protect existing functionality across product releases and platform changes.",
    icon: ShieldCheck
  },
  {
    title: "Workflow & Permission Testing",
    description: "Test Jira-specific conditions, roles, permissions, workflows, and project configurations.",
    icon: Key
  },
  {
    title: "Release Validation",
    description: "Support release readiness with structured test cycles and defect reporting.",
    icon: Rocket
  }
]

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

export function AtlassianCapabilities() {
  return (
    <>
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-6">Atlassian App Engineering Support</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whatWeSupport.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 100} className="relative group">
                <div className="h-full bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl hover:border-[#0052CC]/20 transition-all duration-300">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#0052CC] mb-6 group-hover:scale-110 group-hover:bg-[#0052CC] group-hover:text-white transition-all duration-300">
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0052CC] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">QA Built Around Atlassian App Complexity</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Testing Jira apps requires more than generic functional QA. Marketplace apps need careful validation across workflows, permissions, configurations, user roles, edge cases, integrations, and release cycles.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qaCards.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 100}>
                <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300">
                  <card.icon className="h-8 w-8 text-blue-200 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-blue-100 leading-relaxed text-sm">{card.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-6">Automation QA for Faster, Safer Releases</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our automation QA teams help Atlassian app vendors reduce repetitive testing effort and strengthen release confidence through product-specific automation frameworks.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {automationCards.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 100}>
                <div className="flex flex-col h-full bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0052CC] mb-6 group-hover:scale-110 group-hover:bg-[#0052CC] group-hover:text-white transition-all duration-300">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
