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
    <section className="py-24 bg-white relative border-b border-slate-200/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Product Companies */}
          <SectionReveal direction="left">
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-4">
              Designed for Long-Term Product Quality
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {productBenefits.map((benefit, index) => (
                <div key={benefit.title} className="flex flex-col">
                  <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-500 border border-slate-200 flex items-center justify-center mb-4">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Right Column: Atlassian Apps */}
          <SectionReveal direction="right">
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-4">
              QA Experience for Atlassian and Jira Apps
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              We have strong QA experience across Atlassian platforms and Marketplace apps.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              {atlassianCapabilities.map((capability, index) => (
                <div key={capability.title} className="flex flex-col">
                  <div className="h-10 w-10 rounded-full bg-blue-50 text-[#0052CC] flex items-center justify-center mb-4">
                    <capability.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">{capability.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{capability.description}</p>
                </div>
              ))}
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
