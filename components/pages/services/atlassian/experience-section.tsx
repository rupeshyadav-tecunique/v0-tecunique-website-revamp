import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"

export function AtlassianExperience() {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-blue mb-4">
            Experience Across Atlassian Marketplace Products
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our engineering teams have deep, long-term experience working alongside leading Atlassian Marketplace vendors.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              company: "Innovalog / JMWE",
              logo: "/images/companies/innovalog.png",
              desc: "Long-term development, QA, automation, and product support experience around Jira workflow app work. Automation QA included ACLI, GINT, Groovy, Gradle, and related testing tooling."
            },
            {
              company: "Appfire",
              logoText: "Appfire",
              desc: "Dedicated development, QA, automation, and product support experience across Jira Marketplace products including JMWE, JMCF, and Rich Filters."
            },
            {
              company: "Qotilabs / Rich Filters",
              logo: "/images/companies/quotilabs.png",
              desc: "Development and QA collaboration around Rich Filters and related Jira dashboard and reporting app work."
            }
          ].map((exp, i) => (
            <SectionReveal key={exp.company} delay={i * 100} className="h-full">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 text-left flex flex-col items-start h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-12 mb-6 flex items-center justify-start w-full">
                  {exp.logo ? (
                    <div className="relative h-8 w-32">
                       <Image src={exp.logo} alt={exp.company} fill className="object-contain object-left" />
                    </div>
                  ) : (
                    <span className="font-bold text-slate-800 text-2xl tracking-tight">{exp.logoText}</span>
                  )}
                </div>
                <h4 className="font-bold text-slate-900 mb-3 text-lg">{exp.company}</h4>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{exp.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
