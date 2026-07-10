import type { Metadata } from "next"
import { AtlassianHero } from "@/components/services/atlassian/hero-section"
import { AtlassianTargetAudience } from "@/components/services/atlassian/target-audience-section"
import { AtlassianCapabilities } from "@/components/services/atlassian/capabilities-section"
import { AtlassianProcessAndSupport } from "@/components/services/atlassian/process-and-support-section"
import { AtlassianExperience } from "@/components/services/atlassian/experience-section"
import { UnifiedCTA } from "@/components/services/unified-cta"

export const metadata: Metadata = {
  title: "Atlassian App Development & QA | Jira App Engineering | TECUNIQUE",
  description: "TECUNIQUE helps Atlassian Marketplace vendors and software product companies with Jira app development, QA, automation, Forge/Connect work, integrations, and long-term product support through dedicated teams in India.",
}

export default function AtlassianServicesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      <AtlassianHero />
      <AtlassianTargetAudience />
      <AtlassianCapabilities />
      <AtlassianProcessAndSupport />
      <AtlassianExperience />
      <UnifiedCTA />
    </div>
  )
}
