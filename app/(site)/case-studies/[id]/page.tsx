import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Users,
  Star,
  CheckCircle2,
  Building2,
  Globe2,
  Layers,
  Code2,
  TestTube2,
  Info,
  Sparkles,
  Workflow,
  Cloud,
  ShieldCheck,
  Server,
  Activity,
  Bot,
  Quote,
  Zap,
  UserCheck,
  TrendingUp,
  Briefcase,
  Sliders,
  Plane,
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
    title:
      study.seoTitle ||
      (study.id === "innovalog"
        ? "JMWE Development & QA Case Study"
        : study.id === "qotilabs"
        ? "Rich Filters QA & Automation Case Study"
        : study.id === "oppscience"
        ? "OPPSCIENCE Product Engineering & QA Case Study"
        : study.id === "skyselect"
        ? "SkySelect India Team Build & Transition Case Study"
        : `${study.company} Case Study`),
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

  // Filter upper narrative sections
  const upperSections = (study.sections || []).filter((section: any) => {
    const title = section.title.toLowerCase()
    return (
      !title.includes("engagement") &&
      !title.includes("dedicated team") &&
      !title.includes("embedded engineering") &&
      !title.includes("owning release") &&
      !title.includes("product support") &&
      !title.includes("automation") &&
      !title.includes("migration") &&
      !title.includes("working as part") &&
      !title.includes("supporting frequent") &&
      !title.includes("new chapter") &&
      !title.includes("continuity") &&
      !title.includes("planned transition") &&
      !title.includes("demonstrates") &&
      !title.includes("more than additional") &&
      !title.includes("conclusion")
    )
  })

  // Concluding / Deeper narrative sections before testimonial/CTA
  const concludingSections = (study.sections || []).filter((section: any) => {
    const title = section.title.toLowerCase()
    return (
      title.includes("continuity") ||
      title.includes("planned transition") ||
      title.includes("demonstrates") ||
      title.includes("working as part") ||
      title.includes("supporting frequent") ||
      title.includes("new chapter")
    )
  })

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
        <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-14">

          {/* ─── Upper Section 1: Story Narrative + At a Glance & Secondary Quote ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Narrative Sections */}
            <div className="lg:col-span-8 space-y-8">
              {upperSections.map((section: any, index: number) => {
                const paragraphs = (section.content || "")
                  .replace(/\\r\\n/g, "\n")
                  .replace(/\\n/g, "\n")
                  .replace(/\\r/g, "\n")
                  .split(/\n\s*\n/)
                  .map((p: string) => p.trim())
                  .filter(Boolean)

                return (
                  <SectionReveal key={index}>
                    <div className="space-y-2.5">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                          {section.title}
                        </h2>
                        {section.subtitle && (
                          <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-blue-600 mt-1">
                            {section.subtitle}
                          </p>
                        )}
                      </div>
                      <div className="text-slate-600 leading-relaxed space-y-3 text-base pt-1">
                        {paragraphs.map((para: string, pIdx: number) => (
                          <p key={pIdx} className="leading-relaxed whitespace-pre-line">
                            {para}
                          </p>
                        ))}
                      </div>

                      {/* Optional enterprise customer note on Product section */}
                      {index === 0 && study.endClientsNote && (
                        <div className="mt-3 rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 text-xs md:text-sm text-slate-600 leading-relaxed">
                          <span className="font-semibold text-slate-900">Enterprise Adoption: </span>
                          {study.endClientsNote}
                        </div>
                      )}
                    </div>
                  </SectionReveal>
                )
              })}
            </div>

            {/* Right Column: At a Glance Sidebar + Secondary Testimonial */}
            <div className="lg:col-span-4 space-y-5">
              <SectionReveal>
                <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm space-y-4">
                  <h3 className="text-base font-bold text-slate-900 font-display uppercase tracking-wider text-slate-400 text-xs">
                    At a Glance
                  </h3>

                  <div className="space-y-3 text-sm">
                    {study.atAGlance ? (
                      <>
                        <div className="pb-2.5 border-b border-slate-200/60">
                          <p className="text-xs text-slate-500 font-medium">Client</p>
                          <p className="text-sm font-bold text-slate-900 mt-0.5">{study.atAGlance.client}</p>
                        </div>
                        {study.atAGlance.industry && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Industry</p>
                            <p className="text-sm font-semibold text-slate-900 mt-0.5">{study.atAGlance.industry}</p>
                          </div>
                        )}
                        {study.atAGlance.product && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Product</p>
                            <p className="text-sm font-bold text-slate-900 mt-0.5">{study.atAGlance.product}</p>
                          </div>
                        )}
                        {study.atAGlance.productJourney && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Product Journey</p>
                            <p className="text-sm font-bold text-blue-700 mt-0.5 font-mono text-xs">
                              {study.atAGlance.productJourney}
                            </p>
                          </div>
                        )}
                        {study.atAGlance.duration && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Engagement Duration</p>
                            <p className="text-sm font-semibold text-slate-900 mt-0.5">{study.atAGlance.duration}</p>
                          </div>
                        )}
                        {study.atAGlance.teamGrowth && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Team Growth</p>
                            <p className="text-sm font-bold text-blue-700 mt-0.5 font-mono text-xs">
                              {study.atAGlance.teamGrowth}
                            </p>
                          </div>
                        )}
                        {study.atAGlance.teamComposition && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Team Composition</p>
                            <p className="text-xs font-semibold text-slate-900 mt-0.5">{study.atAGlance.teamComposition}</p>
                          </div>
                        )}
                        {study.atAGlance.teamSize && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Current Team</p>
                            <p className="text-sm font-bold text-slate-900 mt-0.5">{study.atAGlance.teamSize}</p>
                          </div>
                        )}
                        <div className="pb-2.5 border-b border-slate-200/60">
                          <p className="text-xs text-slate-500 font-medium">Engagement Model</p>
                          <p className="text-xs font-semibold text-slate-800 mt-0.5 leading-snug">
                            {study.atAGlance.engagement}
                          </p>
                        </div>
                        {study.atAGlance.clientControl && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Client Control</p>
                            <p className="text-xs font-medium text-slate-700 mt-0.5 leading-relaxed">
                              {study.atAGlance.clientControl}
                            </p>
                          </div>
                        )}
                        {study.atAGlance.tecuniqueScope && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">TECUNIQUE Scope</p>
                            <p className="text-[11px] font-medium text-slate-600 mt-0.5 leading-relaxed">
                              {study.atAGlance.tecuniqueScope}
                            </p>
                          </div>
                        )}
                        {study.atAGlance.coreAreas && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Core Areas</p>
                            <p className="text-xs font-medium text-slate-700 mt-0.5 leading-relaxed">
                              {study.atAGlance.coreAreas}
                            </p>
                          </div>
                        )}
                        {study.atAGlance.relationship && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Relationship</p>
                            <p className="text-sm font-semibold text-slate-900 mt-0.5">
                              {study.atAGlance.relationship}
                            </p>
                          </div>
                        )}
                        <div className="pb-2.5 border-b border-slate-200/60">
                          <p className="text-xs text-slate-500 font-medium">Location</p>
                          <p className="text-xs font-semibold text-slate-900 mt-0.5">{study.atAGlance.location}</p>
                        </div>
                        {study.atAGlance.milestone && (
                          <div>
                            <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">Key Milestone</p>
                            <p className="text-xs font-bold text-slate-900 mt-0.5 leading-snug">
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

              {/* Secondary Testimonial Card (Mickael Augello, CTO) */}
              {study.secondaryTestimonial && (
                <SectionReveal>
                  <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 p-5 shadow-xs space-y-2.5">
                    <div className="flex items-center gap-1.5 text-blue-600">
                      <Quote className="h-4 w-4" />
                      <span className="text-[11px] font-bold uppercase tracking-wider">
                        Engineering Perspective
                      </span>
                    </div>
                    <blockquote className="text-xs text-slate-700 leading-relaxed italic whitespace-pre-line">
                      &ldquo;{study.secondaryTestimonial.quote}&rdquo;
                    </blockquote>
                    <div className="pt-2 border-t border-blue-200/50 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-900">
                          {study.secondaryTestimonial.author}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {study.secondaryTestimonial.role}
                        </p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              )}
            </div>
          </div>

          {/* ─── Upper Section 2: Engagement Capability Blocks + Milestones (Same Line) ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Engagement Model Cards */}
            <div className="lg:col-span-8 space-y-5">
              <SectionReveal>
                <div className="space-y-5">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                      {study.id === "oppscience"
                        ? "The TECUNIQUE Dedicated Team"
                        : study.id === "skyselect"
                        ? "The Engagement Model"
                        : "The TECUNIQUE Engagement"}
                    </h2>
                    {study.id === "oppscience" && (
                      <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-blue-600 mt-0.5">
                        A 12-Member Development & QA Team Integrated into OPPSCIENCE
                      </p>
                    )}
                    {study.id === "skyselect" && (
                      <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-blue-600 mt-0.5">
                        A Build–Operate–Transition Approach
                      </p>
                    )}
                  </div>

                  {/* Capability Blocks (2x2 Cards) */}
                  {study.engagementBlocks && study.engagementBlocks.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {study.engagementBlocks.map((block: any, bIdx: number) => {
                        const isLastOdd =
                          study.engagementBlocks.length % 2 !== 0 &&
                          bIdx === study.engagementBlocks.length - 1
                        return (
                          <div
                            key={bIdx}
                            className={`rounded-2xl p-4.5 border border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-all shadow-2xs flex flex-col justify-between ${
                              isLastOdd ? "sm:col-span-2" : ""
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span
                                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md"
                                  style={{ background: `${primaryColor}12`, color: primaryColor }}
                                >
                                  {block.scope}
                                </span>
                              </div>
                              <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1.5">
                                {block.title}
                              </h3>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {block.description}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* Explicit Responsibility Boundary Callout (for SkySelect) */}
                  {study.responsibilityCallout && (
                    <div className="rounded-2xl border border-blue-200/80 bg-gradient-to-r from-blue-50/90 via-sky-50/50 to-white p-4.5 shadow-2xs space-y-1.5">
                      <div className="flex items-center gap-2 text-blue-700">
                        <ShieldCheck className="h-4.5 w-4.5 shrink-0" />
                        <h4 className="text-xs md:text-sm font-bold tracking-tight">
                          {study.responsibilityCallout.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {study.responsibilityCallout.content}
                      </p>
                    </div>
                  )}

                  {/* Compact Embedded Leadership Callout Band for OPPSCIENCE */}
                  {study.embeddedLeadership && (
                    <div className="rounded-2xl border border-blue-200/80 bg-gradient-to-r from-blue-50/90 via-sky-50/50 to-white p-4.5 shadow-2xs space-y-2">
                      <div className="flex items-center gap-2 text-blue-700">
                        <ShieldCheck className="h-4.5 w-4.5 shrink-0" />
                        <h4 className="text-xs md:text-sm font-bold tracking-tight">
                          {study.embeddedLeadership.title} & Mixed Squads
                        </h4>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {study.embeddedLeadership.description}
                      </p>
                      <div className="pt-1">
                        <span className="inline-block text-[11px] md:text-xs font-semibold text-blue-950 bg-white/90 border border-blue-200/70 px-3 py-1 rounded-lg">
                          {study.embeddedLeadership.tagline}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </SectionReveal>
            </div>

            {/* Right Column: Partnership Milestones */}
            <div className="lg:col-span-4">
              <SectionReveal>
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-3.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
                    Engagement Milestones
                  </h3>

                  {study.milestones && study.milestones.length > 0 ? (
                    <div className="space-y-3">
                      {study.milestones.map((m: any, mIdx: number) => (
                        <div key={mIdx} className="border-l-2 border-blue-500 pl-3 py-0.5 space-y-0.5">
                          <p className="text-xs font-bold text-slate-900">{m.title}</p>
                          <p className="text-[11px] text-slate-600 leading-relaxed">{m.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {study.results?.map((result: any) => (
                        <div
                          key={result.label}
                          className="rounded-xl p-3 flex flex-col items-center justify-center text-center bg-slate-50 border border-slate-100"
                        >
                          <p className="font-display text-base font-extrabold text-blue-600 mb-0.5">
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

          {/* ─── SkySelect Specific Feature: Rapid Growth & Two Teams ─── */}
          {study.teamGrowthMetric && study.teamCategories && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                {/* 7 -> 60+ Main Proof Point Banner */}
                <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50/90 via-sky-50/40 to-white p-6 md:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-display">
                      Rapid Team Growth
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">
                      From Approximately 7 to More Than 60 Professionals
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 max-w-xl leading-relaxed">
                      {study.teamGrowthMetric.description}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-blue-200/80 bg-white p-4 sm:p-5 text-center shadow-xs shrink-0 min-w-[150px]">
                    <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-display tracking-tight">
                      {study.teamGrowthMetric.start} → {study.teamGrowthMetric.end}
                    </p>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                      {study.teamGrowthMetric.label}
                    </p>
                  </div>
                </div>

                {/* Two Types of Teams Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {study.teamCategories.map((cat: any, cIdx: number) => (
                    <div
                      key={cIdx}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between space-y-4"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600 shrink-0">
                            {cIdx === 0 ? <Code2 className="h-4 w-4" /> : <Briefcase className="h-4 w-4" />}
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 text-base">{cat.type}</h3>
                            <p className="text-xs text-blue-600 font-semibold">{cat.role}</p>
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          {cat.desc}
                        </p>
                        <div className="rounded-xl bg-slate-50 border border-slate-200/60 p-2.5 text-[11px] font-mono text-slate-700">
                          {cat.tech}
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-400 italic pt-2 border-t border-slate-100">
                        {cat.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── SkySelect Specific Feature: Recruitment & Client Selection Flow ─── */}
          {study.selectionFlow && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <UserCheck className="h-5 w-5 text-blue-600 shrink-0" />
                    Recruitment & Client Selection
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    TECUNIQUE recruited. SkySelect selected and managed.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 md:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                    {study.selectionFlow.map((stepItem: any, sIdx: number) => (
                      <div
                        key={sIdx}
                        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs flex flex-col justify-between group hover:border-blue-200 transition-colors"
                      >
                        <div>
                          <span className="text-xs font-bold text-blue-600 font-mono mb-1 block">
                            Step {stepItem.step}
                          </span>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                            {stepItem.title}
                          </h4>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed mt-2">
                          {stepItem.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── SkySelect Specific Feature: Operational Layer Managed by TECUNIQUE ─── */}
          {study.operationalLayer && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <Sliders className="h-5 w-5 text-blue-600 shrink-0" />
                    What TECUNIQUE Managed Locally
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                    The local operational, statutory, and employment layer provided behind the client-managed organization.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {study.operationalLayer.map((layer: any, lIdx: number) => (
                    <div
                      key={lIdx}
                      className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs space-y-1 flex flex-col justify-between hover:border-blue-300 transition-colors"
                    >
                      <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                        {layer.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        {layer.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── SkySelect Specific Feature: The Full Engagement Lifecycle (6 Steps) ─── */}
          {study.lifecycleSteps && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <Workflow className="h-6 w-6 text-blue-600 shrink-0" />
                    The Full Engagement Lifecycle
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Build → Operate → Scale → Transition
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 md:p-8 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {study.lifecycleSteps.map((lStep: any, lIdx: number) => (
                      <div
                        key={lIdx}
                        className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4.5 shadow-2xs space-y-2 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[11px] font-bold text-blue-600 font-mono">
                              Phase {lStep.phase}
                            </span>
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                            {lStep.title}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {lStep.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── OPPSCIENCE Technology Evolution (Single 5-Column Container) ─── */}
          {study.id === "oppscience" && study.techStack && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <Server className="h-6 w-6 text-blue-600 shrink-0" />
                    Technology Evolution
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    An engineering stack that evolved alongside the platform across frameworks, infrastructure, and deployment models.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x divide-slate-100">
                    {study.techStack.map((group: any, gIdx: number) => {
                      const Icon =
                        gIdx === 0 ? Code2 : gIdx === 1 ? Server : gIdx === 2 ? Layers : gIdx === 3 ? Cloud : TestTube2
                      return (
                        <div
                          key={gIdx}
                          className={`flex flex-col justify-between space-y-3 ${
                            gIdx === 0 ? "lg:pr-4" : gIdx === 4 ? "lg:pl-4" : "lg:px-4"
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div
                                className="h-7 w-7 rounded-lg flex items-center justify-center text-blue-600 shrink-0"
                                style={{ background: `${primaryColor}12` }}
                              >
                                <Icon className="h-3.5 w-3.5" />
                              </div>
                              <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                                {group.category}
                              </h3>
                            </div>
                            {group.subtitle && (
                              <p className="text-[10px] text-slate-400 font-medium mb-3 leading-snug">
                                {group.subtitle}
                              </p>
                            )}
                            <div className="flex flex-wrap gap-1.5">
                              {group.items.map((item: string, iIdx: number) => (
                                <span
                                  key={iIdx}
                                  className="text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200/70 px-2 py-0.5 rounded-md"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {study.techStackNote && (
                    <p className="text-[11px] text-slate-400 italic pt-4 mt-4 border-t border-slate-100 text-center sm:text-left">
                      {study.techStackNote}
                    </p>
                  )}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── OPPSCIENCE QA Automation Evolution ─── */}
          {study.id === "oppscience" && study.automationEvolution && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <Workflow className="h-6 w-6 text-blue-600 shrink-0" />
                    QA Automation Evolution
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Progression of automation toolsets from earlier Selenium test suites to modern Playwright and AI-assisted QA.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 md:p-7 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {study.automationEvolution.map((evo: any, eIdx: number) => (
                      <div
                        key={eIdx}
                        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs flex flex-col justify-between group hover:border-blue-200 transition-colors"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="text-[10px] font-bold text-blue-600 font-mono">
                              {evo.phase}
                            </span>
                            <span className="text-[10px] font-semibold text-blue-800 bg-blue-50/90 border border-blue-200/60 px-2 py-0.5 rounded-md">
                              {evo.tools}
                            </span>
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                            {evo.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            {evo.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[10px] text-slate-400 italic text-center pt-2 border-t border-slate-200/60">
                    Note: AI tools assist engineers; generated test cases and automation remain subject to engineering review.
                  </p>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── OPPSCIENCE QA Embedded Across Lifecycle ─── */}
          {study.id === "oppscience" && study.qaLifecycleGrid && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <TestTube2 className="h-5 w-5 text-blue-600 shrink-0" />
                    QA Embedded Across the Product Lifecycle
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                    QA functions as an integrated part of product delivery rather than a disconnected final check, protecting platform stability across concurrent release cycles.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {study.qaLifecycleGrid.map((qaItem: any, qIdx: number) => (
                    <div
                      key={qIdx}
                      className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-2xs space-y-1 flex flex-col justify-between hover:border-blue-300 transition-colors"
                    >
                      <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                        {qaItem.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug">
                        {qaItem.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── OPPSCIENCE Operational Cards ─── */}
          {study.id === "oppscience" && study.operationalCards && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <Zap className="h-5 w-5 text-blue-600 shrink-0" />
                    Operational & Technical Responsibilities
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                    Core operational capabilities delivered by the dedicated team spanning release coordination, tier-level support, performance testing, and non-deterministic AI evaluation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.operationalCards.map((card: any, cIdx: number) => (
                    <div
                      key={cIdx}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2 flex flex-col justify-between hover:shadow-xs transition-shadow"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1 text-blue-600">
                          {cIdx === 0 ? (
                            <ShieldCheck className="h-4 w-4" />
                          ) : cIdx === 1 ? (
                            <Users className="h-4 w-4" />
                          ) : cIdx === 2 ? (
                            <Activity className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                          <h3 className="text-sm font-bold text-slate-900 font-display">
                            {card.title}
                          </h3>
                        </div>
                        {card.subtitle && (
                          <p className="text-[11px] font-semibold text-blue-600 mb-2">
                            {card.subtitle}
                          </p>
                        )}
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── Innovalog / Generic 3-Card Tech Stack Fallback ─── */}
          {study.id === "innovalog" && study.techStack && study.techStack.length > 0 && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <Users className="h-6 w-6 text-blue-600 shrink-0" />
                    Technology & QA Stack
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Product technologies, Atlassian platforms, and QA tools used across the {study.company} engagement.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {study.techStack.map((group: any, gIdx: number) => {
                    const Icon = gIdx === 0 ? Code2 : gIdx === 1 ? Layers : TestTube2
                    return (
                      <div
                        key={gIdx}
                        className="rounded-2xl p-5 sm:p-6 border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col"
                      >
                        <div className="flex items-center gap-2.5 mb-4">
                          <div
                            className="h-8 w-8 rounded-lg flex items-center justify-center text-blue-600 shrink-0"
                            style={{ background: `${primaryColor}12` }}
                          >
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 text-sm sm:text-base">{group.category}</h3>
                            {group.subtitle && (
                              <p className="text-[11px] text-slate-400 font-medium">{group.subtitle}</p>
                            )}
                          </div>
                        </div>
                        <ul className="space-y-2 mt-auto">
                          {group.items.map((item: string, iIdx: number) => (
                            <li
                              key={iIdx}
                              className="text-xs sm:text-sm text-slate-600 flex items-center gap-2 font-medium"
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

          {/* ─── Qotilabs Specific: Automation Snapshot Pipeline ─── */}
          {study.automationWorkflow && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-2">
                    <Workflow className="h-6 w-6 text-blue-600 shrink-0" />
                    Building Repeatable Automation
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                    Rich Filters supported complex dashboard configurations and widgets. Qotilabs utilized an in-house Java automation framework with controlled test datasets to generate widgets, capture output snapshots, and compare them against stored goldens for rapid diff identification.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 md:p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 font-display">
                    Automation Snapshot Comparison Workflow
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
                    {study.automationWorkflow.map((stepItem: any, sIdx: number) => (
                      <div
                        key={sIdx}
                        className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs flex flex-col justify-between relative group hover:border-blue-300 transition-colors"
                      >
                        <div>
                          <span className="text-xs font-bold text-blue-600 font-mono mb-1.5 block">
                            {stepItem.step}
                          </span>
                          <h4 className="text-xs font-bold text-slate-900 mb-1 leading-snug">
                            {stepItem.title}
                          </h4>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-tight mt-2">
                          {stepItem.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── Qotilabs Specific: Cloud Migration QA Approach ─── */}
          {study.migrationSteps && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-2">
                    <Cloud className="h-6 w-6 text-blue-600 shrink-0" />
                    Validating the Data Center to Cloud Migration
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                    As Qotilabs migrated product capabilities from Jira Data Center to Cloud, TECUNIQUE QA engineers performed detailed validation comparing functionality, usability, and response behavior to safeguard feature stability across successive Cloud releases.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {study.migrationSteps.map((mStep: any, mIdx: number) => (
                    <div
                      key={mIdx}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded-md text-[11px] font-bold font-mono bg-blue-50 text-blue-600 mb-2">
                          {mStep.step}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {mStep.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed mt-auto pt-2">
                        {mStep.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── Concluding Narrative Sections ─── */}
          {concludingSections.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-slate-100">
              {concludingSections.map((section: any, index: number) => {
                const paragraphs = (section.content || "")
                  .replace(/\\r\\n/g, "\n")
                  .replace(/\\n/g, "\n")
                  .replace(/\\r/g, "\n")
                  .split(/\n\s*\n/)
                  .map((p: string) => p.trim())
                  .filter(Boolean)

                return (
                  <SectionReveal key={index}>
                    <div className="space-y-2.5">
                      <div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">
                          {section.title}
                        </h3>
                        {section.subtitle && (
                          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mt-0.5">
                            {section.subtitle}
                          </p>
                        )}
                      </div>
                      <div className="text-slate-600 leading-relaxed space-y-3 text-base pt-1">
                        {paragraphs.map((para: string, pIdx: number) => (
                          <p key={pIdx} className="leading-relaxed whitespace-pre-line">
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

          {/* ─── Client Perspective (Full-Width Sleek Dark Card) ─── */}
          {study.testimonial && (
            <SectionReveal>
              <div className="w-full rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-800 bg-[#0b1329] text-white relative overflow-hidden shadow-xl">
                {/* Decorative Dot Matrix on the right */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-25"
                  style={{
                    backgroundImage: "radial-gradient(#38bdf8 1.5px, transparent 1.5px)",
                    backgroundSize: "16px 16px",
                    maskImage: "linear-gradient(to right, transparent, black)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black)",
                  }}
                />

                <div className="relative z-10 space-y-4">
                  {/* Eyebrow */}
                  <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
                    CLIENT PERSPECTIVE
                  </span>

                  {/* 5 Stars */}
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-sm sm:text-base md:text-[15px] text-slate-200 leading-relaxed italic max-w-4xl font-normal pt-1 whitespace-pre-line">
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full text-white text-xs font-bold shrink-0 shadow-md bg-blue-600">
                      {study.testimonial.author
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white leading-tight">
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
              </div>
            </SectionReveal>
          )}

          {/* ─── Related Capabilities Links (Full-Width) ─── */}
          <SectionReveal>
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3.5 font-display flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-blue-600" />
                Related Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {(
                  study.relatedServices || [
                    { title: "Dedicated Software Teams", href: "/services/dedicated-teams" },
                    { title: "Product Engineering & Custom Software", href: "/services/product-engineering" },
                    { title: "Software QA & Automation Testing", href: "/services/qa" },
                  ]
                ).map((srv: any, sIdx: number) => (
                  <Link
                    key={sIdx}
                    href={srv.href}
                    className={`group p-3.5 rounded-2xl border transition-all flex items-center justify-between text-xs sm:text-sm font-semibold shadow-xs hover:shadow-sm ${
                      srv.primary
                        ? "border-blue-300 bg-blue-50/60 text-blue-900 hover:bg-blue-50 hover:border-blue-400"
                        : "border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-300 text-slate-800"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {srv.title}
                      {srv.primary && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded-full">
                          Primary
                        </span>
                      )}
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </SectionReveal>

        </div>
      </section>

      {/* ─── Slim & Short Pre-Footer CTA Section ─── */}
      <section className="bg-slate-50 border-t border-slate-200/80 py-8 md:py-10">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <SectionReveal>
            <div className="rounded-2xl border border-blue-100/90 bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/60 p-6 md:p-7 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
                  <Sparkles className="h-3.5 w-3.5" />
                  {study.cta?.eyebrow || "Dedicated Software Teams"}
                </span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 tracking-tight">
                  {study.cta?.title || "Build a Dedicated Engineering & QA Team Around Your Product"}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 max-w-xl leading-relaxed">
                  {study.cta?.description ||
                    "Discuss your product engineering, QA, automation, or long-term dedicated team requirements with TECUNIQUE."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                <Button
                  size="default"
                  className="rounded-xl px-5 h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-xs transition-all group w-full sm:w-auto"
                  asChild
                >
                  <Link href={study.cta?.buttonHref || "/contact"}>
                    {study.cta?.buttonText || "Discuss Your Team Requirements"}
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                {study.cta?.secondaryText && (
                  <Button
                    size="default"
                    variant="outline"
                    className="rounded-xl px-5 h-11 border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm shadow-xs transition-all w-full sm:w-auto"
                    asChild
                  >
                    <Link href={study.cta?.secondaryHref || "/services"}>
                      {study.cta.secondaryText}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
