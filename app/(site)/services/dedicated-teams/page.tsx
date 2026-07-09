import type { Metadata } from "next"
import { DedicatedTeamsHero } from "@/components/services/dedicated-teams/hero-section"
import { DedicatedTeamsIntro } from "@/components/services/dedicated-teams/intro-section"
import { DedicatedTeamsRoles } from "@/components/services/dedicated-teams/roles-section"
import { DedicatedTeamsProcess } from "@/components/services/dedicated-teams/process-section"
import { DedicatedTeamsComparison } from "@/components/services/dedicated-teams/comparison-section"
import { DedicatedTeamsScenarios } from "@/components/services/dedicated-teams/scenarios-section"
import { DedicatedTeamsBenefits } from "@/components/services/dedicated-teams/benefits-section"
import { DedicatedTeamsExperience } from "@/components/services/dedicated-teams/experience-section"
import { DedicatedTeamsCTA } from "@/components/services/dedicated-teams/cta-section"

export const metadata: Metadata = {
  title: "Dedicated Software Teams in India | TECUNIQUE",
  description: "Build dedicated software development, QA, automation, DevOps, and support teams in India with TECUNIQUE. Client-selected talent, managed operations, NDA-backed engagement, and long-term team continuity.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-50">
      <DedicatedTeamsHero />
      <DedicatedTeamsIntro />
      <DedicatedTeamsRoles />
      <DedicatedTeamsProcess />
      <DedicatedTeamsComparison />
      <DedicatedTeamsScenarios />
      <DedicatedTeamsBenefits />
      <DedicatedTeamsExperience />
      <DedicatedTeamsCTA />
    </div>
  )
}
