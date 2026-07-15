"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { CheckCircle2, UserSearch, Users, Settings, TrendingUp, ShieldCheck, AppWindow, Database, Globe, Lightbulb } from "lucide-react"
import Image from "next/image"

const cards = [
  {
    title: "Client-Selected Talent",
    icon: UserSearch,
    color: "text-blue-600",
    bg: "bg-blue-50",
    items: [
      "You interview, evaluate, and approve the professionals before onboarding.",
      "We shortlist candidates based on skills, project needs, and working style.",
    ]
  },
  {
    title: "Full-Time Dedicated Teams",
    icon: Users,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    items: [
      "Selected professionals work exclusively for your projects.",
      "They align with your tools, communication, sprint planning, and delivery priorities.",
    ]
  },
  {
    title: "Managed Operations",
    icon: Settings,
    color: "text-orange-500",
    bg: "bg-orange-50",
    items: [
      "TECUNIQUE handles recruitment, onboarding, payroll, HR, NDA, and infrastructure.",
      "You focus on the product while we manage the operational side.",
    ]
  },
  {
    title: "Long-Term Stability",
    icon: TrendingUp,
    color: "text-purple-600",
    bg: "bg-purple-50",
    items: [
      "We focus on continuity, ownership, and team stability.",
      "This helps preserve product knowledge and reduce repeated onboarding.",
    ]
  }
]

export function DedicatedTeamsSection() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 mb-6">
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">Built for long-term success</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
            Built for Long-Term <span className="text-blue-600">Dedicated Software Teams</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Since 2010, TECUNIQUE has helped international software companies build stable, full-time development and QA teams in India — with practical engineering support, transparent collaboration, and long-term continuity.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="reveal bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col h-full"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-full ${card.bg} flex items-center justify-center mb-6 mx-auto`}>
                <card.icon className={`w-8 h-8 ${card.color}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 text-center mb-6">{card.title}</h3>
              <ul className="space-y-4 flex-1">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="reveal bg-slate-50/80 border border-slate-100 rounded-3xl p-8 md:p-12 text-center" style={{ transitionDelay: "400ms" }}>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Trusted through long-term relationships</h3>
          <p className="text-slate-600 mb-10">Across Atlassian apps, product engineering, QA, data platforms, and offshore development teams.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Col 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full flex flex-col">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Atlassian App Vendors</h3>
              <div className="flex flex-wrap items-center gap-6 mt-auto">
                <span className="text-slate-600 font-medium whitespace-nowrap">
                  Appfire
                </span>
                <Image src="/images/companies/innovalog.png" alt="Innovalog" width={110} height={35} className="h-8 w-auto object-contain" />
                <Image src="/images/companies/quotilabs.png" alt="Qotilabs" width={110} height={35} className="h-8 w-auto object-contain" />
              </div>
            </div>

            {/* Col 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full flex flex-col">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider leading-relaxed">Product Engineering & Data Platforms</h3>
              <div className="flex flex-wrap items-center gap-6 mt-auto">
                <Image src="/images/companies/oppscience.svg" alt="OPPSCIENCE" width={110} height={35} className="h-7 w-auto object-contain" />
                <Image src="/images/companies/customer_matrix.webp" alt="CustomerMatrix" width={110} height={35} className="h-7 w-auto object-contain" />
                <Image src="/images/companies/polyspot.webp" alt="PolySpot" width={110} height={35} className="h-8 w-auto object-contain" />
              </div>
            </div>

            {/* Col 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full flex flex-col">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider leading-relaxed">ODC / Offshore Team Setup</h3>
              <div className="flex flex-wrap items-center gap-6 mt-auto">
                <Image src="/images/companies/skyselect.svg" alt="SkySelect" width={110} height={35} className="h-8 w-auto object-contain" />
              </div>
            </div>

            {/* Col 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] h-full flex flex-col">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider leading-relaxed">Product Development & Support</h3>
              <div className="flex flex-wrap items-center gap-6 mt-auto">
                <span className="text-slate-600 font-medium whitespace-nowrap">
                  eXtensi
                </span>
                <span className="text-slate-600 font-medium whitespace-nowrap">
                  Validat
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-slate-700">15+ Years of Experience</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-slate-700">Strict NDA</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-slate-700">Transparent Communication</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-slate-300"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-slate-700">Flexible Engagement Models</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
