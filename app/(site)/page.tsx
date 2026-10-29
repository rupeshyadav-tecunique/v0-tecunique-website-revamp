import { HeroSection } from "@/components/pages/home/hero-section"
import { ServicesSection } from "@/components/pages/home/services-section"
import { DedicatedTeamsSection } from "@/components/pages/home/dedicated-teams-section"
import { WhyUsSection } from "@/components/pages/home/why-us-section"
import { TestimonialsSection } from "@/components/pages/home/testimonials-section"
import { TechStackDivider } from "@/components/pages/home/tech-stack-divider"
import { CTASection } from "@/components/pages/home/cta-section"

import { getPageContent } from "@/lib/services/page-content.service"
import { HomePageContent } from "@/lib/data/pages-content.data"

export default async function HomePage() {
  const content = await getPageContent<HomePageContent>("home")

  return (
    <>
      <HeroSection content={content} />
      <ServicesSection content={content} />
      <DedicatedTeamsSection content={content} />
      <WhyUsSection content={content} />
      <TestimonialsSection content={content} />
      <TechStackDivider />
      <CTASection content={content} />
    </>
  )
}
