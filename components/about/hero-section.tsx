import { Users, ShieldCheck, Cpu, Clock, Sparkles } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function AboutHero() {
  return (
    <section
      className="relative pt-10 pb-16 lg:pt-20 lg:pb-16 flex items-center isolate"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[var(--neutral-slate-50)]">
        <div className="brand-orb-blue absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full opacity-50 blur-[80px] animate-blob" />
        <div className="brand-orb-indigo absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full opacity-50 blur-[80px] animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
        <SectionReveal className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-blue)]/80 border border-[var(--surface-blue-strong)] text-brand-blue text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            <span>Dedicated Engineering Partner</span>
          </div>
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-[1.1] mb-6">
            About <span className="text-gradient-brand font-extrabold">TECUNIQUE</span>
          </h1>
          <p className="mt-4 text-2xl text-[var(--neutral-slate-700)] font-medium leading-relaxed max-w-3xl mx-auto">
            Software engineering teams built for <span className="relative whitespace-nowrap"><span className="relative z-10">long-term</span><span className="absolute -bottom-1 left-0 w-full h-3 bg-[var(--surface-blue-strong)]/60 -rotate-1 z-0 rounded-full"></span></span> product work.
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            TECUNIQUE is a software engineering partner based in India, helping international companies build dedicated development, QA, automation, support, and Atlassian app teams. Since 2010, we have focused on stable team relationships, practical execution, and long-term client success.
          </p>

          {/* 2. Trust Badges (Upgraded to Glass Cards) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { icon: Clock, title: "Since 2010", subtitle: "Long-term software engineering experience", color: "text-brand-blue", bg: "bg-[var(--surface-blue)]" },
              { icon: Users, title: "Strong Team Continuity", subtitle: "Stable teams with continuity of product knowledge", color: "text-brand-purple", bg: "bg-[var(--surface-violet)]" },
              { icon: Cpu, title: "Atlassian App Experience", subtitle: "Hands-on experience with Jira app work, QA, automation, and support", color: "text-brand-indigo", bg: "bg-[var(--surface-violet-strong)]" },
              { icon: ShieldCheck, title: "NDA-Backed", subtitle: "Confidential, client-controlled collaboration", color: "text-brand-cyan", bg: "bg-[var(--surface-sky)]" },
            ].map((badge, i) => (
              <div key={badge.title} className="glass-card group flex flex-col p-5 rounded-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl ${badge.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <badge.icon className={`h-5 w-5 ${badge.color}`} />
                </div>
                <span className="font-bold text-foreground mb-1">{badge.title}</span>
                <span className="text-sm text-muted-foreground leading-snug">{badge.subtitle}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
