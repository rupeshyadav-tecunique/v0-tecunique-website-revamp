import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Users, Code2, ShieldCheck, Cpu, Cloud, HeadphonesIcon, SearchCheck, CheckCircle2, ChevronRight, Sparkles, FileCheck, Layers, Building2, MapPin, Clock, ArrowRight, ArrowDown, ArrowLeft } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export const metadata: Metadata = {
  title: "Dedicated Software Teams in India | TECUNIQUE",
  description: "Build dedicated software development, QA, automation, DevOps, and support teams in India with TECUNIQUE. Client-selected talent, managed operations, NDA-backed engagement, and long-term team continuity.",
}

const teamRoles = [
  {
    title: "Frontend Engineers",
    description: "React, Angular, Vue, TypeScript, UI implementation, product interfaces.",
    icon: Code2,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Backend Engineers",
    description: "Java, Spring Boot, Node.js, APIs, integrations, microservices, databases.",
    icon: Layers,
    color: "from-indigo-500 to-purple-400"
  },
  {
    title: "QA Engineers",
    description: "Manual QA, regression testing, test planning, release validation.",
    icon: FileCheck,
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Automation QA Engineers",
    description: "Playwright, Selenium, JUnit, API testing, CI/CD test integration.",
    icon: ShieldCheck,
    color: "from-rose-500 to-orange-400"
  },
  {
    title: "DevOps Engineers",
    description: "Cloud environments, deployment pipelines, Docker, Kubernetes, AWS support.",
    icon: Cloud,
    color: "from-sky-500 to-blue-400"
  },
  {
    title: "Support Engineers",
    description: "L2/L3 product support, issue analysis, maintenance, customer-facing technical support.",
    icon: HeadphonesIcon,
    color: "from-fuchsia-500 to-pink-400"
  }
]

const buildSteps = [
  {
    step: "01",
    title: "Requirement Discussion",
    description: "We understand the roles, skillset, technology stack, team size, experience level, and engagement expectations."
  },
  {
    step: "02",
    title: "Talent Shortlisting",
    description: "TECUNIQUE identifies suitable candidates through internal capability and recruitment support."
  },
  {
    step: "03",
    title: "Client Evaluation",
    description: "You interview, test, and approve the professionals before onboarding."
  },
  {
    step: "04",
    title: "Team Onboarding",
    description: "We handle employment, NDA, HR, payroll, infrastructure, access setup, and onboarding support."
  },
  {
    step: "05",
    title: "Ongoing Collaboration",
    description: "The team works full-time with your tools, communication channels, sprint process, and delivery priorities."
  },
  {
    step: "06",
    title: "Scale or Adjust",
    description: "You can expand the team, adjust roles, or add QA, DevOps, automation, or support as needs evolve."
  }
]

const rightFitscenarios = [
  {
    title: "Long-Term Product Development",
    description: "When you need engineers who can understand your product deeply and stay involved over time."
  },
  {
    title: "Expanding an Existing Team",
    description: "When your internal team needs more capacity without increasing local hiring overhead."
  },
  {
    title: "QA or Automation Scaling",
    description: "When releases are growing and you need dedicated QA or automation support."
  },
  {
    title: "Specialized Product Knowledge",
    description: "When repeated onboarding is costly and continuity matters."
  },
  {
    title: "Cost-Efficient Engineering Capacity",
    description: "When you want a stable offshore team with transparent operations from India."
  },
  {
    title: "Atlassian or SaaS Product Support",
    description: "When you need development, QA, automation, or support engineers for product-led work."
  }
]

const whyChooseUs = [
  {
    title: "Client-Selected Talent",
    description: "You are involved in evaluating and approving team members before onboarding.",
    icon: SearchCheck
  },
  {
    title: "Long-Term Team Stability",
    description: "We focus on retention, continuity, and product knowledge, not short-term staffing.",
    icon: Clock
  },
  {
    title: "Managed Operations in India",
    description: "We handle HR, payroll, infrastructure, contracts, NDA, and administration.",
    icon: MapPin
  },
  {
    title: "Engineering + QA Capability",
    description: "Build teams across development, QA, automation, DevOps, support, and product engineering.",
    icon: Code2
  },
  {
    title: "Remote-Ready Collaboration",
    description: "Teams work with your tools, communication channels, sprint process, and time-zone expectations.",
    icon: Cloud
  },
  {
    title: "Practical, Transparent Engagement",
    description: "Clear communication, simple operating model, and visibility into team performance and delivery.",
    icon: CheckCircle2
  }
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-12 lg:pt-16 lg:pb-16 flex items-center isolate">
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
              <span>Dedicated Software Teams in India</span>
            </div>
            
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Build a Dedicated Software Team That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Works Like Your Own</span>
            </h1>
            
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              TECUNIQUE helps software companies build full-time development, QA, automation, DevOps, and support teams in India. You select the team. We manage recruitment, onboarding, payroll, HR, infrastructure, NDA, and long-term team continuity.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex h-14 items-center justify-center rounded-full bg-blue-600 px-8 text-base font-bold text-white shadow-xl shadow-blue-900/20 transition-all hover:bg-blue-700 hover:scale-105"
              >
                Build Your Dedicated Team
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-slate-200 bg-white/50 backdrop-blur-sm px-8 text-base font-bold text-slate-700 transition-all hover:bg-white hover:border-slate-300 hover:scale-105"
              >
                Discuss Team Requirements
              </Link>
            </div>

            {/* Hero Stats */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-200/60 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-slate-900">15+ Years</span>
                <span className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">in Software Services</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-slate-900">High</span>
                <span className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">Team Retention</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-slate-900">Long-Term</span>
                <span className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">Client Relationships</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 2. What Is a Dedicated Software Team? */}
      <section className="py-20 lg:py-28 bg-white border-y border-slate-200/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionReveal className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">What Is a Dedicated Software Team?</h2>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed text-left bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
              <p>
                A dedicated software team is a full-time team of engineers who work exclusively on your product, project, or platform. Unlike short-term outsourcing, this model is designed for continuity, product knowledge, and long-term collaboration.
              </p>
              <p>
                With TECUNIQUE, clients can interview and select team members, define priorities, manage delivery direction, and work directly with the team, while TECUNIQUE handles the operational responsibilities in India.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 3. Build the Team You Need */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">Build the Team You Need</h2>
            <p className="text-xl text-slate-600">
              Build a full-time team across the engineering, QA, automation, DevOps, and support roles your product needs.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teamRoles.map((role, i) => (
              <SectionReveal key={role.title} delay={i * 100}>
                <div className="relative overflow-hidden h-full rounded-3xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${role.color} opacity-[0.03] rounded-bl-full group-hover:opacity-[0.08] transition-opacity duration-300`} />
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${role.color} text-white mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <role.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{role.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{role.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How the Model Works */}
      <section className="py-24 lg:py-32 bg-white border-y border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">How We Build Your Dedicated Team</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto">
            {buildSteps.map((step, index) => {
              let orderClass = "";
              if (index === 0) orderClass = "order-1";
              if (index === 1) orderClass = "order-2";
              if (index === 2) orderClass = "order-3 md:order-4 lg:order-3";
              if (index === 3) orderClass = "order-4 md:order-3 lg:order-6";
              if (index === 4) orderClass = "order-5 md:order-5 lg:order-5";
              if (index === 5) orderClass = "order-6 md:order-6 lg:order-4";
              
              return (
                <SectionReveal key={step.step} delay={index * 100} className={`relative group h-full ${orderClass}`}>
                  <div className="flex flex-col h-full bg-[#0052CC] text-white p-8 lg:p-10 relative overflow-hidden transition-transform duration-300 rounded-xl hover:-translate-y-1 hover:shadow-xl shadow-[#0052CC]/20">
                    {/* Chevron Background Element */}
                    <div 
                      className="absolute inset-0 bg-white/10 transition-transform duration-700 group-hover:translate-x-2"
                      style={{ clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)' }}
                    />
                    
                    <div className="relative z-10 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold font-display mb-6 tracking-tight">
                        <span className="block text-blue-200 mb-1 font-semibold tracking-normal uppercase text-sm">Step {step.step}</span>
                        {step.title}
                      </h3>
                      <p className="text-blue-100 text-base leading-relaxed mb-10 flex-1">
                        {step.description}
                      </p>
                      <div className="flex justify-end mt-auto">
                        {index === 5 ? (
                          <CheckCircle2 className="h-6 w-6 text-blue-300 group-hover:text-white transition-all" />
                        ) : (
                          <>
                            {/* Mobile (1 col): All Down */}
                            <ArrowDown className="md:hidden h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-y-1 transition-all" />
                            
                            {/* Tablet (md, 2 cols): 1=Right, 2=Down, 3=Left, 4=Down, 5=Right */}
                            {index === 0 && <ArrowRight className="hidden md:block lg:hidden h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-x-1 transition-all" />}
                            {index === 1 && <ArrowDown className="hidden md:block lg:hidden h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-y-1 transition-all" />}
                            {index === 2 && <ArrowLeft className="hidden md:block lg:hidden h-6 w-6 text-blue-300 group-hover:text-white group-hover:-translate-x-1 transition-all" />}
                            {index === 3 && <ArrowDown className="hidden md:block lg:hidden h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-y-1 transition-all" />}
                            {index === 4 && <ArrowRight className="hidden md:block lg:hidden h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-x-1 transition-all" />}

                            {/* Desktop (lg, 3 cols): 1=Right, 2=Right, 3=Down, 4=Left, 5=Left */}
                            {(index === 0 || index === 1) && <ArrowRight className="hidden lg:block h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-x-1 transition-all" />}
                            {index === 2 && <ArrowDown className="hidden lg:block h-6 w-6 text-blue-300 group-hover:text-white group-hover:translate-y-1 transition-all" />}
                            {(index === 3 || index === 4) && <ArrowLeft className="hidden lg:block h-6 w-6 text-blue-300 group-hover:text-white group-hover:-translate-x-1 transition-all" />}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. What TECUNIQUE Manages */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05]" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">You Manage the Product. <span className="text-blue-400">We Manage the Operations.</span></h2>
            <p className="text-xl text-slate-400">This clear division of responsibility is the core of our successful model.</p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Client Controls */}
            <SectionReveal delay={100} className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-slate-700 hover:-translate-y-1 hover:border-slate-500 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700/50">
                <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Client Controls</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Product roadmap", "Sprint priorities", "Technical direction",
                  "Daily collaboration", "Task allocation", "Performance feedback", "Delivery expectations"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>

            {/* TECUNIQUE Handles */}
            <SectionReveal delay={200} className="bg-blue-600 rounded-3xl p-8 lg:p-10 border border-blue-500 shadow-2xl shadow-blue-900/50 hover:-translate-y-1 hover:border-blue-400 hover:shadow-blue-900/80 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-blue-500/50">
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">TECUNIQUE Handles</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Recruitment support", "Employment and payroll", "HR and employee engagement",
                  "NDA and contracts", "Infrastructure and work environment", "Attendance and administration",
                  "Retention support", "Replacement/backfill coordination where needed"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-200 shrink-0 mt-0.5" />
                    <span className="text-blue-50 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 6. When This Model Works Best */}
      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">When Dedicated Teams Are the Right Fit</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rightFitscenarios.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 100}>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
                  <div className="h-1.5 w-12 bg-blue-600 rounded-full mb-6 group-hover:w-24 transition-all duration-300" />
                  <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed relative z-10">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why TECUNIQUE */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Why Companies Choose TECUNIQUE for Dedicated Teams</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 100}>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full group relative overflow-hidden">
                  {/* Decorative background circle */}
                  <div className="absolute -right-6 -top-6 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors duration-500 z-0" />
                  
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 relative z-10 shadow-sm">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed relative z-10">{item.description}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Relevant Experience / Trust Proof */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Built Through Long-Term Client Relationships</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              TECUNIQUE has supported international software companies across Atlassian apps, product engineering, QA, data platforms, and offshore development teams. Our dedicated team model has been used for long-term development, QA, automation, support, and product maintenance engagements.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Atlassian App Vendors", companies: ["Appfire", "Innovalog", "Qotilabs"] },
              { category: "Product Engineering & Data Platforms", companies: ["OPPSCIENCE", "CustomerMatrix", "PolySpot"] },
              { category: "ODC / Offshore Team Setup", companies: ["SkySelect"] },
              { category: "Product Development & Support", companies: ["eXtensi", "Validat"] }
            ].map((block, i) => (
              <SectionReveal key={block.category} delay={i * 100} className="bg-white p-8 rounded-3xl border border-slate-200 text-center flex flex-col justify-center">
                <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-6">{block.category}</h4>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
                  {block.companies.map((company) => {
                    const companyLogos: Record<string, string> = {
                      "Innovalog": "/images/companies/innovalog.png",
                      "Qotilabs": "/images/companies/quotilabs.png",
                      "OPPSCIENCE": "/images/companies/oppscience.svg",
                      "CustomerMatrix": "/images/companies/customer_matrix.webp",
                      "PolySpot": "/images/companies/polyspot.webp",
                      "SkySelect": "/images/companies/skyselect.svg"
                    };

                    return (
                      <div key={company} className="flex flex-col items-center group">
                        {companyLogos[company] ? (
                          <div className="relative h-10 w-28">
                            <Image 
                              src={companyLogos[company]} 
                              alt={company} 
                              fill 
                              className="object-contain transition-transform duration-300 group-hover:scale-110" 
                            />
                          </div>
                        ) : (
                          <div className="h-10 w-auto min-w-[80px] bg-slate-100 border border-slate-200 rounded flex items-center justify-center px-3 group-hover:border-blue-300 transition-colors">
                            <span className="text-sm font-bold text-slate-400 group-hover:text-blue-500 transition-colors">{company}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonial (David Fischer) */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-200/50 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center">
            <div className="flex flex-col items-center mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
                Client Relationship Highlight
              </span>
            </div>
            <p className="text-2xl font-medium leading-relaxed text-slate-900 mb-8 max-w-3xl mx-auto">
              TECUNIQUE’s long-term collaboration with Innovalog included dedicated development and QA support for Atlassian Marketplace products, helping preserve product knowledge and engineering continuity over time.
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
      <section className="py-24 lg:py-32 bg-blue-600 relative overflow-hidden">
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
              Ready to Build a Dedicated Software Team?
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Tell us the roles, skills, and team size you need. We will help you evaluate the right professionals and set up a dedicated team that works with your tools, processes, and product goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-indigo-700 shadow-xl shadow-indigo-900/20 transition-all hover:bg-slate-50 hover:scale-105"
              >
                Build Your Dedicated Team
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 text-base font-bold text-white transition-all hover:bg-white/20 hover:scale-105"
              >
                Discuss Team Requirements
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

    </div>
  )
}
