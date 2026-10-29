import { Heart } from "lucide-react"
import CultureGallery from "@/components/pages/about/culture-gallery"
import { SectionReveal } from "@/components/ui/section-reveal"
import { AboutPageContent } from "@/lib/data/pages-content.data"
import { InlineText } from "@/components/admin/visual-editor/inline-text"

const defaultCultureItems = [
  { title: "Respectful Work Culture", desc: "We encourage open communication, low politics, and practical problem-solving." },
  { title: "Ownership Mindset", desc: "Our teams are expected to understand the product, not just complete assigned tasks." },
  { title: "Work-Life Balance", desc: "We believe sustainable delivery comes from stable, motivated people." },
  { title: "Celebrating Together", desc: "Festivals, milestones, achievements, and team moments are part of how we build connection." },
]

interface AboutCultureProps {
  content?: Partial<AboutPageContent> & Record<string, any>
}

export function AboutCulture({ content }: AboutCultureProps = {}) {
  const cultureBadge = content?.cultureBadge || "Our Culture"
  const cultureTitle = content?.cultureTitle || "People, Stability, and Culture"
  const culturePara1 =
    content?.culturePara1 ||
    "At TECUNIQUE, we believe stable teams are built through trust, respect, flexibility, and ownership. Our culture is intentionally low on hierarchy and high on responsibility, helping people stay engaged and clients retain product knowledge over time."
  const cultureCallout =
    content?.cultureCallout ||
    "We call our team members UNIQUENS — people who bring their own uniqueness, discipline, and ownership to the work they do."

  return (
    <section className="pt-24 lg:pt-32 pb-20 lg:pb-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center mb-16">
          <div className="lg:w-1/2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-lavender)] text-brand-purple text-sm font-semibold mb-6 border border-[var(--surface-violet-strong)]">
              <Heart className="h-4 w-4" />
              <InlineText page="about" field="cultureBadge" initialValue={cultureBadge} />
            </span>
            <InlineText
              page="about"
              field="cultureTitle"
              initialValue={cultureTitle}
              as="h2"
              className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8 block"
            />
            <div className="prose prose-lg text-muted-foreground mb-10">
              <InlineText
                page="about"
                field="culturePara1"
                initialValue={culturePara1}
                as="p"
                className="block"
              />
              <div className="font-medium text-foreground bg-[var(--neutral-slate-50)] p-4 rounded-xl border border-[var(--neutral-slate-200)] mt-6">
                <InlineText
                  page="about"
                  field="cultureCallout"
                  initialValue={cultureCallout}
                  as="p"
                  className="block"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {defaultCultureItems.map((item, i) => {
                const cardTitle = content?.[`culture_${i}_title`] || item.title
                const cardDesc = content?.[`culture_${i}_desc`] || item.desc

                return (
                  <div key={item.title} className="relative pl-4 border-l-2 border-[var(--surface-blue-strong)] hover:border-brand-blue transition-colors">
                    <InlineText
                      page="about"
                      field={`culture_${i}_title`}
                      initialValue={cardTitle}
                      as="h4"
                      className="font-bold text-foreground mb-2 block"
                    />
                    <InlineText
                      page="about"
                      field={`culture_${i}_desc`}
                      initialValue={cardDesc}
                      as="p"
                      className="text-muted-foreground leading-relaxed text-sm block"
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-2xl mx-auto">
            <div className="relative">
              <div className="brand-orb-indigo absolute -inset-4 rounded-[3rem] transform -rotate-3 opacity-50 blur-lg" />
              <CultureGallery />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
