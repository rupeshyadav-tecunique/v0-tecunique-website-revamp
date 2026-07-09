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
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <SectionReveal>
            <span className="section-pill mb-6 mx-auto inline-flex">
              <LayoutTemplate className="h-4 w-4" />
              What We Build
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display mb-6">
              Software Built Around Product Goals
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              We support product companies that need dependable engineering capacity for new development, product enhancements, integrations, maintenance, and platform evolution. Our focus is not just writing code, but understanding the product context and delivering work that fits the client’s roadmap.
            </p>
          </SectionReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {buildAreas.map((area, index) => (
            <SectionReveal key={area.title} delay={index * 100} className="h-full">
              <div className="group bg-white rounded-[2rem] p-8 lg:p-10 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <area.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base flex-1">
                  {area.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
