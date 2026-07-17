import { AppWindow, CloudCog, Database, RefreshCcw, LayoutTemplate } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const buildAreas = [
  {
    title: "Web Applications",
    description: "Modern web applications, dashboards, portals, admin panels, and product interfaces.",
    icon: AppWindow
  },
  {
    title: "SaaS Platforms",
    description: "Feature development, user workflows, roles, permissions, reporting, and subscription-based product flows.",
    icon: CloudCog
  },
  {
    title: "Backend Systems",
    description: "APIs, services, business logic, database-backed applications, and system integrations.",
    icon: Database
  },
  {
    title: "Product Enhancements",
    description: "New features, improvements, refactoring, bug fixes, and ongoing product maintenance.",
    icon: RefreshCcw
  }
]

export function WhatWeBuild() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-blue-strong)]/30 border border-[var(--surface-blue-strong)] mb-6">
                <LayoutTemplate className="h-4 w-4 text-[var(--brand-blue)]" />
                <span className="text-sm font-semibold text-[var(--brand-blue-hover)]">What We Build</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-display mb-6 leading-tight">
                Software Built Around Product Goals
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We support product companies that need dependable engineering capacity for new development, product enhancements, integrations, maintenance, and platform evolution. Our focus is not just writing code, but understanding the product context and delivering work that fits the client's roadmap.
              </p>
            </SectionReveal>
          </div>
          
          {/* Right Column - Capabilities List */}
          <div className="lg:col-span-7 flex flex-col border-t border-border/60">
            {buildAreas.map((area, index) => (
              <SectionReveal key={area.title} delay={index * 100}>
                <div className="group flex flex-col sm:flex-row items-start gap-6 py-8 border-b border-border/60 hover:bg-[var(--neutral-slate-50)] transition-colors px-6 -mx-6 rounded-2xl">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface-blue)] text-[var(--brand-blue)] group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-colors duration-500 shadow-sm">
                    <area.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[var(--brand-blue-hover)] transition-colors">{area.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{area.description}</p>
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
