import { Building2, Cpu, Globe, Zap, Target } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const timelineEvents = [
  {
    year: "2010",
    title: "TECUNIQUE Begins",
    description: "Started with a focus on offshore software engineering, custom web applications, and dedicated development support.",
    icon: Building2
  },
  {
    year: "2016",
    title: "Atlassian Ecosystem Work",
    description: "Began deeper work with Atlassian Marketplace app teams, including Jira app development support, QA, automation, and long-term product maintenance.",
    icon: Cpu
  },
  {
    year: "2020",
    title: "Long-Term Client Expansion",
    description: "Continued supporting product companies through dedicated teams, QA, automation, and software support across multiple international client relationships.",
    icon: Globe
  },
  {
    year: "2022",
    title: "Stronger Delivery Operations",
    description: "Expanded delivery maturity with more structured processes around team stability, security, documentation, QA, and remote collaboration.",
    icon: Zap
  },
  {
    year: "Today",
    title: "Dedicated Teams for Product Companies",
    description: "TECUNIQUE continues to help international software companies build stable, full-time engineering teams in India.",
    icon: Target
  }
]

export function AboutTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Journey</h2>
        </SectionReveal>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {timelineEvents.map((event, i) => (
              <SectionReveal key={event.year} delay={i * 100}>
                <div className="relative pl-12 sm:pl-40 py-4 group">
                  {/* Connecting Line */}
                  {i !== timelineEvents.length - 1 ? (
                    <div className="absolute left-[23px] sm:left-[135px] top-14 bottom-[-2rem] w-0.5 bg-slate-200 group-hover:bg-blue-200 transition-colors duration-500" />
                  ) : (
                    <div className="absolute left-[23px] sm:left-[135px] top-14 h-32 w-0.5 bg-gradient-to-b from-slate-200 to-transparent" />
                  )}

                  {/* Glowing Node */}
                  <div className="absolute left-2 sm:left-[119px] top-6 h-8 w-8 rounded-full border-4 border-white bg-blue-500 shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="hidden sm:block w-24 shrink-0 text-right" aria-hidden="true">
                      <span className="text-3xl font-black text-slate-200 group-hover:text-blue-500 transition-colors duration-300">{event.year}</span>
                    </div>

                    <div className="flex-1">
                      {/* Visually hidden year for screen readers (read exactly once) */}
                      <span className="sr-only">Year {event.year}: </span>
                      
                      <div className="sm:hidden mb-2" aria-hidden="true">
                        <span className="text-2xl font-black text-blue-500">{event.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-lg">{event.description}</p>
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
