import { HeroSection } from "@/components/pages/home/hero-section"
import { ServicesSection } from "@/components/pages/home/services-section"
import { DedicatedTeamsSection } from "@/components/pages/home/dedicated-teams-section"
import { WhyUsSection } from "@/components/pages/home/why-us-section"
import { TestimonialsSection } from "@/components/pages/home/testimonials-section"
import { TechStackDivider } from "@/components/pages/home/tech-stack-divider"
import { CTASection } from "@/components/pages/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DedicatedTeamsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <TechStackDivider />
      <CTASection />
    </>
  )
}
