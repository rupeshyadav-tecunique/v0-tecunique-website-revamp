import { TrendingUp, HeadphonesIcon, RefreshCw, Layers } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const supportItems = [
  {
    icon: TrendingUp,
    title: "Enhancements",
    description: "Ongoing feature development and refinements."
  },
  {
    icon: HeadphonesIcon,
    title: "L2/L3 Support",
    description: "Escalated technical issue debugging and hotfixes."
  },
  {
    icon: Layers,
    title: "Compatibility",
    description: "Support for platform or API changes."
  },
  {
    icon: RefreshCw,
    title: "Release Cycle",
    description: "Code and release management on Jira Cloud/DC."
  }
]

export function AtlassianLongTermSupport() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <SectionReveal>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-blue mb-6">
              Long-Term Support for Marketplace Products
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Many Atlassian apps need ongoing engineering effort long after the first release. We support long-term development, bug fixing, and support workflows for product teams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {supportItems.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Right Image */}
          <SectionReveal delay={200} direction="right" className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200">
              <img
                src="/images/about/about-5.png"
                alt="Long-term Support"
                className="w-full h-full object-cover"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
