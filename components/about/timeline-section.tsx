import { Building2, Cpu, Globe, Zap, Target } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const timelineEvents = [
  {
    year: "2010",
    title: "TECUNIQUE Begins",
    description: "Started with offshore software engineering, custom applications, and dedicated development support.",
    icon: Building2
  },
  {
    year: "2016",
    title: "Atlassian Ecosystem Work",
    description: "Began long-term development and QA work with Atlassian Marketplace app teams.",
    icon: Cpu
  },
  {
    year: "2020",
    title: "Expanded Product Partnerships",
    description: "Expanded dedicated development, QA, automation, and support relationships with international software product companies.",
    icon: Globe
  },
  {
    year: "Today",
    title: "Dedicated Teams for Product Companies",
    description: "TECUNIQUE continues to help international software companies build stable engineering, QA, automation, and support capacity in India.",
    icon: Target
  }
]

export function AboutTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--neutral-slate-50)] relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Journey</h2>
        </SectionReveal>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {timelineEvents.map((event, i) => (
              <SectionReveal key={event.year} delay={i * 100}>
                <div className="relative pl-12 sm:pl-40 py-4 group">
                  {/* Connecting Line */}
                  {i !== timelineEvents.length - 1 ? (
                    <div className="absolute left-[23px] sm:left-[135px] top-14 bottom-[-2rem] w-0.5 bg-[var(--neutral-slate-200)] group-hover:bg-[var(--surface-blue-strong)] transition-colors duration-500" />
                  ) : (
                    <div className="absolute left-[23px] sm:left-[135px] top-14 h-32 w-0.5 bg-gradient-to-b from-[var(--neutral-slate-200)] to-transparent" />
                  )}

                  {/* Glowing Node */}
                  <div className="absolute left-2 sm:left-[119px] top-6 h-8 w-8 rounded-full border-4 border-white bg-brand-blue shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_15px_color-mix(in_srgb,var(--brand-blue)_50%,transparent)] transition-all duration-300 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 bg-white p-8 rounded-3xl shadow-sm border border-[var(--neutral-slate-200)] hover:shadow-md transition-shadow">
                    <div className="mb-2 sm:mb-0 sm:w-24 shrink-0 sm:text-right">
                      <span className="text-2xl sm:text-3xl font-black text-brand-blue sm:text-[var(--neutral-slate-200)] group-hover:text-brand-blue transition-colors duration-300">{event.year}</span>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{event.description}</p>
                    </div>
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
