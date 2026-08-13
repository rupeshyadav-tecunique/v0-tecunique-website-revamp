import type { Metadata } from "next"
import { QAHero } from "@/components/services/qa/hero-section"
import { WhatWeTest } from "@/components/services/qa/what-we-test-section"
import { QAServices } from "@/components/services/qa/qa-services-section"
import { AutomationCapability } from "@/components/services/qa/automation-capability-section"
import { QAForProductCompanies } from "@/components/services/qa/qa-product-companies-section"
import { QAAtlassian } from "@/components/services/qa/qa-atlassian-section"
import { QAHowWeWork } from "@/components/services/qa/how-we-work-section"
import { QAExperience } from "@/components/services/qa/experience-section"
import { UnifiedCTA } from "@/components/services/unified-cta"

export const metadata: Metadata = {
  title: "Software QA & Automation Testing Services | TECUNIQUE",
  description: "TECUNIQUE supports software product companies with manual QA, regression testing, automation testing, Playwright, Selenium, API testing, CI/CD integration, release validation, and dedicated QA teams in India.",
}

export default function QAServicePage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      <QAHero />
      <WhatWeTest />
      <QAServices />
      <AutomationCapability />
      <QAForProductCompanies />
      <QAAtlassian />
      <QAHowWeWork />
      <QAExperience />
      <UnifiedCTA 
        eyebrow="NEED QA OR AUTOMATION CAPACITY?"
        title={<>Strengthen Your Product Quality with the <span className="text-[var(--brand-blue)]">Right QA Team</span></>}
        description="Whether you need manual testing, regression coverage, automation QA, API testing, release validation, or long-term QA support, we can help structure the right engagement for your product."
        primaryButtonText="Discuss Your QA Requirements"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Dedicated Teams"
        secondaryButtonLink="/services/dedicated-teams"
      />
    </div>
  )
}
