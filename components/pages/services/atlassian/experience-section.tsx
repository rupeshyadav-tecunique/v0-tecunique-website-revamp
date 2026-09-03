import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"

export function AtlassianExperience() {
  const experiences = [
    {
      company: "Innovalog / JMWE",
      logo: "/images/companies/innovalog.png",
      desc: "Cloud development, Cloud & Data Center QA, Selenium/Java test automation, and Tier-3 technical support for JMWE."
    },
    {
      company: "Appfire",
      logoText: "Appfire",
      desc: "Architecture and development, specialized JMWE automation, Cloud and Data Center engineering, gradual Forge evolution, and L3 technical support.",
      stack: "ACLI · GINT · Gradle · Groovy · Selenium"
    },
    {
      company: "Qotilabs / Rich Filters",
      logo: "/images/companies/quotilabs.png",
      desc: "Dedicated QA, test automation, release validation, and Data Center-to-Cloud migration validation across Rich Filters products."
    },
    {
      company: "eXtensi / Team Hub for Confluence",
      logo: "/images/companies/extensi.png",
      desc: "Playwright + TypeScript automation, existing-framework improvements, and AI-assisted test design and automation development for Team Hub for Confluence."
    }
  ]

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, i) => (
            <SectionReveal key={exp.company} delay={i * 100} className="h-full">
              <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 text-left flex flex-col items-start h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-10 mb-5 flex items-center justify-start w-full">
                  {exp.logo ? (
                    <div className="relative h-8 w-32">
                      <Image src={exp.logo} alt={exp.company} fill className="object-contain object-left" />
                    </div>
                  ) : (
                    <span className="font-bold text-[#f97316] font-display text-2xl tracking-tight">{exp.logoText}</span>
                  )}
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-lg font-display">{exp.company}</h4>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{exp.desc}</p>
                {exp.stack && (
                  <div className="mt-4 pt-3 border-t border-slate-100 w-full">
                    <span className="text-[11px] font-mono font-semibold text-slate-500 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md inline-block">
                      {exp.stack}
                    </span>
                  </div>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
