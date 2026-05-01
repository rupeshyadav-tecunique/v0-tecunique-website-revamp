import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getJob, jobs } from "@/lib/jobs-data"
import { ShareJob } from "@/components/careers/share-job"
import { 
  ArrowLeft, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  CalendarDays, 
  CheckCircle2 
} from "lucide-react"

interface JobPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params
  const job = getJob(slug)

  if (!job) {
    return { title: "Job Not Found" }
  }

  return {
    title: `${job.title} | Careers`,
    description: job.description,
  }
}

export function generateStaticParams() {
  return jobs.map((job) => ({
    slug: job.slug,
  }))
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params
  const job = getJob(slug)

  if (!job) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-muted/50 to-background pt-16 pb-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Careers
          </Link>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{job.department}</Badge>
              <Badge variant="outline">{job.type}</Badge>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                {job.experience}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Posted on {new Date(job.postedDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Job Details */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-border">
                <h2 className="text-xl font-bold text-foreground mb-4">How to Apply</h2>
                <p className="text-muted-foreground mb-6">
                  Interested in this role? Please send your updated resume and portfolio (if applicable) to our careers team. Mention the job title in the subject line.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-xl px-8" asChild>
                    <a href={`mailto:careers@tecunique.com?subject=Application for ${job.title}`}>
                      Apply Now
                    </a>
                  </Button>
                  <ShareJob title={job.title} />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                <h3 className="font-bold text-foreground mb-4 text-lg">Job Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-4 w-4 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Job Type</p>
                      <p className="text-sm font-medium">{job.type}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Location</p>
                      <p className="text-sm font-medium">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-4 w-4 text-primary shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Experience</p>
                      <p className="text-sm font-medium">{job.experience}</p>
                    </div>
                  </div>
                </div>
                
                <hr className="my-6 border-border/50" />
                
                <div className="space-y-4">
                  <p className="text-sm font-medium text-foreground">Know someone for this role?</p>
                  <ShareJob title={job.title} label="Refer a Friend" className="w-full text-xs" />
                </div>
              </div>

              <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                <h3 className="font-bold mb-2">Need Help?</h3>
                <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
                  Have questions about our recruitment process or this specific role?
                </p>
                <Link href="/contact" className="text-sm font-bold underline underline-offset-4 hover:opacity-80">
                  Contact HR Team
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
