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
  Layers,
  Code2,
  TestTube2,
  Info,
  Sparkles,
} from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import clientPromise from "@/lib/db"
import { Button } from "@/components/ui/button"
import { UnifiedCTA } from "@/components/pages/services/unified-cta"

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
    title: study.seoTitle || (study.id === "innovalog" ? "JMWE Development & QA Case Study" : `${study.company} Case Study`),
    description:
      study.metaDescription ||
      study.heroSubtitle ||
      study.tagline ||
      study.description,
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

      {/* Main Content Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-16">

          {/* ─── Upper Section: 2-Column Story + Sidebar ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left Column: Narrative & Engagement */}
            <div className="lg:col-span-8 space-y-10">
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
            </div>

            {/* Right Sidebar: At a Glance + Partnership Milestones */}
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

          {/* ─── Lower Section: Full-Width Layout ─── */}

          {/* 1. Technology & QA Stack (Full-Width 3-Column Grid) */}
          {study.techStack && study.techStack.length > 0 && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-2">
                    Technology & QA Stack
                  </h2>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Technologies and Atlassian platforms used across the JMWE Cloud development and JMWE Cloud/Data Center QA engagement.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {study.techStack.map((group: any, gIdx: number) => {
                    const Icon = gIdx === 0 ? Code2 : gIdx === 1 ? Layers : TestTube2
                    return (
                      <div
                        key={gIdx}
                        className="rounded-2xl p-6 border border-slate-200/90 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col"
                      >
                        <div className="flex items-center gap-3 mb-5">
                          <div
                            className="h-9 w-9 rounded-xl flex items-center justify-center text-blue-600 shrink-0"
                            style={{ background: `${primaryColor}12` }}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="font-bold text-slate-900 text-base">{group.category}</h3>
                        </div>
                        <ul className="space-y-2.5 mt-auto">
                          {group.items.map((item: string, iIdx: number) => (
                            <li
                              key={iIdx}
                              className="text-sm text-slate-600 flex items-center gap-2.5 font-medium"
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

          {/* 2. Client Perspective (Modern Premium Card) */}
          {study.testimonial && (
            <SectionReveal>
              <div className="pt-2">
                <div
                  className="max-w-3xl mx-auto rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-[0_10px_35px_rgba(37,99,235,0.06)] relative overflow-hidden bg-gradient-to-br from-slate-50/80 via-white to-blue-50/40 text-slate-900"
                >
                  {/* Decorative subtle ambient quote icon in background */}
                  <div className="absolute top-6 right-8 text-blue-100/60 pointer-events-none select-none">
                    <svg className="w-20 h-20 fill-current opacity-60" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <div className="flex flex-col items-center text-center mb-6 relative z-10">
                    <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full mb-3 shadow-xs">
                      Client Perspective
                    </span>
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-xs" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-800 leading-relaxed italic text-center mb-8 font-normal relative z-10">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-center gap-4 pt-6 border-t border-slate-200/80 relative z-10">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full text-white text-base font-bold shrink-0 shadow-md"
                      style={{ background: `linear-gradient(135deg, ${primaryColor}, #4f46e5)` }}
                    >
                      {study.testimonial.author
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </div>
                    <div className="text-left">
                      <p className="text-base font-bold text-slate-900 leading-tight">
                        {study.testimonial.author}
                      </p>
                      {study.testimonial.role && (
                        <p className="text-xs text-slate-500 font-medium mt-0.5">
                          {study.testimonial.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* 3. Related Capabilities Links (Full-Width) */}
          <SectionReveal>
            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 font-display text-center">
                Related Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "Dedicated Software Teams", href: "/services/dedicated-teams" },
                  { title: "Atlassian App Development & QA", href: "/services/atlassian" },
                  { title: "Software QA & Automation Testing", href: "/services/qa" },
                ].map((srv, sIdx) => (
                  <Link
                    key={sIdx}
                    href={srv.href}
                    className="group p-4 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-300 transition-all flex items-center justify-between text-sm font-semibold text-slate-800 shadow-sm"
                  >
                    <span>{srv.title}</span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </SectionReveal>

        </div>
      </section>

      {/* Full-Bleed Unified Pre-Footer CTA */}
      <UnifiedCTA
        eyebrow="NEED A DEDICATED TEAM FOR YOUR ATLASSIAN APP?"
        title={
          <>
            Need a Long-Term Team for <span className="text-[var(--brand-blue)]">Your Atlassian App?</span>
          </>
        }
        description="Discuss your Jira app development, QA, automation, or long-term engineering requirements with TECUNIQUE."
        primaryButtonText="Discuss Your Atlassian App Needs"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Atlassian Services"
        secondaryButtonLink="/services/atlassian"
      />
    </div>
  )
}
