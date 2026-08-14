import { SectionReveal } from "@/components/ui/section-reveal"

const steps = [
  {
    id: "01",
    title: "Plan App",
    description: "Requirements, Atlassian APIs (REST, Connect, Forge), and technical architecture."
  },
  {
    id: "02",
    title: "Build & Integrate",
    description: "End-to-end development of frontend, backend, and 3rd-party integrations."
  },
  {
    id: "03",
    title: "QA & Release",
    description: "Comprehensive testing and validation for smooth approval on the Marketplace."
  },
  {
    id: "04",
    title: "Support & Enhance",
    description: "Long-term maintenance, feature upgrades, and fixing any user issues."
  }
]

export function AtlassianLifecycle() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionReveal>
            <h2 className="text-3xl font-bold font-display text-brand-blue mb-4">
              Atlassian App Engineering Lifecycle
            </h2>
            <p className="text-lg text-slate-600">
              From app client release, QA and long term support, we manage every technical detail of your marketplace product.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <SectionReveal key={step.id} delay={index * 100}>
              <div className="bg-white rounded-lg border border-slate-200 p-8 text-center h-full flex flex-col items-center hover:shadow-lg hover:border-slate-300 transition-all">
                <div className="w-12 h-12 bg-brand-blue rounded-lg text-white font-bold flex items-center justify-center mb-6 text-lg">
                  {parseInt(step.id)}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
