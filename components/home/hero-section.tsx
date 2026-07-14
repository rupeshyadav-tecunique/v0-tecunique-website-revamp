"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"
import { Button } from "../ui/button"
import { WordRotate } from "../ui/word-rotate"
import { HeroDashboard } from "./hero-dashboard"
import { HeroVisual } from "./hero-visual"

const trustedBy = [
  "Appfire",
  "OPPSCIENCE",
  "CustomerMatrix",
  "Qotilabs",
  "SkySelect",
  "PolySpot",
  "eXtensi",
  "Validat"
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
      className="relative overflow-hidden pt-4 pb-12 lg:pt-6 lg:pb-16"
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
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left — Text content */}
          <div className="relative">
            {/* Badge pill */}
            <div className="hero-reveal mb-2 inline-flex">
              <span className="section-pill">
                <Sparkles className="h-3 w-3" />
                15+ Years in Software Services
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-reveal font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl leading-tight">
              Trusted Software Engineering <br className="hidden sm:block" />
              & <span className="text-[#0052CC]">Dedicated Teams</span>
            </h1>

            {/* Dynamic Expertise */}
            <div className="hero-reveal mt-3 text-lg sm:text-xl font-semibold flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-slate-600">Specializing in</span>
              
              {/* Screen reader text (reads the full sentence naturally with the visible text) */}
              <span className="sr-only">Dedicated Teams, Product Engineering, QA Automation, Cloud Solutions, and Atlassian Apps.</span>

              {/* Visual rotating text */}
              <div aria-hidden="true">
                <WordRotate
                  words={["Dedicated Teams", "Product Engineering", "QA Automation", "Cloud Solutions", "Atlassian Apps"]}
                  className="gradient-text"
                />
              </div>
            </div>

            {/* Subheadline */}
            <p className="hero-reveal mt-2 text-sm leading-relaxed text-muted-foreground lg:text-base max-w-lg">
              Scale with confidence. TECUNIQUE helps software companies build dedicated development, QA, automation, and support teams in India — with proven experience across product engineering, cloud solutions, and Atlassian apps.
            </p>

            {/* Metrics Trust Badges */}
            <div className="hero-reveal mt-4 grid grid-cols-3 gap-2 max-w-md">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-2 border border-border/50 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xl font-black text-foreground">15+</div>
                <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider mt-0.5">Years in Software Services</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-2 border border-border/50 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xl font-black text-foreground">Strong</div>
                <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider mt-0.5">Team Continuity</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-2 border border-border/50 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xl font-black text-foreground">Long-Term</div>
                <div className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider mt-0.5">Client Relationships</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-reveal mt-6 flex flex-col sm:flex-row items-start gap-3">
              <Button className="rounded-xl px-6 h-10 text-sm font-semibold group" asChild>
                <Link href="/contact">
                  Discuss Your Requirement
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/80 px-6 py-2 h-10 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-white hover:shadow-md"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right — Dashboard Visual */}
          <div className="relative flex items-center justify-center lg:justify-end hero-reveal mt-8 lg:mt-0">
            <HeroVisual />
          </div>
        </div>


      </div>
    </section>
  )
}
