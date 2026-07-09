import { SectionReveal } from "@/components/ui/section-reveal"
import { CheckCircle2, ArrowRight, ArrowDown, ArrowLeft } from "lucide-react"

const steps = [
  {
    step: 1,
    title: "Understand Product Context",
    description: "We learn your product, users, roadmap, existing systems, and development priorities.",
    ArrowDesktop: ArrowRight,
    ArrowTablet: ArrowRight,
    ArrowMobile: ArrowDown,
    orderDesktop: "lg:order-1",
    orderTablet: "md:order-1",
    orderMobile: "order-1",
  },
  {
    step: 2,
    title: "Define Engineering Scope",
    description: "We clarify features, technical needs, integration points, delivery expectations, and team structure.",
    ArrowDesktop: ArrowRight,
    ArrowTablet: ArrowDown,
    ArrowMobile: ArrowDown,
    orderDesktop: "lg:order-2",
    orderTablet: "md:order-2",
    orderMobile: "order-2",
  },
  {
    step: 3,
    title: "Assign Dedicated Talent",
    description: "You evaluate and approve developers or engineers who match your technology and working style.",
    ArrowDesktop: ArrowDown,
    ArrowTablet: ArrowLeft,
    ArrowMobile: ArrowDown,
    orderDesktop: "lg:order-3",
    orderTablet: "md:order-4",
    orderMobile: "order-3",
  },
  {
    step: 4,
    title: "Align With Your Process",
    description: "The team works with your tools, backlog, sprint process, code repositories, and communication channels.",
    ArrowDesktop: ArrowLeft,
    ArrowTablet: ArrowDown,
    ArrowMobile: ArrowDown,
    orderDesktop: "lg:order-6",
    orderTablet: "md:order-3",
    orderMobile: "order-4",
  },
  {
    step: 5,
    title: "Build and Iterate",
    description: "We develop, test, review, improve, and support releases in coordination with your team.",
    ArrowDesktop: ArrowLeft,
    ArrowTablet: ArrowRight,
    ArrowMobile: ArrowDown,
    orderDesktop: "lg:order-5",
    orderTablet: "md:order-5",
    orderMobile: "order-5",
  },
  {
    step: 6,
    title: "Support Continuity",
    description: "The same team can continue with enhancements, support, maintenance, and product evolution.",
    ArrowDesktop: null,
    ArrowTablet: null,
    ArrowMobile: null,
    orderDesktop: "lg:order-4",
    orderTablet: "md:order-6",
    orderMobile: "order-6",
  }
]

export function ProductEngineeringHowWeWork() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-pill mb-6 mx-auto inline-flex">
            <CheckCircle2 className="h-3 w-3" />
            How We Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 mb-6">
            How We Work With Product Teams
          </h2>
          <p className="text-lg text-slate-600">
            A seamless integration process ensuring our developers work effectively as part of your engineering organization.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 relative z-10">
          {steps.map((step, index) => (
            <SectionReveal key={step.step} delay={index * 100} className={`relative group h-full ${step.orderMobile} ${step.orderTablet} ${step.orderDesktop}`}>
              <div className="flex flex-col h-full bg-[#0052CC] text-white p-8 lg:p-10 relative overflow-hidden transition-transform duration-300 rounded-xl hover:-translate-y-1 hover:shadow-xl shadow-[#0052CC]/20">
                {/* Chevron Background Element */}
                <div
                  className="absolute inset-0 bg-white/10 transition-transform duration-700 group-hover:translate-x-2"
                  style={{ clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)' }}
                />

                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold font-display mb-6 tracking-tight">
                    <span className="block text-blue-200 text-lg mb-1 font-semibold tracking-normal uppercase text-sm">Phase {step.step}</span>
                    {step.title}
                  </h3>
                  <p className="text-blue-100 text-base leading-relaxed mb-10 flex-1">
                    {step.description}
                  </p>
                  <div className="flex justify-end mt-auto h-6">
                    {step.ArrowMobile && <step.ArrowMobile className="h-6 w-6 text-blue-300 group-hover:text-white group-hover:scale-110 transition-all md:hidden" />}
                    {step.ArrowTablet && <step.ArrowTablet className="h-6 w-6 text-blue-300 group-hover:text-white group-hover:scale-110 transition-all hidden md:block lg:hidden" />}
                    {step.ArrowDesktop && <step.ArrowDesktop className="h-6 w-6 text-blue-300 group-hover:text-white group-hover:scale-110 transition-all hidden lg:block" />}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
