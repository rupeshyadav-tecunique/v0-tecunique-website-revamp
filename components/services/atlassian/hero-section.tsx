import Link from "next/link"
import { Layers, ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function AtlassianHero() {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white"
      style={{ background: "linear-gradient(170deg, #ffffff 0%, #e0f2fe 18%, #bae6fd 45%, #e0e7ff 75%, #f3e8ff 100%)" }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#0284c7 1px, transparent 1px), linear-gradient(to right, #0284c7 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
        <SectionReveal className="mx-auto max-w-4xl">
          <div className="section-pill mb-6 mx-auto inline-flex bg-[#0052CC]/10 text-[#0052CC] border-[#0052CC]/20 px-3 py-1 rounded-full text-sm font-semibold">
            <Layers className="h-4 w-4 mr-2" />
            Atlassian App Development & QA
          </div>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-6">
            Build, Test, and Support Jira Apps with <br className="hidden lg:block"/>
            <span className="text-[#0052CC]">Dedicated Engineering Teams</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            TECUNIQUE helps Atlassian Marketplace vendors and software product companies build, test, automate, and maintain Jira apps. Our teams support app development, QA, automation, integrations, Forge/Connect work, and long-term product maintenance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#0052CC] px-8 text-base font-bold text-white shadow-xl shadow-[#0052CC]/20 transition-all hover:bg-[#0047b3] hover:scale-105"
            >
              Discuss Your Atlassian App Needs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/services/dedicated-teams" 
              className="inline-flex h-14 items-center justify-center rounded-full border-2 border-[#0052CC]/20 bg-white/50 backdrop-blur-sm px-8 text-base font-bold text-[#0052CC] transition-all hover:bg-white hover:border-[#0052CC]/40 hover:scale-105"
            >
              Explore Dedicated Teams
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["Jira Apps", "Forge & Connect", "Marketplace QA", "Automation Testing", "REST APIs", "Long-Term Support"].map(chip => (
              <span key={chip} className="px-4 py-2 rounded-full bg-white/60 border border-slate-200 text-slate-700 text-sm font-medium shadow-sm backdrop-blur-sm">
                {chip}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
