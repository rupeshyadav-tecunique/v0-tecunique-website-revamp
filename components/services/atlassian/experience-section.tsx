import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"

export function AtlassianExperience() {
  return (
    <>
      <section className="py-24 bg-slate-50 relative border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Experience Across Atlassian Marketplace Products</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              TECUNIQUE has supported long-term engineering, QA, automation, and support work for teams behind Atlassian Marketplace products. Our experience includes work related to Jira app development support, QA automation, release testing, L3 support, and product maintenance.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                company: "Innovalog / JMWE",
                logo: "/images/companies/innovalog.png",
                desc: "Long-term development and QA support around Jira workflow app work. Experience included automation QA support using tools and frameworks such as ACLI, GINT, Groovy, Gradle, Selenium, and Playwright where applicable."
              },
              {
                company: "Appfire",
                logo: null,
                desc: "Dedicated development, QA, automation, recruitment, and product support experience across acquired Marketplace products."
              },
              {
                company: "Qotilabs / Rich Filters",
                logo: "/images/companies/quotilabs.png",
                desc: "QA and product support experience for Jira dashboard and reporting app work."
              }
            ].map((exp, i) => (
              <SectionReveal key={exp.company} delay={i * 100}>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center flex flex-col items-center justify-center h-full hover:shadow-md transition-shadow">
                  {exp.logo ? (
                    <div className="relative h-12 w-32 mb-6">
                      <Image src={exp.logo} alt={exp.company} fill className="object-contain" />
                    </div>
                  ) : (
                    <div className="h-12 px-4 mb-6 bg-slate-50 rounded flex items-center justify-center font-bold text-slate-400 text-xl border border-slate-200">
                      Appfire
                    </div>
                  )}
                  <h4 className="font-bold text-slate-900 mb-3">{exp.company}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{exp.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative border-b border-slate-200/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionReveal className="text-center">
            <div className="flex flex-col items-center mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
                Client Relationship Highlight
              </span>
            </div>
            <p className="text-2xl font-medium leading-relaxed text-slate-900 mb-8 max-w-3xl mx-auto">
              TECUNIQUE’s long-term collaboration with Innovalog included dedicated development and QA support for Jira Marketplace app work, helping preserve product knowledge, quality focus, and engineering continuity over time.
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="h-14 w-14 rounded-full mb-4 border-2 border-white shadow-md overflow-hidden relative">
                <Image src="/images/companies/innovalog.png" alt="Innovalog" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-slate-900">Innovalog</div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
