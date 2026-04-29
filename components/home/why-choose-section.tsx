"use client"

import Link from "next/link"
import { Target, Heart, Award, ArrowRight, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const reasons = [
  {
    number: "01",
    title: "One-Stop Solution",
    description: "Comprehensive software services under one roof — from development to testing to long-term technical support. One partner for your entire product lifecycle.",
    icon: Target,
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    number: "02",
    title: "Customer Focus",
    description: "We put our customers first, ensuring every solution aligns tightly with your business objectives. High retention rates reflect our commitment to client success.",
    icon: Heart,
    gradient: "from-violet-500 to-purple-500",
  },
  {
    number: "03",
    title: "Long-term Commitment",
    description: "Dedicated to delivering excellence and maintaining long-term partnerships. Many of our clients have been with us for over a decade.",
    icon: Award,
    gradient: "from-cyan-500 to-indigo-500",
  },
]

export function WhyChooseSection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(180deg, #f8f7ff 0%, #ffffff 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="section-pill">
            <Sparkles className="h-3 w-3" />
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Your Trusted{" "}
            <span className="gradient-text">Technology Partner</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We leverage our extensive experience and talented resource pool to deliver top-notch IT services globally — building relationships that stand the test of time.
          </p>
        </div>

        {/* Reason cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="reveal group relative flex flex-col rounded-2xl border border-border/60 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Large background number */}
              <span
                className="absolute -top-4 -right-2 font-display text-8xl font-extrabold opacity-[0.04] select-none pointer-events-none group-hover:opacity-[0.06] transition-opacity"
                aria-hidden
              >
                {reason.number}
              </span>

              {/* Number pill */}
              <div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl text-white font-display text-sm font-extrabold"
                style={{ background: `linear-gradient(135deg, var(--from, #6366f1), var(--to, #8b5cf6))` }}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${reason.gradient} text-white`}>
                  <reason.icon className="h-6 w-6" />
                </div>
              </div>

              {/* Small number label */}
              <span className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                {reason.number}
              </span>

              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {reason.description}
              </p>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r ${reason.gradient} transition-all duration-500 group-hover:w-full`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center reveal">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
          >
            Learn More About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
