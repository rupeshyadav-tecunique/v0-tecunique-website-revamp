import Image from "next/image"
import { Users, Code2, ShieldCheck, Cpu, SearchCheck, MapPin, Clock } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const whatWeDo = [
  {
    title: "Dedicated Software Teams",
    description: "We help clients build full-time development, QA, automation, support, and product engineering teams that work as an extension of their in-house team.",
    icon: Users,
    color: "from-blue-500 to-indigo-400"
  },
  {
    title: "Custom Software Development",
    description: "We support web applications, backend systems, integrations, cloud platforms, data-driven products, and long-term product enhancement work.",
    icon: Code2,
    color: "from-purple-500 to-fuchsia-400"
  },
  {
    title: "QA & Automation",
    description: "Our QA teams support manual testing, regression testing, automation frameworks, release validation, and ongoing product quality improvement.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-blue-400"
  },
  {
    title: "Atlassian App Engineering",
    description: "We support Jira app development, Forge and Connect-based work, REST API integrations, Marketplace app QA, and ongoing product maintenance.",
    icon: Cpu,
    color: "from-orange-500 to-amber-400"
  }
]

const howWeWork = [
  {
    title: "Client-Selected Talent",
    description: "Clients can interview, evaluate, and approve team members before onboarding.",
    icon: SearchCheck
  },
  {
    title: "Direct Collaboration",
    description: "Teams work with the client’s tools, sprint process, communication channels, and delivery priorities.",
    icon: Users
  },
  {
    title: "Managed Operations in India",
    description: "TECUNIQUE handles recruitment support, HR, payroll, infrastructure, contracts, NDA, and retention support.",
    icon: MapPin
  },
  {
    title: "Long-Term Continuity",
    description: "We focus on team stability so product knowledge is retained and repeated onboarding is reduced.",
    icon: Clock
  }
]

export function AboutWhatWeDo() {
  return (
    <>
      <section className="bg-slate-50 py-24 lg:py-32 border-y border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">What We Do Today</h2>
            <p className="mt-6 text-xl text-slate-600">
              We help software companies extend their engineering capacity with dedicated teams and practical product development support from India.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 100}>
                <div className="relative overflow-hidden h-full rounded-3xl border border-slate-200 bg-white p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-[0.03] rounded-bl-full group-hover:opacity-[0.08] transition-opacity duration-300`} />

                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-base">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">How We Work</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Our model is designed for clients who want more than outsourced tasks. We build dedicated teams that become familiar with the product, process, domain, and delivery expectations over time.
              </p>

              <div className="space-y-8">
                {howWeWork.map((item, i) => (
                  <div key={item.title} className="flex gap-5 group">
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <span className="font-bold">{i + 1}</span>
                      </div>
                      {i !== howWeWork.length - 1 && (
                        <div className="w-px h-full bg-slate-200 my-2" />
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 relative hidden lg:block">
              <Image src="/images/about/about-2.png" alt="How we work" width={600} height={700} className="rounded-3xl relative z-10 shadow-2xl object-cover h-[700px] w-full" />
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-100 to-blue-50 rounded-[2.5rem] -z-10 transform rotate-2"></div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
