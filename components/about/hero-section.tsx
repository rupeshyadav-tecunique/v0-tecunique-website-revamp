import { Users, ShieldCheck, Cpu, Clock, Sparkles } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function AboutHero() {
  return (
    <section
      className="relative pt-10 pb-16 lg:pt-20 lg:pb-16 flex items-center isolate"
    >
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
            <span>Dedicated Engineering Partner</span>
          </div>
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1] mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">TECUNIQUE</span>
          </h1>
          <p className="mt-4 text-2xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
            Software engineering teams built for <span className="relative whitespace-nowrap"><span className="relative z-10">long-term</span><span className="absolute -bottom-1 left-0 w-full h-3 bg-blue-200/60 -rotate-1 z-0 rounded-full"></span></span> product work.
          </p>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
            TECUNIQUE is a software engineering partner based in India, helping international companies build dedicated development, QA, automation, support, and Atlassian app teams. Since 2010, we have focused on stable team relationships, practical execution, and long-term client success.
          </p>

          {/* 2. Trust Badges (Upgraded to Glass Cards) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { icon: Clock, title: "Since 2010", subtitle: "Long-term software engineering experience", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Users, title: "High Team Retention", subtitle: "Stable teams with continuity of product knowledge", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: Cpu, title: "Atlassian Ecosystem", subtitle: "Hands-on experience with Jira apps & support", color: "text-indigo-500", bg: "bg-indigo-50" },
              { icon: ShieldCheck, title: "NDA-Backed", subtitle: "Confidential, client-controlled collaboration", color: "text-emerald-500", bg: "bg-emerald-50" },
            ].map((badge, i) => (
              <div key={badge.title} className="group flex flex-col p-5 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl ${badge.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <badge.icon className={`h-5 w-5 ${badge.color}`} />
                </div>
                <span className="font-bold text-slate-900 mb-1">{badge.title}</span>
                <span className="text-sm text-slate-500 leading-snug">{badge.subtitle}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
