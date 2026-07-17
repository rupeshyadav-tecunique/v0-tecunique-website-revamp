import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Briefcase, MapPin, GraduationCap, ArrowRight } from "lucide-react"
import clientPromise from "@/lib/db"

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

export async function CareersOpenings() {
  const jobs = await getJobs()

  return (
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
  )
}
