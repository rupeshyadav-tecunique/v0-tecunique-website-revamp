import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Clock, Users, TrendingUp, Star, CheckCircle2, Building2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import clientPromise from "@/lib/db"
import { Button } from "@/components/ui/button"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const dbCaseStudies = await db.collection("case-studies").find({}, { projection: { id: 1 } }).toArray()
    return dbCaseStudies.map((study) => ({ id: study.id }))
  } catch (e) {
    return []
  }
}

async function getCaseStudy(id: string) {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const study = await db.collection("case-studies").findOne({ id })
    if (!study) return null
    return { ...study, _id: study._id.toString() }
  } catch (e) {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const study = await getCaseStudy(resolvedParams.id)
  
  if (!study) {
    return { title: "Case Study Not Found" }
  }

  return {
    title: `${study.company} Case Study | TECUNIQUE`,
    description: study.tagline || study.description,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const resolvedParams = await params
  const study = await getCaseStudy(resolvedParams.id)

  if (!study) {
    notFound()
  }

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white"
        style={{ background: `linear-gradient(170deg, #ffffff 0%, ${study.color}08 18%, ${study.color}15 45%, ${study.color}05 75%, #ffffff 100%)` }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl" style={{ background: `radial-gradient(circle, ${study.color} 0%, transparent 70%)` }} />
          <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl" style={{ background: `radial-gradient(circle, ${study.color} 0%, transparent 70%)` }} />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: `linear-gradient(${study.color} 1px, transparent 1px), linear-gradient(to right, ${study.color} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        </div>

        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
          <Link href="/case-studies" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-10">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>

          <SectionReveal>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              {/* Company Logo/Initials */}
              {study.logo ? (
                <div className="relative h-24 w-24 md:h-32 md:w-32 shrink-0 rounded-2xl bg-white border border-border shadow-md p-3 flex items-center justify-center overflow-hidden">
                  <Image src={study.logo} alt={study.company} fill className="object-contain p-3" sizes="(max-width: 768px) 96px, 128px" />
                </div>
              ) : (
                <div
                  className="flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-2xl text-white font-display text-4xl md:text-5xl font-extrabold shrink-0 shadow-md"
                  style={{ background: `linear-gradient(135deg, ${study.color}, ${study.color}cc)` }}
                >
                  {study.initials}
                </div>
              )}

              {/* Title & Tagline */}
              <div>
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] mb-4">
                  {study.company} <span style={{ color: study.color }}>Case Study</span>
                </h1>
                <p className="text-xl text-slate-600 font-medium italic">
                  &ldquo;{study.tagline}&rdquo;
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              <SectionReveal>
                <div className="prose prose-lg max-w-none text-slate-600">
                  {study.sections?.map((section, index) => (
                    <div key={index} className="mb-10 last:mb-0">
                      <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">{section.title}</h2>
                      <div className="leading-relaxed whitespace-pre-wrap">{section.content}</div>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              {/* Testimonial Block */}
              {study.testimonials && study.testimonials.length > 0 && (
                <div className="space-y-8">
                  {study.testimonials.map((testimonial, idx) => (
                    <SectionReveal key={idx}>
                      <div
                        className="rounded-3xl p-8 md:p-10 border shadow-sm relative overflow-hidden"
                        style={{
                          borderColor: `${study.color}25`,
                          background: `${study.color}05`,
                        }}
                      >
                        <div className="absolute top-0 left-0 w-2 h-full" style={{ background: study.color }} />
                        <div className="flex gap-1.5 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <blockquote className="text-xl md:text-2xl text-slate-800 leading-relaxed italic mb-8 font-medium">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-full text-white text-lg font-bold shrink-0 shadow-sm"
                            style={{ background: `linear-gradient(135deg, ${study.color}, ${study.color}99)` }}
                          >
                            {testimonial.author.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <p className="text-base font-bold text-slate-900">
                              {testimonial.author}
                            </p>
                            {testimonial.role && (
                              <p className="text-sm text-slate-500 font-medium">
                                {testimonial.role}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </SectionReveal>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* At a Glance */}
              <SectionReveal>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 font-display">At a Glance</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg" style={{ background: `${study.color}15`, color: study.color }}>
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Industry</p>
                        <p className="text-base font-semibold text-slate-900">{study.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg" style={{ background: `${study.color}15`, color: study.color }}>
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Partnership</p>
                        <p className="text-base font-semibold text-slate-900">{study.partnership}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg" style={{ background: `${study.color}15`, color: study.color }}>
                        <Users className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Service Provided</p>
                        <p className="text-base font-semibold text-slate-900">{study.category}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg" style={{ background: `${study.color}15`, color: study.color }}>
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Location</p>
                        <p className="text-base font-semibold text-slate-900">{study.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <h3 className="text-sm font-bold text-slate-900 mb-4 font-display">Technologies & Services</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-3 py-1 text-xs font-semibold border bg-white"
                          style={{
                            color: study.color,
                            borderColor: `${study.color}30`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>

              {/* Key Results */}
              <SectionReveal>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 font-display">Key Results</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-2xl p-4 flex flex-col items-center justify-center text-center min-h-[110px]"
                        style={{ background: `${study.color}08`, border: `1px solid ${study.color}15` }}
                      >
                        <p
                          className="font-display text-xl font-extrabold leading-[1.1] mb-1.5"
                          style={{ color: study.color }}
                        >
                          {result.metric}
                        </p>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 leading-snug">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
