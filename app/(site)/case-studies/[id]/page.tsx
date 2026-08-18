import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Star,
  CheckCircle2,
  Building2,
  Globe2,
  Award,
  Layers,
  Code2,
  TestTube2,
  Info,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
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
    title: `${study.heroTitle || study.company + " Case Study"} | TECUNIQUE`,
    description: study.heroSubtitle || study.tagline || study.description,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const resolvedParams = await params
  const study = await getCaseStudy(resolvedParams.id)

  if (!study) {
    notFound()
  }

  const primaryColor = study.color || "#2563eb"

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white border-b border-slate-100"
        style={{
          background: `linear-gradient(170deg, #ffffff 0%, ${primaryColor}06 20%, ${primaryColor}12 50%, ${primaryColor}04 80%, #ffffff 100%)`,
        }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
            style={{ background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)` }}
          />
          <div
            className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
            style={{ background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)` }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(${primaryColor} 1px, transparent 1px), linear-gradient(to right, ${primaryColor} 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Case Studies
          </Link>

          <SectionReveal>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Company Logo/Initials */}
              {study.logo ? (
                <div className="relative h-20 w-20 md:h-28 md:w-28 shrink-0 rounded-2xl bg-white border border-slate-200/80 shadow-sm p-3 flex items-center justify-center overflow-hidden">
                  <Image
                    src={study.logo}
                    alt={study.company}
                    fill
                    className="object-contain p-2.5"
                    sizes="(max-width: 768px) 80px, 112px"
                  />
                </div>
              ) : (
                <div
                  className="flex h-20 w-20 md:h-28 md:w-28 items-center justify-center rounded-2xl text-white font-display text-3xl md:text-4xl font-extrabold shrink-0 shadow-sm"
                  style={{ background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}cc)` }}
                >
                  {study.initials}
                </div>
              )}

              {/* Title & Tagline */}
              <div className="space-y-3">
                {study.eyebrow && (
                  <span
                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-white/80"
                    style={{ color: primaryColor, borderColor: `${primaryColor}30` }}
                  >
                    {study.eyebrow}
                  </span>
                )}
                <h1 className="font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.15]">
                  {study.heroTitle || `${study.company} Case Study`}
                </h1>
                <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl">
                  {study.heroSubtitle || study.tagline}
                </p>
              </div>
            </div>

            {/* Source Attribution Note */}
            {study.sourceAttribution && (
              <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-start gap-3 text-xs md:text-sm text-slate-500 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/40">
                <Info className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed italic">{study.sourceAttribution}</p>
              </div>
            )}
          </SectionReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              {/* Story Sections */}
              {study.sections && study.sections.length > 0 && (
                <div className="space-y-10">
                  {study.sections.map((section: any, index: number) => {
                    const isWorkingRelationship = section.title.toLowerCase().includes("working relationship")
                    const isEngagementSection = section.title.toLowerCase().includes("engagement")

                    // Special custom presentation for "The TECUNIQUE Engagement" if engagementBlocks are available
                    if (isEngagementSection && study.engagementBlocks && study.engagementBlocks.length > 0) {
                      return (
                        <SectionReveal key={index}>
                          <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                              {section.title}
                            </h2>

                            {/* 4 Capability Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {study.engagementBlocks.map((block: any, bIdx: number) => (
                                <div
                                  key={bIdx}
                                  className="rounded-2xl p-5 border border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-all shadow-sm flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="flex items-center justify-between mb-2.5">
                                      <span
                                        className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                                        style={{ background: `${primaryColor}12`, color: primaryColor }}
                                      >
                                        {block.scope}
                                      </span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-base mb-2">
                                      {block.title}
                                    </h3>
                                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                      {block.description}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Scope Clarification Badge */}
                            <div className="bg-blue-50/60 border border-blue-200/60 rounded-xl p-4 text-xs md:text-sm text-slate-700 flex items-center justify-between flex-wrap gap-2">
                              <span className="font-semibold text-blue-900">Scope at a glance:</span>
                              <div className="flex items-center gap-4 flex-wrap text-xs">
                                <span className="inline-flex items-center gap-1.5 font-medium text-slate-800">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                                  JMWE Cloud: <strong>Development + QA</strong>
                                </span>
                                <span className="inline-flex items-center gap-1.5 font-medium text-slate-800">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                                  JMWE Data Center: <strong>QA</strong>
                                </span>
                              </div>
                            </div>
                          </div>
                        </SectionReveal>
                      )
                    }

                    // Special editorial callout styling for "Building the Working Relationship"
                    if (isWorkingRelationship) {
                      return (
                        <SectionReveal key={index}>
                          <div className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-slate-50 to-blue-50/40 border border-slate-200 shadow-sm space-y-4">
                            <h2 className="text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5">
                              <Sparkles className="h-5 w-5 text-blue-600" />
                              {section.title}
                            </h2>
                            <div className="text-slate-700 leading-relaxed space-y-3 text-base">
                              {section.content
                                ?.split("\n\n")
                                .map((para: string, pIdx: number) => (
                                  <p key={pIdx} className="leading-relaxed">
                                    {para}
                                  </p>
                                ))}
                            </div>
                          </div>
                        </SectionReveal>
                      )
                    }

                    // Standard editorial section
                    return (
                      <SectionReveal key={index}>
                        <div className="space-y-3">
                          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                            {section.title}
                          </h2>
                          <div className="text-slate-600 leading-relaxed space-y-3 text-base">
                            {section.content
                              ?.split("\n\n")
                              .map((para: string, pIdx: number) => (
                                <p key={pIdx} className="leading-relaxed">
                                  {para}
                                </p>
                              ))}
                          </div>
                        </div>
                      </SectionReveal>
                    )
                  })}
                </div>
              )}

              {/* Technology & QA Stack (3 Compact Cards) */}
              {study.techStack && study.techStack.length > 0 && (
                <SectionReveal>
                  <div className="space-y-4 pt-2">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-1">
                        Technology & QA Stack
                      </h2>
                      <p className="text-sm text-slate-500">
                        Technologies and Atlassian platforms used across the JMWE Cloud development and JMWE Cloud/Data Center QA engagement.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.techStack.map((group: any, gIdx: number) => {
                        const Icon = gIdx === 0 ? Code2 : gIdx === 1 ? Layers : TestTube2
                        return (
                          <div
                            key={gIdx}
                            className="rounded-2xl p-5 border border-slate-200 bg-white shadow-sm flex flex-col"
                          >
                            <div className="flex items-center gap-2 mb-4">
                              <div
                                className="h-8 w-8 rounded-lg flex items-center justify-center text-blue-600"
                                style={{ background: `${primaryColor}12` }}
                              >
                                <Icon className="h-4 w-4" />
                              </div>
                              <h3 className="font-bold text-slate-900 text-sm">{group.category}</h3>
                            </div>
                            <ul className="space-y-2 mt-auto">
                              {group.items.map((item: string, iIdx: number) => (
                                <li
                                  key={iIdx}
                                  className="text-xs text-slate-600 flex items-center gap-2 font-medium"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </SectionReveal>
              )}

              {/* Testimonial Block — Client Perspective */}
              {study.testimonial && (
                <SectionReveal>
                  <div
                    className="rounded-3xl p-8 md:p-10 border shadow-sm relative overflow-hidden bg-slate-900 text-white"
                    style={{ borderColor: `${primaryColor}40` }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                        Client Perspective
                      </span>
                    </div>

                    <blockquote className="text-lg md:text-xl text-slate-100 leading-relaxed italic mb-8 font-normal">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </blockquote>

                    <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full text-white text-base font-bold shrink-0 shadow-md"
                        style={{ background: `linear-gradient(135deg, ${primaryColor}, #4f46e5)` }}
                      >
                        {study.testimonial.author
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-base font-bold text-white">
                          {study.testimonial.author}
                        </p>
                        {study.testimonial.role && (
                          <p className="text-xs text-slate-400 font-medium mt-0.5">
                            {study.testimonial.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              )}

              {/* Related Capabilities Links */}
              <SectionReveal>
                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 font-display">
                    Related Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { title: "Dedicated Software Teams", href: "/services/dedicated-teams" },
                      { title: "Atlassian App Development & QA", href: "/services/atlassian" },
                      { title: "Software QA & Automation Testing", href: "/services/qa" },
                    ].map((srv, sIdx) => (
                      <Link
                        key={sIdx}
                        href={srv.href}
                        className="group p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-300 transition-all flex items-center justify-between text-xs font-semibold text-slate-800 shadow-sm"
                      >
                        <span>{srv.title}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* At a Glance */}
              <SectionReveal>
                <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 md:p-7 shadow-sm space-y-5">
                  <h3 className="text-base font-bold text-slate-900 font-display uppercase tracking-wider text-slate-400 text-xs">
                    At a Glance
                  </h3>

                  <div className="space-y-4 text-sm">
                    {study.atAGlance ? (
                      <>
                        <div className="pb-3 border-b border-slate-200/60">
                          <p className="text-xs text-slate-500 font-medium">Client</p>
                          <p className="text-sm font-bold text-slate-900 mt-0.5">{study.atAGlance.client}</p>
                        </div>
                        <div className="pb-3 border-b border-slate-200/60">
                          <p className="text-xs text-slate-500 font-medium">Product</p>
                          <p className="text-sm font-bold text-slate-900 mt-0.5">{study.atAGlance.product}</p>
                        </div>
                        <div className="pb-3 border-b border-slate-200/60">
                          <p className="text-xs text-slate-500 font-medium">Ecosystem</p>
                          <p className="text-sm font-semibold text-slate-900 mt-0.5">{study.atAGlance.ecosystem}</p>
                        </div>
                        <div className="pb-3 border-b border-slate-200/60">
                          <p className="text-xs text-slate-500 font-medium">Engagement</p>
                          <p className="text-xs font-semibold text-slate-800 mt-0.5 leading-snug">
                            {study.atAGlance.engagement}
                          </p>
                        </div>
                        <div className="pb-3 border-b border-slate-200/60">
                          <p className="text-xs text-slate-500 font-medium">Location</p>
                          <p className="text-sm font-semibold text-slate-900 mt-0.5">{study.atAGlance.location}</p>
                        </div>
                        {study.atAGlance.milestone && (
                          <div>
                            <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">Key Milestone</p>
                            <p className="text-xs font-bold text-slate-900 mt-1 leading-snug">
                              {study.atAGlance.milestone}
                            </p>
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="flex items-start gap-3">
                          <Building2 className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-slate-500">Industry</p>
                            <p className="text-sm font-semibold text-slate-900">{study.industry}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-slate-500">Partnership</p>
                            <p className="text-sm font-semibold text-slate-900">{study.partnership}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-slate-500">Service Provided</p>
                            <p className="text-sm font-semibold text-slate-900">{study.category}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Globe2 className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs text-slate-500">Location</p>
                            <p className="text-sm font-semibold text-slate-900">{study.location}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </SectionReveal>

              {/* Split Tags: Product & Ecosystem vs TECUNIQUE Services */}
              <SectionReveal>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm space-y-6">
                  {study.ecosystemTags ? (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-display">
                        Product & Ecosystem
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {study.ecosystemTags.map((tag: string) => (
                          <span
                            key={tag}
                            className="rounded-lg px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {study.serviceTags ? (
                    <div className={study.ecosystemTags ? "pt-4 border-t border-slate-100" : ""}>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-display">
                        TECUNIQUE Services
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {study.serviceTags.map((tag: string) => (
                          <span
                            key={tag}
                            className="rounded-lg px-2.5 py-1 text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-display">
                        Technologies & Services
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {study.tags?.map((tag: string) => (
                          <span
                            key={tag}
                            className="rounded-full px-3 py-1 text-xs font-semibold border bg-white"
                            style={{
                              color: primaryColor,
                              borderColor: `${primaryColor}30`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </SectionReveal>

              {/* Partnership Milestones */}
              <SectionReveal>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
                    Partnership Milestones
                  </h3>

                  {study.milestones && study.milestones.length > 0 ? (
                    <div className="space-y-4">
                      {study.milestones.map((m: any, mIdx: number) => (
                        <div key={mIdx} className="border-l-2 border-blue-500 pl-3.5 py-0.5 space-y-0.5">
                          <p className="text-xs font-bold text-slate-900">{m.title}</p>
                          <p className="text-xs text-slate-600 leading-relaxed">{m.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2.5">
                      {study.results?.map((result: any) => (
                        <div
                          key={result.label}
                          className="rounded-xl p-3.5 flex flex-col items-center justify-center text-center bg-slate-50 border border-slate-100"
                        >
                          <p className="font-display text-lg font-extrabold text-blue-600 mb-1">
                            {result.metric}
                          </p>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            {result.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
