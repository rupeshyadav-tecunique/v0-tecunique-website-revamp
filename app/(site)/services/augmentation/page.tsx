import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Building,
  Users,
  Search,
  UserPlus,
  Zap,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Laptop,
  Code2,
  Globe,
  Settings,
  Cpu,
  Database
} from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { CTABanner } from "@/components/ui/cta-banner"

export const metadata: Metadata = {
  title: "IT Staff Augmentation | TECUNIQUE",
  description: "Bridge the talent gap with our innovative and client-centric IT staff augmentation services.",
}

const stats = [
  { value: "500+", label: "Verified Experts" },
  { value: "48h", label: "Quick Turnaround" },
  { value: "100%", label: "Skill Matching" },
]

const specializedSkills = [
  { title: "Full Stack Development", icon: Code2, desc: "React, Angular, Node.js, Python, Java" },
  { title: "Mobile Apps", icon: Laptop, desc: "iOS, Android, React Native, Flutter" },
  { title: "Cloud & DevOps", icon: Cpu, desc: "AWS, Azure, GCP, Docker, Kubernetes" },
  { title: "Data Engineering", icon: Database, desc: "SQL, NoSQL, Big Data, ETL Pipelines" },
  { title: "UI/UX Design", icon: Sparkles, desc: "Figma, Adobe XD, User Research" },
  { title: "Project Management", icon: Settings, desc: "Agile, Scrum, Kanban, Jira" },
]

const augmentationBenefits = [
  {
    title: "Increased Capacity",
    desc: "Scale your internal team's output quickly without the long-term overhead of permanent hiring.",
    icon: TrendingUp
  },
  {
    title: "Specialized Skills",
    desc: "Access niche expertise on-demand for specific projects or technology transitions.",
    icon: Zap
  },
  {
    title: "Flexible Engagement",
    desc: "Scale up or down based on project milestones and changing business priorities.",
    icon: UserPlus
  },
  {
    title: "Cost Effectiveness",
    desc: "Reduce recruitment, training, and infrastructure costs with our managed resources.",
    icon: Building
  }
]

const processSteps = [
  {
    title: "Requirement Analysis",
    desc: "We dive deep into your project needs, tech stack, and team culture."
  },
  {
    title: "Expert Sourcing",
    desc: "We screen our vetted talent pool to find the perfect match for your roles."
  },
  {
    title: "Interview & Selection",
    desc: "You interview and test the candidates to ensure they meet your standards."
  },
  {
    title: "Seamless Onboarding",
    desc: "We handle the paperwork and integration, getting them productive in days."
  }
]

export default function AugmentationPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32"
        style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
      >
        {/* Animated blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 animate-blob"
            style={{ background: "radial-gradient(circle, #a5b4fc 0%, #c4b5fd 50%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 animate-blob"
            style={{
              background: "radial-gradient(circle, #93c5fd 0%, #a5b4fc 50%, transparent 70%)",
              animationDelay: "4s",
              animationDuration: "16s",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
                <Sparkles className="h-3 w-3" />
                Talent on Demand
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1] mb-8 text-balance">
                Scale Your Team with <span className="gradient-text">Top IT Talent</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Overcome the gap between demand and supply for skilled teams through an innovative and best recruiting model backed by a dedicated client-centric software team.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "On-demand Scaling",
                  "Senior Level Expertise",
                  "Direct Communication",
                  "Vetted Talent Pool",
                  "Flexible Contracts",
                  "Seamless Integration"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-xl px-8" asChild>
                  <Link href="/contact">
                    Find Your Expert
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="glass-card p-8 rounded-3xl border border-white/50 shadow-xl flex items-center justify-between group hover:border-primary/20 transition-all">
                    <div>
                      <p className="text-4xl font-black text-primary mb-1">{stat.value}</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Expertise at Your Service</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our specialists cover the entire software development lifecycle, ready to integrate into your existing workflows.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedSkills.map((skill, i) => (
              <SectionReveal key={skill.title} delay={i * 100} className="h-full">
                <div className="premium-card p-8 rounded-[2.5rem] border border-slate-100 h-full group hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0 shadow-sm">
                    <skill.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{skill.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <SectionReveal>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-8">Why Staff Augmentation?</h2>
              <div className="space-y-6">
                {augmentationBenefits.map((benefit, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-all group">
                    <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={200} className="relative">
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary/5 to-secondary/5 border border-slate-200 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#6366f1 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
                <div className="relative z-10 text-center p-12">
                  <div className="h-24 w-24 rounded-full bg-white shadow-xl flex items-center justify-center text-primary mx-auto mb-8 animate-bounce-slow">
                    <UserPlus className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Immediate Value</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Boost your product development capabilities with our staff augmentation services. Build and test scalable, secure, and feature-rich software solutions.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Our Seamless Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We've refined our onboarding to be as quick and frictionless as possible, ensuring your project never hits a bottleneck.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <SectionReveal key={i} delay={i * 150} className="h-full">
                <div className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 h-full hover:bg-white hover:border-primary/20 hover:shadow-xl transition-all group">
                  <span className="text-5xl font-black text-slate-200 group-hover:text-primary/10 transition-colors absolute top-4 right-6 leading-none">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 relative z-10">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed relative z-10">{step.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Need Specific Skills Right Now?"
        description="Connect with our talent specialists to find the exact engineering expertise your project needs to succeed."
        primaryAction={{ label: "Request a CV", href: "/contact" }}
        secondaryAction={{ label: "View Our Team", href: "/about#team" }}
      />
    </div>
  )
}
