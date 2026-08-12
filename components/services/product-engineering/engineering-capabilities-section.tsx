"use client"

import { useState } from "react"
import { Layout, Server, Zap, Cloud, Database, Wrench, ShieldCheck, ChevronDown } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const capabilities = [
  {
    title: "Frontend Development",
    description: "React, Angular, Vue, TypeScript, responsive UI, reusable components, and product interfaces. We build fast, accessible, and dynamic frontend experiences that scale.",
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
    description: "PostgreSQL, SQL development, data modeling, query optimization, and reporting support. Ensuring data integrity and high performance.",
    icon: Database
  },
  {
    title: "Maintenance & Support",
    description: "Bug fixing, enhancements, version upgrades, production issue analysis, and long-term product support. Keeping your products healthy and evolving.",
    icon: Wrench
  }
]

export function EngineeringCapabilities() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="py-24 lg:py-32 bg-[var(--neutral-slate-50)] relative border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-blue-strong)]/30 border border-[var(--surface-blue-strong)] mb-6">
                <ShieldCheck className="h-4 w-4 text-[var(--brand-blue)]" />
                <span className="text-sm font-semibold text-[var(--brand-blue-hover)]">Expertise</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl font-display mb-6">
                Engineering Capabilities We Provide
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our teams support full-stack product development across frontend, backend, APIs and integrations, cloud environments, databases, and long-term maintenance.
              </p>
            </SectionReveal>
          </div>
          
          <div className="lg:col-span-7">
            <SectionReveal delay={100}>
              <div className="flex flex-col gap-4">
                {capabilities.map((cap, index) => {
                  const isOpen = openIndex === index
                  return (
                    <div 
                      key={cap.title} 
                      className={`border border-border/60 rounded-2xl overflow-hidden transition-all duration-300 bg-white shadow-sm hover:border-[var(--brand-blue)]/30 ${isOpen ? 'ring-1 ring-[var(--brand-blue)]/20' : ''}`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-[var(--brand-blue)] text-white' : 'bg-[var(--surface-blue)] text-[var(--brand-blue)]'}`}>
                            <cap.icon className="h-6 w-6" />
                          </div>
                          <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-[var(--brand-blue)]' : 'text-foreground'}`}>
                            {cap.title}
                          </h3>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="p-6 pt-0 pl-[5.5rem]">
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {cap.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
