import { CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const steps = [
  {
    step: "01",
    title: "Understand Your Product Context",
    description: "We learn about your product, existing architecture, roadmap, team structure, priorities, and current development process."
  },
  {
    step: "02",
    title: "Define Scope & Engagement",
    description: "Together, we clarify the work, required skills, responsibilities, collaboration expectations, and the most suitable engagement structure."
  },
  {
    step: "03",
    title: "Set Up the Right Engineering Team",
    description: "Based on the scope, we bring together the developers and engineers needed for the work. For dedicated-team engagements, you can evaluate and approve team members before onboarding."
  },
  {
    step: "04",
    title: "Align With Your Process",
    description: "Our engineers work within your tools, communication channels, sprint cadence, coding practices, and agreed ways of working."
  },
  {
    step: "05",
    title: "Collaborate on Delivery",
    description: "We work closely with your product and engineering teams on priorities, development progress, technical discussions, reviews, and issue resolution."
  },
  {
    step: "06",
    title: "Maintain Continuity & Evolve",
    description: "We retain product knowledge over time and continue supporting enhancements, maintenance, changing priorities, and additional engineering needs as the product evolves."
  }
]

export function ProductEngineeringHowWeWork() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface-blue-strong)]/30 border border-[var(--surface-blue-strong)] mb-6">
            <CheckCircle2 className="h-4 w-4 text-[var(--brand-blue)]" />
            <span className="text-sm font-semibold text-[var(--brand-blue-hover)]">How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-foreground mb-6">
            How We Work With Product Teams
          </h2>
          <p className="text-lg text-muted-foreground">
            A practical collaboration model designed to help our engineers integrate with your product, priorities, and development process.
          </p>
        </SectionReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/60 md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
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
                    <div className="absolute left-0 md:left-1/2 top-0 md:top-2 md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-[var(--surface-blue)] z-10 shadow-sm text-[var(--brand-blue)] font-display text-xl font-bold">
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
