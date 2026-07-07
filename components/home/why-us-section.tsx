"use client"

import Link from "next/link"
import { Layers, Puzzle, Globe, Lock, ArrowRight, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const propositions = [
  {
    title: "Full Visibility, No Black Box",
    description: "Direct communication, transparent processes, and clear visibility into work progress.",
    icon: Layers,
    color: "#6366f1",
  },
  {
    title: "Atlassian Apps Experience",
    description: "Hands-on experience with Jira apps, Forge, Connect, REST APIs, app QA, and long-term product support.",
    icon: Puzzle,
    color: "#8b5cf6",
  },
  {
    title: "Remote-Ready Delivery",
    description: "Teams aligned with your tools, workflows, time-zone needs, and delivery expectations.",
    icon: Globe,
    color: "#06b6d4",
  },
  {
    title: "Security-Conscious Engagements",
    description: "NDA-backed work, controlled access, and responsible handling of client systems and data.",
    icon: Lock,
    color: "#7c3aed",
  },
]

export function WhyUsSection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32"
      style={{ background: "linear-gradient(180deg, #f8f7ff 0%, #ffffff 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="section-pill mb-6 inline-flex">
            <Sparkles className="h-3 w-3" />
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
            Trusted Software Services Since{" "}
            <span className="gradient-text">2010</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            With 15+ years of engineering excellence, TECUNIQUE brings transparency, collaboration, and domain expertise to every project. We deliver top-notch IT services globally — building relationships that stand the test of time.
          </p>
        </div>

        {/* Propositions Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {propositions.map((item, i) => (
            <div
              key={item.title}
              className="reveal group relative flex flex-col rounded-2xl border border-border/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: item.color, opacity: 0.8 }}
              />

              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${item.color}15` }}
              >
                <item.icon className="h-7 w-7" style={{ color: item.color }} />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center reveal">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 group"
          >
            Our Story
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
