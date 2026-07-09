import Link from "next/link"
import { ChevronRight, Sparkles } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function DedicatedTeamsHero() {
  return (
    <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 flex items-center isolate">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-slate-50">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 opacity-50 blur-[80px] animate-blob" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100 to-cyan-100 opacity-50 blur-[80px] animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <SectionReveal className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-blue-600 text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            <span>Dedicated Software Teams in India</span>
          </div>
          
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Build a Dedicated Software Team That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Works Like Your Own</span>
          </h1>
          
          <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            TECUNIQUE helps software companies build full-time development, QA, automation, DevOps, and support teams in India. You select the team. We manage recruitment, onboarding, payroll, HR, infrastructure, NDA, and long-term team continuity.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-bold text-white shadow-xl shadow-blue-900/20 transition-all hover:bg-blue-700 hover:scale-105"
            >
              Build Your Dedicated Team
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white/50 backdrop-blur-sm px-8 text-base font-bold text-slate-700 transition-all hover:bg-white hover:border-slate-300 hover:scale-105"
            >
              Discuss Team Requirements
            </Link>
          </div>

          {/* Hero Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-200/60 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-slate-900">15+ Years</span>
              <span className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">in Software Services</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-slate-900">High</span>
              <span className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">Team Retention</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-black text-slate-900">Long-Term</span>
              <span className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">Client Relationships</span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
