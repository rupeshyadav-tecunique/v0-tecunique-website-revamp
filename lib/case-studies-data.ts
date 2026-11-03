import caseStudiesJson from "./data/case-studies.json"

export const staticCaseStudies: any[] = caseStudiesJson

export function getStaticCaseStudy(id: string): any | null {
  if (!id) return null
  const normalizedId = id.toLowerCase().trim()
  return staticCaseStudies.find((s) => s.id === normalizedId) || null
}
