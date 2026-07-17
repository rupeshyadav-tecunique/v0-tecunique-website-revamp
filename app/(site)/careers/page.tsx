import type { Metadata } from "next"
import { CareersHero } from "@/components/careers/hero-section"
import { CareersBenefits } from "@/components/careers/benefits-section"
import { CareersStats } from "@/components/careers/stats-section"
import { CareersOpenings } from "@/components/careers/openings-section"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the TECUNIQUE team. Explore exciting career opportunities in software development, QA, and Atlassian consulting.",
}

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CareersHero />
      <CareersBenefits />
      <CareersStats />
      <CareersOpenings />
    </div>
  )
}
