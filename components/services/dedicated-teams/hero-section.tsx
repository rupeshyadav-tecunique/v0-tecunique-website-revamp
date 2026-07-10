import Link from "next/link"
import { ChevronRight, Sparkles } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { HeroDashboard } from "@/components/home/hero-dashboard"

export function DedicatedTeamsHero() {
  return (
    <section className="relative pt-12 pb-12 lg:pt-20 lg:pb-24 flex items-center isolate overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-slate-50">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 opacity-50 blur-[80px] animate-blob" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100 to-indigo-100 opacity-50 blur-[80px] animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <SectionReveal direction="left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0052CC] text-sm font-semibold mb-8 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Dedicated Teams
            </div>
            
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Build a Software Team That <br className="hidden md:block"/>
              <span className="text-[#0052CC]">Works Like Your Own</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mb-10">
              Scale your engineering and QA capacity with a dedicated, full-time team in India. You select the talent, we manage the operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0052CC] px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-[#0047b3] hover:scale-105 w-full sm:w-auto"
              >
                Build Your Team
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </SectionReveal>

          {/* Right Column */}
          <SectionReveal direction="right" className="relative hidden lg:block">
             <div className="w-full max-w-[500px] ml-auto">
                <HeroDashboard />
             </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
