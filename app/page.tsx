import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { StatsSection } from "@/components/home/stats-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { ExpertiseSection } from "@/components/home/expertise-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <WhyChooseSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
