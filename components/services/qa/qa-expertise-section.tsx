import { BrainCircuit, Clock, ShieldCheck, Users, CheckCircle2, Lock, Infinity, Cpu } from "lucide-react"
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

const atlassianCapabilities = [
  {
    title: "Jira Workflow Testing",
    description: "Validate app behaviour across Jira workflows, transitions, and conditions.",
    icon: CheckCircle2
  },
  {
    title: "Permission & Role Testing",
    description: "Thorough testing of permissions, roles, and security.",
    icon: Lock
  },
  {
    title: "Marketplace App Regression",
    description: "Ensure stability across Jira versions and environments.",
    icon: Cpu
  },
  {
    title: "App Automation Support",
    description: "Automation support for Jira app flows using relevant tools.",
    icon: Infinity
  }
]

export function QAExpertiseSection() {
  return (
    <section className="py-24 lg:py-32 bg-[var(--neutral-slate-50)] relative border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Panel: Product Companies */}
          <SectionReveal className="h-full">
            <div className="bg-white border border-border/60 rounded-[2rem] p-8 lg:p-12 h-full flex flex-col shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--neutral-slate-100)] border border-[var(--neutral-slate-200)] mb-6 w-fit">
                <BrainCircuit className="h-4 w-4 text-[var(--neutral-slate-700)]" />
                <span className="text-sm font-semibold text-foreground">Product Teams</span>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground mb-10">
                Designed for Long-Term Product Quality
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 mt-auto">
                {productBenefits.map((benefit, index) => (
                  <div key={benefit.title} className="flex flex-col group">
                    <div className="h-12 w-12 rounded-xl bg-[var(--neutral-slate-50)] text-muted-foreground border border-border flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[var(--brand-navy)] group-hover:text-white transition-all duration-300">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Right Panel: Atlassian Apps */}
          <SectionReveal delay={100} className="h-full">
            <div className="bg-[var(--brand-blue)] border border-[var(--brand-blue-hover)] rounded-[2rem] p-8 lg:p-12 h-full flex flex-col shadow-sm hover:shadow-xl hover:shadow-[var(--brand-navy)]/20 transition-shadow duration-300 text-white relative overflow-hidden group">
              {/* Decorative Background */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--brand-blue-hover)] rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 w-fit text-white/90">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-sm font-semibold">Atlassian Ecosystem</span>
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white mb-4">
                  QA Experience for Atlassian & Jira Apps
                </h2>
                <p className="text-white/80 mb-10 text-lg">
                  We have strong QA experience across Atlassian platforms and Marketplace apps.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 mt-auto">
                  {atlassianCapabilities.map((capability, index) => (
                    <div key={capability.title} className="flex flex-col">
                      <div className="h-12 w-12 rounded-xl bg-white/10 text-white border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-white group-hover:text-[var(--brand-blue)] transition-all duration-300">
                        <capability.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold text-white mb-2">{capability.title}</h3>
                      <p className="text-white/80 leading-relaxed">{capability.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
