import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Briefcase, MapPin, GraduationCap, ArrowRight } from "lucide-react"

export function CareersOpenings({ jobs }: { jobs: any[] }) {
  return (
    <section id="openings" className="py-20 lg:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display">
              Current Openings
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Explore current opportunities to work with TECUNIQUE.
            </p>
          </div>
        </div>

        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {jobs.map((job: any) => (
              <Card key={job._id || job.id} className="group border-slate-200 bg-white hover:border-brand-blue/30 hover:shadow-md transition-all overflow-hidden rounded-2xl">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <Badge variant="outline" className="mb-3 text-brand-blue border-brand-blue/20 bg-brand-blue/5">
                        {job.department}
                      </Badge>
                      <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                        {job.title}
                      </CardTitle>
                    </div>
                    <Button variant="ghost" className="group/btn w-fit text-brand-blue hover:text-brand-blue hover:bg-brand-blue/5" asChild>
                      <Link href={`/careers/${job.slug}`}>
                        View Role
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-6 text-sm text-slate-600 mb-6">
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
                  <p className="text-slate-600 line-clamp-2 leading-relaxed">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-3xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">No Current Openings</h3>
            <p className="text-slate-600 text-lg mb-8">
              We don't have any active vacancies at the moment. If you'd like to be considered for future opportunities, you can still send us your resume.
            </p>
            <Button size="lg" className="rounded-xl shadow-lg hover:shadow-xl transition-all group bg-brand-blue hover:bg-brand-blue-hover h-12 px-8 text-base" asChild>
              <a href="mailto:careers@tecunique.com">
                Send Your Resume
              </a>
            </Button>
          </div>
        )}

        {/* Spontaneous Application */}
        {jobs.length > 0 && (
          <div className="mt-16 text-center rounded-3xl bg-white border border-slate-200 p-10 lg:p-16 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Don't See the Right Role?</h3>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              You can still send us your resume. We'll keep your profile in consideration for relevant future opportunities at TECUNIQUE.
            </p>
            <div className="mt-8">
              <Button size="lg" className="rounded-xl shadow-lg hover:shadow-xl transition-all group bg-brand-blue hover:bg-brand-blue-hover h-12 px-8 text-base" asChild>
                <a href="mailto:careers@tecunique.com">
                  Send Your Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
