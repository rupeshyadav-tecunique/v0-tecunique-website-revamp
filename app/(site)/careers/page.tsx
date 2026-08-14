import type { Metadata } from "next"
import { CareersHero } from "@/components/pages/careers/hero-section"
import { CareersBenefits } from "@/components/pages/careers/benefits-section"
import { CareersStats } from "@/components/pages/careers/stats-section"
import { CareersOpenings } from "@/components/pages/careers/openings-section"
import { CareersLife } from "@/components/pages/careers/life-section"
import clientPromise from "@/lib/db"

export const metadata: Metadata = {
  title: "Careers | TECUNIQUE",
  description: "Explore career opportunities at TECUNIQUE across software development, QA, automation, Atlassian app engineering, and related technology roles. Learn about our work culture and current openings.",
}

async function getJobs() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const dbJobs = await db.collection("jobs").find({ isActive: true }).sort({ createdAt: -1 }).toArray()

    return dbJobs.map(job => ({
      ...job,
      _id: job._id.toString(),
      createdAt: job.createdAt?.toISOString(),
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}

export default async function CareersPage() {
  const jobs = await getJobs()
  const hasOpenings = jobs.length > 0

  return (
    <div className="flex flex-col min-h-screen">
      <CareersHero hasOpenings={hasOpenings} />
      <CareersBenefits />
      <CareersLife />
      <CareersStats />
      <CareersOpenings jobs={jobs} />
    </div>
  )
}
