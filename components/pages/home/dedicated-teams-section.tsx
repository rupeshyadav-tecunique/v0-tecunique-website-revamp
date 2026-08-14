"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { CheckCircle2, UserSearch, Users, Settings, TrendingUp, ShieldCheck, AppWindow, Database, Globe, Lightbulb, Clock } from "lucide-react"
import Image from "next/image"

const cards = [
  {
    title: "Client-Selected Talent",
    icon: Users,
    description: "You interview and select from our vetted pool of experienced professionals."
  },
  {
    title: "Full-Time Dedicated Teams",
    icon: Clock,
    description: "100% focus on your projects with flexible scaling as your needs evolve."
  },
  {
    title: "Managed Operations",
    icon: Settings,
    description: "We handle HR, IT, facilities, and compliance so you can focus on product and growth."
  },
  {
    title: "Long-Term Stability",
    icon: ShieldCheck,
    description: "Low attrition, consistent delivery, and teams that grow with your business."
  }
]

export function DedicatedTeamsSection() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-24 bg-[var(--neutral-slate-50)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 reveal">
          <div className="mb-4">
            <span className="text-sm font-bold text-[var(--brand-blue)] tracking-widest uppercase">Our Strength</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
            Built for Long-Term Dedicated Software Teams
          </h2>
        </div>

        {/* 4 Cards Grid - Boxless Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 mb-20">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className={`reveal flex items-start gap-4 px-2 sm:px-6 ${
                idx % 4 !== 0 ? 'lg:border-l lg:border-border/60' : ''
              } ${
                idx % 2 !== 0 ? 'md:border-l md:border-border/60 lg:border-l-0' : ''
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="shrink-0 mt-0.5">
                <card.icon className="w-8 h-8 text-[var(--brand-green)]" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-2 leading-tight">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
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
