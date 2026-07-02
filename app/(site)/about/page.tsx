import type { Metadata } from "next"
import Image from "next/image"
import { Shield, Users, Activity, FileCheck, CheckCircle2, ShieldCheck, Linkedin, Sparkles } from "lucide-react"
import CultureGallery from "@/components/about/culture-gallery"
import { SectionReveal } from "@/components/ui/section-reveal"

export const metadata: Metadata = {
  title: "About Us | TECUNIQUE",
  description: "15+ Years of Engineering Maturity. A dedicated software engineering firm specializing in complex product development and high-tier Atlassian ecosystem solutions.",
}

// Data for Timeline
const timelineEvents = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Established core offshore software engineering team specializing in Java and custom web architectures."
  },
  {
    year: "2016",
    title: "Atlassian Deep-Dive",
    description: "Pivoted heavily into the Atlassian ecosystem, building and scaling enterprise marketplace apps for global vendors."
  },
  {
    year: "2022",
    title: "Enterprise Alignment & Scale",
    description: "Expanded to 30+ dedicated senior engineers and aligned infrastructure with enterprise security standards."
  }
]

// Data for Operational Pillars
const operationalPillars = [
  {
    title: "Extreme Transparency",
    description: "Real-time access to repositories, active Jira boards, and direct communication lines with developers.",
    icon: Activity,
  },
  {
    title: "Uncompromising Quality",
    description: "Every sprint is backed by automated QA, code reviews, and strict documentation.",
    icon: FileCheck,
  },
  {
    title: "Stability Over Turnover",
    description: "Our 92% employee retention rate is a massive benefit to you. We eliminate the risk of knowledge loss mid-project.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32 flex items-center min-h-[90vh]"
        style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 animate-blob" style={{ background: "radial-gradient(circle, #a5b4fc 0%, #c4b5fd 50%, transparent 70%)" }} />
          <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 animate-blob" style={{ background: "radial-gradient(circle, #93c5fd 0%, #a5b4fc 50%, transparent 70%)", animationDelay: "4s", animationDuration: "16s" }} />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
          <SectionReveal className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance">
              Engineering Maturity. <br className="hidden sm:block" />
              <span className="gradient-text">Enterprise-Grade Execution.</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We build high-performing software teams and specialized ecosystem apps for organizations that demand uncompromising quality, velocity, and data security.
            </p>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600 sm:gap-8">
              {[
                { icon: ShieldCheck, text: "NDA Protected" },
                { icon: Users, text: "92% Employee Retention" },
                { icon: CheckCircle2, text: "Top-Rated Atlassian Partner" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  <badge.icon className="h-4 w-4 text-primary" />
                  {badge.text}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Leadership & Engineering DNA */}
      {/* <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-20">
            <span className="section-pill mb-6 inline-flex">
              <Sparkles className="h-3 w-3" />
              Engineering DNA
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Leadership & Team</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our engineering teams are anchored by seasoned technical leaders who inherently understand enterprise workflows, complex system architecture, and operational security. We ensure every engagement benefits from deep senior expertise and proven maturity.
            </p>
          </SectionReveal>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {[1, 2, 3, 4].map((i) => (
              <SectionReveal key={i} delay={i * 100} className="flex flex-col items-center text-center group">
                <div className="relative h-48 w-48 mb-6 overflow-hidden rounded-full ring-4 ring-primary/5 group-hover:ring-primary/20 transition-all duration-500 shadow-sm">
                  <Image
                    src={`https://placehold.co/400x400/ede9fe/6366f1?text=Leader+${i}`}
                    alt={`Leader ${i}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">Director Name {i}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mt-2 mb-4">Managing Director</p>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center justify-center h-10 w-10 rounded-full bg-slate-50 hover:bg-primary/5 border border-transparent hover:border-primary/20">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn Profile</span>
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* Operational Pillars (No Black Box) */}
      <section className="bg-slate-50 py-24 lg:py-32 relative border-y border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center mb-20">
            <span className="section-pill mb-6 inline-flex">
              <Shield className="h-3 w-3" />
              The "No Black-Box" Approach
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Operational Pillars</h2>
            <p className="mt-4 text-lg text-muted-foreground">We engineer transparency and predictability into every workflow.</p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mx-auto max-w-[1100px] justify-center">
            {operationalPillars.map((pillar, i) => (
              <SectionReveal key={pillar.title} delay={i * 150} className="h-full">
                <div className="h-full rounded-[2rem] border border-border/60 bg-white p-10 lg:p-12 transition-all hover:shadow-xl hover:-translate-y-1 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{pillar.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Minimalist Vertical Timeline */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Track Record</h2>
          </SectionReveal>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <SectionReveal key={event.year} delay={i * 150}>
                  <div className="relative pl-10 sm:pl-32 py-2 group">
                    {/* Vertical line connecting nodes */}
                    {i !== timelineEvents.length - 1 ? (
                      <div className="absolute left-[11px] sm:left-[107px] top-10 bottom-[-3rem] w-px bg-border/60" />
                    ) : (
                      <div className="absolute left-[11px] sm:left-[107px] top-10 h-32 w-px bg-gradient-to-b from-border/60 to-transparent" />
                    )}
                    {/* Node marker */}
                    <div className="absolute left-0 sm:left-24 top-2 h-6 w-6 rounded-full border-4 border-white bg-primary shadow-sm group-hover:scale-125 transition-transform duration-300" />

                    {/* Content */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12">
                      <div className="hidden sm:block w-20 pt-1 shrink-0 text-right">
                        <span className="text-2xl font-bold text-slate-300 group-hover:text-primary transition-colors">{event.year}</span>
                      </div>

                      <div className="flex-1">
                        <div className="sm:hidden mb-1">
                          <span className="text-xl font-bold text-primary">{event.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Corner */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-slate-50 border-t border-border/50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
            <div className="max-w-2xl">
              <span className="section-pill mb-6 inline-flex">
                <Sparkles className="h-3 w-3" />
                Our Vibe
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Cultural Corner</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Life at TECUNIQUE is more than just code. We celebrate every milestone, festival, and achievement as one big family.
              </p>
            </div>
            <div className="flex items-center gap-6 bg-white px-8 py-4 rounded-2xl border border-border shadow-sm">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl">30+</div>
              <div>
                <div className="text-lg font-bold text-foreground leading-none mb-1">Uniquens</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Celebrating Together</div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <CultureGallery />
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
