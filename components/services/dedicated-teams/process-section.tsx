import { CheckCircle2, ArrowDown, ArrowRight, ArrowLeft } from "lucide-react"
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
    <section className="py-24 lg:py-32 bg-white border-y border-slate-200/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">How We Build Your Dedicated Team</h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto">
          {buildSteps.map((step, index) => {
            let orderClass = "";
            if (index === 0) orderClass = "order-1";
            if (index === 1) orderClass = "order-2";
            if (index === 2) orderClass = "order-3 md:order-4 lg:order-3";
            if (index === 3) orderClass = "order-4 md:order-3 lg:order-6";
            if (index === 4) orderClass = "order-5 md:order-5 lg:order-5";
            if (index === 5) orderClass = "order-6 md:order-6 lg:order-4";
            
            return (
              <SectionReveal key={step.step} delay={index * 100} className={`relative group h-full ${orderClass}`}>
                <div className="flex flex-col h-full bg-[#0052CC] text-white p-8 lg:p-10 relative overflow-hidden transition-transform duration-300 rounded-xl hover:-translate-y-1 hover:shadow-xl shadow-[#0052CC]/20">
                  {/* Chevron Background Element */}
                  <div 
                    className="absolute inset-0 bg-white/10 transition-transform duration-700 group-hover:translate-x-2"
                    style={{ clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)' }}
                  />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold font-display mb-6 tracking-tight">
                      <span className="block text-blue-200 mb-1 font-semibold tracking-normal uppercase text-sm">Step {step.step}</span>
                      {step.title}
                    </h3>
                    <p className="text-blue-100 text-base leading-relaxed mb-10 flex-1">
                      {step.description}
                    </p>
                    <div className="flex justify-end mt-auto">
                      {index === 5 ? (
                        <CheckCircle2 className="h-6 w-6 text-blue-300 group-hover:text-white transition-all" />
                      ) : (
                        <>
                          {/* Mobile (1 col): All Down */}
                          <ArrowDown className="md:hidden h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-y-1 transition-all" />
                          
                          {/* Tablet (md, 2 cols): 1=Right, 2=Down, 3=Left, 4=Down, 5=Right */}
                          {index === 0 && <ArrowRight className="hidden md:block lg:hidden h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-x-1 transition-all" />}
                          {index === 1 && <ArrowDown className="hidden md:block lg:hidden h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-y-1 transition-all" />}
                          {index === 2 && <ArrowLeft className="hidden md:block lg:hidden h-6 w-6 text-blue-300 group-hover:text-white group-hover:-translate-x-1 transition-all" />}
                          {index === 3 && <ArrowDown className="hidden md:block lg:hidden h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-y-1 transition-all" />}
                          {index === 4 && <ArrowRight className="hidden md:block lg:hidden h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-x-1 transition-all" />}

                          {/* Desktop (lg, 3 cols): 1=Right, 2=Right, 3=Down, 4=Left, 5=Left */}
                          {(index === 0 || index === 1) && <ArrowRight className="hidden lg:block h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-x-1 transition-all" />}
                          {index === 2 && <ArrowDown className="hidden lg:block h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-y-1 transition-all" />}
                          {(index === 3 || index === 4) && <ArrowLeft className="hidden lg:block h-6 w-6 text-blue-300 group-hover:text-white group-hover:-translate-x-1 transition-all" />}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  )
}
