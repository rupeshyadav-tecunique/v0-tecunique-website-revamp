import type { Metadata } from "next"
import { AtlassianHero } from "@/components/services/atlassian/hero-section"
import { AtlassianLifecycle } from "@/components/services/atlassian/lifecycle-section"
import { AtlassianTargetAudience } from "@/components/services/atlassian/target-audience-section"
import { AtlassianCapabilities } from "@/components/services/atlassian/capabilities-section"
import { AtlassianLongTermSupport } from "@/components/services/atlassian/long-term-support-section"
import { AtlassianProcessAndSupport } from "@/components/services/atlassian/process-and-support-section"
import { AtlassianExperience } from "@/components/services/atlassian/experience-section"
import { UnifiedCTA } from "@/components/services/unified-cta"

export const metadata: Metadata = {
  title: "Atlassian App Development & QA | Jira App Engineering | TECUNIQUE",
  description: "TECUNIQUE supports Atlassian Marketplace vendors with Jira app development, Forge engineering, Connect-to-Forge modernization, functional QA, automation testing, integrations, release validation, and dedicated engineering teams in India.",
}

export default function AtlassianServicesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      <AtlassianHero />
      <AtlassianTargetAudience />
      <AtlassianCapabilities />
      <AtlassianLongTermSupport />
      <AtlassianProcessAndSupport />
      <AtlassianExperience />
      <UnifiedCTA 
        eyebrow="NEED ATLASSIAN APP ENGINEERING SUPPORT?"
        title={<>Build, Test, and Evolve Your Jira App with the <span className="text-[var(--brand-blue)]">Right Team</span></>}
        description="Whether you need Forge development, QA automation, Connect modernization, integrations, release support, or a long-term Jira app engineering team, TECUNIQUE can support your product."
        primaryButtonText="Discuss Your Atlassian App Needs"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Dedicated Teams"
        secondaryButtonLink="/services/dedicated-teams"
      />
    </div>
  )
}
