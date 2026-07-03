import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, TrendingUp, Star, Sparkles, Shield, FileCheck, Clock3 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real-world success stories from TECUNIQUE's partnerships — how we helped companies scale, deliver quality software, and achieve lasting results.",
}

import clientPromise from "@/lib/db"

const stats = [
  { value: "20+", label: "Clients Served" },
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Years of Expertise" },
  { value: "95%", label: "Client Retention" },
]

async function getCaseStudies() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const dbCaseStudies = await db.collection("case-studies").find({}).sort({ createdAt: -1 }).toArray()
    
    return dbCaseStudies.map(study => ({
      ...study,
      _id: study._id.toString(),
      createdAt: study.createdAt?.toISOString(),
    }))
  } catch (e) {
    console.error(e)
    return []
  }
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()
  return (
    <div className="flex flex-col w-full bg-slate-50">
      
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white"
        style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }} />
          <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #93c5fd 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <SectionReveal className="mx-auto max-w-4xl">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-6">
              Proven Results & <br className="hidden sm:block"/>
              <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="mt-4 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              How we help top-tier vendors and enterprise clients scale their engineering capabilities and achieve measurable business impact.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              id={study.id}
              className="group relative rounded-3xl border border-border/60 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-mt-24"
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${study.gradient}`} />

              <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">

                {/* Left panel — Company + Meta */}
                <div
                  className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between"
                  style={{ background: `linear-gradient(160deg, ${study.color}08 0%, ${study.color}04 100%)` }}
                >
                  <div>
                    {/* Company avatar + name */}
                    <div className="flex items-center gap-4 mb-6">
                      {study.logo ? (
                        <div className="relative h-14 w-14 shrink-0 rounded-xl bg-white border border-border shadow-sm p-1.5 flex items-center justify-center overflow-hidden">
                          <Image src={study.logo} alt={study.company} fill className="object-contain p-1.5" sizes="56px" />
                        </div>
                      ) : (
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-xl text-white font-display text-lg font-extrabold shrink-0 shadow-sm"
                          style={{ background: `linear-gradient(135deg, ${study.color}, ${study.color}cc)` }}
                        >
                          {study.initials}
                        </div>
                      )}
                      <div>
                        <h2 className="font-display text-2xl font-bold text-foreground">
                          {study.company}
                        </h2>
                        <p className="text-sm text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-3 py-1 text-xs font-semibold border"
                          style={{
                            color: study.color,
                            borderColor: `${study.color}30`,
                            background: `${study.color}0a`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-base font-medium text-foreground leading-relaxed italic">
                      &ldquo;{study.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Meta info */}
                  <div className="mt-8 space-y-3 border-t border-border/50 pt-6">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 shrink-0" style={{ color: study.color }} />
                      <span>Partnership: <span className="font-semibold text-foreground">{study.partnership}</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 shrink-0" style={{ color: study.color }} />
                      <span>Service: <span className="font-semibold text-foreground">{study.category}</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 shrink-0" style={{ color: study.color }} />
                      <span>Location: <span className="font-semibold text-foreground">{study.location}</span></span>
                    </div>
                  </div>
                </div>

                {/* Right panel — Details */}
                <div className="lg:col-span-3 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-border/50">

                  {/* Challenge & Solution */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {study.description}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                        Our Solution
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results grid */}
                  <div className="grid grid-cols-2 gap-1.5 mb-8 sm:grid-cols-4">
                    {study.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-2xl py-6 px-4 flex flex-col items-center justify-center text-center border border-border/50 min-h-[120px] transition-colors hover:border-border"
                        style={{ background: `${study.color}06` }}
                      >
                        <p
                          className="font-display text-[18px] font-extrabold leading-[1.1] mb-2"
                          style={{ color: study.color }}
                        >
                          {result.metric}
                        </p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 leading-none">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  {study.testimonial && (
                    <div
                      className="rounded-2xl p-5 border mb-8"
                      style={{
                        borderColor: `${study.color}25`,
                        background: `${study.color}05`,
                      }}
                    >
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-sm text-foreground leading-relaxed italic">
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full text-white text-xs font-bold shrink-0"
                          style={{ background: `linear-gradient(135deg, ${study.color}, ${study.color}99)` }}
                        >
                          {study.testimonial.author.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground leading-none">
                            {study.testimonial.author}
                          </p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">
                            {study.testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Read More Button */}
                  <div className="flex justify-end mt-4 lg:mt-0">
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:gap-3"
                      style={{
                        background: study.color,
                        color: "white",
                        boxShadow: `0 4px 14px ${study.color}40`,
                      }}
                    >
                      Read Full Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
