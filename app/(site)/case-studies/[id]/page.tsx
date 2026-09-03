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
  GitBranch,
  Terminal,
  Cpu,
  Database,
  Search,
  FileText,
  Headphones,
  GitMerge,
  Calendar,
  CheckSquare,
  Wrench,
  Award,
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
        : study.id === "extensi"
        ? "Team Hub QA Automation Case Study | TECUNIQUE"
        : study.id === "customermatrix"
        ? "CustomerMatrix Dedicated Engineering Team Case Study | TECUNIQUE"
        : study.id === "polyspot"
        ? "PolySpot Dedicated Engineering Team Case Study | TECUNIQUE"
        : study.id === "appfire"
        ? "Appfire Engineering & QA Case Study | TECUNIQUE"
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
    if (study.id === "appfire") {
      return (
        title.includes("how the appfire relationship began") ||
        title.includes("preserving product knowledge")
      )
    }
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
      !title.includes("preserving product knowledge") &&
      !title.includes("planned transition") &&
      !title.includes("demonstrates") &&
      !title.includes("dedicated automation team") &&
      !title.includes("productivity & time-bound") &&
      !title.includes("more than additional") &&
      !title.includes("across the product lifecycle") &&
      !title.includes("supporting multiple") &&
      !title.includes("when polyspot reached") &&
      !title.includes("conclusion")
    )
  })

  // Specific lifecycle section for CustomerMatrix
  const lifecycleSection = (study.sections || []).find((s: any) =>
    s.title.toLowerCase().includes("across the product lifecycle")
  )

  // Specific continuity section for CustomerMatrix
  const continuitySection = (study.sections || []).find((s: any) =>
    s.title.toLowerCase().includes("team & relationship continuity") ||
    s.title.toLowerCase().includes("continuity")
  )

  // PolySpot specific lower narrative sections
  const polyspotReleasesSection = (study.sections || []).find((s: any) =>
    s.title.toLowerCase().includes("supporting multiple product releases")
  )
  const polyspotLifecycleEndSection = (study.sections || []).find((s: any) =>
    s.title.toLowerCase().includes("when polyspot reached") ||
    s.title.toLowerCase().includes("end of its product lifecycle")
  )

  // Concluding / Deeper narrative sections before testimonial/CTA (for other case studies)
  const concludingSections = (study.sections || []).filter((section: any) => {
    const title = section.title.toLowerCase()
    if (study.id === "customermatrix" || study.id === "polyspot" || study.id === "appfire") return false // Handled in dedicated slots
    return (
      title.includes("continuity") ||
      title.includes("planned transition") ||
      title.includes("demonstrates") ||
      title.includes("dedicated automation team") ||
      title.includes("productivity & time-bound") ||
      title.includes("working as part") ||
      title.includes("supporting frequent") ||
      title.includes("new chapter")
    )
  })

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.tecunique.com'

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Case Studies",
        "item": `${baseUrl}/case-studies`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${study.company} Case Study`,
        "item": `${baseUrl}/case-studies/${study.id}`
      }
    ]
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": study.heroTitle || `${study.company} Case Study`,
    "description": study.heroSubtitle || study.tagline || study.description,
    "url": `${baseUrl}/case-studies/${study.id}`,
    "author": {
      "@type": "Organization",
      "name": "TECUNIQUE Private Limited",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "TECUNIQUE Private Limited",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/logos/tecunique-icon-modern-refresh.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/case-studies/${study.id}`
    },
    "about": {
      "@type": "Organization",
      "name": study.company
    }
  }

  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Structured Data / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
              {study.logo && study.id !== "appfire" ? (
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
                  {study.initials || "AF"}
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
                        {study.atAGlance.ecosystem && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Ecosystem</p>
                            <p className="text-sm font-semibold text-slate-900 mt-0.5">{study.atAGlance.ecosystem}</p>
                          </div>
                        )}
                        {study.atAGlance.primaryProducts && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Primary Products</p>
                            <p className="text-sm font-bold text-slate-900 mt-0.5">{study.atAGlance.primaryProducts}</p>
                          </div>
                        )}
                        {study.atAGlance.additionalProducts && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Additional Product Relationship</p>
                            <p className="text-sm font-semibold text-slate-900 mt-0.5">{study.atAGlance.additionalProducts}</p>
                          </div>
                        )}
                        {study.atAGlance.product && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Product / Platform</p>
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
                        {study.atAGlance.teamSize && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Peak Team</p>
                            <p className="text-sm font-bold text-slate-900 mt-0.5">{study.atAGlance.teamSize}</p>
                          </div>
                        )}
                        {study.atAGlance.capabilities && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Capabilities</p>
                            <p className="text-xs font-semibold text-slate-900 mt-0.5 leading-snug">{study.atAGlance.capabilities}</p>
                          </div>
                        )}
                        {study.atAGlance.cloudEvolution && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Cloud Evolution</p>
                            <p className="text-xs font-semibold text-slate-900 mt-0.5 leading-snug font-mono text-blue-700">{study.atAGlance.cloudEvolution}</p>
                          </div>
                        )}
                        {study.atAGlance.teamComposition && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Capabilities</p>
                            <p className="text-xs font-semibold text-slate-900 mt-0.5 leading-snug">{study.atAGlance.teamComposition}</p>
                          </div>
                        )}
                        {study.atAGlance.engagement && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Engagement Model</p>
                            <p className="text-xs font-semibold text-slate-800 mt-0.5 leading-snug">
                              {study.atAGlance.engagement}
                            </p>
                          </div>
                        )}
                        {study.atAGlance.relationship && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Engagement Period</p>
                            <p className="text-sm font-semibold text-slate-900 mt-0.5">
                              {study.atAGlance.relationship}
                            </p>
                          </div>
                        )}
                        {study.atAGlance.coreTechnologies && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Core Technologies</p>
                            <p className="text-xs font-bold text-slate-900 mt-0.5 font-mono">
                              {study.atAGlance.coreTechnologies}
                            </p>
                          </div>
                        )}
                        {study.atAGlance.workingModel && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Working Model</p>
                            <p className="text-xs font-semibold text-slate-800 mt-0.5 leading-relaxed">
                              {study.atAGlance.workingModel}
                            </p>
                          </div>
                        )}
                        {study.atAGlance.clientControl && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Working Model</p>
                            <p className="text-xs font-semibold text-slate-800 mt-0.5 leading-relaxed">
                              {study.atAGlance.clientControl}
                            </p>
                          </div>
                        )}
                        {study.atAGlance.location && (
                          <div className="pb-2.5 border-b border-slate-200/60">
                            <p className="text-xs text-slate-500 font-medium">Client Location</p>
                            <p className="text-sm font-semibold text-slate-900 mt-0.5">{study.atAGlance.location}</p>
                          </div>
                        )}
                        {study.atAGlance.milestone && (
                          <div>
                            <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">Business Milestone</p>
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

              {/* Secondary Testimonial Card */}
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

          {/* ─── Upper Section 2: Engagement Capability Blocks / Phases + Milestones (for non-CustomerMatrix / non-PolySpot / non-Appfire) ─── */}
          {study.id !== "customermatrix" && study.id !== "polyspot" && study.id !== "appfire" && (study.engagementBlocks || study.engagementPhases) && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: Engagement Model / Phases */}
              <div className="lg:col-span-8 space-y-5">
                <SectionReveal>
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                        {study.id === "oppscience"
                          ? "The TECUNIQUE Dedicated Team"
                          : study.id === "skyselect"
                          ? "The Engagement Model"
                          : study.id === "extensi"
                          ? "From Foundation to Scaled Automation"
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
                      {study.id === "extensi" && (
                        <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-blue-600 mt-0.5">
                          A Two-Stage Automation Scaling Approach
                        </p>
                      )}
                    </div>

                    {/* eXtensi Two-Stage Phases */}
                    {study.engagementPhases && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {study.engagementPhases.map((phase: any, pIdx: number) => (
                          <div
                            key={pIdx}
                            className="rounded-2xl p-5 border border-slate-200 bg-slate-50/70 hover:bg-white transition-all shadow-2xs flex flex-col justify-between"
                          >
                            <div>
                              <span className="text-[11px] font-bold font-mono text-blue-600 mb-1 block">
                                {phase.phase}
                              </span>
                              <h3 className="font-bold text-slate-900 text-base mb-1.5">
                                {phase.title}
                              </h3>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {phase.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Standard Capability Blocks (2x2 Cards) */}
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
          )}

          {/* ─── Appfire Specific: 7-Person Focused Team Structure ─── */}
          {study.id === "appfire" && study.teamStructure && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                {/* Team Structure Banner & Breakdown */}
                <div className="rounded-3xl border border-amber-100 bg-gradient-to-r from-amber-50/80 via-orange-50/30 to-white p-6 md:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-600 font-display">
                      Team Structure
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">
                      {study.teamStructure.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 max-w-xl leading-relaxed">
                      {study.teamStructure.description}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-amber-200/80 bg-white p-4 sm:p-5 text-center shadow-xs shrink-0 min-w-[150px]">
                    <p className="text-3xl sm:text-4xl font-extrabold text-amber-600 font-display tracking-tight">
                      7
                    </p>
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">
                      Dedicated Professionals at Peak
                    </p>
                  </div>
                </div>

                {/* 2-Discipline Breakdown Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.teamStructure.breakdown.map((item: any, idx: number) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                            {item.discipline}
                          </span>
                          <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-md">
                            {item.count}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-amber-600 mb-2">
                          {item.roles}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── Appfire Specific: Architecture & Software Development + Cloud & Forge Evolution ─── */}
          {study.id === "appfire" && study.devCapabilities && study.cloudEvolution && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="space-y-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1">
                      <Code2 className="h-5 w-5 text-amber-600 shrink-0" />
                      Architecture & Software Development
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-600">
                      Working Across the Product, Not Only Individual Features
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    TECUNIQUE software engineers contributed across core services, technical design, APIs, UI modules, and Atlassian Marketplace delivery requirements.
                  </p>
                </div>

                {/* 8 Dev Capability Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {study.devCapabilities.map((dev: any, dIdx: number) => (
                    <div
                      key={dIdx}
                      className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs space-y-1 hover:border-amber-300 transition-colors"
                    >
                      <h4 className="text-xs font-bold text-slate-900">{dev.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-snug">{dev.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Senior Architect Progression Callout */}
                {study.architectProgression && (
                  <div className="rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50/70 via-white to-orange-50/50 p-5 shadow-2xs space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-700">
                      <Award className="h-4.5 w-4.5 shrink-0" />
                      <h4 className="text-xs sm:text-sm font-bold tracking-tight">
                        {study.architectProgression.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {study.architectProgression.content}
                    </p>
                  </div>
                )}

                {/* Dual Cloud & Forge Evolution Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2 text-amber-600">
                      <Cloud className="h-4.5 w-4.5 shrink-0" />
                      <h3 className="text-sm font-bold text-slate-900 font-display">
                        {study.cloudEvolution.forgeTitle}
                      </h3>
                    </div>
                    <p className="text-[11px] font-semibold text-amber-600">
                      {study.cloudEvolution.forgeSubtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {study.cloudEvolution.forgeDesc}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2">
                    <div className="flex items-center gap-2 text-amber-600">
                      <Server className="h-4.5 w-4.5 shrink-0" />
                      <h3 className="text-sm font-bold text-slate-900 font-display">
                        {study.cloudEvolution.migrationTitle}
                      </h3>
                    </div>
                    <p className="text-[11px] font-semibold text-amber-600">
                      {study.cloudEvolution.migrationSubtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {study.cloudEvolution.migrationDesc}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── Appfire Specific: QA Across Cloud, Data Center & Releases ─── */}
          {study.id === "appfire" && study.qaCapabilities && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="space-y-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1">
                      <TestTube2 className="h-5 w-5 text-amber-600 shrink-0" />
                      QA Across Cloud, Data Center & Releases
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-600">
                      Quality Engineering Throughout the Release Lifecycle
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    QA represented a major part of the Appfire engagement, covering both Cloud and Data Center versions across planning, regression, and release readiness.
                  </p>
                </div>

                {/* 9 QA Capability Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {study.qaCapabilities.map((qa: any, qIdx: number) => (
                    <div
                      key={qIdx}
                      className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs space-y-1 hover:border-amber-300 transition-colors"
                    >
                      <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                        {qa.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug">{qa.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Post-Migration QA Callout */}
                {study.postMigrationQa && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4.5 space-y-1.5 shadow-2xs">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                      {study.postMigrationQa.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {study.postMigrationQa.desc}
                    </p>
                  </div>
                )}
              </div>
            </SectionReveal>
          )}

          {/* ─── Appfire Specific: Specialized JMWE Automation & Technical Stack ─── */}
          {study.id === "appfire" && study.automationSection && study.automationStack && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="space-y-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1">
                      <Workflow className="h-5 w-5 text-amber-600 shrink-0" />
                      {study.automationSection.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-600">
                      {study.automationSection.subtitle}
                    </p>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2 whitespace-pre-line">
                    {study.automationSection.desc}
                  </div>
                </div>

                {/* Automation Framework Ownership */}
                <div className="rounded-2xl border border-amber-200/80 bg-white p-5 shadow-2xs space-y-2">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-amber-600" />
                    {study.automationSection.frameworkTitle}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {study.automationSection.frameworkDesc}
                  </p>
                </div>

                {/* 8-Card Specialized Automation Stack */}
                <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-5 md:p-6 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Specialized Automation & Delivery Toolset
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {study.automationStack.map((toolItem: any, tIdx: number) => (
                      <div
                        key={tIdx}
                        className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-2xs space-y-0.5"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          {toolItem.category}
                        </span>
                        <span className="text-xs font-bold text-slate-900 font-mono">
                          {toolItem.tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── Appfire Specific: L3 Technical Support ─── */}
          {study.id === "appfire" && study.l3Support && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-r from-amber-50/90 via-orange-50/40 to-white p-6 md:p-8 shadow-xs space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-amber-700 mb-1">
                      <Headphones className="h-5 w-5 shrink-0" />
                      <h3 className="text-lg md:text-xl font-display font-bold text-slate-900">
                        {study.l3Support.title}
                      </h3>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
                      {study.l3Support.subtitle}
                    </p>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      {study.l3Support.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {study.l3Support.responsibilities.map((resp: string, rIdx: number) => (
                      <div
                        key={rIdx}
                        className="rounded-xl bg-white border border-amber-200/60 p-3 flex items-start gap-2 shadow-2xs"
                      >
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-700 italic pt-2 border-t border-amber-200/60 font-medium">
                    {study.l3Support.closing}
                  </p>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── Appfire Specific: Embedded Working Model & Specialized QA Recruitment ─── */}
          {study.id === "appfire" && study.workingModel && study.recruitment && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                {/* Embedded Model */}
                <div className="space-y-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1">
                      <Users className="h-5 w-5 text-amber-600 shrink-0" />
                      {study.workingModel.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-600">
                      {study.workingModel.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {study.workingModel.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
                    {study.workingModel.processCards.map((pCard: any, pIdx: number) => (
                      <div
                        key={pIdx}
                        className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1 hover:border-amber-300 transition-colors"
                      >
                        <span className="text-xs font-bold text-amber-600 font-mono block">
                          {pCard.title}
                        </span>
                        <h4 className="text-xs font-bold text-slate-900">{pCard.role}</h4>
                        <p className="text-[11px] text-slate-500 leading-snug">{pCard.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specialized QA Recruitment */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2 text-amber-700">
                    <UserCheck className="h-4.5 w-4.5 shrink-0" />
                    <h4 className="text-xs sm:text-sm font-bold tracking-tight">
                      {study.recruitment.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {study.recruitment.desc}
                  </p>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── Appfire Specific: Rich Filters Expansion & 4 Main Value Pillars ─── */}
          {study.id === "appfire" && study.richFiltersExpansion && study.mainValues && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                {/* Rich Filters Expansion */}
                <div className="rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50/80 via-orange-50/40 to-white p-5 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <h4 className="text-sm font-bold text-slate-900">
                      {study.richFiltersExpansion.title}
                    </h4>
                    <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
                      {study.richFiltersExpansion.desc}
                    </p>
                  </div>
                  <Link
                    href={study.richFiltersExpansion.linkHref}
                    className="inline-flex items-center text-xs font-bold text-amber-700 bg-white border border-amber-300 px-3.5 py-2 rounded-xl hover:bg-amber-50 shadow-2xs shrink-0 transition-colors"
                  >
                    {study.richFiltersExpansion.linkText}
                  </Link>
                </div>

                {/* 4 Main Value Pillars */}
                <div className="space-y-3 pt-2">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1">
                      <Award className="h-5 w-5 text-amber-600 shrink-0" />
                      What the Long-Term Team Brought
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-600">
                      Main Value Delivered to Appfire
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {study.mainValues.map((val: any, vIdx: number) => (
                      <div
                        key={vIdx}
                        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs space-y-1.5 hover:border-amber-300 transition-colors"
                      >
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                          {val.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── Appfire Specific: Compact Engagement Timeline ─── */}
          {study.id === "appfire" && study.timeline && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <Calendar className="h-5 w-5 text-amber-600 shrink-0" />
                    Engagement Timeline
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Key milestones across the Appfire partnership lifecycle (Nov 2020 – April 2025).
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs">
                  <div className="space-y-4">
                    {study.timeline.map((item: any, tIdx: number) => (
                      <div key={tIdx} className="flex items-start gap-4 pb-3 last:pb-0 border-b last:border-0 border-slate-100">
                        <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md shrink-0">
                          {item.year}
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</h4>
                          <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── PolySpot Specific: GWT Engineering & Rebuilt Product Interfaces (Full-Width) ─── */}
          {study.id === "polyspot" && study.productAreas && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1">
                    <Code2 className="h-5 w-5 text-sky-600 shrink-0" />
                    Product Engineering & Interface Modernization
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sky-600">
                    What the Team Built Around the GWT Architecture
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    The engineering team developed and maintained key user-facing modules, custom framework components, and platform delivery tools:
                  </p>
                </div>

                {/* 5 Product Area Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {study.productAreas.map((area: any, aIdx: number) => (
                    <div
                      key={aIdx}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1 hover:border-sky-300 transition-colors"
                    >
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{area.title}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{area.desc}</p>
                    </div>
                  ))}
                </div>

                {study.gwtChallenge?.stackEvolutionNote && (
                  <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3.5 text-xs text-slate-600 leading-relaxed">
                    <span className="font-semibold text-slate-900">Frontend Stack Evolution: </span>
                    {study.gwtChallenge.stackEvolutionNote}
                  </div>
                )}
              </div>
            </SectionReveal>
          )}

          {/* ─── PolySpot & CustomerMatrix Specific: Team Growth & Breakdown ─── */}
          {study.teamGrowthMetric && study.teamBreakdown && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50/90 via-sky-50/40 to-white p-6 md:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-display">
                      Dedicated Team Growth
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">
                      {study.id === "polyspot"
                        ? "From 5 to 13 Dedicated Professionals"
                        : "Growing from 6 to 18 Dedicated Professionals"}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 max-w-xl leading-relaxed">
                      {study.teamGrowthMetric.description}
                    </p>
                    {study.teamEvolutionComparison && (
                      <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-semibold text-slate-700">
                        <span className="bg-white/80 border border-blue-200/60 px-2.5 py-1 rounded-md">
                          {study.teamEvolutionComparison.initial}
                        </span>
                        <span className="bg-blue-600 text-white px-2.5 py-1 rounded-md">
                          {study.teamEvolutionComparison.peak}
                        </span>
                      </div>
                    )}
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

                {/* Discipline Breakdown Grid */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 ${study.teamBreakdown.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-4`}>
                  {study.teamBreakdown.map((item: any, idx: number) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200 bg-white p-4.5 shadow-2xs space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-xs font-bold text-slate-900 font-display">
                            {item.discipline}
                          </span>
                          <span className="text-[11px] font-bold text-blue-600 bg-blue-50 border border-blue-200/70 px-2 py-0.5 rounded-md">
                            {item.count}
                          </span>
                        </div>
                        <p className="text-[11px] font-semibold text-blue-600 mb-1.5">
                          {item.roles}
                        </p>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── PolySpot Specific: Recruitment & Cross-Border R&D Organization ─── */}
          {study.id === "polyspot" && study.selectionFlow && study.crossBorderModel && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                {/* Recruitment Flow */}
                <div className="space-y-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1">
                      <UserCheck className="h-5 w-5 text-sky-600 shrink-0" />
                      Client-Selected Talent, Locally Managed by TECUNIQUE
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      PolySpot maintained direct control over technical evaluation while TECUNIQUE handled local employment and team infrastructure.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-5 md:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                      {study.selectionFlow.map((stepItem: any, sIdx: number) => (
                        <div
                          key={sIdx}
                          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs flex flex-col justify-between"
                        >
                          <div>
                            <span className="text-xs font-bold text-sky-600 font-mono mb-1 block">
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

                {/* Cross-Border R&D Working Model */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 flex items-center gap-2 mb-1">
                      <Workflow className="h-5 w-5 text-sky-600 shrink-0" />
                      {study.crossBorderModel.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sky-600">
                      {study.crossBorderModel.subtitle}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {study.crossBorderModel.description}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {study.crossBorderModel.squads}
                  </p>

                  <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-2xs space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Agile / Scrum Ceremonies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {study.crossBorderModel.ceremonies.map((c: string, cIdx: number) => (
                        <span
                          key={cIdx}
                          className="text-xs font-semibold text-sky-900 bg-sky-50 border border-sky-200/70 px-3 py-1 rounded-lg flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── CustomerMatrix Specific: Recruitment Flow (when not PolySpot) ─── */}
          {study.id === "customermatrix" && study.selectionFlow && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <UserCheck className="h-5 w-5 text-blue-600 shrink-0" />
                    Client-Selected Dedicated Talent
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    TECUNIQUE recruited. CustomerMatrix validated.
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
                  <p className="text-xs text-slate-500 italic mt-4 text-center sm:text-left">
                    This gave CustomerMatrix direct control over technical selection while TECUNIQUE managed the local recruitment and employment process in India.
                  </p>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── CustomerMatrix Specific: Management Model Visual Flow ─── */}
          {study.managementModel && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <Workflow className="h-5 w-5 text-blue-600 shrink-0" />
                    Cross-Border Engineering Management Model
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Integrated India–France Scrum collaboration with shared delivery responsibility.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 md:p-8 space-y-4 shadow-2xs">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Leadership & Direction</span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">CustomerMatrix France R&D</h4>
                      <p className="text-[11px] text-slate-600">Product priorities · Engineering direction · Overall management</p>
                    </div>

                    <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-4 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">Local Coordination</span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">India Team Leads</h4>
                      <p className="text-[11px] text-slate-600">Day-to-day coordination · Technical & QA leadership · Team responsibilities</p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Operations & HR</span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">TECUNIQUE Leadership & HR</h4>
                      <p className="text-[11px] text-slate-600">Performance management · Employment · Appraisals · Team continuity</p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-3.5 text-center text-xs text-blue-900 font-medium">
                    {study.managementModel.callout}
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── CustomerMatrix Specific: Product Engineering & QA Responsibilities ─── */}
          {study.productEngineeringAreas && study.qaCapabilities && study.id !== "polyspot" && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                {/* Product Engineering Areas */}
                <div className="space-y-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1">
                      <Code2 className="h-5 w-5 text-blue-600 shrink-0" />
                      Product Engineering Responsibilities
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      TECUNIQUE developers contributed across both frontend and backend platform layers.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {study.productEngineeringAreas.map((area: any, aIdx: number) => (
                      <div
                        key={aIdx}
                        className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs space-y-1 hover:border-blue-300 transition-colors"
                      >
                        <h4 className="text-xs font-bold text-slate-900">{area.title}</h4>
                        <p className="text-[11px] text-slate-500 leading-snug">{area.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* QA Across Release Lifecycle */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1">
                      <TestTube2 className="h-5 w-5 text-blue-600 shrink-0" />
                      QA Across the Release Lifecycle
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      Quality engineering spanning manual validation, automation, performance testing, and defect investigation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {study.qaCapabilities.map((qa: any, qIdx: number) => (
                      <div
                        key={qIdx}
                        className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs space-y-1 hover:border-blue-300 transition-colors"
                      >
                        <h4 className="text-xs font-bold text-slate-900">{qa.title}</h4>
                        <p className="text-[11px] text-slate-500 leading-snug">{qa.desc}</p>
                      </div>
                    ))}
                  </div>

                  {study.qaTools && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                      {study.qaTools.map((tool: any, tIdx: number) => (
                        <div key={tIdx} className="rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-center">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">{tool.category}</span>
                          <span className="text-xs font-bold text-slate-800">{tool.tools}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── PolySpot Specific: QA Across Product Lifecycle & Release Management ─── */}
          {study.id === "polyspot" && study.qaCapabilities && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div className="space-y-3">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1">
                      <TestTube2 className="h-5 w-5 text-sky-600 shrink-0" />
                      QA Across the Product Lifecycle
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sky-600">
                      From Functional Testing to Release Validation
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    QA became a significant part of the PolySpot dedicated team as the product and release scope expanded.
                  </p>
                </div>

                {/* 9 QA Lifecycle Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {study.qaCapabilities.map((qa: any, qIdx: number) => (
                    <div
                      key={qIdx}
                      className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-2xs space-y-1 hover:border-sky-300 transition-colors"
                    >
                      <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                        {qa.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug">{qa.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Release & Version Management Integration Card */}
                {study.releaseManagement && (
                  <div className="rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50/80 via-white to-blue-50/60 p-5 shadow-2xs space-y-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1 text-center sm:text-left">
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 justify-center sm:justify-start">
                        <GitBranch className="h-4 w-4 text-sky-600" />
                        {study.releaseManagement.title}
                      </h4>
                      <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
                        {study.releaseManagement.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 shrink-0">
                      {study.releaseManagement.tools.map((t: string, tIdx: number) => (
                        <span
                          key={tIdx}
                          className="text-xs font-mono font-bold text-sky-950 bg-white border border-sky-300 px-3 py-1 rounded-lg shadow-2xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </SectionReveal>
          )}

          {/* ─── PolySpot Specific: Technical Documentation + Product Support (Side-by-Side Dual Panels) ─── */}
          {study.id === "polyspot" && study.sideBySideCards && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Technical Documentation Panel */}
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 space-y-4 shadow-2xs flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sky-600">
                        <FileText className="h-5 w-5 shrink-0" />
                        <h3 className="text-lg font-bold text-slate-900 font-display">
                          {study.sideBySideCards.docTitle}
                        </h3>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                        {study.sideBySideCards.docSubtitle}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {study.sideBySideCards.docDesc}
                      </p>
                      <ul className="space-y-2 pt-1">
                        {study.sideBySideCards.docItems.map((item: string, iIdx: number) => (
                          <li key={iIdx} className="text-xs text-slate-700 flex items-center gap-2 font-medium">
                            <CheckCircle2 className="h-3.5 w-3.5 text-sky-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Product Support Panel */}
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 space-y-4 shadow-2xs flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sky-600">
                        <Headphones className="h-5 w-5 shrink-0" />
                        <h3 className="text-lg font-bold text-slate-900 font-display">
                          {study.sideBySideCards.supportTitle}
                        </h3>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                        {study.sideBySideCards.supportSubtitle}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {study.sideBySideCards.supportDesc}
                      </p>
                      <ul className="space-y-2 pt-1">
                        {study.sideBySideCards.supportItems.map((item: string, iIdx: number) => (
                          <li key={iIdx} className="text-xs text-slate-700 flex items-center gap-2 font-medium">
                            <CheckCircle2 className="h-3.5 w-3.5 text-sky-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Shared Lifecycle Tagline */}
                {study.sideBySideCards.lifecycleTagline && (
                  <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-3 text-center text-xs font-semibold text-sky-900 font-mono">
                    {study.sideBySideCards.lifecycleTagline}
                  </div>
                )}
              </div>
            </SectionReveal>
          )}

          {/* ─── CustomerMatrix Specific: Across the Product Lifecycle Narrative ─── */}
          {study.id === "customermatrix" && lifecycleSection && (
            <SectionReveal>
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                    {lifecycleSection.title}
                  </h2>
                  {lifecycleSection.subtitle && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mt-0.5">
                      {lifecycleSection.subtitle}
                    </p>
                  )}
                </div>
                <div className="text-slate-600 leading-relaxed space-y-3 text-base pt-1">
                  {(lifecycleSection.content || "")
                    .replace(/\\r\\n/g, "\n")
                    .replace(/\\n/g, "\n")
                    .replace(/\\r/g, "\n")
                    .split(/\n\s*\n/)
                    .map((p: string) => p.trim())
                    .filter(Boolean)
                    .map((para: string, pIdx: number) => (
                      <p key={pIdx} className="leading-relaxed whitespace-pre-line">
                        {para}
                      </p>
                    ))}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── CustomerMatrix Specific: AWS & DevOps + Data Engineering & Data Analysis ─── */}
          {study.devopsCapabilities && study.dataCapabilities && (
            <SectionReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                {/* AWS & DevOps Engineering Panel */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 space-y-4 shadow-2xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Cloud className="h-5 w-5 shrink-0" />
                      <h3 className="text-lg font-bold text-slate-900 font-display">AWS & DevOps Engineering</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Expanding into cloud delivery and infrastructure automation with operational responsibility across environments.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {study.devopsCapabilities.map((d: any, dIdx: number) => (
                        <div key={dIdx} className="rounded-xl bg-slate-50 border border-slate-200/70 p-3 space-y-0.5">
                          <h4 className="text-xs font-bold text-slate-900">{d.title}</h4>
                          <p className="text-[11px] text-slate-500 leading-snug">{d.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Data Engineering & Data Analysis Panel */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7 space-y-4 shadow-2xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-blue-600">
                      <Database className="h-5 w-5 shrink-0" />
                      <h3 className="text-lg font-bold text-slate-900 font-display">Data Engineering & Data Analysis</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Turning diverse multi-source information into standardized, enriched product data.
                    </p>
                    <div className="space-y-3 pt-1">
                      <div className="rounded-xl bg-slate-50 border border-slate-200/70 p-3.5 space-y-1">
                        <h4 className="text-xs font-bold text-slate-900">{study.dataCapabilities.engineeringTitle}</h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">{study.dataCapabilities.engineeringDesc}</p>
                      </div>
                      <div className="rounded-xl bg-slate-50 border border-slate-200/70 p-3.5 space-y-1">
                        <h4 className="text-xs font-bold text-slate-900">{study.dataCapabilities.analysisTitle}</h4>
                        <p className="text-[11px] text-slate-600 leading-relaxed">{study.dataCapabilities.analysisDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── eXtensi Signature Section: AI-Assisted QA Automation Workflow (6 Steps) ─── */}
          {study.aiWorkflowSteps && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-2">
                    <Bot className="h-6 w-6 text-blue-600 shrink-0" />
                    An AI-Assisted QA Automation Workflow
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                    How AI acceleration was integrated into the QA automation process while preserving complete human engineering control over quality, verification, and code delivery.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 md:p-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {study.aiWorkflowSteps.map((stepItem: any, sIdx: number) => (
                      <div
                        key={sIdx}
                        className="rounded-2xl border border-slate-200 bg-white p-4.5 shadow-2xs flex flex-col justify-between group hover:border-blue-300 transition-colors"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-bold text-blue-600 font-mono">
                              Step {stepItem.step}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                            {stepItem.title}
                          </h4>
                          <p className="text-[11px] font-semibold text-blue-600 mb-2">
                            {stepItem.subtitle}
                          </p>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {stepItem.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Human Engineering Control Callout */}
                  {study.humanControlCallout && (
                    <div className="rounded-2xl border border-blue-200 bg-white p-5 shadow-2xs space-y-2">
                      <div className="flex items-center gap-2 text-blue-700">
                        <ShieldCheck className="h-5 w-5 shrink-0" />
                        <h4 className="text-sm font-bold tracking-tight">
                          {study.humanControlCallout.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {study.humanControlCallout.content}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── eXtensi Engineering Workflow & Tools (5 Cards) ─── */}
          {study.workflowTools && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <Workflow className="h-5 w-5 text-blue-600 shrink-0" />
                    Engineering Workflow & Tools
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                    Integrated directly with eXtensi’s existing development, version control, and continuous integration pipeline.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                  {study.workflowTools.map((tool: any, tIdx: number) => (
                    <div
                      key={tIdx}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs space-y-1.5 flex flex-col justify-between hover:border-blue-300 transition-colors"
                    >
                      <div>
                        <div className="h-7 w-7 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600 mb-2">
                          {tIdx === 0 ? (
                            <Layers className="h-3.5 w-3.5" />
                          ) : tIdx === 1 ? (
                            <Code2 className="h-3.5 w-3.5" />
                          ) : tIdx === 2 ? (
                            <Bot className="h-3.5 w-3.5" />
                          ) : tIdx === 3 ? (
                            <GitBranch className="h-3.5 w-3.5" />
                          ) : (
                            <Server className="h-3.5 w-3.5" />
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-slate-900">{tool.name}</h4>
                        <p className="text-[10px] font-semibold text-blue-600 mb-1">{tool.role}</p>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── eXtensi Main Outcome: ~300 Tests & 100% Planned Coverage ─── */}
          {study.outcomeMetric && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50/90 via-sky-50/40 to-white p-6 md:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-1.5 text-center md:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 font-display">
                      Main Outcome
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900">
                      Scaling Team Hub to Close to 300 Automated Tests
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 max-w-xl leading-relaxed">
                      {study.outcomeMetric.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="rounded-2xl border border-blue-200/80 bg-white p-4 text-center shadow-xs min-w-[120px]">
                      <p className="text-3xl font-extrabold text-blue-600 font-display tracking-tight">
                        {study.outcomeMetric.primaryMetric}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                        {study.outcomeMetric.primaryLabel}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-blue-200/80 bg-white p-4 text-center shadow-xs min-w-[120px]">
                      <p className="text-3xl font-extrabold text-blue-600 font-display tracking-tight">
                        {study.outcomeMetric.secondaryMetric}
                      </p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
                        {study.outcomeMetric.secondaryLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── SkySelect Specific Feature: Rapid Growth & Two Teams ─── */}
          {study.id === "skyselect" && study.teamGrowthMetric && study.teamCategories && (
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

          {/* ─── OPPSCIENCE, CustomerMatrix & PolySpot Technology Evolution (Single 5-Column Container) ─── */}
          {(study.id === "oppscience" || study.id === "customermatrix" || study.id === "polyspot") && study.techStack && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <Server className="h-6 w-6 text-blue-600 shrink-0" />
                    Technology Evolution Across the Platform
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Over the engagement, the platform architecture evolved across frameworks, enterprise search, frontend approaches, and CI pipelines.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x divide-slate-100">
                    {study.techStack.map((group: any, gIdx: number) => {
                      const Icon =
                        gIdx === 0 ? Code2 : gIdx === 1 ? Search : gIdx === 2 ? Layers : gIdx === 3 ? TestTube2 : Server
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



          {/* ─── PolySpot Specific: End of Product Lifecycle Narrative ─── */}
          {study.id === "polyspot" && polyspotLifecycleEndSection && (
            <SectionReveal>
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                    {polyspotLifecycleEndSection.title}
                  </h2>
                  {polyspotLifecycleEndSection.subtitle && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-600 mt-0.5">
                      {polyspotLifecycleEndSection.subtitle}
                    </p>
                  )}
                </div>
                <div className="text-slate-600 leading-relaxed space-y-3 text-base pt-1">
                  {(polyspotLifecycleEndSection.content || "")
                    .replace(/\\r\\n/g, "\n")
                    .replace(/\\n/g, "\n")
                    .replace(/\\r/g, "\n")
                    .split(/\n\s*\n/)
                    .map((p: string) => p.trim())
                    .filter(Boolean)
                    .map((para: string, pIdx: number) => (
                      <p key={pIdx} className="leading-relaxed whitespace-pre-line">
                        {para}
                      </p>
                    ))}
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── PolySpot Specific: Relationship Continuity (Two Distinct Paths) ─── */}
          {study.id === "polyspot" && study.relationshipContinuity && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <GitMerge className="h-6 w-6 text-sky-600 shrink-0" />
                    {study.relationshipContinuity.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sky-600">
                    {study.relationshipContinuity.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {study.relationshipContinuity.paths.map((path: any, pIdx: number) => (
                    <div
                      key={pIdx}
                      className="rounded-3xl border border-sky-200/80 bg-gradient-to-b from-white to-sky-50/30 p-6 shadow-xs flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="border-b border-sky-100 pb-3">
                          <h3 className="text-base font-bold text-slate-900 font-display">{path.person}</h3>
                          <p className="text-xs text-sky-600 font-semibold">{path.role}</p>
                        </div>

                        {/* Progression Arrow Flow */}
                        <div className="flex flex-col sm:flex-row items-center gap-2 py-1">
                          {path.flow.map((step: string, sIdx: number) => (
                            <div key={sIdx} className="flex items-center gap-2 w-full sm:w-auto">
                              <span className="text-xs font-bold text-slate-900 bg-white border border-sky-200 px-3 py-1.5 rounded-xl shadow-2xs w-full sm:w-auto text-center">
                                {step}
                              </span>
                              {sIdx < path.flow.length - 1 && (
                                <ArrowRight className="h-4 w-4 text-sky-500 shrink-0 hidden sm:block" />
                              )}
                            </div>
                          ))}
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed pt-1">
                          {path.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {study.relationshipContinuity.note && (
                  <p className="text-[11px] text-slate-400 italic text-center sm:text-left pt-1">
                    {study.relationshipContinuity.note}
                  </p>
                )}
              </div>
            </SectionReveal>
          )}

          {/* ─── PolySpot Specific: Compact Engagement Timeline ─── */}
          {study.id === "polyspot" && study.timeline && (
            <SectionReveal>
              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <Calendar className="h-5 w-5 text-sky-600 shrink-0" />
                    Engagement Timeline
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Key milestones across the PolySpot partnership lifecycle (2007 – 2013).
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs">
                  <div className="space-y-4">
                    {study.timeline.map((item: any, tIdx: number) => (
                      <div key={tIdx} className="flex items-start gap-4 pb-3 last:pb-0 border-b last:border-0 border-slate-100">
                        <span className="text-xs font-mono font-bold text-sky-600 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-md shrink-0">
                          {item.year}
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</h4>
                          <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}

          {/* ─── CustomerMatrix Specific: Team & Relationship Continuity Narrative ─── */}
          {study.id === "customermatrix" && continuitySection && (
            <SectionReveal>
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                    {continuitySection.title}
                  </h2>
                  {continuitySection.subtitle && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mt-0.5">
                      {continuitySection.subtitle}
                    </p>
                  )}
                </div>
                <div className="text-slate-600 leading-relaxed space-y-3 text-base pt-1">
                  {(continuitySection.content || "")
                    .replace(/\\r\\n/g, "\n")
                    .replace(/\\n/g, "\n")
                    .replace(/\\r/g, "\n")
                    .split(/\n\s*\n/)
                    .map((p: string) => p.trim())
                    .filter(Boolean)
                    .map((para: string, pIdx: number) => (
                      <p key={pIdx} className="leading-relaxed whitespace-pre-line">
                        {para}
                      </p>
                    ))}
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

          {/* ─── Generic / eXtensi / Innovalog Technology Stack Cards ─── */}
          {(study.id === "innovalog" || study.id === "extensi") && study.techStack && study.techStack.length > 0 && (
            <SectionReveal>
              <div className="space-y-6 pt-6 border-t border-slate-100">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-slate-900 flex items-center gap-2.5 mb-1.5">
                    <Users className="h-6 w-6 text-blue-600 shrink-0" />
                    Technology & Tools
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Frameworks, platforms, AI tools, and CI pipelines utilized across the {study.company} engagement.
                  </p>
                </div>

                <div className={`grid grid-cols-1 ${study.techStack.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"} gap-4`}>
                  {study.techStack.map((group: any, gIdx: number) => {
                    const Icon = gIdx === 0 ? Code2 : gIdx === 1 ? Bot : gIdx === 2 ? GitBranch : Layers
                    return (
                      <div
                        key={gIdx}
                        className="rounded-2xl p-5 border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-2.5 mb-3">
                            <div
                              className="h-8 w-8 rounded-lg flex items-center justify-center text-blue-600 shrink-0"
                              style={{ background: `${primaryColor}12` }}
                            >
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900 text-sm leading-tight">{group.category}</h3>
                              {group.subtitle && (
                                <p className="text-[10px] text-slate-400 font-medium mt-0.5">{group.subtitle}</p>
                              )}
                            </div>
                          </div>
                          <ul className="space-y-1.5 mt-2">
                            {group.items.map((item: string, iIdx: number) => (
                              <li
                                key={iIdx}
                                className="text-xs text-slate-700 flex items-center gap-2 font-medium"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
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

          {/* ─── Concluding Narrative Sections (for other case studies) ─── */}
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

                  {/* 5 Stars (only where verified) */}
                  {study.id !== "customermatrix" && (
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  )}

                  {/* Quote with highlighted callout phrases if applicable */}
                  <blockquote className="text-sm sm:text-base md:text-[15px] text-slate-200 leading-relaxed italic max-w-4xl font-normal pt-1 whitespace-pre-line">
                    {study.id === "customermatrix" ? (
                      <>
                        &ldquo;Along my time at CustomerMatrix as CTO, it has been a pleasure to work with TECUNIQUE as a contractor and even more as a partner. I always considered the TECUNIQUE consultants as{" "}
                        <span className="text-sky-300 font-semibold not-italic underline decoration-sky-400/50 decoration-2 underline-offset-4">
                          a natural extension of my team
                        </span>
                        . The Indian squad has been very professional, committed, and easy to work with in software development, QA, or data quality. The contribution and facility to adapt have been key to reaching the objectives of my R&D group in an ever-changing startup world. I want to thank all the people onboarded at that time for that. All the best to all of you.&rdquo;
                      </>
                    ) : study.id === "polyspot" ? (
                      <>
                        &ldquo;TECUNIQUE has been an integral part of our journey for PolySpot, and we are committed to further expanding our collaborative efforts. Our association with TECUNIQUE is not merely driven by financial considerations; it’s centered on the invaluable expertise and contributions that team brings to the table. We share the sentiment that,{" "}
                        <span className="text-sky-300 font-semibold not-italic underline decoration-sky-400/50 decoration-2 underline-offset-4">
                          it’s not just about cost-effectiveness but about securing the right talent
                        </span>
                        . I express my sincere appreciation for TECUNIQUE's relentless efforts over the years and emphasize their importance in continued partnership over the years.&rdquo;
                      </>
                    ) : study.id === "appfire" ? (
                      <>
                        &ldquo;Since 2020, Appfire and TECUNIQUE have been engaged in business, and throughout this period, the TECUNIQUE team has consistently impressed us with their exceptional services.{" "}
                        <span className="text-amber-300 font-semibold not-italic underline decoration-amber-400/50 decoration-2 underline-offset-4">
                          Their expertise and dedication in architectural design, development, and quality assurance have been very valuable to our team.
                        </span>{" "}
                        Additionally, their HR team has demonstrated a tried-and-true process for{" "}
                        <span className="text-amber-200 font-semibold not-italic">
                          recruiting the ideal QA engineers for our intricate products
                        </span>
                        .&rdquo;
                      </>
                    ) : (
                      <>&ldquo;{study.testimonial.quote}&rdquo;</>
                    )}
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-white text-xs font-bold shrink-0 shadow-md"
                      style={{ background: primaryColor }}
                    >
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
                    { title: "Dedicated Software Teams", href: "/services/dedicated-teams", primary: true },
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
