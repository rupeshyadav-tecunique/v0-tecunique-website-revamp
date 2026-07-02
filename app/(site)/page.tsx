import { HeroSection } from "@/components/home/hero-section"
import { ClientMarquee } from "@/components/home/client-marquee"
import { ServicesSection } from "@/components/home/services-section"
import { WhyUsSection } from "@/components/home/why-us-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { TechStackDivider } from "@/components/home/tech-stack-divider"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientMarquee />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <TechStackDivider />
      <CTASection />
    </>
  )
}
