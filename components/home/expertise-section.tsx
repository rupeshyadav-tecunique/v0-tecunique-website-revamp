"use client"

import { CheckCircle, Layers, Clock, Shield, Lock, Zap, Globe, Award, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { brand } from "@/lib/design-tokens"

const expertise = [
  {
    title: "100% Client Satisfaction",
    desc: "Our SLA-driven approach ensures every deliverable meets or exceeds expectations.",
    icon: CheckCircle,
    color: brand.indigo,
  },
  {
    title: "No Black-Box Approach",
    desc: "Full transparency in process, communication, and code ownership.",
    icon: Layers,
    color: brand.violet,
  },
  {
    title: "Shorter Time to Market",
    desc: "Agile sprints and lean workflows accelerate product delivery.",
    icon: Clock,
    color: brand.cyan,
  },
  {
    title: "Data Privacy",
    desc: "GDPR-compliant processes with strict data governance and access controls.",
    icon: Shield,
    color: brand.indigo,
  },
  {
    title: "Guaranteed Security",
    desc: "NDA-protected engagements and strict enterprise security practices.",
    icon: Lock,
    color: brand.purple,
  },
  {
    title: "High Performance",
    desc: "Optimized architectures built to scale with your business growth.",
    icon: Zap,
    color: brand.teal,
  },
  {
    title: "Global Delivery",
    desc: "Remote-ready teams that work seamlessly across time zones.",
    icon: Globe,
    color: brand.violet,
  },
  {
    title: "Proven Excellence",
    desc: "15+ years of consistent delivery with 95% customer retention.",
    icon: Award,
    color: brand.indigo,
  },
]

const techStack = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "Java", "AWS", "Docker",
  "Kubernetes", "PostgreSQL", "GraphQL", "Atlassian SDK", "Jira", "Confluence",
  "React", "Next.js", "Node.js", "TypeScript", "Python", "Java", "AWS", "Docker",
  "Kubernetes", "PostgreSQL", "GraphQL", "Atlassian SDK", "Jira", "Confluence",
]

export function ExpertiseSection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="brand-cta-bg relative overflow-hidden py-20 lg:py-28"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="brand-orb-indigo-simple absolute -top-20 right-0 h-64 w-64 rounded-full opacity-40 blur-3xl"
        />
        <div
          className="brand-orb-cyan-simple absolute bottom-0 left-1/4 h-48 w-48 rounded-full opacity-30 blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="section-pill mb-6 inline-flex">
            <Sparkles className="h-3 w-3" />
            Our Expertise
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Outsource to{" "}
            <span className="gradient-text">TECUNIQUE</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            As a trusted software outsourcing company, we stay on schedule, scale teams on demand, and ensure top-notch product quality in every delivery.
          </p>
        </div>

        {/* Expertise cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, i) => (
            <div
              key={item.title}
              className="reveal group glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-sm"
                style={{ background: `${item.color}15` }}
              >
                <item.icon className="h-6 w-6" style={{ color: item.color }} />
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack ticker */}
        <div className="mt-16 reveal">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Technologies We Work With
          </p>
          <div className="relative overflow-hidden">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[var(--surface-lavender)] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[var(--surface-sky)] to-transparent pointer-events-none" />

            <div className="flex animate-marquee">
              {techStack.map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="mx-4 shrink-0 rounded-full border border-border/60 bg-white/80 px-4 py-2 text-sm font-medium text-foreground/60 whitespace-nowrap shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
