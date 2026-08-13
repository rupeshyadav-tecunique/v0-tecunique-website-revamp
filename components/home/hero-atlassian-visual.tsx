"use client"

import { ClipboardList, Code2, ShieldCheck, Headset, Puzzle, Zap, Rocket, Triangle, Settings } from "lucide-react"

const steps = [
  { id: 1, name: "Plan App", desc: "Use cases, APIs, architecture", icon: ClipboardList },
  { id: 2, name: "Build & Integrate", desc: "Frontend, backend, APIs & integrations", icon: Code2 },
  { id: 3, name: "QA & Release Validation", desc: "Testing, regression, release readiness", icon: ShieldCheck },
  { id: 4, name: "Support & Enhance", desc: "Maintenance, upgrades & improvements", icon: Headset },
]

export function HeroAtlassianVisual() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto lg:ml-auto h-[540px] flex flex-col bg-surface-dashboard rounded-[2rem] p-6 lg:p-8 shadow-2xl shadow-indigo-500/10 border border-white/50 overflow-hidden">

      {/* Header */}
      <div className="mb-6 relative z-10 shrink-0">
        <h3 className="font-display text-3xl sm:text-4xl font-black text-slate-900 leading-[1.1] mb-2 tracking-tight">
          Atlassian <br />
          <span className="text-brand-indigo">App Engineering</span>
        </h3>
        <p className="text-xs text-slate-500 font-medium max-w-[220px] leading-relaxed">
          From app planning and development to QA, release, and long-term support.
        </p>
      </div>

      {/* Content Area */}
      <div className="relative flex flex-1 mt-2">

        {/* Left: Timeline & Steps */}
        <div className="relative z-10 flex flex-col gap-4 py-2 w-[65%] shrink-0">
          {/* Vertical dotted line */}
          <div className="absolute left-[11px] top-6 bottom-6 w-[2px] border-l-2 border-dotted border-indigo-300 -z-10" />

          {steps.map((step) => (
            <div key={step.id} className="flex items-center gap-3 sm:gap-4">
              {/* Number dot */}
              <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-brand-indigo text-[10px] font-bold text-white shadow-sm ring-4 ring-surface-dashboard">
                {step.id}
              </div>

              {/* Step Card */}
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-white p-3 sm:p-3.5 shadow-sm border border-slate-100">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-500">
                  <step.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-[13px] font-bold text-slate-800 truncate leading-tight mb-0.5">{step.name}</div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 truncate">{step.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Floating UI Elements */}
        <div className="absolute right-[-40px] top-[5%] w-[55%] h-[90%] pointer-events-none">
          
          <div className="absolute top-[10%] right-8 w-[140px] bg-white rounded-lg shadow-md border border-slate-100 p-2.5 z-20">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center">
                <Triangle className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold text-slate-700">Forge Development</div>
              </div>
            </div>
          </div>

          <div className="absolute top-[35%] right-8 w-[140px] bg-white rounded-lg shadow-md border border-slate-100 p-2.5 z-20">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center">
                <Code2 className="w-3.5 h-3.5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold text-slate-700">Jira REST APIs</div>
              </div>
            </div>
          </div>

          <div className="absolute top-[60%] right-8 w-[140px] bg-white rounded-lg shadow-md border border-slate-100 p-2.5 z-20">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center">
                <Settings className="w-3.5 h-3.5 text-slate-600" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold text-slate-700">Automation QA</div>
              </div>
            </div>
          </div>

          {/* Rocket 3D abstraction */}
          <div className="absolute bottom-[0%] right-[15%] w-16 h-16 bg-white rounded-full shadow-xl shadow-indigo-500/10 flex items-center justify-center border border-slate-100 z-30">
            <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-brand-indigo" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Chips */}
      <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
        {[
          "Jira Apps", "Forge", "Connect", "QA Automation", "REST APIs", "Marketplace Apps"
        ].map((chip) => (
          <div key={chip} className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-white px-2 py-1 sm:px-2.5 sm:py-1.5 shadow-sm border border-slate-100 text-[9px] sm:text-[10px] font-bold text-slate-600">
            {chip}
          </div>
        ))}
      </div>

    </div>
  )
}
