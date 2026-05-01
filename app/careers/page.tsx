import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { jobs as staticJobs } from "@/lib/jobs-data"
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Zap,
  Users,
  Coffee,
  Heart,
  GraduationCap,
  Globe
} from "lucide-react"
import clientPromise from "@/lib/db"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the TECUNIQUE team. Explore exciting career opportunities in software development, QA, and Atlassian consulting.",
}

const benefits = [
  {
    title: "Continuous Learning",
    description: "Access to latest courses, certifications, and mentorship to fuel your career growth.",
    icon: GraduationCap,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Modern Tech Stack",
    description: "Work on cutting-edge technologies and high-impact projects for global enterprises.",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Employee-Centric",
    description: "Flexible working hours, remote options, and a culture that values your voice.",
    icon: Heart,
    color: "bg-rose-500/10 text-rose-500"
  },
  {
    title: "Global Projects",
    description: "Collaborate with international clients and solve complex business challenges.",
    icon: Globe,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Vibrant Culture",
    description: "We celebrate festivals, birthdays, and milestones together as one big family.",
    icon: Coffee,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "Expert Mentors",
    description: "Work alongside veterans with 14+ years of industry-leading experience.",
    icon: Users,
    color: "bg-purple-500/10 text-purple-500"
  }
]

async function getJobs() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const dbJobs = await db.collection("jobs").find({}).sort({ createdAt: -1 }).toArray()
    
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 lg:py-32 overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-medium">
              We're Hiring!
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              Build Your Future with <span className="gradient-text">TECUNIQUE</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Be a part of a self-organized team that dares to be different. We put our workforce on top priority and value uniqueness in every individual.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
                <Link href="#openings">
                  View Openings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl bg-white/50 backdrop-blur-sm" asChild>
                <Link href="/about">
                  Our Culture
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Join the "Uniquens"?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide an environment where you can amplify your abilities and do your best work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="group border-border/50 bg-card hover:border-primary/20 transition-all duration-300">
                <CardContent className="pt-8">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${benefit.color}`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section (Quick highlight) */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {[
              { label: "Growth-Mindset", value: "100%" },
              { label: "Retention Rate", value: "92%" },
              { label: "Years Experience", value: "15+" },
              { label: "Team Strength", value: "30+" }
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section id="openings" className="py-20 lg:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Current Openings
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Find the perfect role for your next career move.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground italic">
              <Clock className="h-4 w-4" />
              Updated as of {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job: any) => (
              <Card key={job._id || job.id} className="group border-border/50 bg-card hover:border-primary/30 hover:shadow-md transition-all overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <Badge variant="outline" className="mb-3 text-primary border-primary/20 bg-primary/5">
                        {job.department}
                      </Badge>
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {job.title}
                      </CardTitle>
                    </div>
                    <Button variant="ghost" className="group/btn w-fit" asChild>
                      <Link href={`/careers/${job.slug}`}>
                        Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-slate-400" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-slate-400" />
                      {job.experience}
                    </span>
                  </div>
                  <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Spontaneous Application */}
          <div className="mt-16 text-center rounded-3xl bg-white border border-border/50 p-10 lg:p-16 shadow-sm">
            <h3 className="text-2xl font-bold text-foreground">{"Didn't find what you're looking for?"}</h3>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We are always looking for talented "Uniquens" to join our family. Send us your resume and we'll keep you in mind for future roles.
            </p>
            <div className="mt-8">
              <Button size="lg" className="rounded-xl" asChild>
                <Link href="mailto:careers@tecunique.com">
                  Submit Spontaneous Application
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
