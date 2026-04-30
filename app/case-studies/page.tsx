import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, Users, TrendingUp, Star, ExternalLink, CheckCircle2, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real-world success stories from TECUNIQUE's partnerships — how we helped companies scale, deliver quality software, and achieve lasting results.",
}

const caseStudies = [
  {
    id: "oppscience",
    company: "OPPSCIENCE",
    industry: "AI & Data Analytics",
    category: "Software Development & QA",
    partnership: "10+ Years",
    location: "France",
    initials: "OP",
    color: "#6366f1",
    gradient: "from-indigo-500 to-violet-600",
    tagline: "A decade-long partnership powering AI-driven enterprise analytics",
    challenge:
      "OPPSCIENCE needed to rapidly scale their engineering and QA capabilities to support a growing AI analytics platform serving enterprise clients across Europe. Finding top-tier talent locally was slow and expensive, creating delivery bottlenecks.",
    solution:
      "TECUNIQUE built and embedded a dedicated cross-functional team of software engineers and QA specialists directly into OPPSCIENCE's workflows. The team worked across the full product lifecycle — feature development, performance tuning, automated testing, and ongoing platform reliability.",
    results: [
      { metric: "10+ Years", label: "Continuous Partnership" },
      { metric: "3x", label: "Team Scale Achieved" },
      { metric: "99.9%", label: "Platform Uptime" },
      { metric: "40%", label: "Faster Release Cycles" },
    ],
    testimonial: {
      quote:
        "TECUNIQUE has been an integral part of our journey for more than a decade, and we are committed to further expanding our collaborative efforts. Their invaluable expertise and contributions have been central to our success.",
      author: "Gilles Andre",
      role: "Founder & CEO, OPPSCIENCE",
    },
    tags: ["Software Engineering", "QA & Testing", "Dedicated Team", "AI Platform"],
  },
  {
    id: "validat",
    company: "Validat",
    industry: "Compliance & RegTech",
    category: "Dedicated Team & Quality Assurance",
    partnership: "3+ Years",
    location: "Europe",
    initials: "VL",
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-600",
    tagline: "Building a robust compliance platform with zero-defect delivery standards",
    challenge:
      "Validat required a highly reliable compliance validation platform with strict regulatory requirements. Their internal team lacked the bandwidth for comprehensive QA coverage, and any defects in the compliance logic could have serious business consequences.",
    solution:
      "TECUNIQUE provided a dedicated QA and software engineering team that integrated with Validat's product team. We established rigorous automated testing frameworks, implemented compliance-specific test scenarios, and maintained continuous quality gates throughout every release cycle.",
    results: [
      { metric: "0", label: "Critical Defects in Production" },
      { metric: "85%", label: "Test Automation Coverage" },
      { metric: "2x", label: "Deployment Frequency" },
      { metric: "100%", label: "Regulatory Compliance" },
    ],
    testimonial: {
      quote:
        "The TECUNIQUE team brought a level of rigor and professionalism to our QA process that we hadn't experienced before. Their attention to compliance-critical scenarios gave us the confidence to ship faster without compromising quality.",
      author: "Product Lead",
      role: "Validat",
    },
    tags: ["Quality Assurance", "Compliance Testing", "Automation", "RegTech"],
  },
]

const stats = [
  { value: "20+", label: "Clients Served" },
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Years of Expertise" },
  { value: "95%", label: "Client Retention" },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
      >
        {/* Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 -right-32 h-80 w-80 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #67e8f9 0%, transparent 70%)" }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-pill mb-6 inline-flex">
              <Sparkles className="h-3 w-3" />
              Client Success Stories
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              Real Results,{" "}
              <span className="gradient-text">Real Impact</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Explore how TECUNIQUE has partnered with companies around the world to build scalable software, ship faster, and maintain uncompromising quality.
            </p>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <p className="font-display text-3xl font-extrabold" style={{ color: "#6366f1" }}>
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, i) => (
            <article
              key={study.id}
              className="group relative rounded-3xl border border-border/60 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-white font-display text-lg font-extrabold shrink-0"
                        style={{ background: `linear-gradient(135deg, ${study.color}, ${study.color}cc)` }}
                      >
                        {study.initials}
                      </div>
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
                        {study.challenge}
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
                  <div className="grid grid-cols-2 gap-3 mb-8 sm:grid-cols-4">
                    {study.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-xl p-4 text-center border border-border/50"
                        style={{ background: `${study.color}06` }}
                      >
                        <p
                          className="font-display text-2xl font-extrabold"
                          style={{ color: study.color }}
                        >
                          {result.metric}
                        </p>
                        <p className="mt-1 text-[11px] font-medium text-muted-foreground leading-tight">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div
                    className="rounded-2xl p-5 border"
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg, #f8f7ff 0%, #ede9fe 40%, #f0f9ff 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Ready to Write Your{" "}
              <span className="gradient-text">Success Story?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {"Let's talk about how TECUNIQUE can help you build, scale, and deliver with confidence."}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 8px 30px rgba(99,102,241,0.35)",
                }}
              >
                Start a Conversation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-white/80 px-8 py-4 text-base font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-white hover:shadow-md"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
