"use client"

import Link from "next/link"
import { ArrowRight, Shield, FileCheck, Clock3 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const trustBadges = [
  { icon: Shield, label: "NDA Protected" },
  { icon: FileCheck, label: "ISO Aligned" },
  { icon: Clock3, label: "On-Time Delivery" },
]

export function CTASection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #f8f7ff 0%, #ede9fe 40%, #f0f9ff 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 left-1/4 h-72 w-72 rounded-full opacity-40 blur-3xl animate-blob"
          style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full opacity-30 blur-3xl animate-blob"
          style={{
            background: "radial-gradient(circle, #67e8f9 0%, transparent 70%)",
            animationDelay: "5s",
          }}
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

          {/* Main heading */}
          <h2 className="reveal font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
            Ready to{" "}
            <span className="gradient-text">Scale</span>
            {" "}Your Product?
          </h2>

          <p className="reveal mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Unlock our capabilities in custom software development, product engineering, and quality assurance. We offer full-cycle development services enabling businesses to be agile, futuristic, and high-performing.
          </p>

          {/* CTAs */}
          <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                boxShadow: "0 8px 30px rgba(99,102,241,0.35)",
              }}
            >
              Start a Project
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-white/80 px-8 py-4 text-base font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-white hover:shadow-md backdrop-blur-sm"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-full border border-border/60 bg-white/70 px-5 py-2.5 backdrop-blur-sm shadow-sm"
              >
                <badge.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground/70">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
