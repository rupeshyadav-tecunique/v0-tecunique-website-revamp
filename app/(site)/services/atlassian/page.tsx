import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Layers, Cloud, Puzzle, Webhook, ShieldCheck, Cpu, Bot, Shield, FileCheck, Clock3 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export const metadata: Metadata = {
  title: "Atlassian Enterprise Services | TECUNIQUE",
  description: "Top-tier Atlassian marketplace vendor services: Custom Jira apps, Forge development, Cloud migrations, and Rovo AI Integrations.",
}

const capabilities = [
  {
    title: "Jira Plugin & App Development",
    description: "End-to-end development of custom Jira and Confluence apps built on Forge and Connect frameworks. We help top-tier vendors bring their marketplace ideas to life with robust, scalable architectures.",
    icon: Puzzle,
  },
  {
    title: "Cloud Migrations",
    description: "Seamlessly and securely migrate your infrastructure, apps, and data from Server/Data Center to Atlassian Cloud without disrupting your enterprise workflows.",
    icon: Cloud,
  },
  {
    title: "Integrations & Customizations",
    description: "Tailor Atlassian tools to perfectly match your specific enterprise needs. We connect Jira and Confluence with your existing enterprise systems (ERP, CRM, DevOps tools).",
    icon: Webhook,
  },
  {
    title: "Rovo AI Integration",
    description: "Unlock Atlassian's latest AI capabilities. We integrate Rovo to accelerate knowledge discovery, automate repetitive tasks, and empower your teams with actionable AI-driven insights.",
    icon: Bot,
  },
]

export default function AtlassianServicesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white"
        style={{ background: "linear-gradient(170deg, #ffffff 0%, #e0f2fe 18%, #bae6fd 45%, #e0e7ff 75%, #f3e8ff 100%)" }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }} />
          <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#0284c7 1px, transparent 1px), linear-gradient(to right, #0284c7 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <SectionReveal className="mx-auto max-w-4xl">
            <div className="section-pill mb-6 mx-auto inline-flex bg-[#0052CC]/10 text-[#0052CC] border-[#0052CC]/20">
              <Layers className="h-3 w-3" />
              Atlassian Ecosystem
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-4">
              Architecting High-Performing <br className="hidden lg:block"/>
              <span className="text-[#0052CC]">Atlassian Solutions</span>
            </h1>
            <p className="mt-4 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We are the trusted engineering partner for top-tier marketplace vendors and enterprises, specializing in Forge, Connect, and Cloud migrations.
            </p>
            <div className="mt-8 flex items-center justify-center gap-6">
              <Button size="lg" variant="outline" className="rounded-xl border-none px-10 h-12 text-lg font-semibold group shadow-lg shadow-[#0052CC]/20 hover:shadow-xl hover:shadow-[#0052CC]/30 transition-all hover:-translate-y-0.5 bg-[#0052CC] hover:bg-[#0047b3] text-white hover:text-white" asChild>
                <Link href="/contact">
                  Book a Capability Call
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-6">Our Core Capabilities</h2>
            <p className="text-lg text-slate-600">Deep technical expertise across the entire Atlassian suite to help you scale, integrate, and innovate.</p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {capabilities.map((cap, index) => (
              <SectionReveal key={cap.title} delay={index * 100} className="relative group">
                <div className="h-full bg-slate-50 border border-slate-100 rounded-[2rem] p-8 lg:p-10 hover:shadow-xl hover:border-[#0052CC]/20 transition-all duration-300">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#0052CC] mb-6 group-hover:scale-110 group-hover:bg-[#0052CC] group-hover:text-white transition-all duration-300">
                    <cap.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{cap.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{cap.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-6">Why Top Vendors Trust Us</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Building for the Atlassian Marketplace requires more than just general software engineering. It demands a deep understanding of Atlassian's unique architecture, strict compliance requirements, and evolving SDKs.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#0052CC]/10 rounded-full p-1 text-[#0052CC]">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Marketplace Compliance Experts</h4>
                    <p className="text-slate-600 text-sm">Dedicated QA processes ensuring your apps meet Atlassian's strict security and performance standards.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#0052CC]/10 rounded-full p-1 text-[#0052CC]">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Deep SDK & Forge Knowledge</h4>
                    <p className="text-slate-600 text-sm">Native fluency in Atlassian Connect and Forge, utilizing modern tech stacks (React, Node.js) for robust app development.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-[#0052CC]/10 rounded-full p-1 text-[#0052CC]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Proven Track Record</h4>
                    <p className="text-slate-600 text-sm">Trusted engineering partner for leading ecosystem giants like Appfire and Innovalog.</p>
                  </div>
                </li>
              </ul>
            </SectionReveal>
            
            <SectionReveal direction="right" className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-tr from-[#0052CC]/20 to-[#2684FF]/20 absolute -inset-4 blur-3xl opacity-50" />
              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-2xl p-8 lg:p-12 relative z-10">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-4xl font-black text-[#0052CC] font-display mb-2">15+</div>
                    <div className="text-sm font-semibold text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center">
                    <Layers className="h-8 w-8 text-[#0052CC] mb-2" />
                    <div className="text-sm font-semibold text-slate-600">Hands-on experience with Jira & Confluence apps</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 col-span-2 flex flex-col items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-[#0052CC] mb-2" />
                    <div className="text-sm font-semibold text-slate-600">QA-focused development aligned with Marketplace expectations</div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg, #f8f7ff 0%, #e0f2fe 40%, #f0f9ff 100%)" }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 left-1/4 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #0284c7 0%, transparent 70%)" }}
          />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#0284c7 1px, transparent 1px), linear-gradient(to right, #0284c7 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">

            <SectionReveal>
              {/* Main heading */}
              <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
                Ready to{" "}
                <span className="text-[#0052CC]">Build</span>
                {" "}on Atlassian?
              </h2>

              <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-xl mx-auto">
                Let's discuss how our specialized engineering teams can accelerate your app development and integrations.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] group bg-[#0052CC] hover:bg-[#0047b3]"
                >
                  Book a Capability Call
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-8 py-4 text-base font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-white hover:shadow-md backdrop-blur-sm"
                >
                  View Case Studies
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                {[
                  { icon: Shield, label: "NDA Protected" },
                  { icon: FileCheck, label: "Strict Quality Control" },
                  { icon: Clock3, label: "On-Time Delivery" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 backdrop-blur-sm shadow-sm"
                  >
                    <badge.icon className="h-4 w-4 text-[#0052CC]" />
                    <span className="text-sm font-medium text-slate-700">{badge.label}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

    </div>
  )
}
