import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Users, ShieldCheck, Code2, Cpu, Clock, MapPin, SearchCheck, Heart, CheckCircle2, ChevronRight, Target, Sparkles, Building2, Zap, Globe } from "lucide-react"
import CultureGallery from "@/components/about/culture-gallery"
import { SectionReveal } from "@/components/ui/section-reveal"

export const metadata: Metadata = {
  title: "About Us | TECUNIQUE",
  description: "Software engineering teams built for long-term product work.",
}

const timelineEvents = [
  {
    year: "2010",
    title: "TECUNIQUE Begins",
    description: "Started with a focus on offshore software engineering, custom web applications, and dedicated development support.",
    icon: Building2
  },
  {
    year: "2016",
    title: "Atlassian Ecosystem Work",
    description: "Began deeper work with Atlassian Marketplace app teams, including Jira app development support, QA, automation, and long-term product maintenance.",
    icon: Cpu
  },
  {
    year: "2020",
    title: "Long-Term Client Expansion",
    description: "Continued supporting product companies through dedicated teams, QA, automation, and software support across multiple international client relationships.",
    icon: Globe
  },
  {
    year: "2022",
    title: "Stronger Delivery Operations",
    description: "Expanded delivery maturity with more structured processes around team stability, security, documentation, QA, and remote collaboration.",
    icon: Zap
  },
  {
    year: "Today",
    title: "Dedicated Teams for Product Companies",
    description: "TECUNIQUE continues to help international software companies build stable, full-time engineering teams in India.",
    icon: Target
  }
]
// We don't have Globe imported above, let me import it. Wait, I'll replace Globe with Users in the import or add it.

const whatWeDo = [
  {
    title: "Dedicated Software Teams",
    description: "We help clients build full-time development, QA, automation, support, and product engineering teams that work as an extension of their in-house team.",
    icon: Users,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Custom Software Development",
    description: "We support web applications, backend systems, integrations, cloud platforms, data-driven products, and long-term product enhancement work.",
    icon: Code2,
    color: "from-purple-500 to-fuchsia-400"
  },
  {
    title: "QA & Automation",
    description: "Our QA teams support manual testing, regression testing, automation frameworks, release validation, and ongoing product quality improvement.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Atlassian App Engineering",
    description: "We support Jira app development, Forge and Connect-based work, REST API integrations, Marketplace app QA, and ongoing product maintenance.",
    icon: Cpu,
    color: "from-orange-500 to-amber-400"
  }
]

const howWeWork = [
  {
    title: "Client-Selected Talent",
    description: "Clients can interview, evaluate, and approve team members before onboarding.",
    icon: SearchCheck
  },
  {
    title: "Direct Collaboration",
    description: "Teams work with the client’s tools, sprint process, communication channels, and delivery priorities.",
    icon: Users
  },
  {
    title: "Managed Operations in India",
    description: "TECUNIQUE handles recruitment support, HR, payroll, infrastructure, contracts, NDA, and retention support.",
    icon: MapPin
  },
  {
    title: "Long-Term Continuity",
    description: "We focus on team stability so product knowledge is retained and repeated onboarding is reduced.",
    icon: Clock
  }
]

const atlassianExperience = [
  {
    title: "Jira App Development",
    description: "Forge, Connect, REST APIs, frontend/backend development, and product enhancement support.",
  },
  {
    title: "Marketplace App QA",
    description: "Functional testing, regression testing, release checks, and compatibility validation.",
  },
  {
    title: "Automation & Tooling",
    description: "Playwright, Selenium, API testing, and product-specific automation workflows.",
  },
  {
    title: "Long-Term Product Support",
    description: "Ongoing enhancements, bug fixes, maintenance, and version compatibility support.",
  }
]

const leaders = [
  { name: "Jaydeep", role: "CEO", experience: "16 yrs", image: "/images/leaders/default.jpg" },
  { name: "Ankur", role: "TL", experience: "16 yrs", image: "/images/leaders/default.jpg" },
  { name: "Ashish", role: "QA Lead", experience: "15 yrs", image: "/images/leaders/default.jpg" },
  { name: "Ankita", role: "Developer", experience: "14 yrs", image: "/images/leaders/default.jpg" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section (Enhanced with glassmorphism and animated blobs) */}
      <section
        className="relative pt-10 pb-16 lg:pt-20 lg:pb-16 flex items-center isolate"
      >
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 -z-10 bg-slate-50">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 opacity-50 blur-[80px] animate-blob" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100 to-cyan-100 opacity-50 blur-[80px] animate-blob animation-delay-2000" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 w-full">
          <SectionReveal className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-blue-600 text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>Dedicated Engineering Partner</span>
            </div>
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1] mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">TECUNIQUE</span>
            </h1>
            <p className="mt-4 text-2xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
              Software engineering teams built for <span className="relative whitespace-nowrap"><span className="relative z-10">long-term</span><span className="absolute -bottom-1 left-0 w-full h-3 bg-blue-200/60 -rotate-1 z-0 rounded-full"></span></span> product work.
            </p>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
              TECUNIQUE is a software engineering partner based in India, helping international companies build dedicated development, QA, automation, support, and Atlassian app teams. Since 2010, we have focused on stable team relationships, practical execution, and long-term client success.
            </p>

            {/* 2. Trust Badges (Upgraded to Glass Cards) */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {[
                { icon: Clock, title: "Since 2010", subtitle: "Long-term software engineering experience", color: "text-blue-500", bg: "bg-blue-50" },
                { icon: Users, title: "High Team Retention", subtitle: "Stable teams with continuity of product knowledge", color: "text-purple-500", bg: "bg-purple-50" },
                { icon: Cpu, title: "Atlassian Ecosystem", subtitle: "Hands-on experience with Jira apps & support", color: "text-indigo-500", bg: "bg-indigo-50" },
                { icon: ShieldCheck, title: "NDA-Backed", subtitle: "Confidential, client-controlled collaboration", color: "text-emerald-500", bg: "bg-emerald-50" },
              ].map((badge, i) => (
                <div key={badge.title} className="group flex flex-col p-5 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-xl ${badge.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <badge.icon className={`h-5 w-5 ${badge.color}`} />
                  </div>
                  <span className="font-bold text-slate-900 mb-1">{badge.title}</span>
                  <span className="text-sm text-slate-500 leading-snug">{badge.subtitle}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 3. Our Story Section (Enhanced with a visual layout) */}
      <section className="py-24 lg:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-90 z-10 mix-blend-multiply" />
                <Image src="/images/hero-1.webp" alt="Our Story" fill className="object-cover" />
                <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end text-white">
                  <QuoteIcon className="w-12 h-12 text-white/30 mb-4" />
                  <p className="text-2xl font-medium leading-snug">"Software companies need reliable engineering teams, not just temporary resources."</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[url('/grid.svg')] bg-center opacity-30 z-0" />
            </div>

            <div className="lg:col-span-7 lg:pl-10">
              <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  TECUNIQUE started in 2010 with a simple belief: software companies need reliable engineering teams, not just temporary resources.
                </p>
                <p>
                  Over the years, we have built dedicated development, QA, automation, and product support teams for international clients. Our work has grown through long-term relationships, referrals, and consistent delivery rather than aggressive marketing claims.
                </p>
                <p>
                  Today, TECUNIQUE works with software product companies, Atlassian app vendors, data platforms, and technology businesses that need skilled teams who can integrate with their process and stay committed for the long term.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. What We Do Today (Enhanced Cards with Gradients) */}
      <section className="bg-slate-50 py-24 lg:py-32 border-y border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">What We Do Today</h2>
            <p className="mt-6 text-xl text-slate-600">
              We help software companies extend their engineering capacity with dedicated teams and practical product development support from India.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 100}>
                <div className="relative overflow-hidden h-full rounded-3xl border border-slate-200 bg-white p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-[0.03] rounded-bl-full group-hover:opacity-[0.08] transition-opacity duration-300`} />

                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-base">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How We Work (Enhanced List Design) */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">How We Work</h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                Our model is designed for clients who want more than outsourced tasks. We build dedicated teams that become familiar with the product, process, domain, and delivery expectations over time.
              </p>

              <div className="space-y-8">
                {howWeWork.map((item, i) => (
                  <div key={item.title} className="flex gap-5 group">
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <span className="font-bold">{i + 1}</span>
                      </div>
                      {i !== howWeWork.length - 1 && (
                        <div className="w-px h-full bg-slate-200 my-2" />
                      )}
                    </div>
                    <div className="pb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl transform rotate-3 scale-105" />
              <Image src="/images/services/team.webp" alt="How we work" width={600} height={700} className="rounded-3xl relative z-10 shadow-2xl object-cover h-[700px] w-full" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 6. Experience in the Atlassian Ecosystem (Premium Dark Mode) */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-900 text-white">
        {/* Dark Mode Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-blue-900/40 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-indigo-900/30 blur-[80px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-20">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
              Ecosystem Expertise
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">Experience in the Atlassian Ecosystem</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Since 2016, TECUNIQUE has worked closely with teams building and supporting Atlassian Marketplace apps. Our experience includes Jira app development support, app QA, automation, REST API integrations, Cloud migration support, and long-term maintenance for marketplace products.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {atlassianExperience.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 100}>
                <div className="group relative h-full rounded-3xl bg-slate-800/40 backdrop-blur-md border border-slate-700/50 p-8 hover:bg-slate-800/80 hover:border-blue-500/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="mt-1 bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                      <CheckCircle2 className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-white transition-colors">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Journey (Timeline) (Enhanced with Glowing Nodes) */}
      <section className="py-24 lg:py-32 bg-slate-50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-24">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Journey</h2>
          </SectionReveal>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <SectionReveal key={event.year} delay={i * 100}>
                  <div className="relative pl-12 sm:pl-40 py-4 group">
                    {/* Connecting Line */}
                    {i !== timelineEvents.length - 1 ? (
                      <div className="absolute left-[23px] sm:left-[135px] top-14 bottom-[-2rem] w-0.5 bg-slate-200 group-hover:bg-blue-200 transition-colors duration-500" />
                    ) : (
                      <div className="absolute left-[23px] sm:left-[135px] top-14 h-32 w-0.5 bg-gradient-to-b from-slate-200 to-transparent" />
                    )}

                    {/* Glowing Node */}
                    <div className="absolute left-2 sm:left-[119px] top-6 h-8 w-8 rounded-full border-4 border-white bg-blue-500 shadow-sm group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <div className="hidden sm:block w-24 shrink-0 text-right">
                        <span className="text-3xl font-black text-slate-200 group-hover:text-blue-500 transition-colors duration-300">{event.year}</span>
                      </div>

                      <div className="flex-1">
                        <div className="sm:hidden mb-2">
                          <span className="text-2xl font-black text-blue-500">{event.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{event.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-lg">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. People, Stability, and Culture */}
      <section className="pt-24 lg:pt-32 pb-20 lg:pb-32 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center mb-16">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-sm font-semibold mb-6 border border-rose-100">
                <Heart className="h-4 w-4" />
                <span>Our Culture</span>
              </span>
              <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-8">
                People, Stability, and Culture
              </h2>
              <div className="prose prose-lg text-slate-600 mb-10">
                <p>
                  At TECUNIQUE, we believe stable teams are built through trust, respect, flexibility, and ownership. Our culture is intentionally low on hierarchy and high on responsibility, helping people stay engaged and clients retain product knowledge over time.
                </p>
                <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-100 mt-6">
                  We call our team members <strong className="text-blue-600">UNIQUENS</strong> — people who bring their own uniqueness, discipline, and ownership to the work they do.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Respectful Work Culture", desc: "We encourage open communication, low politics, and practical problem-solving." },
                  { title: "Ownership Mindset", desc: "Our teams are expected to understand the product, not just complete assigned tasks." },
                  { title: "Work-Life Balance", desc: "We believe sustainable delivery comes from stable, motivated people." },
                  { title: "Celebrating Together", desc: "Festivals, milestones, achievements, and team moments are part of how we build connection." },
                ].map((item) => (
                  <div key={item.title} className="relative pl-4 border-l-2 border-blue-200 hover:border-blue-500 transition-colors">
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-100 to-orange-100 rounded-[3rem] transform -rotate-3 opacity-50 blur-lg" />
                <CultureGallery />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 9. Founder-Led, Relationship-Driven */}
      <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-8">
              Founder-Led, Relationship-Driven
            </h2>
            <div className="text-xl text-slate-600 leading-relaxed space-y-6">
              <p>
                TECUNIQUE has been built with a long-term view: create stable engineering teams, keep communication transparent, and focus on meaningful client relationships.
              </p>
              <p>
                Our goal is not to be the biggest vendor, but to be a dependable partner for software companies that value continuity, practical execution, and people who stay with the product long enough to understand it deeply.
              </p>
            </div>
          </SectionReveal>

          {/* Leaders Grid (Enhanced Hover Effects) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {leaders.map((leader, i) => (
              <SectionReveal key={leader.name} delay={i * 100} className="flex flex-col items-center text-center group">
                <div className="relative h-32 w-32 sm:h-48 sm:w-48 mb-6 overflow-hidden rounded-[2rem] border-4 border-white shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                  <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mt-1">{leader.role}</p>
                <p className="text-sm font-medium text-slate-500 mt-1">{leader.experience} with TECUNIQUE</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA (Stunning Gradient) */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Abstract Background Patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800" />
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern-cta" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40V0H40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-cta)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-white/10 blur-[80px]" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center z-10">
          <SectionReveal>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8">
              Looking for a long-term engineering partner?
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Whether you need a dedicated team, QA automation support, Atlassian app expertise, or product engineering capacity, TECUNIQUE can help you build a stable team from India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-indigo-700 shadow-xl shadow-indigo-900/20 transition-all hover:bg-slate-50 hover:scale-105"
              >
                Book a Call
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 text-base font-bold text-white transition-all hover:bg-white/20 hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  )
}
