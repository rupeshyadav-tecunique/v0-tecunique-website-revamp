import { type LucideIcon, ShieldCheck, Calendar, Globe, Users, BookOpen, Clock } from "lucide-react"

// ─── Benefits ──────────────────────────────────────────────────────────────────

export type Benefit = {
  title: string
  description: string
  icon: LucideIcon
  color: string
}

export const benefits: Benefit[] = [
  {
    title: "Ownership & Autonomy",
    description: "Work with responsibility and the freedom to organize your work within the needs of your team and product.",
    icon: ShieldCheck,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Long-Term Product Work",
    description: "Build deeper product knowledge through ongoing development, QA, automation, and support engagements.",
    icon: Calendar,
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    title: "Flexible Work Culture",
    description: "Flexible working practices, supportive management, and an environment that respects work-life balance.",
    icon: Clock,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "International Client Exposure",
    description: "Collaborate with software product teams and clients across international markets.",
    icon: Globe,
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Learning Through Real Work",
    description: "Develop your skills through product challenges, peer collaboration, knowledge sharing, and relevant learning opportunities.",
    icon: BookOpen,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Respectful Team Environment",
    description: "Work in a collaborative culture built around respect, transparency, responsibility, and mutual support.",
    icon: Users,
    color: "bg-rose-500/10 text-rose-600",
  },
]

// ─── Stats ─────────────────────────────────────────────────────────────────────

export type CareerStat = {
  value: string
  label: string
}

export const careerStats: CareerStat[] = [
  { value: "SINCE 2010", label: "Building software teams" },
  { value: "92%", label: "Retention Rate" },
  { value: "30+", label: "Team Members" },
]
