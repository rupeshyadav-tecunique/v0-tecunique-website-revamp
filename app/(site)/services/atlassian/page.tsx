import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { 
  ArrowRight, CheckCircle2, Layers, Store, Users, RefreshCcw, Cloud, Code2, Puzzle, Webhook, CloudCog, ShieldCheck, Key, Rocket, TestTube2, ServerCog, FileCode2, GitMerge, Wrench, Settings2, HeadphonesIcon, CalendarCheck, FileSearch, UserCheck, Workflow, Repeat
} from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export const metadata: Metadata = {
  title: "Atlassian App Development & QA | Jira App Engineering | TECUNIQUE",
  description: "TECUNIQUE helps Atlassian Marketplace vendors and software product companies with Jira app development, QA, automation, Forge/Connect work, integrations, and long-term product support through dedicated teams in India.",
}

// Data structures for sections
const whoIsThisFor = [
  {
    title: "Marketplace App Vendors",
    description: "For teams building or maintaining Jira apps listed on the Atlassian Marketplace.",
    icon: Store
  },
  {
    title: "SaaS / ISV Teams",
    description: "For software companies integrating their products with Jira or Atlassian Cloud.",
    icon: Cloud
  },
  {
    title: "Product Engineering Leaders",
    description: "For teams that need dedicated developers, QA engineers, or automation specialists.",
    icon: Users
  },
  {
    title: "App Modernization Teams",
    description: "For teams improving older apps, moving toward Forge, or strengthening Cloud readiness.",
    icon: RefreshCcw
  }
]

const whatWeSupport = [
  {
    title: "Jira App Development",
    description: "Support for app features, workflows, UI, backend logic, REST APIs, and product enhancements.",
    icon: Code2
  },
  {
    title: "Forge & Connect Work",
    description: "Development and maintenance support for Atlassian Forge and Connect-based apps.",
    icon: Puzzle
  },
  {
    title: "Integrations & Customizations",
    description: "Connect Jira apps with third-party systems, internal tools, APIs, and product workflows.",
    icon: Webhook
  },
  {
    title: "Cloud App Modernization",
    description: "Support for Cloud readiness, app improvements, API changes, and migration-related engineering work.",
    icon: CloudCog
  }
]

const qaCards = [
  {
    title: "Functional QA",
    description: "Validate app features, workflows, screens, configurations, and user journeys.",
    icon: CheckCircle2
  },
  {
    title: "Regression Testing",
    description: "Protect existing functionality across product releases and platform changes.",
    icon: ShieldCheck
  },
  {
    title: "Workflow & Permission Testing",
    description: "Test Jira-specific conditions, roles, permissions, workflows, and project configurations.",
    icon: Key
  },
  {
    title: "Release Validation",
    description: "Support release readiness with structured test cycles and defect reporting.",
    icon: Rocket
  }
]

const automationCards = [
  {
    title: "Playwright / Selenium Automation",
    description: "Browser-based automation for critical app flows and regression scenarios.",
    icon: TestTube2
  },
  {
    title: "API Testing",
    description: "Validation of backend services, integrations, and REST API behaviour.",
    icon: ServerCog
  },
  {
    title: "JUnit / Java-Based Testing",
    description: "Support for Java-based test frameworks where applicable.",
    icon: FileCode2
  },
  {
    title: "CI/CD Test Integration",
    description: "Automated test execution aligned with build and release pipelines.",
    icon: GitMerge
  }
]

const longTermSupportCards = [
  {
    title: "Enhancements & Maintenance",
    description: "Ongoing feature improvements, bug fixes, and product refinements.",
    icon: Wrench
  },
  {
    title: "Compatibility Support",
    description: "Support for platform changes, API updates, browser changes, and app behaviour checks.",
    icon: Settings2
  },
  {
    title: "L2 / L3 Technical Support",
    description: "Issue analysis, debugging, reproduction, and engineering-level product support.",
    icon: HeadphonesIcon
  },
  {
    title: "Release Cycle Support",
    description: "Dedicated QA and development support across planned releases.",
    icon: CalendarCheck
  }
]

const processSteps = [
  {
    title: "1. Understand App Context",
    description: "We understand your app, users, Jira workflows, technology stack, and support needs.",
    icon: FileSearch
  },
  {
    title: "2. Build the Right Team",
    description: "You evaluate and approve developers, QA engineers, automation engineers, or support engineers.",
    icon: UserCheck
  },
  {
    title: "3. Align with Your Process",
    description: "The team works with your tools, backlog, sprint process, communication channels, and release plans.",
    icon: Workflow
  },
  {
    title: "4. Support Long-Term Delivery",
    description: "We help maintain continuity, product knowledge, QA coverage, and release rhythm.",
    icon: Repeat
  }
]

export default function AtlassianServicesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      
      {/* 1. Hero Section */}
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
            <div className="section-pill mb-6 mx-auto inline-flex bg-[#0052CC]/10 text-[#0052CC] border-[#0052CC]/20 px-3 py-1 rounded-full text-sm font-semibold">
              <Layers className="h-4 w-4 mr-2" />
              Atlassian App Development & QA
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-6">
              Build, Test, and Support Jira Apps with <br className="hidden lg:block"/>
              <span className="text-[#0052CC]">Dedicated Engineering Teams</span>
            </h1>
            <p className="mt-4 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              TECUNIQUE helps Atlassian Marketplace vendors and software product companies build, test, automate, and maintain Jira apps. Our teams support app development, QA, automation, integrations, Forge/Connect work, and long-term product maintenance.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#0052CC] px-8 text-base font-bold text-white shadow-xl shadow-[#0052CC]/20 transition-all hover:bg-[#0047b3] hover:scale-105"
              >
                Discuss Your Atlassian App Needs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/services/dedicated-teams" 
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-[#0052CC]/20 bg-white/50 backdrop-blur-sm px-8 text-base font-bold text-[#0052CC] transition-all hover:bg-white hover:border-[#0052CC]/40 hover:scale-105"
              >
                Explore Dedicated Teams
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {["Jira Apps", "Forge & Connect", "Marketplace QA", "Automation Testing", "REST APIs", "Long-Term Support"].map(chip => (
                <span key={chip} className="px-4 py-2 rounded-full bg-white/60 border border-slate-200 text-slate-700 text-sm font-medium shadow-sm backdrop-blur-sm">
                  {chip}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 2. Who This Page Is For */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-6">Built for Atlassian App Vendors and Product Teams</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoIsThisFor.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 100}>
                <div className="h-full bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                  <card.icon className="h-8 w-8 text-[#0052CC] mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{card.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Support */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-6">Atlassian App Engineering Support</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whatWeSupport.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 100} className="relative group">
                <div className="h-full bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:shadow-xl hover:border-[#0052CC]/20 transition-all duration-300">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#0052CC] mb-6 group-hover:scale-110 group-hover:bg-[#0052CC] group-hover:text-white transition-all duration-300">
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. QA for Atlassian Apps */}
      <section className="py-24 bg-[#0052CC] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">QA Built Around Atlassian App Complexity</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Testing Jira apps requires more than generic functional QA. Marketplace apps need careful validation across workflows, permissions, configurations, user roles, edge cases, integrations, and release cycles.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qaCards.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 100}>
                <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300">
                  <card.icon className="h-8 w-8 text-blue-200 mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-blue-100 leading-relaxed text-sm">{card.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Automation QA */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-6">Automation QA for Faster, Safer Releases</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Our automation QA teams help Atlassian app vendors reduce repetitive testing effort and strengthen release confidence through product-specific automation frameworks.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {automationCards.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 100}>
                <div className="flex flex-col h-full bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0052CC] mb-6 group-hover:scale-110 group-hover:bg-[#0052CC] group-hover:text-white transition-all duration-300">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Long-Term Product Support */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 mb-6">Long-Term Support for Marketplace Products</h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Many Atlassian apps need ongoing engineering attention after the first release. TECUNIQUE supports long-term development, QA, maintenance, bug fixing, compatibility checks, and support workflows for product teams.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {longTermSupportCards.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 100}>
                <div className="h-full bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <card.icon className="h-8 w-8 text-[#0052CC] mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{card.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How We Work */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">Dedicated Teams for Atlassian App Work</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              TECUNIQUE can provide dedicated developers, QA engineers, automation QA engineers, and support engineers who work with your tools, sprint process, product priorities, and release expectations.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-800" />
            {processSteps.map((step, index) => (
              <SectionReveal key={step.title} delay={index * 100} className="relative">
                <div className="bg-slate-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-slate-900">
                  <step.icon className="h-10 w-10 text-blue-400" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Relevant Experience */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Experience Across Atlassian Marketplace Products</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              TECUNIQUE has supported long-term engineering, QA, automation, and support work for teams behind Atlassian Marketplace products. Our experience includes work related to Jira app development support, QA automation, release testing, L3 support, and product maintenance.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                company: "Innovalog / JMWE",
                logo: "/images/companies/innovalog.png",
                desc: "Long-term development and QA support around Jira workflow app work."
              },
              {
                company: "Appfire",
                logo: null,
                desc: "Dedicated development, QA, automation, recruitment, and product support experience across acquired Marketplace products."
              },
              {
                company: "Qotilabs / Rich Filters",
                logo: "/images/companies/quotilabs.png",
                desc: "QA and product support experience for Jira dashboard and reporting app work."
              }
            ].map((exp, i) => (
              <SectionReveal key={exp.company} delay={i * 100}>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center flex flex-col items-center justify-center h-full hover:shadow-md transition-shadow">
                  {exp.logo ? (
                    <div className="relative h-12 w-32 mb-6">
                      <Image src={exp.logo} alt={exp.company} fill className="object-contain" />
                    </div>
                  ) : (
                    <div className="h-12 px-4 mb-6 bg-slate-50 rounded flex items-center justify-center font-bold text-slate-400 text-xl border border-slate-200">
                      Appfire
                    </div>
                  )}
                  <h4 className="font-bold text-slate-900 mb-3">{exp.company}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{exp.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonial */}
      <section className="py-24 bg-white relative border-b border-slate-200/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionReveal className="text-center">
            <div className="flex flex-col items-center mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
                Client Relationship Highlight
              </span>
            </div>
            <p className="text-2xl font-medium leading-relaxed text-slate-900 mb-8 max-w-3xl mx-auto">
              TECUNIQUE’s long-term collaboration with Innovalog included dedicated development and QA support for Jira Marketplace app work, helping preserve product knowledge, quality focus, and engineering continuity over time.
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="h-14 w-14 rounded-full mb-4 border-2 border-white shadow-md overflow-hidden relative">
                <Image src="/images/companies/innovalog.png" alt="Innovalog" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-slate-900">Innovalog</div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg, #f8f7ff 0%, #e0f2fe 40%, #f0f9ff 100%)" }}
      >
        <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }} />
          <div className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #0284c7 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0284c7 1px, transparent 1px), linear-gradient(to right, #0284c7 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionReveal>
              <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
                Need a Dedicated Team for Your <br/>
                <span className="text-[#0052CC]">Atlassian App?</span>
              </h2>

              <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Whether you need Jira app development, QA, automation, Forge/Connect support, integrations, or long-term product maintenance, TECUNIQUE can help you build a focused engineering team from India.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] group bg-[#0052CC] hover:bg-[#0047b3]"
                >
                  Discuss Your Atlassian App Needs
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services/dedicated-teams"
                  className="inline-flex items-center justify-center rounded-xl border border-[#0052CC]/20 bg-white/50 px-8 py-4 text-base font-semibold text-[#0052CC] shadow-sm transition-all duration-200 hover:border-[#0052CC]/40 hover:bg-white hover:shadow-md backdrop-blur-sm"
                >
                  Explore Dedicated Teams
                </Link>
              </div>

            </SectionReveal>
          </div>
        </div>
      </section>

    </div>
  )
}
