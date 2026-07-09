import type { Metadata } from "next"
import { QAHero } from "@/components/services/qa/hero-section"
import { WhatWeTest } from "@/components/services/qa/what-we-test-section"
import { QAServices } from "@/components/services/qa/qa-services-section"
import { AutomationCapability } from "@/components/services/qa/automation-capability-section"
import { QAForProductCompanies } from "@/components/services/qa/qa-product-companies-section"
import { QAAtlassian } from "@/components/services/qa/qa-atlassian-section"
import { QAHowWeWork } from "@/components/services/qa/how-we-work-section"
import { QAExperience } from "@/components/services/qa/experience-section"
import { QACTA } from "@/components/services/qa/cta-section"

export const metadata: Metadata = {
  title: "Software QA & Automation Testing Services | TECUNIQUE",
  description: "Build dedicated QA and automation testing teams in India with TECUNIQUE. Manual QA, regression testing, Playwright, Selenium, JUnit, API testing, release validation, and long-term product quality support.",
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
      <QACTA />
    </div>
  )
}
