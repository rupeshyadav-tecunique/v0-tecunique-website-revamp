import { Code2, Layers, FileCheck, ShieldCheck, Cloud, HeadphonesIcon } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const teamRoles = [
  {
    title: "Frontend Engineers",
    description: "React, Angular, Vue, TypeScript, UI implementation, product interfaces.",
    icon: Code2,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Backend Engineers",
    description: "Java, Spring Boot, Node.js, APIs, integrations, microservices, databases.",
    icon: Layers,
    color: "from-indigo-500 to-purple-400"
  },
  {
    title: "QA Engineers",
    description: "Manual QA, regression testing, test planning, release validation.",
    icon: FileCheck,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Automation QA Engineers",
    description: "Playwright, Selenium, JUnit, API testing, CI/CD test integration.",
    icon: ShieldCheck,
    color: "from-rose-500 to-orange-400"
  },
  {
    title: "DevOps Engineers",
    description: "Cloud environments, deployment pipelines, Docker, Kubernetes, AWS support.",
    icon: Cloud,
    color: "from-sky-500 to-blue-400"
  },
  {
    title: "Support Engineers",
    description: "L2/L3 product support, issue analysis, maintenance, customer-facing technical support.",
    icon: HeadphonesIcon,
    color: "from-fuchsia-500 to-pink-400"
  }
]

export function DedicatedTeamsRoles() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Build the Team You Need</h2>
          <p className="text-xl text-slate-600">
            Build a full-time team across the engineering, QA, automation, DevOps, and support roles your product needs.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamRoles.map((role, i) => (
            <SectionReveal key={role.title} delay={i * 100}>
              <div className="relative overflow-hidden h-full rounded-3xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${role.color} opacity-[0.03] rounded-bl-full group-hover:opacity-[0.08] transition-opacity duration-300`} />
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${role.color} text-white mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <role.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{role.title}</h3>
                <p className="text-slate-600 leading-relaxed">{role.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
