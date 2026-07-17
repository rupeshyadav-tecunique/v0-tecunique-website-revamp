import type { Metadata } from "next"
import { CaseStudiesHero } from "@/components/case-studies/hero-section"
import { CaseStudiesList } from "@/components/case-studies/case-studies-list"
import { UnifiedCTA } from "@/components/services/unified-cta"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real-world success stories from TECUNIQUE's partnerships — how we helped companies scale, deliver quality software, and achieve lasting results.",
}

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      <CaseStudiesHero />
      <CaseStudiesList />
      <UnifiedCTA />
    </div>
  )
}
