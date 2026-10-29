"use client"

import Link from "next/link"
import { Users, Code2, TestTube2, Puzzle, ArrowRight, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { HomePageContent } from "@/lib/data/pages-content.data"
import { InlineText } from "@/components/admin/visual-editor/inline-text"

interface ServicesSectionProps {
  content?: Partial<HomePageContent> & Record<string, any>
}

export function ServicesSection({ content }: ServicesSectionProps = {}) {
  const sectionRef = useScrollReveal()

  const servicesBadge = content?.servicesBadge || "Our Services"
  const servicesTitle = content?.servicesTitle || "Services Built Around"
  const servicesHighlight = content?.servicesHighlight || "Long-Term"
  const servicesSubtitle =
    content?.servicesSubtitle ||
    "From dedicated teams and product engineering to QA automation and Atlassian app support, TECUNIQUE helps software companies extend their engineering capacity with practical execution and long-term continuity."

  const services = [
    {
      defaultTitle: "Dedicated Software Teams",
      defaultDesc: "Build full-time development, QA, automation, DevOps, or support teams in India. You select the talent; TECUNIQUE manages recruitment, onboarding, HR, payroll, infrastructure, and continuity.",
      icon: Users,
      color: "text-brand-blue",
      bg: "bg-[var(--surface-blue)]",
      borderColor: "group-hover:border-[var(--surface-blue-strong)]",
      link: "/services/dedicated-teams",
      cta: "Explore Dedicated Teams",
    },
    {
      defaultTitle: "Product Engineering & Custom Software Development",
      defaultDesc: "Build, enhance, and maintain web applications, backend systems, APIs, integrations, and cloud-ready platforms with dedicated engineering support.",
      icon: Code2,
      color: "text-amber-500",
      bg: "bg-amber-50",
      borderColor: "group-hover:border-amber-200",
      link: "/services/product-engineering",
      cta: "Explore Product Engineering",
    },
    {
      defaultTitle: "Software QA & Automation Testing",
      defaultDesc: "Strengthen product quality with manual QA, regression testing, test automation, API testing, CI/CD test integration, and release validation — using tools such as Playwright, Selenium, and JUnit.",
      icon: TestTube2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      borderColor: "group-hover:border-emerald-200",
      link: "/services/qa",
      cta: "Explore QA & Automation",
    },
    {
      defaultTitle: "Atlassian App Development & QA",
      defaultDesc: "Support Jira app development, Atlassian Forge and Connect, REST API integrations, Marketplace app QA, test automation, and long-term product support.",
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
          <span className="section-pill mb-6 inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 shrink-0" />
            <InlineText page="home" field="servicesBadge" initialValue={servicesBadge} />
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
            <InlineText page="home" field="servicesTitle" initialValue={servicesTitle} as="span" />{" "}
            <span className="gradient-text">
              <InlineText page="home" field="servicesHighlight" initialValue={servicesHighlight} as="span" />
            </span>{" "}
            Software Teams
          </h2>
          <InlineText
            page="home"
            field="servicesSubtitle"
            initialValue={servicesSubtitle}
            as="p"
            className="mt-6 text-lg text-muted-foreground leading-relaxed block"
          />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const cardTitle = content?.[`service_${index}_title`] || service.defaultTitle
            const cardDesc = content?.[`service_${index}_desc`] || service.defaultDesc

            return (
              <div 
                key={index} 
                className={`reveal glass-card group relative flex flex-col justify-between rounded-3xl p-8 border border-border/60 bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${service.borderColor}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div>
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 ${service.bg} ${service.color}`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  
                  <InlineText
                    page="home"
                    field={`service_${index}_title`}
                    initialValue={cardTitle}
                    as="h3"
                    className="font-display text-2xl font-bold text-foreground mb-4 block"
                  />
                  
                  <InlineText
                    page="home"
                    field={`service_${index}_desc`}
                    initialValue={cardDesc}
                    as="p"
                    className="text-base text-muted-foreground leading-relaxed mb-8 block"
                  />
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
            )
          })}
        </div>

      </div>
    </section>
  )
}
