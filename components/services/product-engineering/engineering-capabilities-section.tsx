import { Layout, Server, Zap, Cloud, Database, Wrench, ShieldCheck } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const capabilities = [
  {
    title: "Frontend Development",
    description: "React, Angular, Vue, TypeScript, responsive UI, reusable components, and product interfaces.",
    icon: Layout
  },
  {
    title: "Backend Development",
    description: "Java, Spring Boot, Node.js, Python, APIs, services, microservices, and database-driven systems.",
    icon: Server
  },
  {
    title: "API & Integration",
    description: "REST APIs, third-party integrations, internal systems, webhooks, authentication, and data exchange.",
    icon: Zap
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud-ready architecture, deployment pipelines, Docker, Kubernetes, AWS, and release support.",
    icon: Cloud
  },
  {
    title: "Database Development",
    description: "PostgreSQL, SQL development, data modeling, query optimization, and reporting support.",
    icon: Database
  },
  {
    title: "Maintenance & Support",
    description: "Bug fixing, enhancements, version upgrades, production issue analysis, and long-term product support.",
    icon: Wrench
  }
]

export function EngineeringCapabilities() {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <SectionReveal>
            <span className="section-pill mb-6 mx-auto inline-flex">
              <ShieldCheck className="h-4 w-4" />
              Expertise
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display mb-6">
              Engineering Capabilities We Provide
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Our teams bring deep technical expertise across the full stack, ensuring your product is built on a solid, scalable, and secure foundation.
            </p>
          </SectionReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <SectionReveal key={cap.title} delay={index * 100}>
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <cap.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
