import Link from "next/link"
import { ShieldCheck, ArrowRight, CheckCircle2, TestTube, Bug, RefreshCcw, GitPullRequest, Search, Code2, Users, Infinity } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function QAHero() {
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
              QA & AUTOMATION
            </div>
            
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
              <span className="whitespace-nowrap">Strengthen Product</span> Quality with <br className="hidden lg:block"/>
              <span className="text-brand-blue">QA & Automation Teams</span>
            </h1>
            
            <p className="mt-4 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Support product quality with experienced manual QA and automation engineers covering functional testing, regression, API testing, test automation, and release validation.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[var(--brand-blue)] px-8 text-sm font-bold text-white shadow-xl shadow-[var(--brand-blue)]/20 transition-all hover:bg-[var(--brand-blue-hover)] hover:scale-105"
              >
                Discuss Your QA Requirements
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
                { label: "Manual QA", icon: ShieldCheck },
                { label: "Regression Testing", icon: RefreshCcw },
                { label: "Automation QA", icon: TestTube },
                { label: "API Testing", icon: Code2 },
                { label: "Release Validation", icon: CheckCircle2 },
                { label: "Dedicated QA Teams", icon: Users }
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
                QA Coverage Cycle
              </h3>
              
              <div className="relative">
                {/* SVG Connecting Lines for Serpentine Flow (2x2) */}
                <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0, overflow: 'visible' }} preserveAspectRatio="none">
                  <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M 0 1 L 9 5 L 0 9" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </marker>
                  </defs>

                  {/* Row 1 arrow */}
                  <path d="M 45% 25% L 50% 25%" stroke="#CBD5E1" strokeWidth="1.5" markerEnd="url(#arrow)" vectorEffect="non-scaling-stroke" />
                  
                  {/* Row 1 to Row 2 Snake */}
                  <path d="M 95% 25% L 105% 25% Q 110% 25% 110% 35% L 110% 60% Q 110% 65% 105% 65% L -5% 65% Q -10% 65% -10% 70% L -10% 75% Q -10% 75% -5% 75% L -2% 75%" stroke="#CBD5E1" strokeWidth="1.5" fill="none" markerEnd="url(#arrow)" vectorEffect="non-scaling-stroke" />

                  {/* Row 2 arrow */}
                  <path d="M 45% 75% L 50% 75%" stroke="#CBD5E1" strokeWidth="1.5" markerEnd="url(#arrow)" vectorEffect="non-scaling-stroke" />
                </svg>

                <div className="grid grid-cols-2 gap-x-6 gap-y-12 relative z-10">
                  {[
                    { 
                      step: "01", 
                      title: "Understand Product", 
                      desc: "Learn critical workflows and risk areas.",
                      icon: Search 
                    },
                    { 
                      step: "02", 
                      title: "Validate Core Flows", 
                      desc: "Execute functional and regression testing.",
                      icon: CheckCircle2 
                    },
                    { 
                      step: "03", 
                      title: "Automate Repeatable Tests", 
                      desc: "Build automation around recurring scenarios.",
                      icon: TestTube 
                    },
                    { 
                      step: "04", 
                      title: "Support Release Confidence", 
                      desc: "Validate releases and improve coverage.",
                      icon: ShieldCheck 
                    },
                  ].map((item, i) => (
                    <div key={item.step} className="flex flex-col gap-3 bg-white group">
                      <div className="flex items-center gap-2 xl:gap-3">
                        <div className="flex items-center justify-center w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-[var(--brand-blue)] text-white font-bold shadow-md shrink-0 text-xs xl:text-sm">
                          {item.step}
                        </div>
                        <div className="hidden xl:flex items-center justify-center w-10 h-10 rounded-full bg-[var(--neutral-slate-50)] border border-[var(--neutral-slate-100)] shrink-0">
                          <item.icon className="w-4 h-4 text-[var(--neutral-slate-600)]" />
                        </div>
                        <div className="font-semibold text-[var(--neutral-slate-800)] text-xs xl:text-sm leading-tight max-w-[120px]">
                          {item.title}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-1 xl:pl-2">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools visual row */}
              <div className="mt-12 pt-8 border-t border-[var(--neutral-slate-100)] grid grid-cols-3 gap-6">
                 <div className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground">
                   <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]" aria-hidden="true">P</span>
                   Playwright
                 </div>
                 <div className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground">
                   <span className="w-5 h-5 bg-green-600 rounded flex items-center justify-center text-white text-[10px]" aria-hidden="true">Se</span>
                   Selenium
                 </div>
                 <div className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground">
                   <span className="text-red-500 font-bold">JUnit</span>
                 </div>
                 <div className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground">
                   <Code2 className="w-5 h-5 text-[var(--neutral-slate-400)]"/>
                   API Testing
                 </div>
                 <div className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground">
                   <span className="text-[var(--brand-blue)] font-bold text-lg" aria-hidden="true">▲</span>
                   Jira Apps
                 </div>
                 <div className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground">
                   <Infinity className="w-5 h-5 text-[var(--brand-blue)]"/>
                   CI/CD
                 </div>
              </div>
            </div>
          </SectionReveal>
          
        </div>
      </div>
    </section>
  )
}
