import Link from "next/link"
import { Layers, ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { HeroAtlassianVisual } from "@/components/home/hero-atlassian-visual"

export function AtlassianHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-slate-50/50">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] brand-grid-blue-bg" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <SectionReveal direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-sm font-semibold mb-8 shadow-sm tracking-widest uppercase">
              <Layers className="h-4 w-4" />
              ATLASSIAN APP DEVELOPMENT & QA
            </div>
            
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Build, Test, and Support Jira Apps with <br className="hidden md:block"/>
              <span className="text-brand-blue">Dedicated Engineering Teams</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
              TECUNIQUE helps Atlassian Marketplace vendors and software product companies develop, test, automate, modernize, and maintain Jira apps with dedicated engineering and QA teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-blue px-8 text-base font-bold text-white shadow-md transition-all hover:bg-brand-blue-hover hover:scale-105 w-full sm:w-auto"
              >
                Discuss Your Atlassian App Needs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="#capabilities" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-white border border-slate-300 px-8 text-base font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:scale-105 w-full sm:w-auto"
              >
                Explore Capabilities
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </SectionReveal>

          {/* Right Column */}
          <SectionReveal direction="right" className="relative hidden lg:block">
             <div className="w-full max-w-[500px] ml-auto">
                <HeroAtlassianVisual />
             </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
