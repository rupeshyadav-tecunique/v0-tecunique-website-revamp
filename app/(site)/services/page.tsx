import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/hero-section"
import { ServicesCards } from "@/components/services/service-cards"
import { DecisionGuide } from "@/components/services/decision-guide"
import { ServicesExecutionModel } from "@/components/services/execution-model-section"
import { ServicesTrustProof } from "@/components/services/trust-proof"
import { UnifiedCTA } from "@/components/services/unified-cta"

export const metadata: Metadata = {
  title: "Software Engineering Services & Dedicated Teams | TECUNIQUE",
  description: "TECUNIQUE supports software product companies with dedicated software teams, product engineering, QA & automation, and Atlassian app development and QA from India.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      <ServicesHero />
      <ServicesCards />
      <DecisionGuide />
      <ServicesExecutionModel />
      <ServicesTrustProof />
      <UnifiedCTA
        eyebrow="NEED SOFTWARE ENGINEERING SUPPORT?"
        title={
          <>
            Find the Right Engineering Support <br className="hidden md:block"/>
            <span className="text-brand-blue">for Your Product</span>
          </>
        }
        description="Whether you need a dedicated team, product engineering capacity, QA & automation, or Atlassian app expertise, we can help structure an engagement around your product and team requirements."
        secondaryButtonText="View Case Studies"
        secondaryButtonLink="/case-studies"
      />
    </div>
  )
}
