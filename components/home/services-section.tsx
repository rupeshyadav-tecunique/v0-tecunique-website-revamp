"use client"

import Link from "next/link"
import { Users, Code2, TestTube2, Puzzle, ArrowRight, Sparkles, CheckCircle2, Webhook, Bot } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function ServicesSection() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-24 lg:py-32 bg-accent/30 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal mb-16">
          <span className="section-pill mb-6 inline-flex">
            <Sparkles className="h-3 w-3" />
            Our Services
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Engineering &{" "}
            <span className="gradient-text">Atlassian Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From building dedicated offshore engineering teams to supporting Jira app development, QA, automation, and long-term product engineering, we help software companies scale with practical execution.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Column A: Core Engineering */}
          <div className="glass-card flex flex-col h-full rounded-3xl p-8 lg:p-10 border border-border/60 bg-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Core Engineering</h3>
            
            <div className="space-y-8">
              {/* Service 1 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Dedicated Teams & Augmentation</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Quickly scale your existing team with our senior engineers and QA specialists — on-demand, fully managed, and seamlessly integrated into your workflow.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Code2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Custom Software Development</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    End-to-end product design and development using advanced technologies for faster time-to-market, robustness, and scalability.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <TestTube2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fully customized managed testing services. We take end-to-end responsibility for quality assurance of your software products.
                  </p>
                </div>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "Trusted by enterprises like OPPSCIENCE & Validat",
                "Deep expertise in React, Node.js, and Cloud-native stack",
                "Scalable architectures with uncompromising quality"
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground font-medium">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8 border-t border-border/50">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 transition-colors hover:text-indigo-700 group/link"
              >
                Explore Engineering Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Column B: Atlassian Ecosystem */}
          <div className="glass-card flex flex-col h-full rounded-3xl p-8 lg:p-10 border border-border/60 bg-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0052CC] to-[#2684FF]" />
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-display text-2xl font-bold text-foreground">Atlassian Ecosystem</h3>
              <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm bg-[#0052CC]">
                Specialty
              </span>
            </div>
            
            <div className="space-y-8 mt-4">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0052CC] shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Puzzle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Jira Plugin Development</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Custom Jira apps, Forge, and Connect development to extend Atlassian capabilities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2684FF]/10 text-[#2684FF] shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Webhook className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Integrations & Customizations</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Seamlessly connect Atlassian products with your existing enterprise systems and workflows.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Rovo Integration</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Unlock Atlassian's AI capabilities by integrating Rovo to accelerate knowledge discovery and automate tasks.
                  </p>
                </div>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "Trusted by vendors like Appfire & Innovalog",
                "Deep expertise in Atlassian SDK & Forge",
                "Dedicated QA for Atlassian marketplace compliance"
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground font-medium">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0052CC]" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8 border-t border-border/50">
              <Link
                href="/services/atlassian"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0052CC] transition-colors hover:text-[#0047b3] group/link"
              >
                Learn More About Atlassian Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
