import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Code,
  TestTube,
  Layout,
  Settings,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Layers,
  Heart,
  TrendingUp,
  LineChart,
  HardHat,
  MonitorCheck
} from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { CTABanner } from "@/components/ui/cta-banner"

export const metadata: Metadata = {
  title: "Dedicated Development Teams | TECUNIQUE",
  description: "Bespoke Dedicated Software Development Teams of experienced, skilled, reliable, & professional resources built specific to your requirements.",
}

const stats = [
  { value: "13+", label: "Years Experience" },
  { value: "50+", label: "Software Experts" },
  { value: "96%", label: "Employee Retention" },
]

const roles = [
  { title: "Front-end Engineers", icon: Layout },
  { title: "Back-end Engineers", icon: Settings },
  { title: "QA Engineers", icon: TestTube },
  { title: "UX / UI Designers", icon: Code },
  { title: "DevOps Engineers", icon: HardHat },
  { title: "Project Managers", icon: MonitorCheck },
]

const benefits = [
  { title: "Ease of management", icon: Settings },
  { title: "High flexibility", icon: Zap },
  { title: "Scalability", icon: TrendingUp },
  { title: "Strong technical pool", icon: Users },
  { title: "Customized processes", icon: LineChart },
  { title: "Diverse cultural expertise", icon: Globe },
  { title: "Critical offshore layers", icon: Layers },
  { title: "Technical acumen", icon: Zap },
]

const goodFit = [
  "For long-term projects with broad scopes and potential changes in requirements.",
  "For product development projects needing a consistent and stable long-term team.",
  "For cost-effective, well-budgeted development and management of software products.",
  "When the internal team concentrates on other projects and cannot carry more work.",
  "When your internal team lacks experience or knowledge of specific technologies.",
]

const whyUs = [
  {
    title: "Access to Talent Pool",
    description: "You get access to a vast talent pool of software experts. Our experience enables you to hire and build a team of engineers, interview & test them, and choose the best candidates.",
    icon: Users
  },
  {
    title: "Easy Administration",
    description: "We manage everything from contracts to team setup, employee retention, employee benefits, payroll operations, infrastructure, and Non-Disclosure Agreements.",
    icon: ShieldCheck
  },
  {
    title: "Excellent Infrastructure",
    description: "Our reliable infrastructure is well-equipped with advanced IT tools, processes, and systems. When you hire development teams, you get a quick start.",
    icon: Layout
  },
  {
    title: "Talent Management",
    description: "We help transfer product and domain knowledge to align teams with your in-house staff, keeping people motivated and ensuring personal development and growth.",
    icon: Heart
  },
  {
    title: "Delivery Management",
    description: "Coordinate and streamline the software development and delivery processes from beginning to end, ensuring high efficiency throughout the entire cycle.",
    icon: MonitorCheck
  },
  {
    title: "Cost Effectiveness",
    description: "Highly cost-effective solutions with assured transparency to build a dedicated team of talented, skilled, and experienced engineers.",
    icon: TrendingUp
  }
]

export default function DedicatedTeamsPage() {
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
          {/* Grid pattern overlay */}
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
                Dedicated Service
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1] mb-8">
                Bespoke <span className="gradient-text">Dedicated</span> Software Teams
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Custom-made software development teams of experienced, skilled, reliable, & professional resources, built specific to your requirements, enable the building of scalable, secure, and robust software solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Top-notch Software Experts",
                  "Flexible Engagement Models",
                  "Strict Non-Disclosure Agreement",
                  "Customized Processes",
                  "Assured Transparency",
                  "Complete Team Control"
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
                    Build Your Team
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
                      <TrendingUp className="h-6 w-6" />
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">What TECUNIQUE Offers</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              TECUNIQUE’s dedicated teams service offers a cost-effective solution for engaging different kinds of software workforce – development, quality assurance, and technical support teams. The team size is adjustable and depends on your current needs.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {roles.map((role, i) => (
              <SectionReveal key={role.title} delay={i * 100} className="h-full">
                <div className="premium-card p-6 rounded-3xl border border-slate-100 flex flex-col items-center justify-center text-center group h-full min-h-[160px]">
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                    <role.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-tight">{role.title}</h3>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-16 p-10 lg:p-16 rounded-[3rem] bg-slate-50 border border-slate-200/60 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Extended Team Support</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  It will provide extended team support for your software development projects off-site or offshore as per your specific business needs and provide you with complete control over your project and operations.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We will also ensure transparent communications and close collaboration over the period of engagement.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-3xl bg-white shadow-xl flex items-center justify-center border border-slate-200 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                  <Users className="h-20 w-20 text-primary/20 group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 lg:py-32 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Benefits of Our Dedicated Teams</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Embrace capabilities of custom software development services, product development, and quality assurance for businesses of all sizes and shapes.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <SectionReveal key={benefit.title} delay={i * 100} className="h-full">
                <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-4 hover:border-primary/30 hover:shadow-md transition-all h-full">
                  <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">{benefit.title}</span>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="mt-20">
            <div className="max-w-3xl mx-auto text-center p-12 bg-white rounded-[2.5rem] border border-primary/10 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-3">
                <Settings className="h-6 w-6 text-primary" />
                Ease of Management
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                The range of the Indian talent market and regulatory framework allows ease and flexibility in managing your dedicated team of software engineers.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* When to Choose Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-8">When is the Dedicated Team Model a good fit?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                The Dedicated Team model is ideal for projects where you need consistency, flexibility, and scalability.
              </p>
              <div className="space-y-4">
                {goodFit.map((text, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-colors hover:bg-white hover:border-primary/20">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={200} className="relative">
              <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary/5 to-secondary/5 border border-slate-200 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#6366f1 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
                <div className="relative z-10 text-center p-12">
                  <div className="h-24 w-24 rounded-full bg-white shadow-xl flex items-center justify-center text-primary mx-auto mb-8 animate-bounce-slow">
                    <Sparkles className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Partnership</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We don't just provide resources; we provide a foundation for long-term growth and technical excellence.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why TECUNIQUE Section */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,theme(colors.primary.500/0.1),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">Why TECUNIQUE for Dedicated Teams</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Custom-built dedicated team, adapted to the processes and principals defined by you.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 100} className="h-full">
                <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 group">
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-[10px]">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Build Your Dedicated Team?"
        description="Let's discuss how our specialized software engineers can help you accelerate your development roadmap and deliver high-quality solutions."
        primaryAction={{ label: "Get Started Now", href: "/contact" }}
        secondaryAction={{ label: "View Our Expertise", href: "/about#team" }}
      />
    </div>
  )
}
