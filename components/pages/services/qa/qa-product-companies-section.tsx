import { BrainCircuit, Clock, ShieldCheck, Users } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const productBenefits = [
  {
    title: "Product Understanding",
    description: "QA engineers build deeper knowledge of your product, users, workflows, and expected behaviour over time.",
    icon: BrainCircuit
  },
  {
    title: "Release Rhythm",
    description: "QA support aligns with your sprint cadence, release cycles, and recurring validation needs.",
    icon: Clock
  },
  {
    title: "Regression Continuity",
    description: "Dedicated QA teams help maintain regression coverage as the product evolves.",
    icon: ShieldCheck
  },
  {
    title: "Engineering Collaboration",
    description: "QA engineers work closely with developers, product managers, and support teams throughout the release cycle.",
    icon: Users
  }
]

export function QAForProductCompanies() {
  return (
    <section className="py-24 bg-[var(--neutral-slate-50)] relative border-b border-[var(--neutral-slate-200)]/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">Designed for Long-Term Product Quality</h2>
          <p className="text-lg text-muted-foreground">Our dedicated QA model is suited to product companies that value continuity. Over time, QA engineers build deeper understanding of the product, users, workflows, domain, and release patterns.</p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productBenefits.map((card, index) => (
            <SectionReveal key={card.title} delay={index * 100}>
              <div className="h-full bg-white border border-[var(--neutral-slate-200)] rounded-3xl p-8 hover:shadow-lg hover:border-[var(--brand-blue)]/20 transition-all duration-300">
                <card.icon className="h-8 w-8 text-[var(--brand-blue)] mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
