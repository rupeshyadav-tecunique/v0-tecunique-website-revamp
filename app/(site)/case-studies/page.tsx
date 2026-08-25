import type { Metadata } from "next"
import { CaseStudiesHero } from "@/components/pages/case-studies/hero-section"
import { CaseStudiesList } from "@/components/pages/case-studies/case-studies-list"
import { UnifiedCTA } from "@/components/pages/services/unified-cta"

export const metadata: Metadata = {
  title: "Software Engineering Case Studies | TECUNIQUE",
  description:
    "Explore TECUNIQUE case studies across dedicated software teams, product engineering, QA automation, Atlassian app development, and long-term engineering partnerships.",
}

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      <CaseStudiesHero />
      <CaseStudiesList />
      <UnifiedCTA
        eyebrow="NEED THE RIGHT ENGINEERING CAPACITY?"
        title={
          <>
            Build the Right Engineering Team{" "}
            <span className="text-blue-600">Around Your Product</span>
          </>
        }
        description="Whether you need dedicated developers, QA engineers, product engineering support, or Atlassian app expertise, TECUNIQUE can help you build the right long-term engineering capacity."
        primaryButtonText="Discuss Your Requirement"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
      />
    </div>
  )
}
