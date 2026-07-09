import { BrainCircuit, Clock, ShieldCheck, Users } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const productBenefits = [
  {
    title: "Product Understanding",
    description: "QA engineers learn your product, users, and workflows in-depth.",
    icon: BrainCircuit
  },
  {
    title: "Release Rhythm",
    description: "QA support aligns with sprint cadence and release cycles.",
    icon: Clock
  },
  {
    title: "Regression Ownership",
    description: "Dedicated QA helps maintain coverage and quality safeguards.",
    icon: ShieldCheck
  },
  {
    title: "Engineering Collaboration",
    description: "QA works closely with devs, product managers, and support teams.",
    icon: Users
  }
]

export function QAForProductCompanies() {
  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-6">Designed for Long-Term Product Quality</h2>
          <p className="text-lg text-slate-600">TECUNIQUE is a good fit for product companies that need QA engineers who can stay with the product long enough to understand its behaviour, users, domain, and release patterns.</p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productBenefits.map((card, index) => (
            <SectionReveal key={card.title} delay={index * 100}>
              <div className="h-full bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg hover:border-[#0052CC]/20 transition-all duration-300">
                <card.icon className="h-8 w-8 text-[#0052CC] mb-6" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{card.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
