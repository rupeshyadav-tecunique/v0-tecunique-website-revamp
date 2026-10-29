import type { Metadata } from "next"
import { ServicesHero } from "@/components/pages/services/hero-section"
import { ServicesCards } from "@/components/pages/services/service-cards"
import { DecisionGuide } from "@/components/pages/services/decision-guide"
import { ServicesExecutionModel } from "@/components/pages/services/execution-model-section"
import { ServicesTrustProof } from "@/components/pages/services/trust-proof"
import { UnifiedCTA } from "@/components/pages/services/unified-cta"

export const metadata: Metadata = {
  title: "Software Engineering Services & Dedicated Teams | TECUNIQUE",
  description: "TECUNIQUE supports software product companies with dedicated software teams, product engineering, QA & automation, and Atlassian app development and QA from India.",
}

import { getPageContent } from "@/lib/services/page-content.service"
import { ServicesHubContent } from "@/lib/data/pages-content.data"

export default async function ServicesPage() {
  const content = await getPageContent<ServicesHubContent>("services")

  return (
    <div className="flex flex-col w-full bg-slate-50">
      <ServicesHero content={content} />
      <ServicesCards content={content} />
      <DecisionGuide content={content} />
      <ServicesExecutionModel content={content} />
      <ServicesTrustProof content={content} />
      <UnifiedCTA
        page="services"
        eyebrow="NEED SOFTWARE ENGINEERING SUPPORT?"
        title={content?.ctaTitle || "Find the Right Engineering Support for Your Product"}
        description={content?.ctaDescription || "Whether you need a dedicated team, product engineering capacity, QA & automation, or Atlassian app expertise, we can help structure an engagement around your product and team requirements."}
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/case-studies"
      />
    </div>
  )
}
