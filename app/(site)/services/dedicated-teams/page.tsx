import type { Metadata } from "next"
import { DedicatedTeamsHero } from "@/components/services/dedicated-teams/hero-section"
import { DedicatedTeamsIntro } from "@/components/services/dedicated-teams/intro-section"
import { DedicatedTeamsRoles } from "@/components/services/dedicated-teams/roles-section"
import { DedicatedTeamsProcess } from "@/components/services/dedicated-teams/process-section"
import { DedicatedTeamsComparison } from "@/components/services/dedicated-teams/comparison-section"
import { DedicatedTeamsScenarios } from "@/components/services/dedicated-teams/scenarios-section"
import { DedicatedTeamsBenefits } from "@/components/services/dedicated-teams/benefits-section"
import { DedicatedTeamsExperience } from "@/components/services/dedicated-teams/experience-section"
import { UnifiedCTA } from "@/components/services/unified-cta"

export const metadata: Metadata = {
  title: "Dedicated Software Teams in India",
  description: "Build a dedicated software team in India with client-selected developers, QA, automation, DevOps, and support professionals. TECUNIQUE manages operations.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      <DedicatedTeamsHero />
      <DedicatedTeamsIntro />
      <DedicatedTeamsRoles />
      <DedicatedTeamsProcess />
      <DedicatedTeamsComparison />
      <DedicatedTeamsScenarios />
      <DedicatedTeamsBenefits />
      <DedicatedTeamsExperience />
      <UnifiedCTA 
        title={<>Ready to Build Your <br className="hidden sm:block" /><span className="text-brand-blue whitespace-nowrap">Dedicated Software Team?</span></>}
        description="Tell us the roles, skills, and team structure you need. We can help identify suitable professionals and manage the employment and operational setup in India."
        primaryButtonText="Discuss Your Team Requirements"
      />
    </div>
  )
}
