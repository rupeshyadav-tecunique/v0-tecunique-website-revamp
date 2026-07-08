import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, Code, TestTube, ArrowRight, Sparkles, Search, CheckCircle2, Zap, LayoutDashboard, Puzzle, Cloud, Briefcase, RefreshCw, Layers, Shield, FileCheck, Clock3 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export const metadata: Metadata = {
  title: "Services | TECUNIQUE",
  description: "Explore TECUNIQUE's comprehensive software services - Dedicated teams and Atlassian Enterprise solutions.",
}

const executionSteps = [
  {
    id: 1,
    title: "Discovery",
    description: "Deep dive into your business requirements, existing architecture, and project goals.",
    icon: Search,
  },
  {
    id: 2,
    title: "Team Assembly",
    description: "Hand-picking the right engineering talent and tech stack tailored for your needs.",
    icon: Users,
  },
  {
    id: 3,
    title: "Agile Delivery",
    description: "Iterative sprints, rapid prototyping, and transparent development cycles.",
    icon: Zap,
  },
  {
    id: 4,
    title: "Continuous Support",
    description: "Ongoing maintenance, proactive scaling, and continuous product optimization.",
    icon: RefreshCw,
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">

      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-white"
        style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }} />
          <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #93c5fd 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <SectionReveal className="mx-auto max-w-4xl">
            <div className="section-pill mb-6 mx-auto inline-flex">
              <Sparkles className="h-3 w-3" />
              Our Services
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-4">
              On-Demand Engineering Teams & <br className="hidden lg:block" />
              <span className="gradient-text">Custom Atlassian Solutions</span>
            </h1>
            <p className="mt-4 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We empower industry leaders with dedicated software talent and specialized Atlassian ecosystem expertise to accelerate growth.
            </p>
            <div className="mt-8 flex items-center justify-center gap-6">
              <Button size="lg" className="rounded-xl px-10 h-12 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5" asChild>
                <Link href="/contact">
                  Discuss Your Requirement
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Two Pillars Section */}
      <section className="py-24 lg:py-32 bg-slate-50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Pillar 1 */}
            <SectionReveal direction="left" className="flex flex-col h-full bg-white rounded-[2rem] p-10 lg:p-14 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600" />

              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shrink-0">
                  <Code className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold font-display text-slate-900">Dedicated Software Teams</h2>
              </div>

              <p className="text-slate-600 leading-relaxed mb-12 text-lg">
                Scale your engineering capacity instantly with our specialized software teams. We build secure, robust, and custom digital products from the ground up.
              </p>

              <div className="space-y-8 flex-1">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-100 rounded-full p-1.5 text-blue-600 shrink-0"><Briefcase className="h-4 w-4" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Custom Software Development</h4>
                    <p className="text-slate-600">End-to-end product design and engineering using modern, scalable tech stacks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-indigo-100 rounded-full p-1.5 text-indigo-600 shrink-0"><TestTube className="h-4 w-4" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">QA Engineering</h4>
                    <p className="text-slate-600">Rigorous manual and automated testing cycles to ensure flawless deployments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-purple-100 rounded-full p-1.5 text-purple-600 shrink-0"><Users className="h-4 w-4" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">IT Staff Augmentation</h4>
                    <p className="text-slate-600">Embed our senior developers and QA specialists directly into your existing workflows.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <Link href="/services/dedicated-teams" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors group/link">
                  Learn More About Dedicated Teams
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </SectionReveal>

            {/* Pillar 2 */}
            <SectionReveal direction="right" className="flex flex-col h-full bg-white rounded-[2rem] p-10 lg:p-14 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0052CC] to-[#2684FF]" />

              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0052CC] shrink-0">
                  <Layers className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold font-display text-slate-900">Atlassian Enterprise Services</h2>
              </div>

              <p className="text-slate-600 leading-relaxed mb-12 text-lg">
                We help top-tier marketplace vendors and enterprises architect, build, and optimize high-performing Atlassian applications.
              </p>

              <div className="space-y-8 flex-1">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-cyan-100 rounded-full p-1.5 text-cyan-700 shrink-0"><Cloud className="h-4 w-4" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Cloud Migrations</h4>
                    <p className="text-slate-600">Seamlessly migrate your infrastructure and data to Atlassian Cloud securely.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-blue-100 rounded-full p-1.5 text-blue-700 shrink-0"><Puzzle className="h-4 w-4" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Marketplace App Development</h4>
                    <p className="text-slate-600">Custom Jira and Confluence apps built on Forge and Connect frameworks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-indigo-100 rounded-full p-1.5 text-indigo-700 shrink-0"><LayoutDashboard className="h-4 w-4" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Jira/Confluence Customization</h4>
                    <p className="text-slate-600">Tailor Atlassian tools to perfectly match your specific enterprise workflows.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <Link href="/services/atlassian" className="inline-flex items-center gap-2 text-[#0052CC] font-bold hover:text-[#0047b3] transition-colors group/link">
                  Learn More About Atlassian Services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* Execution Model */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="section-pill mb-6 mx-auto inline-flex">
              <CheckCircle2 className="h-3 w-3" />
              How We Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 mb-6">Our Execution Model</h2>
            <p className="text-lg text-slate-600">A streamlined, transparent workflow designed to integrate seamlessly with your business from day one.</p>
          </SectionReveal>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 relative z-10">
              {executionSteps.map((step, index) => (
                <SectionReveal key={step.id} delay={index * 100} className="relative group h-full">
                  <div className="flex flex-col h-full bg-[#0052CC] text-white p-8 lg:p-10 relative overflow-hidden transition-transform duration-300 rounded-xl hover:-translate-y-1 hover:shadow-xl shadow-[#0052CC]/20">
                    {/* Chevron Background Element */}
                    <div
                      className="absolute inset-0 bg-white/10 transition-transform duration-700 group-hover:translate-x-2"
                      style={{ clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)' }}
                    />

                    <div className="relative z-10 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold font-display mb-6 tracking-tight">
                        <span className="block text-blue-200 text-lg mb-1 font-semibold tracking-normal uppercase text-sm">Phase {step.id}</span>
                        {step.title}
                      </h3>
                      <p className="text-blue-100 text-base leading-relaxed mb-10 flex-1">
                        {step.description}
                      </p>
                      <div className="flex justify-end mt-auto">
                        <ArrowRight className="h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg, #f8f7ff 0%, #ede9fe 40%, #f0f9ff 100%)" }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 left-1/4 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #67e8f9 0%, transparent 70%)" }}
          />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)",
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
                <span className="gradient-text">Scale</span>
                {" "}Your Engineering?
              </h2>

              <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-xl mx-auto">
                Let's discuss how our dedicated teams and Atlassian expertise can accelerate your product roadmap.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] group"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    boxShadow: "0 8px 30px rgba(99,102,241,0.35)",
                  }}
                >
                  Discuss Your Requirement
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-8 py-4 text-base font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:border-indigo-200 hover:bg-white hover:shadow-md backdrop-blur-sm"
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
                    <badge.icon className="h-4 w-4 text-indigo-600" />
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
