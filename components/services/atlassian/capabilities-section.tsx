import { Code2, Puzzle, Webhook, CloudCog, CheckCircle2, ShieldCheck, Key, Rocket, TestTube2, ServerCog, FileCode2, GitMerge, Settings } from "lucide-react"
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
    <section className="py-24 lg:py-32 bg-slate-50 relative border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6">
                <Settings className="h-4 w-4 text-blue-700" />
                <span className="text-sm font-semibold text-blue-900">Capabilities</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-display mb-6 leading-tight">
                End-to-End Support for Atlassian Apps
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We provide comprehensive engineering, functional QA, and test automation services tailored specifically to the complexity of Atlassian Marketplace apps, Jira workflows, and ecosystem integrations.
              </p>
            </SectionReveal>
          </div>
          
          {/* Right Column - Capabilities Groups */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            
            {/* Group 1: Engineering */}
            <div className="flex flex-col border-t border-border/60 pt-10 mt-[-2.5rem]">
              <SectionReveal>
                <h3 className="text-2xl font-bold font-display text-foreground mb-2">Atlassian App Engineering</h3>
                <p className="text-muted-foreground mb-8">Dedicated development for features, modernizations, and Forge/Connect maintenance.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whatWeSupport.map((card, index) => (
                    <div key={card.title} className="bg-white border border-border/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <card.icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{card.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            {/* Group 2: Functional QA */}
            <div className="flex flex-col border-t border-border/60 pt-10">
              <SectionReveal>
                <h3 className="text-2xl font-bold font-display text-foreground mb-2">Functional QA</h3>
                <p className="text-muted-foreground mb-8">Rigorous testing tailored to Jira workflows, roles, permissions, and edge cases.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {qaCards.map((card, index) => (
                    <div key={card.title} className="bg-white border border-border/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <card.icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{card.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            {/* Group 3: Automation QA */}
            <div className="flex flex-col border-t border-border/60 pt-10">
              <SectionReveal>
                <h3 className="text-2xl font-bold font-display text-foreground mb-2">Automation QA</h3>
                <p className="text-muted-foreground mb-8">Reduce repetitive effort and speed up releases with robust automation frameworks.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {automationCards.map((card, index) => (
                    <div key={card.title} className="bg-white border border-border/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <card.icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{card.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
