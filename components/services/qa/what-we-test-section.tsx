import { LayoutGrid, Cloud, Code2, PlaySquare } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const testTargets = [
  {
    title: "Web Applications",
    description: "Custom web apps built with modern frameworks and architectures.",
    icon: LayoutGrid
  },
  {
    title: "SaaS Products",
    description: "Multi-tenant SaaS platforms with complex user workflows.",
    icon: Cloud
  },
  {
    title: "APIs & Integrations",
    description: "REST / GraphQL APIs and third-party integrations.",
    icon: Code2
  },
  {
    title: "Atlassian / Jira Apps",
    description: "Cloud and Data Center apps in the Atlassian ecosystem.",
    icon: PlaySquare
  }
]

export function WhatWeTest() {
  return (
    <section className="py-24 bg-white relative border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-16">
          <SectionReveal className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-[#0052CC] uppercase mb-3">WHAT WE TEST</h2>
            <h3 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">Testing Built Around Real Product Workflows</h3>
          </SectionReveal>
          <SectionReveal delay={100} className="lg:w-1/2">
            <p className="text-lg text-slate-600 leading-relaxed pt-2">
              We test the applications, integrations, and experiences your users rely on every day—across web, SaaS, APIs, and Atlassian / Jira ecosystems.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testTargets.map((target, index) => (
            <SectionReveal key={target.title} delay={index * 100} className="relative group">
              <div className="h-full bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl hover:border-[#0052CC]/20 transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#0052CC] mb-6 group-hover:scale-110 group-hover:bg-[#0052CC] group-hover:text-white transition-all duration-300">
                  <target.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{target.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{target.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
