import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/hero-section"
import { ServicesCards } from "@/components/services/service-cards"
import { DecisionGuide } from "@/components/services/decision-guide"
import { ServicesExecutionModel } from "@/components/services/execution-model-section"
import { ServicesTrustProof } from "@/components/services/trust-proof"
import { UnifiedCTA } from "@/components/services/unified-cta"

export const metadata: Metadata = {
  title: "Services | TECUNIQUE",
  description: "Explore TECUNIQUE's comprehensive software services - Dedicated teams, Atlassian Enterprise solutions, QA, and Product Engineering.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      <ServicesHero />
      <ServicesCards />
      <DecisionGuide />
      <ServicesExecutionModel />
      <ServicesTrustProof />
      <UnifiedCTA />
    </div>
  )
}
