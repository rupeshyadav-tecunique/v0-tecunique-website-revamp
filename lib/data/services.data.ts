import { type LucideIcon, Users, Layers, TestTube2, Code2 } from "lucide-react"

// ─── Service Cards ─────────────────────────────────────────────────────────────

export type ServiceCard = {
  id: string
  title: string
  icon: LucideIcon
  color: string
  bgLight: string
  textLight: string
  shadow: string
  text: string
  bestFor: string[]
  ctaText: string
  ctaHref: string
}

export const serviceCards: ServiceCard[] = [
  {
    id: "dedicated-teams",
    title: "Dedicated Software Teams",
    icon: Users,
    color: "from-indigo-500 to-blue-600",
    bgLight: "bg-indigo-500/10",
    textLight: "text-indigo-600",
    shadow: "shadow-indigo-500/20",
    text: "Build full-time development, QA, automation, DevOps, or support teams in India. You evaluate and approve the professionals; TECUNIQUE manages recruitment, onboarding, payroll, HR, infrastructure, NDA, and operational continuity.",
    bestFor: [
      "Long-term engineering capacity",
      "Team expansion",
      "Client-selected talent",
      "Dedicated development & QA teams",
    ],
    ctaText: "Explore Dedicated Teams",
    ctaHref: "/services/dedicated-teams",
  },
  {
    id: "product-engineering",
    title: "Product Engineering & Custom Software",
    icon: Code2,
    color: "from-indigo-500 to-blue-500",
    bgLight: "bg-indigo-500/10",
    textLight: "text-indigo-600",
    shadow: "shadow-indigo-500/20",
    text: "Build, enhance, and maintain software products, web applications, backend systems, integrations, and cloud-ready platforms with experienced engineering teams.",
    bestFor: [
      "Product development",
      "Product enhancements",
      "Backend & API integrations",
      "Long-term maintenance",
    ],
    ctaText: "Explore Product Engineering",
    ctaHref: "/services/product-engineering",
  },
  {
    id: "qa-automation",
    title: "Software QA & Automation Testing",
    icon: TestTube2,
    color: "from-purple-500 to-pink-500",
    bgLight: "bg-purple-500/10",
    textLight: "text-purple-600",
    shadow: "shadow-purple-500/20",
    text: "Strengthen product quality with manual QA and automation engineers supporting functional testing, regression, Playwright, Selenium, API testing, CI/CD test integration, and release validation.",
    bestFor: [
      "Manual & regression QA",
      "Automation testing",
      "API testing",
      "Release validation",
    ],
    ctaText: "Explore QA Services",
    ctaHref: "/services/qa",
  },
  {
    id: "atlassian",
    title: "Atlassian App Development & QA",
    icon: Layers,
    color: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-500/10",
    textLight: "text-blue-600",
    shadow: "shadow-blue-500/20",
    text: "Develop, test, automate, modernize, and support Jira apps with engineering and QA teams experienced in Forge, REST APIs, Marketplace app QA, integrations, and long-term product maintenance.",
    bestFor: [
      "Atlassian Marketplace vendors",
      "Forge development",
      "Connect modernization",
      "Marketplace app QA",
    ],
    ctaText: "Explore Atlassian Services",
    ctaHref: "/services/atlassian",
  },
]
