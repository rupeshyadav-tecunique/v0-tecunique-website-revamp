import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Zap,
  ShieldCheck,
  TrendingUp,
  Globe2,
  Clock,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Building2,
  Cpu,
  LineChart,
  Users2
} from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { CTABanner } from "@/components/ui/cta-banner"

export const metadata: Metadata = {
  title: "Offshore Development Center (ODC) | TECUNIQUE",
  description: "Ramp up your software development and scale up quickly with our offshore development teams.",
}

const stats = [
  { value: "15+", label: "Years Expertise" },
  { value: "24/7", label: "Global Productivity" },
  { value: "40%", label: "Cost Optimization" },
]

const odcFeatures = [
  {
    title: "Dedicated Infrastructure",
    desc: "A secure, customized physical or virtual workspace tailored to your company's standards.",
    icon: Building2
  },
  {
    title: "Global Delivery Model",
    desc: "Leveraging time-zone differences to ensure round-the-clock development and support.",
    icon: Globe2
  },
  {
    title: "Strict Compliance",
    desc: "Adherence to international data security and IP protection standards (ISO, GDPR).",
    icon: ShieldCheck
  },
  {
    title: "Agile Integration",
    desc: "Seamless synchronization with your internal sprints, tools, and communication channels.",
    icon: Zap
  },
  {
    title: "Transparency",
    desc: "Real-time tracking of progress with transparent communication and delivery management.",
    icon: LineChart
  },
  {
    title: "Talent Access",
    desc: "Hire from India's vast pool of senior engineering talent at a fraction of local costs.",
    icon: Users2
  }
]

const advantages = [
  {
    title: "Time-to-Market",
    desc: "Accelerate your development roadmap by utilizing our ready-to-go infrastructure and talent.",
    icon: Clock
  },
  {
    title: "Operational Control",
    desc: "Maintain complete control over the project roadmap while we handle administrative overhead.",
    icon: Briefcase
  },
  {
    title: "Resource Elasticity",
    desc: "Quickly scale your offshore team up or down based on your project's current lifecycle stage.",
    icon: Layers
  }
]

export default function OffshorePage() {
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
                Global Delivery
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1] mb-8 text-balance">
                Your Strategic <span className="gradient-text">Offshore</span> Development Partner
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Set up dedicated offshore development centers (ODC) in India for developing, testing, and deploying software solutions with high quality and quick turn-around.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "ODC Setup Expertise",
                  "24/7 Support Model",
                  "IP & Data Security",
                  "Cultural Alignment",
                  "Transparent Pricing",
                  "Agile Methodologies"
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
                <Button size="lg" className="rounded-xl px-8 group" asChild>
                  <Link href="/contact">
                    Scale Globally
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                      <Globe className="h-6 w-6" />
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ODC Features Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Our ODC Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We manage everything from infrastructure to talent management, allowing you to focus on your core product vision.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {odcFeatures.map((feature, i) => (
              <SectionReveal key={feature.title} delay={i * 100} className="h-full">
                <div className="premium-card p-8 rounded-[2.5rem] border border-slate-100 h-full group hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0 shadow-sm">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">The Offshore Advantage</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Partnering with TECUNIQUE for your offshore development provides a strategic edge in a competitive market.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {advantages.map((adv, i) => (
              <SectionReveal key={adv.title} delay={i * 200}>
                <div className="text-center group">
                  <div className="h-20 w-20 rounded-full bg-white shadow-lg flex items-center justify-center text-primary mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                    <adv.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{adv.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{adv.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why India Section */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,theme(colors.primary.500/0.1),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <SectionReveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 leading-tight">
                Scale Efficiently with <br /><span className="text-primary">TECUNIQUE India</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                The Indian talent market and regulatory framework allow for unmatched ease and flexibility in managing offshore software teams.
              </p>
              <div className="space-y-4">
                {[
                  "Access to top 1% engineering talent",
                  "Significant cost reduction (up to 40%)",
                  "Stable and reliable delivery infrastructure",
                  "English proficiency for smooth collaboration"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={200} className="relative">
              <div className="aspect-[4/3] rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center p-12">
                <div className="text-center">
                  <Globe2 className="h-24 w-24 text-primary/30 mx-auto mb-8 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-4">Global Reach, Local Presence</h3>
                  <p className="text-slate-400 leading-relaxed">
                    We act as your bridge to the most innovative tech hubs in India, ensuring your offshore team feels like a natural extension of your in-house staff.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Build Your Offshore Center?"
        description="Let's discuss how we can help you set up a high-performing offshore development team that drives your business forward."
        primaryAction={{ label: "Consult Our Experts", href: "/contact" }}
        secondaryAction={{ label: "View Our Services", href: "/services" }}
      />
    </div>
  )
}
