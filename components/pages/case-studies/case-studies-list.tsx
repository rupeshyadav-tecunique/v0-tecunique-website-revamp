"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

interface CaseStudyItem {
  id: string
  company: string
  logo?: string
  initials: string
  color: string
  featured?: boolean
  industry: string
  title: string
  description: string
  primaryService: string
  highlight: string
  filters: string[]
  href: string
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "oppscience",
    company: "OPPSCIENCE",
    logo: "/images/companies/oppscience.svg",
    initials: "OS",
    color: "#0284c7",
    featured: true,
    industry: "Intelligence & Investigation Software",
    title: "From Bee4sense to SPECTRA: Scaling a Long-Term Product Engineering & QA Team",
    description:
      "A long-term embedded engineering and QA team supporting product evolution from Bee4sense to SPECTRA, test automation, release readiness, product support, and ongoing engineering collaboration.",
    primaryService: "Product Engineering & QA",
    highlight: "12 dedicated development & QA professionals",
    filters: ["Dedicated Teams", "Product Engineering", "QA & Automation"],
    href: "/case-studies/oppscience",
  },
  {
    id: "skyselect",
    company: "SkySelect",
    logo: "/images/companies/skyselect.svg",
    initials: "SS",
    color: "#0284c7",
    featured: true,
    industry: "Aviation Procurement Technology",
    title: "From 7 to 60+: Building and Transitioning SkySelect’s India Team",
    description:
      "TECUNIQUE provided the recruitment, employment, and local operating structure that helped SkySelect establish its India operation, scale from approximately 7 to more than 60 professionals, and later transition the team to SkySelect India.",
    primaryService: "Dedicated Teams / India Team Setup",
    highlight: "~7 → 60+ professionals",
    filters: ["Dedicated Teams"],
    href: "/case-studies/skyselect",
  },
  {
    id: "innovalog",
    company: "Innovalog",
    logo: "/images/companies/innovalog.png",
    initials: "IN",
    color: "#2563eb",
    featured: true,
    industry: "Atlassian Marketplace",
    title: "Scaling Jira App Development with a Long-Term Development & QA Team",
    description:
      "Long-term engineering and QA support for JMWE, covering Cloud development, Cloud and Data Center QA, test automation, and Tier-3 technical support.",
    primaryService: "Atlassian App Development & QA",
    highlight: "Cloud Development + Cloud & Data Center QA",
    filters: ["Atlassian Apps", "QA & Automation", "Dedicated Teams"],
    href: "/case-studies/innovalog",
  },
  {
    id: "qotilabs",
    company: "Qotilabs",
    logo: "/images/companies/quotilabs.png",
    initials: "QL",
    color: "#f43f5e",
    featured: true,
    industry: "Atlassian Marketplace",
    title: "Scaling Product Quality for Rich Filters with a Dedicated QA Team",
    description:
      "Dedicated QA engineering supporting functional and regression testing, test automation, release validation, and Data Center-to-Cloud migration across Qotilabs’ Atlassian apps.",
    primaryService: "QA & Automation",
    highlight: "Dedicated QA partnership since 2021",
    filters: ["QA & Automation", "Atlassian Apps", "Dedicated Teams"],
    href: "/case-studies/qotilabs",
  },
  {
    id: "extensi",
    company: "eXtensi",
    logo: "/images/companies/extensi.png",
    initials: "EX",
    color: "#0284c7",
    industry: "Atlassian / Confluence Apps",
    title: "Scaling Confluence Test Automation with Playwright, TypeScript & AI-Assisted Engineering",
    description:
      "A dedicated QA automation engineer worked within eXtensi’s existing framework and development workflow, combining Playwright + TypeScript with AI-assisted test design and automation development to scale coverage for Team Hub for Confluence.",
    primaryService: "QA & Automation",
    highlight: "~300 tests · 100% planned test coverage achieved",
    filters: ["QA & Automation", "Atlassian Apps", "Dedicated Teams"],
    href: "/case-studies/extensi",
  },
  {
    id: "customermatrix",
    company: "CustomerMatrix",
    logo: "/images/companies/customer_matrix.webp",
    initials: "CM",
    color: "#8b5cf6",
    industry: "Cognitive Computing & Data Enrichment",
    title: "Scaling a Multidisciplinary Product Engineering Team from 6 to 18 Professionals",
    description:
      "An integrated India–France engineering partnership that grew from development and QA into a multidisciplinary team spanning product engineering, automation, performance testing, AWS DevOps and data capabilities.",
    primaryService: "Dedicated Software Teams",
    highlight: "6 → 18 professionals",
    filters: ["Dedicated Teams", "Product Engineering", "QA & Automation"],
    href: "/case-studies/customermatrix",
  },
  {
    id: "polyspot",
    company: "PolySpot",
    logo: "/images/companies/polyspot.webp",
    initials: "PS",
    color: "#0ea5e9",
    industry: "Enterprise Search Technology",
    title: "Building a Dedicated India R&D Team for PolySpot’s Enterprise Search Platform",
    description:
      "A cross-border development and QA partnership that built major GWT-based UI and Administration modules, supported multiple releases and established engineering relationships that continued into later TECUNIQUE engagements.",
    primaryService: "Dedicated Software Teams",
    highlight: "5 → 13 professionals",
    filters: ["Dedicated Teams", "Product Engineering", "QA & Automation"],
    href: "/case-studies/polyspot",
  },
  {
    id: "appfire",
    company: "Appfire",
    initials: "AF",
    color: "#f97316",
    industry: "Atlassian Ecosystem",
    title: "Extending a Long-Term Atlassian Engineering Partnership Across Development, QA & Automation",
    description:
      "A long-term Appfire engagement spanning architecture, product development, specialized Jira automation, Cloud and Forge evolution, L3 support and recruitment of experienced QA talent.",
    primaryService: "Atlassian App Development & QA",
    highlight: "Architecture · Development · Specialized QA",
    filters: ["Atlassian Apps", "QA & Automation", "Dedicated Teams"],
    href: "/case-studies/appfire",
  },
]

const FILTER_OPTIONS = [
  "All",
  "Dedicated Teams",
  "Product Engineering",
  "QA & Automation",
  "Atlassian Apps",
]

export function CaseStudiesList() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (activeFilter === "All") return true
    return study.filters.includes(activeFilter)
  })

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 space-y-10">
        {/* Filter / Navigation Bar (Horizontally scrollable on mobile) */}
        <SectionReveal>
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto whitespace-nowrap scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 gap-2">
            {FILTER_OPTIONS.map((filter) => {
              const isSelected = activeFilter === filter
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </SectionReveal>

        {/* 2-Column Case Studies Library Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {filteredStudies.map((study) => (
            <SectionReveal key={study.id} className="h-full">
              <article className="group h-full rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
                {/* Upper Body (Logo, Title, Description) */}
                <div className="flex-1 flex flex-col">
                  {/* Card Header: Uniform Logo Container + Industry + Featured Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3 min-w-0">
                      {study.logo ? (
                        <div className="relative h-12 w-12 shrink-0 rounded-xl bg-white border border-slate-200/80 shadow-2xs p-1.5 flex items-center justify-center overflow-hidden">
                          <Image
                            src={study.logo}
                            alt={study.company}
                            fill
                            className="object-contain p-1"
                            sizes="48px"
                          />
                        </div>
                      ) : (
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl text-white font-display text-base font-extrabold shrink-0 shadow-2xs"
                          style={{ background: study.color }}
                        >
                          {study.initials}
                        </div>
                      )}
                      <div className="min-w-0">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block leading-tight truncate">
                          {study.industry}
                        </span>
                        <span className="text-xs font-bold text-slate-900 block truncate">
                          {study.company}
                        </span>
                      </div>
                    </div>

                    {study.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 px-2.5 py-0.5 rounded-md shrink-0">
                        <Sparkles className="h-2.5 w-2.5" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title with min-height for uniform row alignment */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 leading-snug mb-2.5 group-hover:text-blue-600 transition-colors sm:min-h-[56px] flex items-start">
                    <Link href={study.href}>{study.title}</Link>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                    {study.description}
                  </p>
                </div>

                {/* Bottom Section: Primary Service + Highlight Pill + Read Case Study Link */}
                <div className="pt-4 border-t border-slate-100 mt-auto flex flex-col justify-between gap-4">
                  <div className="space-y-2 min-h-[58px] flex flex-col justify-center">
                    <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5 leading-none">
                      <span>Primary Service:</span>
                      <strong className="text-slate-800 font-semibold">{study.primaryService}</strong>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50/80 border border-blue-200/60 px-2.5 py-1 rounded-lg w-fit">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                      <span>{study.highlight}</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <Link
                      href={study.href}
                      className="inline-flex items-center text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors group/link"
                    >
                      Read Case Study
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
