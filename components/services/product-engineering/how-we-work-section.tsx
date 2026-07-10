import { CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const steps = [
  {
    step: "01",
    title: "Understand Product Context",
    description: "We learn your product, users, roadmap, existing systems, and development priorities."
  },
  {
    step: "02",
    title: "Define Engineering Scope",
    description: "We clarify features, technical needs, integration points, delivery expectations, and team structure."
  },
  {
    step: "03",
    title: "Assign Dedicated Talent",
    description: "You evaluate and approve developers or engineers who match your technology and working style."
  },
  {
    step: "04",
    title: "Align With Your Process",
    description: "The team works with your tools, backlog, sprint process, code repositories, and communication channels."
  },
  {
    step: "05",
    title: "Build and Iterate",
    description: "We develop, test, review, improve, and support releases in coordination with your team."
  },
  {
    step: "06",
    title: "Support Continuity",
    description: "The same team can continue with enhancements, support, maintenance, and product evolution."
  }
]

export function ProductEngineeringHowWeWork() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 mb-6">
            <CheckCircle2 className="h-4 w-4 text-cyan-700" />
            <span className="text-sm font-semibold text-cyan-900">How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-foreground mb-6">
            How We Work With Product Teams
          </h2>
          <p className="text-lg text-muted-foreground">
            A seamless integration process ensuring our developers work effectively as part of your engineering organization.
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
                    <div className="absolute left-0 md:left-1/2 top-0 md:top-2 md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-cyan-50 z-10 shadow-sm text-cyan-600 font-display text-xl font-bold">
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
