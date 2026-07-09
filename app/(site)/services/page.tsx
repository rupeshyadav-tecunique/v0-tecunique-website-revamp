import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/hero-section"
import { ServicesCards } from "@/components/services/service-cards"
import { ServicesExecutionModel } from "@/components/services/execution-model-section"
import { ServicesCTA } from "@/components/services/cta-section"

export const metadata: Metadata = {
  title: "Services | TECUNIQUE",
  description: "Explore TECUNIQUE's comprehensive software services - Dedicated teams and Atlassian Enterprise solutions.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      <ServicesHero />
      <ServicesCards />
      <ServicesExecutionModel />
      <ServicesCTA />
    </div>
  )
}
