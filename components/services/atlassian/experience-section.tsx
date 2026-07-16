import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"

export function AtlassianExperience() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">
            Experience Leaders at Atlassian Marketplace Products
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="relative h-8 w-32">
              <Image src="/images/companies/innovalog.png" alt="Innovalog" fill className="object-contain" />
            </div>
            <div className="relative h-8 w-32">
              <Image src="/images/companies/quotilabs.png" alt="Quotilabs" fill className="object-contain" />
            </div>
            <div className="relative h-8 w-32 flex items-center justify-center font-bold text-slate-800 text-xl">
              Appfire
            </div>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
          {[
            {
              company: "Innovalog / JMWE",
              desc: "Long-term development and QA support around Jira workflow app work. Experience included automation QA support using tools and frameworks such as ACLI, GINT, Groovy, Gradle, Selenium, and Playwright where applicable."
            },
            {
              company: "Appfire",
              desc: "Dedicated development, QA, automation, recruitment, and product support experience across acquired Marketplace products."
            },
            {
              company: "eXtensi",
              desc: "QA and product support experience for complex Jira dashboard and reporting app work. (Quotilabs/Rich Filters)"
            }
          ].map((exp, i) => (
            <SectionReveal key={exp.company} delay={i * 100}>
              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center flex flex-col items-center justify-center h-full hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-slate-900 mb-4">{exp.company}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{exp.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
