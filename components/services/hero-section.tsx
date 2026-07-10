import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function ServicesHero() {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white"
      style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #93c5fd 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        <SectionReveal className="mx-auto max-w-4xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0052CC] text-sm font-semibold mb-8 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Software Services
          </div>
          
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-6">
            Build, Scale, and Support <br className="hidden md:block" />
            <span className="text-[#0052CC]">Your Software Products</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Extend your engineering capacity, strengthen product quality, and accelerate Atlassian app development with our dedicated teams in India.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-lg hover:shadow-xl transition-all bg-[#0052CC] hover:bg-[#0047b3] w-full sm:w-auto" asChild>
              <Link href="/contact">
                Discuss Your Requirements
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-bold border-2 border-slate-200 hover:bg-slate-50 transition-all w-full sm:w-auto text-slate-700" asChild>
              <Link href="#services">
                Explore Services
              </Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
