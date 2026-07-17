import { CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const buildSteps = [
  {
    step: "01",
    title: "Requirement Discussion",
    description: "We understand the roles, skillset, technology stack, team size, experience level, and engagement expectations."
  },
  {
    step: "02",
    title: "Talent Shortlisting",
    description: "TECUNIQUE identifies suitable candidates through internal capability and recruitment support."
  },
  {
    step: "03",
    title: "Client Evaluation",
    description: "You interview, test, and approve the professionals before onboarding."
  },
  {
    step: "04",
    title: "Team Onboarding",
    description: "We handle employment, NDA, HR, payroll, infrastructure, access setup, and onboarding support."
  },
  {
    step: "05",
    title: "Ongoing Collaboration",
    description: "The team works full-time with your tools, communication channels, sprint process, and delivery priorities."
  },
  {
    step: "06",
    title: "Scale or Adjust",
    description: "You can expand the team, adjust roles, or add QA, DevOps, automation, or support as needs evolve."
  }
]

export function DedicatedTeamsProcess() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-blue-strong)] border border-[var(--surface-blue-strong)] mb-6">
            <CheckCircle2 className="h-4 w-4 text-brand-blue" />
            <span className="text-sm font-semibold text-[var(--brand-blue-hover)]">How We Work</span>
          </div>
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">How We Build Your Dedicated Team</h2>
          <p className="mt-4 text-lg text-muted-foreground">A streamlined, transparent process designed to get you the right talent quickly.</p>
        </SectionReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/60 md:-translate-x-1/2" />

          <div className="space-y-12">
            {buildSteps.map((step, index) => {
              const isEven = index % 2 !== 0
              return (
                <SectionReveal key={step.step} delay={100} className="relative">
                  <div className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                    
                    {/* Content */}
                    <div className={`flex-1 w-full pl-20 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                    </div>

                    {/* Number / Node */}
                    <div className="absolute left-0 md:left-1/2 top-0 md:top-2 md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-[var(--surface-blue)] z-10 shadow-sm text-brand-blue font-display text-xl font-bold">
                      {step.step}
                    </div>

                    {/* Empty Space for Grid Alignment */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </SectionReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
