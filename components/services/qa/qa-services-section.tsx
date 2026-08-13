import { CheckSquare, Search, BoxSelect, RefreshCcw, LayoutTemplate, ShieldCheck } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const qaServices = [
  {
    title: "Functional Testing",
    description: "Validate features, business rules, user workflows, and edge cases across expected product scenarios.",
    icon: CheckSquare
  },
  {
    title: "Regression Testing",
    description: "Check that code changes, integrations, and updates do not introduce regressions in existing functionality.",
    icon: RefreshCcw
  },
  {
    title: "Smoke & Sanity Testing",
    description: "Perform focused checks on critical workflows and build stability before broader testing or release.",
    icon: ShieldCheck
  },
  {
    title: "Compatibility Testing",
    description: "Test relevant browser, device, operating-system, and screen combinations based on product requirements.",
    icon: BoxSelect
  },
  {
    title: "Defect Reporting & Verification",
    description: "Document defects with reproducible steps, severity or priority context, supporting evidence, and verification after fixes.",
    icon: Search
  },
  {
    title: "Release Validation",
    description: "Validate release candidates and critical workflows against agreed acceptance criteria before and after deployment where required.",
    icon: LayoutTemplate
  }
]

export function QAServices() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[var(--brand-blue)] uppercase mb-3">QA SERVICES WE PROVIDE</h2>
          <h3 className="text-3xl sm:text-4xl font-bold font-display text-foreground">Comprehensive Testing Coverage</h3>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {qaServices.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 100} className="relative group">
              <div className="h-full bg-[var(--neutral-slate-50)] border border-[var(--neutral-slate-100)] rounded-[2rem] p-8 hover:shadow-xl hover:border-[var(--brand-blue)]/20 transition-all duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface-blue-strong)]/40 text-[var(--brand-blue)] mb-6 group-hover:scale-110 group-hover:bg-[var(--brand-blue)] group-hover:text-white transition-all duration-300">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
