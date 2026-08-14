import Link from "next/link"
import { ArrowRight, Code2, AppWindow, Database, Zap, Cloud, Wrench, Search, BoxSelect, Infinity, GitPullRequest, GitMerge, ServerCog } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function ProductEngineeringHero() {
  return (
    <section
      className="brand-hero-blue-bg relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="brand-orb-blue-simple absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" />
        <div className="brand-orb-violet-simple absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" />
        <div className="brand-grid-blue-bg absolute inset-0 opacity-[0.025]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <SectionReveal direction="left">
            <div className="mb-4 text-brand-blue font-bold text-sm tracking-widest uppercase">
              PRODUCT ENGINEERING
            </div>
            
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-6">
              Build and Scale <br className="hidden lg:block"/>
              <span className="text-brand-blue">Custom Software Products</span>
            </h1>
            
            <p className="mt-4 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Design, develop, enhance, and maintain web applications, backend systems, integrations, and cloud-ready platforms with experienced engineering teams.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[var(--brand-blue)] px-8 text-sm font-bold text-white shadow-xl shadow-[var(--brand-blue)]/20 transition-all hover:bg-[var(--brand-blue-hover)] hover:scale-105"
              >
                Discuss Your Development Needs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="/services/dedicated-teams" 
                className="inline-flex h-12 items-center justify-center rounded-lg border border-[var(--brand-blue)]/20 bg-white px-8 text-sm font-bold text-[var(--brand-blue)] shadow-sm transition-all hover:bg-[var(--neutral-slate-50)] hover:border-[var(--brand-blue)]/40 hover:scale-105"
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
                <div key={chip.label} className="flex items-center gap-2 text-[var(--neutral-slate-700)] text-sm font-medium">
                  <chip.icon className="h-4 w-4 text-[var(--neutral-slate-400)]" />
                  {chip.label}
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Right Column - Visual */}
          <SectionReveal direction="right" className="relative hidden lg:block">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[var(--neutral-slate-100)]">
              <h3 className="text-lg font-bold text-foreground mb-8">
                Engineering Delivery Lifecycle
              </h3>
              
              <div className="relative">
                {/* SVG Connecting Lines for Serpentine Flow */}
                <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0, overflow: 'visible' }} preserveAspectRatio="none">
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 9 5 L 0 9" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </marker>
                  </defs>

                  {/* Row 1 arrow */}
                  <path d="M 45% 16.66% L 50% 16.66%" stroke="#CBD5E1" strokeWidth="1.5" markerEnd="url(#arrow)" vectorEffect="non-scaling-stroke" />
                  
                  {/* Row 1 to Row 2 Snake */}
                  <path d="M 95% 16.66% L 105% 16.66% Q 110% 16.66% 110% 20% L 110% 30% Q 110% 33.33% 105% 33.33% L -5% 33.33% Q -10% 33.33% -10% 36.66% L -10% 46.66% Q -10% 50% -5% 50% L -2% 50%" stroke="#CBD5E1" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" vectorEffect="non-scaling-stroke" />

                  {/* Row 2 arrow */}
                  <path d="M 45% 50% L 50% 50%" stroke="#CBD5E1" strokeWidth="1.5" markerEnd="url(#arrow)" vectorEffect="non-scaling-stroke" />
                  
                  {/* Row 2 to Row 3 Snake */}
                  <path d="M 95% 50% L 105% 50% Q 110% 50% 110% 53.33% L 110% 63.33% Q 110% 66.66% 105% 66.66% L -5% 66.66% Q -10% 66.66% -10% 70% L -10% 80% Q -10% 83.33% -5% 83.33% L -2% 83.33%" stroke="#CBD5E1" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" vectorEffect="non-scaling-stroke" />

                  {/* Row 3 arrow */}
                  <path d="M 45% 83.33% L 50% 83.33%" stroke="#CBD5E1" strokeWidth="1.5" markerEnd="url(#arrow)" vectorEffect="non-scaling-stroke" />
                </svg>

                <div className="grid grid-cols-2 gap-x-6 gap-y-12 relative z-10">
                  {[
                    { step: "01", text: "Product Discovery", icon: Search },
                    { step: "02", text: "Architecture & Planning", icon: BoxSelect },
                    { step: "03", text: "Product Development", icon: Code2 },
                    { step: "04", text: "Testing & Integration", icon: GitMerge },
                    { step: "05", text: "Release & Deployment", icon: Cloud },
                    { step: "06", text: "Long-Term Support", icon: Infinity },
                  ].map((item, i) => (
                    <div key={item.step} className="flex items-center gap-2 xl:gap-3 bg-white">
                      <div className="flex items-center justify-center w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-[var(--brand-blue)] text-white font-bold shadow-md shrink-0 text-xs xl:text-sm">
                        {item.step}
                      </div>
                      <div className="hidden xl:flex items-center justify-center w-10 h-10 rounded-full bg-[var(--neutral-slate-50)] border border-[var(--neutral-slate-100)] shrink-0">
                        <item.icon className="w-4 h-4 text-[var(--neutral-slate-600)]" />
                      </div>
                      <div className="font-semibold text-[var(--neutral-slate-800)] text-xs xl:text-sm leading-tight max-w-[100px] xl:max-w-[120px]">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
