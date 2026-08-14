import type { Metadata } from "next"
import { ProductEngineeringHero } from "@/components/pages/services/product-engineering/hero-section"
import { WhatWeBuild } from "@/components/pages/services/product-engineering/what-we-build-section"
import { EngineeringCapabilities } from "@/components/pages/services/product-engineering/engineering-capabilities-section"
import { EnhancementModernization } from "@/components/pages/services/product-engineering/enhancement-modernization-section"
import { IntegrationsBackend } from "@/components/pages/services/product-engineering/integrations-backend-section"
import { ProductEngineeringHowWeWork } from "@/components/pages/services/product-engineering/how-we-work-section"
import { TechStack } from "@/components/pages/services/product-engineering/tech-stack-section"
import { ProductEngineeringExperience } from "@/components/pages/services/product-engineering/experience-section"
import { UnifiedCTA } from "@/components/pages/services/unified-cta"

export const metadata: Metadata = {
  title: "Product Engineering & Custom Software Development",
  description: "TECUNIQUE supports software product companies with custom development, product enhancements, backend systems, API integrations, cloud engineering, QA automation, and long-term product maintenance through engineering teams in India.",
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
      <UnifiedCTA 
        title={<>Need <span className="text-brand-blue">Product Engineering</span> Support?</>}
        description={<>
          <strong className="block text-xl text-foreground font-semibold mb-4">Build, Enhance, and Support Your Software Product</strong>
          Whether you're developing new functionality, improving an existing platform, or adding long-term engineering capacity, TECUNIQUE can support development, integrations, QA, and ongoing maintenance.
        </>}
        primaryButtonText="Discuss Your Product Requirements"
        secondaryButtonText="Explore Dedicated Teams"
        secondaryButtonLink="/services/dedicated-teams"
      />
    </div>
  )
}
