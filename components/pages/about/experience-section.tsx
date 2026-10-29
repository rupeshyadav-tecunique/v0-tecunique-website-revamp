import { CheckCircle2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { AboutPageContent } from "@/lib/data/pages-content.data"
import { InlineText } from "@/components/admin/visual-editor/inline-text"

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

interface AboutExperienceProps {
  content?: Partial<AboutPageContent> & Record<string, any>
}

export function AboutExperience({ content }: AboutExperienceProps = {}) {
  const experienceBadge = content?.experienceBadge || "Ecosystem Expertise"
  const experienceTitle = content?.experienceTitle || "Experience in the Atlassian Ecosystem"
  const experienceDescription =
    content?.experienceDescription ||
    "Since 2016, TECUNIQUE has worked closely with teams building and supporting Atlassian Marketplace apps. Our experience includes Jira app development support, app QA, automation, REST API integrations, cloud readiness and modernization-related engineering support, and long-term maintenance for Marketplace products."

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 text-slate-900 border-t border-slate-200">
      {/* Light Mode Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-300/10 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="mx-auto max-w-3xl text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold mb-6 shadow-sm">
            <InlineText page="about" field="experienceBadge" initialValue={experienceBadge} />
          </span>
          <InlineText
            page="about"
            field="experienceTitle"
            initialValue={experienceTitle}
            as="h2"
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-slate-900 block"
          />
          <InlineText
            page="about"
            field="experienceDescription"
            initialValue={experienceDescription}
            as="p"
            className="text-xl text-slate-600 leading-relaxed block"
          />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {atlassianExperience.map((item, i) => {
            const cardTitle = content?.[`exp_${i}_title`] || item.title
            const cardDesc = content?.[`exp_${i}_desc`] || item.description

            return (
              <SectionReveal key={item.title} delay={i * 100}>
                <div className="group relative h-full rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="mt-1 bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors border border-blue-100/50">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <InlineText
                        page="about"
                        field={`exp_${i}_title`}
                        initialValue={cardTitle}
                        as="h3"
                        className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors block"
                      />
                      <InlineText
                        page="about"
                        field={`exp_${i}_desc`}
                        initialValue={cardDesc}
                        as="p"
                        className="text-slate-600 leading-relaxed text-lg block"
                      />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
