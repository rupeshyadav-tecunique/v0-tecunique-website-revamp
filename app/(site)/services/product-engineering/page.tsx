import type { Metadata } from "next"
import { ProductEngineeringHero } from "@/components/services/product-engineering/hero-section"
import { WhatWeBuild } from "@/components/services/product-engineering/what-we-build-section"
import { EngineeringCapabilities } from "@/components/services/product-engineering/engineering-capabilities-section"
import { EnhancementModernization } from "@/components/services/product-engineering/enhancement-modernization-section"
import { IntegrationsBackend } from "@/components/services/product-engineering/integrations-backend-section"
import { ProductEngineeringHowWeWork } from "@/components/services/product-engineering/how-we-work-section"
import { TechStack } from "@/components/services/product-engineering/tech-stack-section"
import { ProductEngineeringExperience } from "@/components/services/product-engineering/experience-section"
import { UnifiedCTA } from "@/components/services/unified-cta"

export const metadata: Metadata = {
  title: "Product Engineering & Custom Software Development | TECUNIQUE",
  description: "TECUNIQUE helps software product companies build dedicated engineering teams for web applications, backend systems, frontend development, API integrations, cloud-ready platforms, and long-term product maintenance.",
}

export default function ProductEngineeringPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      <ProductEngineeringHero />
      <WhatWeBuild />
      <EngineeringCapabilities />
      <EnhancementModernization />
      <IntegrationsBackend />
      <ProductEngineeringHowWeWork />
      <TechStack />
      <ProductEngineeringExperience />
      <UnifiedCTA />
    </div>
  )
}
