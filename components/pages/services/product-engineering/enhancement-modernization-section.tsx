import { Sparkles, Code, ArrowUpCircle, Clock3 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const enhancementPoints = [
  {
    title: "Feature Enhancements",
    description: "Build new functionality aligned with the product roadmap.",
    icon: Sparkles
  },
  {
    title: "Codebase Improvements",
    description: "Refactor, simplify, and improve maintainability where needed.",
    icon: Code
  },
  {
    title: "Technology Upgrades",
    description: "Support framework upgrades, dependency updates, and platform improvements.",
    icon: ArrowUpCircle
  },
  {
    title: "Long-Term Maintenance",
    description: "Keep the product stable through continuous improvements and issue resolution.",
    icon: Clock3
  }
]

export function EnhancementModernization() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <SectionReveal>
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-display mb-6">
                Enhance Existing Products Without Losing Continuity
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                Many product companies do not need a one-time build. They need a stable engineering team that can understand the existing codebase, improve features, fix issues, modernize parts of the platform, and continue supporting the product over time.
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {enhancementPoints.map((point, index) => (
              <SectionReveal key={point.title} delay={index * 100}>
                <div className="bg-[var(--neutral-slate-50)] rounded-2xl p-6 border border-[var(--neutral-slate-100)] hover:border-[var(--brand-blue)]/30 hover:bg-[var(--brand-blue)]/5 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[var(--brand-blue)] mb-5 group-hover:scale-110 transition-transform">
                    <point.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {point.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}
