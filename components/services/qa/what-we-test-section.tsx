import { LayoutGrid, Cloud, Code2, PlaySquare, CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const testTargets = [
  {
    title: "Web Applications",
    description: "User workflows, business rules, browser behaviour, integrations, and regression coverage across custom web applications.",
    icon: LayoutGrid
  },
  {
    title: "SaaS Products",
    description: "Role-based workflows, multi-tenant behaviour, integrations, edge cases, and recurring release regression.",
    icon: Cloud
  },
  {
    title: "APIs & Integrations",
    description: "REST/GraphQL endpoints, data flows, error handling, backend behaviour, and third-party integrations.",
    icon: Code2
  },
  {
    title: "Atlassian / Jira Apps",
    description: "Jira workflows, permissions, app behaviour, integrations, compatibility, and Marketplace app regression.",
    icon: PlaySquare
  }
]

export function WhatWeTest() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-blue-strong)]/30 border border-[var(--surface-blue-strong)] mb-6">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-blue)]" />
                <span className="text-sm font-semibold text-[var(--brand-blue-hover)]">What We Test</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-display mb-6 leading-tight">
                Testing Built Around Real Product Workflows
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We test the applications, integrations, and experiences your users rely on every day—across web, SaaS, APIs, and Atlassian / Jira ecosystems.
              </p>
            </SectionReveal>
          </div>
          
          {/* Right Column - Capabilities List */}
          <div className="lg:col-span-7 flex flex-col border-t border-border/60">
            {testTargets.map((target, index) => (
              <SectionReveal key={target.title} delay={index * 100}>
                <div className="group flex flex-col sm:flex-row items-start gap-6 py-8 border-b border-border/60 hover:bg-[var(--neutral-slate-50)] transition-colors px-6 -mx-6 rounded-2xl">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)] group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-colors duration-500 shadow-sm">
                    <target.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[var(--brand-blue)] transition-colors">{target.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{target.description}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
