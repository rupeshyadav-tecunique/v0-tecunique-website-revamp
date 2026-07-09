import { CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const atlassianExperience = [
  {
    title: "Jira App Development",
    description: "Forge, Connect, REST APIs, frontend/backend development, and product enhancement support.",
  },
  {
    title: "Marketplace App QA",
    description: "Functional testing, regression testing, release checks, and compatibility validation.",
  },
  {
    title: "Automation & Tooling",
    description: "Playwright, Selenium, API testing, and product-specific automation workflows.",
  },
  {
    title: "Long-Term Product Support",
    description: "Ongoing enhancements, bug fixes, maintenance, and version compatibility support.",
  }
]

export function AboutExperience() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900 text-white">
      {/* Dark Mode Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-blue-900/40 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-900/30 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="mx-auto max-w-3xl text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
            Ecosystem Expertise
          </span>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">Experience in the Atlassian Ecosystem</h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            Since 2016, TECUNIQUE has worked closely with teams building and supporting Atlassian Marketplace apps. Our experience includes Jira app development support, app QA, automation, REST API integrations, Cloud migration support, and long-term maintenance for marketplace products.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {atlassianExperience.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 100}>
              <div className="group relative h-full rounded-3xl bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 hover:bg-slate-800/80 hover:border-blue-500/30 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="mt-1 bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <CheckCircle2 className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-lg">{item.description}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
