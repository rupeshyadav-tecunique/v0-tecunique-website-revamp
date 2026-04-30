"use client"

import Link from "next/link"
import { Users, Code2, TestTube2, UserPlus, ArrowRight, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const services = [
  {
    title: "Dedicated Teams",
    description: "Engage cost-effective, fully managed software teams — developers, QA engineers, and technical support — seamlessly integrated into your workflow.",
    icon: Users,
    gradient: "from-indigo-500 to-violet-600",
    lightBg: "from-indigo-50 to-violet-50",
    tag: "Most Popular",
  },
  {
    title: "Software Development",
    description: "Product design and development using advanced technologies for faster time-to-market, robustness, and scalability with iterative delivery.",
    icon: Code2,
    gradient: "from-violet-500 to-purple-600",
    lightBg: "from-violet-50 to-purple-50",
    tag: null,
  },
  {
    title: "Quality Assurance",
    description: "Fully customized managed testing services. We take end-to-end responsibility for quality assurance of your software products.",
    icon: TestTube2,
    gradient: "from-cyan-500 to-blue-600",
    lightBg: "from-cyan-50 to-blue-50",
    tag: null,
  },
  {
    title: "Staff Augmentation",
    description: "Quickly scale your existing team with our senior engineers and QA specialists — on-demand, no long-term commitment required.",
    icon: UserPlus,
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "from-blue-50 to-indigo-50",
    tag: "New",
  },
]

export function ServicesSection() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="section-pill">
            <Sparkles className="h-3 w-3" />
            Our Services
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Offshore Software Development{" "}
            <span className="gradient-text">& IT Outsourcing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Build a dedicated team of talented engineers to deliver reliable, scalable, and quality software solutions on the technology stack of your preference.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal premium-card group relative flex flex-col rounded-2xl border border-border/60 bg-white overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${service.gradient}`} />

              <div className="flex flex-col flex-1 p-6">
                {/* Icon */}
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.lightBg} transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon
                    className="h-6 w-6"
                    style={{ stroke: "url(#iconGrad)" }}
                  />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Tag badge */}
                {service.tag && (
                  <span className="mb-3 self-start rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
                    {service.tag}
                  </span>
                )}

                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Learn more link */}
                <div
                  className="mt-5 flex items-center gap-1 text-sm font-semibold transition-all duration-200 translate-y-0 group-hover:-translate-y-0.5"
                  style={{ color: "#6366f1" }}
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center reveal">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
