import { Code2, Layers, FileCheck, ShieldCheck, Cloud, HeadphonesIcon, Users } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const teamRoles = [
  {
    title: "Frontend Engineers",
    description: "Experts in React, Angular, Vue, TypeScript. Building responsive, accessible, and high-performance user interfaces and product experiences.",
    icon: Code2,
    color: "from-blue-500 to-indigo-400"
  },
  {
    title: "Backend Engineers",
    description: "Java, Spring Boot, Node.js. Building scalable APIs, robust microservices, and high-concurrency databases.",
    icon: Layers,
    color: "from-indigo-500 to-purple-400"
  },
  {
    title: "QA Engineers",
    description: "Manual QA, regression testing, and comprehensive release validation to ensure flawless product delivery.",
    icon: FileCheck,
    color: "from-emerald-500 to-blue-400"
  },
  {
    title: "Automation QA",
    description: "Playwright, Selenium, JUnit, API testing, CI/CD integrations. Ensuring continuous quality with robust frameworks.",
    icon: ShieldCheck,
    color: "from-rose-500 to-orange-400"
  },
  {
    title: "DevOps Engineers",
    description: "Docker, Kubernetes, AWS, deployment pipelines. Orchestrating seamless infrastructure and automation.",
    icon: Cloud,
    color: "from-sky-500 to-blue-400"
  },
  {
    title: "Support Engineers",
    description: "L2/L3 product support and deep issue analysis to maintain customer satisfaction and product health.",
    icon: HeadphonesIcon,
    color: "from-fuchsia-500 to-pink-400"
  }
]

export function DedicatedTeamsRoles() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--neutral-slate-50)] border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-violet-strong)] border border-[var(--surface-violet-strong)] mb-6">
            <Users className="h-4 w-4 text-brand-purple" />
            <span className="text-sm font-semibold text-brand-purple">Team Composition</span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">Build the Team You Need</h2>
          <p className="text-xl text-muted-foreground">
            Assemble a full-time, dedicated team across engineering, QA, DevOps, and support roles.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {teamRoles.map((role, i) => (
            <SectionReveal key={role.title} delay={i * 100} className="md:col-span-1">
              <div className="relative overflow-hidden h-full rounded-[2rem] border border-border/60 bg-white p-8 lg:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col gap-6 items-start text-left">
                
                {/* Subtle Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${role.color} text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <role.icon className="h-8 w-8" />
                </div>
                
                <div className="relative z-10 flex flex-col flex-1 w-full">
                  <h3 className="font-bold text-foreground mb-3 text-xl">{role.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
