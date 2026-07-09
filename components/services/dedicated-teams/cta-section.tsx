import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function DedicatedTeamsCTA() {
  return (
    <section className="py-24 lg:py-32 bg-blue-600 relative overflow-hidden">
      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800" />
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-cta" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0H40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-cta)" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-white/10 blur-[80px]" />
      
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center z-10">
        <SectionReveal>
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
            Ready to Build a Dedicated Software Team?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Tell us the roles, skills, and team size you need. We will help you evaluate the right professionals and set up a dedicated team that works with your tools, processes, and product goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-indigo-700 shadow-xl shadow-indigo-900/20 transition-all hover:bg-slate-50 hover:scale-105"
            >
              Build Your Dedicated Team
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 text-base font-bold text-white transition-all hover:bg-white/20 hover:scale-105"
            >
              Discuss Team Requirements
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
