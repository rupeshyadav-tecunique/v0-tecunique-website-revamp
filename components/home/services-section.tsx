"use client"

import Link from "next/link"
import { Users, Code2, TestTube2, Puzzle, ArrowRight, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ServicesSection() {
  const sectionRef = useScrollReveal()

  const services = [
    {
      title: "Dedicated Software Teams",
      description: "Build full-time development, QA, automation, DevOps, or support teams in India. You select the talent; TECUNIQUE manages recruitment, onboarding, HR, payroll, infrastructure, and continuity.",
      icon: Users,
      color: "text-brand-blue",
      bg: "bg-[var(--surface-blue)]",
      borderColor: "group-hover:border-[var(--surface-blue-strong)]",
      link: "/services/dedicated-teams",
      cta: "Explore Dedicated Teams",
    },
    {
      title: "Product Engineering & Custom Software Development",
      description: "Build, enhance, and maintain web applications, backend systems, APIs, integrations, and cloud-ready platforms with dedicated engineering support.",
      icon: Code2,
      color: "text-brand-indigo",
      bg: "bg-[var(--surface-violet)]",
      borderColor: "group-hover:border-[var(--surface-violet-strong)]",
      link: "/services/product-engineering",
      cta: "Explore Product Engineering",
    },
    {
      title: "Software QA & Automation Testing",
      description: "Strengthen product quality with manual QA, regression testing, Playwright, Selenium, JUnit, API testing, CI/CD test integration, and release validation.",
      icon: TestTube2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      borderColor: "group-hover:border-emerald-200",
      link: "/services/qa",
      cta: "Explore QA & Automation",
    },
    {
      title: "Atlassian App Development & QA",
      description: "Support Jira app development, Forge/Connect work, REST APIs, Marketplace app QA, automation, integrations, and long-term product support.",
      icon: Puzzle,
      color: "text-orange-500",
      bg: "bg-orange-50",
      borderColor: "group-hover:border-orange-200",
      link: "/services/atlassian",
      cta: "Explore Atlassian App Engineering",
    },
  ]

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-24 lg:py-32 bg-accent/30 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center reveal mb-16">
          <span className="section-pill mb-6 inline-flex">
            <Sparkles className="h-3 w-3" />
            Our Services
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Services Built Around <span className="gradient-text">Long-Term</span> Software Teams
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From dedicated teams and product engineering to QA automation and Atlassian app support, TECUNIQUE helps software companies extend their engineering capacity with practical execution and long-term continuity.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`reveal glass-card group relative flex flex-col justify-between rounded-3xl p-8 border border-border/60 bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${service.borderColor}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div>
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 ${service.bg} ${service.color}`}>
                  <service.icon className="h-7 w-7" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-border/50 mt-auto">
                <Link
                  href={service.link}
                  className={`inline-flex items-center gap-2 text-sm font-bold transition-colors ${service.color} hover:opacity-80 group/link`}
                >
                  {service.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
