import { UserCheck, MessageSquare, Building2, Clock, CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const workingModel = [
  {
    id: 1,
    title: "Client-Selected Talent",
    description: "You can evaluate and approve the professionals who will work with your team.",
    icon: UserCheck,
  },
  {
    id: 2,
    title: "Integrated Collaboration",
    description: "Engineers work within your tools, communication channels, sprint cadence, and agreed development process.",
    icon: MessageSquare,
  },
  {
    id: 3,
    title: "Managed Operations in India",
    description: "TECUNIQUE handles employment, payroll, HR administration, infrastructure, NDA, and related operational support.",
    icon: Building2,
  },
  {
    id: 4,
    title: "Long-Term Continuity",
    description: "Stable teams help preserve product knowledge and reduce repeated onboarding.",
    icon: Clock,
  },
]

export function ServicesExecutionModel() {
  return (
    <section className="py-24 lg:py-32 bg-white relative border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="section-pill mb-6 mx-auto inline-flex">
            <CheckCircle2 className="h-4 w-4" />
            Working Model
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-6">
            A Practical Engagement Model
          </h2>
          <p className="text-lg text-slate-600">
            Our services can be delivered through dedicated engineers or teams who work within your product and development process, while TECUNIQUE manages the employment and operational side in India.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workingModel.map((step, index) => {
            const Icon = step.icon
            return (
              <SectionReveal key={step.id} delay={index * 100} className="relative group h-full">
                <div className="flex flex-col h-full bg-slate-50 border border-slate-200 text-slate-900 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
