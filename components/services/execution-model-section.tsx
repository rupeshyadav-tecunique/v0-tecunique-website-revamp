import { Search, Users, Zap, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const executionSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "Deep dive into your business requirements, existing architecture, and project goals.",
    icon: Search,
  },
  {
    id: 2,
    title: "Team Assembly",
    description: "Hand-picking the right engineering talent and tech stack tailored for your needs.",
    icon: Users,
  },
  {
    id: 3,
    title: "Agile Delivery",
    description: "Iterative sprints, rapid prototyping, and transparent development cycles.",
    icon: Zap,
  },
  {
    id: 4,
    title: "Continuous Support",
    description: "Ongoing maintenance, proactive scaling, and continuous product optimization.",
    icon: RefreshCw,
  },
]

export function ServicesExecutionModel() {
  return (
    <section className="py-24 lg:py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-pill mb-6 mx-auto inline-flex">
            <CheckCircle2 className="h-3 w-3" />
            How We Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 mb-6">Our Execution Model</h2>
          <p className="text-lg text-slate-600">A streamlined, transparent workflow designed to integrate seamlessly with your business from day one.</p>
        </SectionReveal>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 relative z-10">
            {executionSteps.map((step, index) => (
              <SectionReveal key={step.id} delay={index * 100} className="relative group h-full">
                <div className="flex flex-col h-full bg-[#0052CC] text-white p-8 lg:p-10 relative overflow-hidden transition-transform duration-300 rounded-xl hover:-translate-y-1 hover:shadow-xl shadow-[#0052CC]/20">
                  {/* Chevron Background Element */}
                  <div
                    className="absolute inset-0 bg-white/10 transition-transform duration-700 group-hover:translate-x-2"
                    style={{ clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)' }}
                  />

                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold font-display mb-6 tracking-tight">
                      <span className="block text-blue-200 text-lg mb-1 font-semibold tracking-normal uppercase text-sm">Phase {step.id}</span>
                      {step.title}
                    </h3>
                    <p className="text-blue-100 text-base leading-relaxed mb-10 flex-1">
                      {step.description}
                    </p>
                    <div className="flex justify-end mt-auto">
                      <ArrowRight className="h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-x-1 transition-all" />
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
