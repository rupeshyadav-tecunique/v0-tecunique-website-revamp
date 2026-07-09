import { SearchCheck, Clock, MapPin, Code2, Cloud, CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const whyChooseUs = [
  {
    title: "Client-Selected Talent",
    description: "You are involved in evaluating and approving team members before onboarding.",
    icon: SearchCheck
  },
  {
    title: "Long-Term Team Stability",
    description: "We focus on retention, continuity, and product knowledge, not short-term staffing.",
    icon: Clock
  },
  {
    title: "Managed Operations in India",
    description: "We handle HR, payroll, infrastructure, contracts, NDA, and administration.",
    icon: MapPin
  },
  {
    title: "Engineering + QA Capability",
    description: "Build teams across development, QA, automation, DevOps, support, and product engineering.",
    icon: Code2
  },
  {
    title: "Remote-Ready Collaboration",
    description: "Teams work with your tools, communication channels, sprint process, and time-zone expectations.",
    icon: Cloud
  },
  {
    title: "Practical, Transparent Engagement",
    description: "Clear communication, simple operating model, and visibility into team performance and delivery.",
    icon: CheckCircle2
  }
]

export function DedicatedTeamsBenefits() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Why Companies Choose TECUNIQUE for Dedicated Teams</h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseUs.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 100}>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full group relative overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute -right-6 -top-6 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors duration-500 z-0" />
                
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{item.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
