"use client"

import { CheckCircle2, MessageSquare, Users, ClipboardList, TrendingUp, Code2, ShieldCheck, Zap, Layers, Server, User, Sparkles } from "lucide-react"

const steps = [
  { id: 1, name: "Share Requirements", desc: "Roles, skills & stack", icon: MessageSquare, color: "text-indigo-500", bg: "bg-indigo-100" },
  { id: 2, name: "Interview Talent", desc: "Client-selected engineers", icon: Users, color: "text-blue-500", bg: "bg-blue-100" },
  { id: 3, name: "Onboard Team", desc: "Aligned to your process", icon: ClipboardList, color: "text-purple-500", bg: "bg-purple-100" },
  { id: 4, name: "Scale Easily", desc: "Developers, QA, DevOps", icon: TrendingUp, color: "text-violet-500", bg: "bg-violet-100" },
]

const chips = [
  { name: "Developers", icon: Code2 },
  { name: "QA Engineers", icon: ShieldCheck },
  { name: "Jira Apps", icon: Layers },
  { name: "Automation", icon: Zap },
  { name: "DevOps", icon: Server }
]

export function HeroDashboard() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto lg:ml-auto h-[540px] flex flex-col bg-surface-dashboard rounded-[2rem] p-6 lg:p-8 shadow-2xl shadow-indigo-500/10 border border-white/50 overflow-hidden">

      {/* Header */}
      <div className="mb-6 relative z-10">
        <h3 className="font-display text-3xl sm:text-4xl font-black text-slate-900 leading-[1.1] mb-2 tracking-tight">
          Build Your <br />
          <span className="text-brand-indigo">Dedicated Team</span>
        </h3>
        <p className="text-xs text-slate-500 font-medium max-w-[220px] leading-relaxed">
          Selected, onboarded, and managed for long-term collaboration.
        </p>
      </div>

      {/* Content Area */}
      <div className="relative flex">

        {/* Left: Timeline & Steps */}
        <div className="relative z-10 flex flex-col gap-3 w-[65%] sm:w-[60%]">
          {/* Vertical dotted line */}
          <div className="absolute left-[9px] top-4 bottom-4 w-[2px] border-l-2 border-dotted border-indigo-300 -z-10" />

          {steps.map((step) => (
            <div key={step.id} className="flex items-center gap-2 sm:gap-3">
              {/* Number dot */}
              <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-brand-indigo text-[9px] font-bold text-white shadow-sm ring-4 ring-surface-dashboard">
                {step.id}
              </div>

              {/* Step Card */}
              <div className="flex flex-1 items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-sm border border-slate-100 transition-transform hover:-translate-y-0.5">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${step.bg} ${step.color}`}>
                  <step.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-800 truncate">{step.name}</div>
                  <div className="text-[10px] font-medium text-slate-500 truncate">{step.desc}</div>
                </div>
                <div className="shrink-0 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-50">
                  <CheckCircle2 className="h-2.5 w-2.5 text-indigo-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Floating Avatars */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] z-0 pointer-events-none hidden sm:block">
          {/* Abstract UI representation of avatars */}
          <div className="absolute top-0 right-2 w-36 bg-white/90 backdrop-blur-sm rounded-xl shadow-[0_8px_20px_rgb(0,0,0,0.06)] border border-white p-2 flex items-center gap-2 transform rotate-[-4deg] translate-x-4 animate-float">
            <div className="h-8 w-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600"><User className="h-4 w-4" /></div>
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 w-16 bg-slate-200 rounded-full" />
              <div className="h-1.5 w-10 bg-slate-100 rounded-full" />
            </div>
            <div className="flex h-4 w-4 rounded-full bg-brand-indigo items-center justify-center shrink-0">
              <CheckCircle2 className="h-2.5 w-2.5 text-white" />
            </div>
          </div>

          <div className="absolute top-16 right-4 w-36 bg-white/90 backdrop-blur-sm rounded-xl shadow-[0_8px_20px_rgb(0,0,0,0.06)] border border-white p-2 flex items-center gap-2 transform rotate-[2deg] translate-x-6 animate-float delay-100">
            <div className="h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600"><User className="h-4 w-4" /></div>
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 w-14 bg-slate-200 rounded-full" />
              <div className="h-1.5 w-12 bg-slate-100 rounded-full" />
            </div>
            <div className="flex h-4 w-4 rounded-full bg-brand-indigo items-center justify-center shrink-0">
              <CheckCircle2 className="h-2.5 w-2.5 text-white" />
            </div>
          </div>

          <div className="absolute top-32 right-0 w-36 bg-white/90 backdrop-blur-sm rounded-xl shadow-[0_8px_20px_rgb(0,0,0,0.06)] border border-white p-2 flex items-center gap-2 transform rotate-[-2deg] translate-x-1 animate-float delay-200">
            <div className="h-8 w-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600"><User className="h-4 w-4" /></div>
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 w-16 bg-slate-200 rounded-full" />
              <div className="h-1.5 w-8 bg-slate-100 rounded-full" />
            </div>
            <div className="flex h-4 w-4 rounded-full bg-brand-indigo items-center justify-center shrink-0">
              <CheckCircle2 className="h-2.5 w-2.5 text-white" />
            </div>
          </div>

          {/* Big purple icon box */}
          <div className="absolute bottom-6 right-6 h-16 w-16 rounded-2xl brand-button-gradient flex items-center justify-center transform rotate-[-5deg] animate-float delay-300">
            <Users className="h-8 w-8 text-white" />
            {/* Star sparkle */}
            <Sparkles className="absolute -right-4 -top-3 h-6 w-6 text-purple-300 fill-purple-300/20" />
          </div>
        </div>
      </div>

      {/* Chips */}
      <div className="mt-8 relative z-10 flex flex-wrap gap-2 pr-20">
        {chips.map((chip) => (
          <div key={chip.name} className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-slate-700 shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors">
            <chip.icon className="h-3 w-3 text-brand-indigo" />
            {chip.name}
          </div>
        ))}
      </div>

      {/* Since 2010 Badge */}
      <div className="absolute bottom-6 right-6 z-10 hidden sm:block">
        <div className="relative">
          {/* Decorative curve line (approximated with SVG) */}
          <svg className="absolute -left-16 top-1/2 -z-10 h-10 w-20 -translate-y-1/2 overflow-visible stroke-indigo-200/60" fill="none" viewBox="0 0 100 50">
            <path d="M 0 50 Q 50 60 100 25" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="0" cy="50" r="3" fill="var(--accent-indigo-light)" stroke="none" />
          </svg>
          <div className="flex items-center gap-1.5 rounded-full bg-surface-dashboard/80 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold text-brand-indigo border border-indigo-100/50 shadow-sm">
            <Sparkles className="h-3 w-3" />
            Since 2010
          </div>
        </div>
      </div>
    </div>
  )
}
