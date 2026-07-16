import Link from "next/link"
import { Layers, ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { HeroAtlassianVisual } from "@/components/home/hero-atlassian-visual"

export function AtlassianHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-slate-50/50">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(#0284c7 1px, transparent 1px), linear-gradient(to right, #0284c7 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <SectionReveal direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0052CC] text-sm font-semibold mb-8 shadow-sm">
              <Layers className="h-4 w-4" />
              Atlassian App Engineering
            </div>
            
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Build, Test, and Support <br className="hidden md:block"/>
              <span className="text-[#0052CC]">Jira Apps at Scale</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mb-10">
              Extend your product team with dedicated engineers and QA experts specializing in the Atlassian ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0052CC] px-8 text-base font-bold text-white shadow-md transition-all hover:bg-[#0047b3] hover:scale-105 w-full sm:w-auto"
              >
                Schedule a call
              </Link>
              <Link 
                href="#capabilities" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-white border border-slate-300 px-8 text-base font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:scale-105 w-full sm:w-auto"
              >
                Explore Capabilities
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
