import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"
import { AboutPageContent } from "@/lib/data/pages-content.data"
import { InlineText } from "@/components/admin/visual-editor/inline-text"
import { InlineImage } from "@/components/admin/visual-editor/inline-image"

interface AboutStoryProps {
  content?: Partial<AboutPageContent>
}

export function AboutStory({ content }: AboutStoryProps = {}) {
  const storyTitle = content?.storyTitle || "Our Story"
  const storyImage = content?.storyImage || "/images/about/about-4.png"
  const storyBadgeTitle = content?.storyBadgeTitle || "Built for Long-Term Product Work"
  const storyBadgeSubtitle = content?.storyBadgeSubtitle || "Stable engineering teams. Practical collaboration."
  const para0 =
    content?.storyParagraph_0 ||
    content?.storyParagraphs?.[0] ||
    "TECUNIQUE started in 2010 with a simple belief: software companies need reliable engineering teams, not just temporary resources."
  const para1 =
    content?.storyParagraph_1 ||
    content?.storyParagraphs?.[1] ||
    "Over the years, we have built dedicated development, QA, automation, and product support teams for international clients. Our work has grown through long-term relationships, referrals, and consistent delivery."
  const para2 =
    content?.storyParagraph_2 ||
    content?.storyParagraphs?.[2] ||
    "Today, TECUNIQUE works with software product companies, Atlassian app vendors, data platforms, and technology businesses that need skilled teams who can integrate with their workflows and stay committed for the long term."

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <InlineImage
                page="about"
                field="storyImage"
                initialSrc={storyImage}
                alt={storyTitle}
                fill
                className="object-cover"
              />
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:w-[220px] bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 z-10 hidden sm:block">
                <InlineText
                  page="about"
                  field="storyBadgeTitle"
                  initialValue={storyBadgeTitle}
                  as="h4"
                  className="font-bold text-slate-900 text-[13px] leading-tight mb-1 block"
                />
                <InlineText
                  page="about"
                  field="storyBadgeSubtitle"
                  initialValue={storyBadgeSubtitle}
                  as="p"
                  className="text-[11px] text-slate-600 leading-tight block"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[url('/grid.svg')] bg-center opacity-30 z-0" />
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <InlineText
              page="about"
              field="storyTitle"
              initialValue={storyTitle}
              as="h2"
              className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-8 block"
            />
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <InlineText
                page="about"
                field="storyParagraph_0"
                initialValue={para0}
                as="p"
                className="block"
              />
              <InlineText
                page="about"
                field="storyParagraph_1"
                initialValue={para1}
                as="p"
                className="block"
              />
              <InlineText
                page="about"
                field="storyParagraph_2"
                initialValue={para2}
                as="p"
                className="block"
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
