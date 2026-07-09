import { CheckSquare, Search, BoxSelect, RefreshCcw, LayoutTemplate, ShieldCheck } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const qaServices = [
  {
    title: "Functional Testing",
    description: "Validate features, business workflows, and edge cases to ensure they work as intended end-to-end.",
    icon: CheckSquare
  },
  {
    title: "Regression Testing",
    description: "Ensure new code changes, integrations, or updates don't break existing product functionality.",
    icon: RefreshCcw
  },
  {
    title: "Smoke & Sanity Testing",
    description: "Quick checks to verify build stability, critical flows, and deployment health.",
    icon: ShieldCheck
  },
  {
    title: "Compatibility Testing",
    description: "Test across modern browsers, mobile devices, OS versions, and screen resolutions.",
    icon: BoxSelect
  },
  {
    title: "Defect Reporting & Verification",
    description: "Detailed defect logging with steps to reproduce, priority tagging, and verification until closure.",
    icon: Search
  },
  {
    title: "Release Validation",
    description: "Validate staging and production releases to ensure deployment readiness and overall quality.",
    icon: LayoutTemplate
  }
]

export function QAServices() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#0052CC] uppercase mb-3">QA SERVICES WE PROVIDE</h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">Comprehensive Testing Coverage</h3>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {qaServices.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 100} className="relative group">
              <div className="h-full bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl hover:border-[#0052CC]/20 transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#0052CC] mb-6 group-hover:scale-110 group-hover:bg-[#0052CC] group-hover:text-white transition-all duration-300">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
