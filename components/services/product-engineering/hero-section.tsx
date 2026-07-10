import Link from "next/link"
import { ArrowRight, Code2, AppWindow, Database, Zap, Cloud, Wrench, Search, BoxSelect, Infinity, GitPullRequest, GitMerge, ServerCog } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function ProductEngineeringHero() {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white"
      style={{ background: "linear-gradient(170deg, #ffffff 0%, #f0f7ff 18%, #e0f2fe 45%, #eff6ff 75%, #f8fafc 100%)" }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(to right, #2563eb 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <SectionReveal direction="left">
            <div className="mb-4 text-[#0052CC] font-bold text-sm tracking-widest uppercase">
              ENGINEERING SERVICES
            </div>
            
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-6">
              Build and Scale <br className="hidden lg:block"/>
              <span className="text-[#0052CC]">Custom Software Products</span>
            </h1>
            
            <p className="mt-4 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Design, develop, and maintain web applications, backend systems, and cloud platforms with our expert engineering teams.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#2563eb] px-8 text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition-all hover:bg-blue-700 hover:scale-105"
              >
                Discuss Your Development Needs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="/services/dedicated-teams" 
                className="inline-flex h-12 items-center justify-center rounded-lg border border-[#2563eb]/20 bg-white px-8 text-sm font-bold text-[#2563eb] shadow-sm transition-all hover:bg-slate-50 hover:border-[#2563eb]/40 hover:scale-105"
              >
                Explore Dedicated Teams
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
              {[
                { label: "Web Applications", icon: AppWindow },
                { label: "Backend Systems", icon: Database },
                { label: "Frontend Development", icon: Code2 },
                { label: "API Integrations", icon: Zap },
                { label: "Cloud Platforms", icon: Cloud },
                { label: "Long-Term Maintenance", icon: Wrench }
              ].map(chip => (
                <div key={chip.label} className="flex items-center gap-2 text-slate-700 text-sm font-medium">
                  <chip.icon className="h-4 w-4 text-slate-400" />
                  {chip.label}
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Right Column - Visual */}
          <SectionReveal direction="right" className="relative hidden lg:block">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-8">
                Engineering Delivery Lifecycle
              </h3>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-12 relative">
                {/* Connecting Dotted Lines */}
                <div className="absolute top-6 left-12 right-12 border-t-2 border-dashed border-slate-200 z-0"></div>
                <div className="absolute top-28 left-12 right-12 border-t-2 border-dashed border-slate-200 z-0"></div>
                <div className="absolute top-52 left-12 right-12 border-t-2 border-dashed border-slate-200 z-0"></div>
                
                {[
                  { step: 1, text: "Product Discovery", icon: Search },
                  { step: 2, text: "Architecture Design", icon: BoxSelect },
                  { step: 3, text: "Agile Development", icon: GitPullRequest },
                  { step: 4, text: "API & Integrations", icon: GitMerge },
                  { step: 5, text: "Cloud Deployment", icon: ServerCog },
                  { step: 6, text: "Long-Term Support", icon: Infinity },
                ].map((item, i) => (
                  <div key={item.step} className="flex items-start gap-4 relative z-10 bg-white pr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold shadow-md shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <item.icon className="w-5 h-5 text-slate-400 mb-1" />
                      <div className="font-semibold text-slate-800 text-sm leading-tight max-w-[120px]">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
