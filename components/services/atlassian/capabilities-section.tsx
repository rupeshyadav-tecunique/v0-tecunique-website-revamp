import { Code2, CheckCircle2, TestTube2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const capabilities = [
  {
    title: "App Engineering",
    icon: Code2,
    items: [
      {
        title: "App Development",
        desc: "Support app functionality, workflows, UI, backend logic, REST APIs, and product enhancements.",
      },
      {
        title: "Forge Development & Connect Modernization",
        desc: "Develop Forge functionality and support maintenance or modernization of existing Connect-based apps.",
      },
      {
        title: "Integrations",
        desc: "Integrate Jira apps with third-party products, APIs, services, and product workflows.",
      },
    ],
  },
  {
    title: "Functional QA",
    icon: CheckCircle2,
    items: [
      {
        title: "Functional Testing",
        desc: "Validate app functionality, workflows, screens, configurations, and user journeys.",
      },
      {
        title: "Workflow & Permissions",
        desc: "Validate Jira workflows, conditions, roles, permissions, and project configurations.",
      },
      {
        title: "Release Validation",
        desc: "Support regression testing, defect verification, release validation, and Marketplace submission readiness.",
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
        desc: "Validation of backend services, integrations, and REST API behaviour.",
      },
      {
        title: "CI/CD Integration",
        desc: "Automated test execution aligned with build and release pipelines.",
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
              We support Jira app development, functional QA, automation, integrations, release validation, and long-term maintenance across Atlassian Marketplace product engagements.
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
