import type { Metadata } from "next"
import { AtlassianHero } from "@/components/pages/services/atlassian/hero-section"
import { AtlassianTargetAudience } from "@/components/pages/services/atlassian/target-audience-section"
import { AtlassianCapabilities } from "@/components/pages/services/atlassian/capabilities-section"
import { AtlassianLongTermSupport } from "@/components/pages/services/atlassian/long-term-support-section"
import { AtlassianProcessAndSupport } from "@/components/pages/services/atlassian/process-and-support-section"
import { AtlassianExperience } from "@/components/pages/services/atlassian/experience-section"
import { UnifiedCTA } from "@/components/pages/services/unified-cta"

export const metadata: Metadata = {
  title: "Atlassian App Development & QA | Jira App Engineering | TECUNIQUE",
  description: "TECUNIQUE supports Atlassian Marketplace vendors with Jira app development, Forge engineering, Connect-to-Forge modernization, functional QA, automation testing, integrations, release validation, and dedicated engineering teams in India.",
}

import { getPageContent } from "@/lib/services/page-content.service"
import { ServicePageContent } from "@/lib/data/pages-content.data"

export default async function AtlassianServicesPage() {
  const content = await getPageContent<ServicePageContent>("services-atlassian")

  return (
    <div className="flex flex-col w-full bg-slate-50">
      <AtlassianHero content={content} />
      <AtlassianTargetAudience content={content} />
      <AtlassianCapabilities content={content} />
      <AtlassianLongTermSupport content={content} />
      <AtlassianProcessAndSupport content={content} />
      <AtlassianExperience content={content} />
      <UnifiedCTA 
        page="services-atlassian"
        eyebrow={content?.ctaEyebrow || "NEED ATLASSIAN APP ENGINEERING SUPPORT?"}
        title={content?.ctaTitle || "Build, Test, and Evolve Your Jira App with the Right Team"}
        description={content?.ctaDescription || "Whether you need Forge development, QA automation, Connect modernization, integrations, release support, or a long-term Jira app engineering team, TECUNIQUE can support your product."}
        primaryButtonText={content?.primaryButtonText || "Discuss Your Atlassian App Needs"}
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Dedicated Teams"
        secondaryButtonLink="/services/dedicated-teams"
      />
    </div>
  )
}
