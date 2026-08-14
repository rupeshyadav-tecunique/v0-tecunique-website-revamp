import { SearchCheck, Clock, MapPin, Code2, Cloud, CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const whyChooseUs = [
  {
    title: "Client-Selected Talent",
    description: "You interview, test, and approve professionals before they join your team.",
    icon: SearchCheck
  },
  {
    title: "Long-Term Team Continuity",
    description: "We focus on retention, product knowledge, and continuity across longer engagements.",
    icon: Clock
  },
  {
    title: "Managed Operations in India",
    description: "We handle recruitment, employment, payroll, HR, infrastructure, NDA administration, and ongoing operational support.",
    icon: MapPin
  },
  {
    title: "Multi-Disciplinary Capability",
    description: "Build teams across development, QA, automation, DevOps, and product support.",
    icon: Code2
  },
  {
    title: "Remote-Ready Collaboration",
    description: "Teams work within your tools, communication channels, sprint process, and agreed working overlap.",
    icon: Cloud
  },
  {
    title: "Practical, Transparent Engagement",
    description: "Direct communication, a clear operating model, and visibility into day-to-day collaboration.",
    icon: CheckCircle2
  }
]

export function DedicatedTeamsBenefits() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Sticky Heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 mb-6">
                <CheckCircle2 className="h-4 w-4 text-indigo-700" />
                <span className="text-sm font-semibold text-indigo-900">Why Choose Us</span>
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 leading-tight">
                Why Companies Choose TECUNIQUE for Dedicated Teams
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A dedicated team model built around client-selected talent, direct collaboration, operational support in India, and long-term continuity.
              </p>
            </SectionReveal>
          </div>
          
          {/* Right Column - Benefits List */}
          <div className="lg:col-span-7 flex flex-col border-t border-border/60">
            {whyChooseUs.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 100}>
                <div className="group flex flex-col sm:flex-row items-start gap-6 py-8 border-b border-border/60 hover:bg-white transition-colors px-6 -mx-6 rounded-2xl">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500 shadow-sm">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
