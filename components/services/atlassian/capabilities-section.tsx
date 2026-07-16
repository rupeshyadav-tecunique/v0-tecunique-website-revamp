import { Code2, CheckCircle2, TestTube2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const capabilities = [
  {
    title: "App Engineering",
    icon: Code2,
    items: [
      {
        title: "App Development",
        desc: "Support for app features, workflows, UI, backend logic, and REST APIs.",
      },
      {
        title: "Forge / Connect Work",
        desc: "Modern development and maintenance support for Atlassian frameworks.",
      },
      {
        title: "Integrations",
        desc: "Connect Jira apps with third-party tools, APIs, and product workflows.",
      },
    ],
  },
  {
    title: "Functional QA",
    icon: CheckCircle2,
    items: [
      {
        title: "Diagnostic Testing",
        desc: "Validate app features, workflows, screens, configurations, and user journeys.",
      },
      {
        title: "Workflow & Permissions",
        desc: "Test Jira-specific conditions, roles, permissions, and project configurations.",
      },
      {
        title: "Release Validation",
        desc: "Structured release cycles, defect tracking, and release readiness support.",
      },
    ],
  },
  {
    title: "Automation QA",
    icon: TestTube2,
    items: [
      {
        title: "Playwright / Selenium",
        desc: "Browser-based automation for critical app flows and regression scenarios.",
      },
      {
        title: "API Testing",
        desc: "Validation of backend services, integrations, and REST API behavior.",
      },
      {
        title: "CI/CD Integration",
        desc: "Automated test execution aligned with build pipelines and deployments.",
      },
    ],
  },
]

export function AtlassianCapabilities() {
  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <SectionReveal>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
              End-to-End Support for Atlassian Apps
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              We provide comprehensive engineering, functional QA, and automation services tailored specifically to the complexity of Atlassian Marketplace apps and ecosystem integrations.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {capabilities.map((col, index) => (
            <SectionReveal key={col.title} delay={index * 100}>
              <div className="flex items-center gap-3 mb-8">
                <col.icon className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">{col.title}</h3>
              </div>
              
              <ul className="space-y-8">
                {col.items.map((item) => (
                  <li key={item.title}>
                    <h4 className="text-white font-semibold text-base mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
