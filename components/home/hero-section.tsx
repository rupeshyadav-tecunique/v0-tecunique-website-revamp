"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"

const trustedBy = [
  "Innovalog",
  "OPPSCIENCE",
  "Midtrans",
  "Gartner",
  "Contegra",
  "Atlassian Partners",
]

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const items = el.querySelectorAll(".hero-reveal")
    items.forEach((item, i) => {
      const htmlItem = item as HTMLElement
      htmlItem.style.opacity = "0"
      htmlItem.style.transform = "translateY(28px)"
      htmlItem.style.transition = `opacity 0.65s ease ${i * 120}ms, transform 0.65s ease ${i * 120}ms`
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          htmlItem.style.opacity = "1"
          htmlItem.style.transform = "translateY(0)"
        })
      })
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 animate-blob"
          style={{ background: "radial-gradient(circle, #a5b4fc 0%, #c4b5fd 50%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 animate-blob"
          style={{
            background: "radial-gradient(circle, #93c5fd 0%, #a5b4fc 50%, transparent 70%)",
            animationDelay: "4s",
            animationDuration: "16s",
          }}
        />
        <div
          className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full opacity-25 animate-blob"
          style={{
            background: "radial-gradient(circle, #67e8f9 0%, #a5b4fc 50%, transparent 70%)",
            animationDelay: "8s",
            animationDuration: "20s",
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — Text content */}
          <div className="relative">
            {/* Badge pill */}
            <div className="hero-reveal mb-6 inline-flex">
              <span className="section-pill">
                <Sparkles className="h-3 w-3" />
                15+ Years of Software Excellence
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-reveal font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] xl:text-6xl leading-[1.12]">
              Trusted{" "}
              <span className="gradient-text">Software Engineering</span>
              {" "}& Atlassian Apps Expertise
            </h1>

            {/* Subheadline */}
            <p className="hero-reveal mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl max-w-lg">
              Scale with confidence. Dedicated teams delivering Atlassian apps and high-quality software at speed — since 2010.
            </p>

            {/* Feature bullets */}
            <ul className="hero-reveal mt-6 space-y-2.5">
              {[
                "Offshore Software Development & IT Outsourcing",
                "95% Customer Retention · 92% Employee Retention",
                "ISO-certified Processes & NDA-protected Engagements",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="hero-reveal mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                {"Start a Project"}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/80 px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-white hover:shadow-md"
              >
                Explore Services
              </Link>
            </div>

            {/* Trusted by strip */}
            <div className="hero-reveal mt-12 border-t border-border/50 pt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Trusted by leading companies
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {trustedBy.map((name) => (
                  <span
                    key={name}
                    className="text-sm font-medium text-foreground/40 hover:text-foreground/70 transition-colors cursor-default"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Visual card stack */}
          <div className="relative flex items-center justify-center lg:justify-end hero-reveal">
            {/* Background decorative circle */}
            <div
              className="absolute h-80 w-80 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }}
            />

            {/* Main floating card */}
            <div
              className="relative z-10 w-full max-w-sm animate-float"
              style={{ filter: "drop-shadow(0 20px 60px rgba(99,102,241,0.25))" }}
            >
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white text-sm font-bold"
                    style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                  >
                    T
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">TECUNIQUE Team</p>
                    <p className="text-xs text-muted-foreground">Dedicated · Remote-ready</p>
                  </div>
                </div>

                <div className="space-y-3 mb-5">
                  {[
                    { label: "Sprint Velocity", value: "98%", color: "#6366f1" },
                    { label: "Code Coverage", value: "94%", color: "#8b5cf6" },
                    { label: "Client Satisfaction", value: "100%", color: "#06b6d4" },
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs font-medium text-muted-foreground">{metric.label}</span>
                        <span className="text-xs font-bold" style={{ color: metric.color }}>{metric.value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: metric.value,
                            background: `linear-gradient(to right, ${metric.color}cc, ${metric.color})`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between rounded-xl bg-accent/60 px-4 py-3">
                  <span className="text-xs text-muted-foreground font-medium">Active projects</span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-foreground">7 running</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div
              className="absolute -top-6 -right-4 z-20 glass-card rounded-xl px-4 py-2.5 animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🏆</span>
                <div>
                  <p className="text-xs font-bold text-foreground leading-none">Top Rated</p>
                  <p className="text-[10px] text-muted-foreground">Atlassian Partner</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
