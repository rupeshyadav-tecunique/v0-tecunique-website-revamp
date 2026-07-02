"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"
import { Button } from "../ui/button"
import { WordRotate } from "../ui/word-rotate"
import { HeroDashboard } from "./hero-dashboard"

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
      className="relative overflow-hidden pt-4 pb-16 lg:pt-6 lg:pb-20"
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
            <div className="hero-reveal mb-3 inline-flex">
              <span className="section-pill">
                <Sparkles className="h-3 w-3" />
                15+ Years of Software Excellence
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-reveal font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-5xl xl:text-[3.4rem] leading-tight">
              Trusted {" "}
              <WordRotate 
                words={["Development", "Dedicated Teams", "Cloud Solutions", "Product Design"]} 
                className="gradient-text"
              />
              <br className="hidden sm:block" />
              {" "}& Atlassian Apps Expertise
            </h1>

            {/* Subheadline */}
            <p className="hero-reveal mt-3 text-base leading-relaxed text-muted-foreground lg:text-lg max-w-lg">
              Scale with confidence. Dedicated teams delivering Atlassian apps and high-quality software at speed — since 2010.
            </p>

            {/* Metrics Trust Badges */}
            <div className="hero-reveal mt-6 grid grid-cols-3 gap-3 max-w-lg">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-border/50 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-black text-foreground">15+</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mt-1">Years Exp</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-border/50 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-black text-foreground">95%</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mt-1">Retention</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 border border-border/50 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl font-black text-foreground">25+</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mt-1">Clients</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-reveal mt-8 flex flex-col sm:flex-row items-start gap-4">
              <Button className="rounded-xl px-7 h-12 text-sm font-semibold group" asChild>
                <Link href="/contact">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/80 px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-white hover:shadow-md"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right — Dashboard Visual */}
          <div className="relative flex items-center justify-center lg:justify-end hero-reveal mt-12 lg:mt-0">
            <HeroDashboard />
          </div>
        </div>


      </div>
    </section>
  )
}
