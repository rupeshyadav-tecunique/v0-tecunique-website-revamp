import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  TestTube,
  ShieldCheck,
  Zap,
  LineChart,
  Search,
  Lock,
  Smartphone,
  Users,
  Settings,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ClipboardCheck,
  RotateCw,
  Eye,
  MousePointer2,
  Network,
  Heart
} from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { CTABanner } from "@/components/ui/cta-banner"

export const metadata: Metadata = {
  title: "Software QA & Testing Teams | TECUNIQUE",
  description: "Bespoke Software Quality Assurance teams built specific to your requirements, enabling delivering scalable, secure, and robust software solutions.",
}

const stats = [
  { value: "13+", label: "Years Experience" },
  { value: "50+", label: "Software Experts" },
  { value: "96%", label: "Employee Retention" },
]

const qaServices = [
  {
    title: "Functional Testing",
    description: "Unit Testing, System Testing, Integration Testing, and User Acceptance Testing.",
    icon: ClipboardCheck
  },
  {
    title: "Automated Testing",
    description: "Regression & Functional testing with rapid accurate reports and extensive solutions.",
    icon: RotateCw
  },
  {
    title: "Security Testing",
    description: "Authentication, Authorization, and Business Logic testing against standards.",
    icon: Lock
  },
  {
    title: "Performance Testing",
    description: "Load testing, Stress testing, and stability bottleneck identification.",
    icon: LineChart
  },
  {
    title: "Accessibility Testing",
    description: "Visual, Auditory, Cognitive, and Mobility testing following guidelines.",
    icon: Eye
  },
  {
    title: "Usability Testing",
    description: "UX testing, User friendliness, and effective navigation ensuring ease of use.",
    icon: MousePointer2
  },
  {
    title: "Mobile Testing",
    description: "Business flows, UI testing, and cross-platform coverage for mobile apps.",
    icon: Smartphone
  },
  {
    title: "IT Staff Augmentation",
    description: "Specialized skills and increased capacity to boost product development.",
    icon: Users
  }
]

const challenges = [
  {
    issue: "Ongoing development glitches & bugs",
    response: "Automated and manual testing of apps",
    icon: AlertCircle
  },
  {
    issue: "Risk in data-driven decisions",
    response: "Governance, risk and compliance assessment",
    icon: ShieldCheck
  },
  {
    issue: "Deal with different browsers & platforms",
    response: "Cross-browser and platform testing solutions",
    icon: Globe
  },
  {
    issue: "Hiring test engineers under budget",
    response: "Skill assessment and providing dedicated testers",
    icon: Users
  },
  {
    issue: "Excess time taken for quality assurance",
    response: "Pre-QA audit & process assessment",
    icon: LineChart
  }
]

const processSteps = [
  {
    number: "01",
    title: "Identification & Preparation",
    items: ["Current issues", "Scope identification", "Readiness scan", "KPIs and SLAs", "Test processes"]
  },
  {
    number: "02",
    title: "Transition",
    items: ["Core team setup", "Knowledge transfer", "Environment & tools setup", "Test cases development", "Test planning"]
  },
  {
    number: "03",
    title: "Operation & Exit",
    items: ["Test execution", "KPI management", "Data & results analysis", "Defects management", "Knowledge transfer"]
  }
]

function Globe({ className }: { className?: string }) {
  return <Network className={className} />
}

export default function QAPage() {
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
                QA & Testing Expertise
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1] mb-8 text-balance">
                Software <span className="gradient-text">Quality Assurance</span> & Testing Teams
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Bespoke QA teams built specific to your requirements, enabling delivering scalable, secure, and robust software solutions. Since 2010, we have created custom, dedicated teams for ISVs, start-ups, and enterprises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Top Dedicated QA Experts",
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
                    Ensure Your Quality
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
                      <TestTube className="h-6 w-6" />
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">QA & Testing Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We work with clients to understand business processes, objectives, and constraints to develop an optimal product aligned with customer expectations.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qaServices.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 100} className="h-full">
                <div className="premium-card p-8 rounded-[2.5rem] border border-slate-100 flex flex-col h-full group hover:shadow-2xl transition-all duration-500">
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Approach */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 items-start">
            {/* Left Header */}
            <SectionReveal className="h-full">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">We Understand Your Challenges</h2>
              <p className="text-lg text-slate-600 lg:min-h-[80px] leading-relaxed">
                Faster time to market, superior customer experience, and continuous evolution are the most pressing concerns. We work as a team to overcome them.
              </p>
            </SectionReveal>

            {/* Right Header */}
            <SectionReveal delay={200} className="h-full">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Our Strategic Response</h2>
              <p className="text-lg text-slate-600 italic lg:min-h-[80px] leading-relaxed">
                "Your common and specific challenges, we respond accordingly with expert strategies and dedicated support."
              </p>
            </SectionReveal>

            {/* Left Column Cards */}
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8 flex items-center gap-2">
                <span className="w-8 h-px bg-primary/30" />
                Common Concerns
              </h3>
              <div className="space-y-4">
                {challenges.map((item, i) => (
                  <SectionReveal key={i} delay={i * 50}>
                    <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm transition-all hover:border-red-200 hover:shadow-md group h-full">
                      <div className="h-12 w-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform">
                        <AlertCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-[15px] leading-tight mb-1">{item.issue}</p>
                        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">Business Challenge</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>

            {/* Right Column Cards */}
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-8 flex items-center gap-2">
                <span className="w-8 h-px bg-primary/30" />
                Our Approach
              </h3>
              <div className="space-y-4">
                {challenges.map((item, i) => (
                  <SectionReveal key={i} delay={200 + i * 50}>
                    <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm transition-all hover:border-primary/20 hover:shadow-md group h-full">
                      <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-[15px] leading-tight mb-1">{item.response}</p>
                        <p className="text-primary/60 text-[11px] font-bold uppercase tracking-wider">Our Solution</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managed Testing Process */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Our Managed Testing Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              TECUNIQUE offers a fully customized managed software testing service where we take responsibility for quality assurance and testing of your software products.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10" />

            {processSteps.map((step, i) => (
              <SectionReveal key={step.number} delay={i * 200} className="h-full">
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl h-full relative group hover:border-primary/20 transition-all">
                  <div className="absolute -top-6 left-10 h-12 w-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-xl shadow-lg shadow-primary/20">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-8 pt-4">{step.title}</h3>
                  <ul className="space-y-4">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why QA Section */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,theme(colors.primary.500/0.1),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <SectionReveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 leading-tight">
                Why Choose Software Quality Assurance & <span className="text-primary">Testing?</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Ideal solution for any company with a business-first mindset. Achieve a competitive edge and offer users a top-notch software experience.
              </p>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <p className="text-slate-300 leading-relaxed italic">
                  "Comprehensive QA and Testing of software products significantly reduces the chance of failures in production environments, boosting software speed, efficiency, and overall credibility."
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={200} className="grid grid-cols-2 gap-4">
              {[
                { title: "Boost Speed", icon: Zap },
                { title: "Zero Failure", icon: ShieldCheck },
                { title: "Scale Fast", icon: TrendingUp },
                { title: "User Trust", icon: Heart },
              ].map((item) => (
                <div key={item.title} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center group hover:bg-primary/10 hover:border-primary/30 transition-all">
                  <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-sm uppercase tracking-widest">{item.title}</span>
                </div>
              ))}
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Elevate Your Software Quality?"
        description="Let's build a dedicated QA team that ensures your product is error-free, secure, and ready for global scaling."
        primaryAction={{ label: "Start Quality Audit", href: "/contact" }}
        secondaryAction={{ label: "Explore Case Studies", href: "/case-studies" }}
      />
    </div>
  )
}

function TrendingUp({ className }: { className?: string }) {
  return <LineChart className={className} />
}
