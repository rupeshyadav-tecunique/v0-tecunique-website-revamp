import type { Metadata } from "next"
import { DedicatedTeamsHero } from "@/components/pages/services/dedicated-teams/hero-section"
import { DedicatedTeamsIntro } from "@/components/pages/services/dedicated-teams/intro-section"
import { DedicatedTeamsRoles } from "@/components/pages/services/dedicated-teams/roles-section"
import { DedicatedTeamsProcess } from "@/components/pages/services/dedicated-teams/process-section"
import { DedicatedTeamsComparison } from "@/components/pages/services/dedicated-teams/comparison-section"
import { DedicatedTeamsScenarios } from "@/components/pages/services/dedicated-teams/scenarios-section"
import { DedicatedTeamsBenefits } from "@/components/pages/services/dedicated-teams/benefits-section"
import { DedicatedTeamsExperience } from "@/components/pages/services/dedicated-teams/experience-section"
import { UnifiedCTA } from "@/components/pages/services/unified-cta"

export const metadata: Metadata = {
  title: "Dedicated Software Teams in India",
  description: "Build a dedicated software team in India with client-selected developers, QA, automation, DevOps, and support professionals. TECUNIQUE manages operations.",
}

import { getPageContent } from "@/lib/services/page-content.service"
import { ServicePageContent } from "@/lib/data/pages-content.data"

export default async function ServicesPage() {
  const content = await getPageContent<ServicePageContent>("services-dedicated-teams")

  return (
    <div className="flex flex-col w-full bg-slate-50">
      <DedicatedTeamsHero content={content} />
      <DedicatedTeamsIntro content={content} />
      <DedicatedTeamsRoles content={content} />
      <DedicatedTeamsProcess content={content} />
      <DedicatedTeamsComparison content={content} />
      <DedicatedTeamsScenarios content={content} />
      <DedicatedTeamsBenefits content={content} />
      <DedicatedTeamsExperience content={content} />
      <UnifiedCTA 
        page="services-dedicated-teams"
        title={content?.ctaTitle || "Ready to Build Your Dedicated Software Team?"}
        description={content?.ctaDescription || "Tell us the roles, skills, and team structure you need. We can help identify suitable professionals and manage the employment and operational setup in India."}
        primaryButtonText={content?.primaryButtonText || "Discuss Your Team Requirements"}
      />
    </div>
  )
}
