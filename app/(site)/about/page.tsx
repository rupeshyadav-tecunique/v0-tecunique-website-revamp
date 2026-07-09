import type { Metadata } from "next"
import { AboutHero } from "@/components/about/hero-section"
import { AboutStory } from "@/components/about/story-section"
import { AboutWhatWeDo } from "@/components/about/what-we-do-section"
import { AboutExperience } from "@/components/about/experience-section"
import { AboutTimeline } from "@/components/about/timeline-section"
import { AboutCulture } from "@/components/about/culture-section"
import { AboutFounder } from "@/components/about/founder-section"
import { AboutCTA } from "@/components/about/cta-section"

export const metadata: Metadata = {
  title: "About Us | TECUNIQUE",
  description: "Software engineering teams built for long-term product work.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <AboutHero />
      <AboutStory />
      <AboutWhatWeDo />
      <AboutExperience />
      <AboutTimeline />
      <AboutCulture />
      <AboutFounder />
      <AboutCTA />
    </div>
  )
}
