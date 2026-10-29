import type { Metadata } from "next"
import { AboutHero } from "@/components/pages/about/hero-section"
import { AboutStory } from "@/components/pages/about/story-section"
import { AboutWhatWeDo } from "@/components/pages/about/what-we-do-section"
import { AboutExperience } from "@/components/pages/about/experience-section"
import { AboutTimeline } from "@/components/pages/about/timeline-section"
import { AboutCulture } from "@/components/pages/about/culture-section"
import { AboutFounder } from "@/components/pages/about/founder-section"
import { AboutCTA } from "@/components/pages/about/cta-section"

import { getPageContent } from "@/lib/services/page-content.service"
import { AboutPageContent } from "@/lib/data/pages-content.data"

export const metadata: Metadata = {
  title: "About Us | TECUNIQUE",
  description: "Software engineering teams built for long-term product work.",
}

export default async function AboutPage() {
  const content = await getPageContent<AboutPageContent>("about")

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <AboutHero content={content} />
      <AboutStory content={content} />
      <AboutWhatWeDo content={content} />
      <AboutExperience content={content} />
      <AboutTimeline content={content} />
      <AboutCulture content={content} />
      <AboutFounder content={content} />
      <AboutCTA content={content} />
    </div>
  )
}
