import { SectionReveal } from "@/components/ui/section-reveal"

const rightFitscenarios = [
  {
    title: "Long-Term Product Development",
    description: "When you need engineers who can understand your product deeply and stay involved over time."
  },
  {
    title: "Expanding an Existing Team",
    description: "When your internal team needs more capacity without increasing local hiring overhead."
  },
  {
    title: "QA or Automation Scaling",
    description: "When releases are growing and you need dedicated QA or automation support."
  },
  {
    title: "Product Knowledge Continuity",
    description: "When repeated onboarding is costly and retaining product context matters."
  },
  {
    title: "Scaling Engineering Capacity in India",
    description: "When you want a stable offshore team without building your own local hiring and employment operation."
  },
  {
    title: "Product Development & Support",
    description: "When you need dedicated development, QA, automation, or support professionals for ongoing product work."
  }
]

export function DedicatedTeamsScenarios() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--neutral-slate-50)] border-b border-[var(--neutral-slate-200)]/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">When Dedicated Teams Are the Right Fit</h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {rightFitscenarios.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 100}>
              <div className="bg-white p-8 rounded-3xl border border-[var(--neutral-slate-200)] shadow-sm hover:shadow-xl hover:border-[var(--surface-blue-strong)] transition-all duration-300 h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--surface-blue)] rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
                <div className="h-1.5 w-12 bg-brand-blue rounded-full mb-6 group-hover:w-24 transition-all duration-300" />
                <h4 className="text-xl font-bold text-foreground mb-3 relative z-10">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed relative z-10">{item.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
