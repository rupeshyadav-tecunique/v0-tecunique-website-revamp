import Link from "next/link"
import { Layers, ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { HeroAtlassianVisual } from "@/components/home/hero-atlassian-visual"

export function AtlassianHero() {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white"
      style={{ background: "linear-gradient(170deg, #ffffff 0%, #e0f2fe 18%, #bae6fd 45%, #e0e7ff 75%, #f3e8ff 100%)" }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#0284c7 1px, transparent 1px), linear-gradient(to right, #0284c7 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
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
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0052CC] px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-[#0047b3] hover:scale-105 w-full sm:w-auto"
              >
                Discuss App Needs
                <ArrowRight className="ml-2 w-5 h-5" />
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
