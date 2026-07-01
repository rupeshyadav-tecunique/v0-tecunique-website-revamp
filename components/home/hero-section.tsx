"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"
import { Button } from "../ui/button"
import { WordRotate } from "../ui/word-rotate"

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
                  Start a Project
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

          {/* Right — Prominent IDE / Code Visual */}
          <div className="relative flex items-center justify-center lg:justify-end hero-reveal">
            {/* Background decorative circle */}
            <div
              className="absolute h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
            />

            {/* IDE Mockup */}
            <div className="relative z-10 w-full max-w-lg rounded-2xl bg-[#0f172a] shadow-2xl overflow-hidden border border-slate-800 animate-float" style={{ filter: "drop-shadow(0 25px 50px rgba(99,102,241,0.25))" }}>
              {/* Window header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="px-3 py-1 rounded-md bg-slate-800/50 text-[11px] text-slate-400 font-mono tracking-wider">
                  src/scale-team.ts
                </div>
                <div className="w-12" /> {/* Spacer to center the title */}
              </div>

              {/* Content */}
              <div className="p-6 text-[13px] sm:text-sm font-mono text-slate-300 overflow-x-auto">
                <div className="flex gap-4">
                  <div className="flex flex-col text-slate-600 select-none text-right">
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                  </div>
                  <div>
                    <div className="text-pink-400">import <span className="text-slate-300">{`{`}</span> <span className="text-blue-300">Scale</span>, <span className="text-blue-300">Quality</span> <span className="text-slate-300">{`}`}</span> from <span className="text-green-300">'@tecunique/core'</span>;</div>
                    <br />
                    <div className="text-pink-400">const <span className="text-blue-300">buildProject</span> = <span className="text-pink-400">async</span> () <span className="text-pink-400">{`=>`}</span> {`{`}</div>
                    <div className="pl-4">
                      <span className="text-pink-400">await</span> <span className="text-blue-300">Scale</span>.withTeam({`{`} <br />
                      <span className="pl-4 text-orange-300">engineers:</span> <span className="text-purple-300">30+</span>,<br />
                      <span className="pl-4 text-orange-300">expertise:</span> [<span className="text-green-300">'Atlassian'</span>, <span className="text-green-300">'React'</span>, <span className="text-green-300">'Node'</span>],<br />
                      <span className="pl-4 text-orange-300">security:</span> <span className="text-green-300">'ISO-27001'</span>,<br />
                      <span className="pl-4 text-orange-300">quality:</span> <span className="text-blue-300">Quality</span>.UNCOMPROMISING<br />
                      <span className="text-slate-300">{`});`}</span>
                    </div>
                    <div className="text-slate-300">{`};`}</div>
                  </div>
                </div>
              </div>

              {/* Overlay stats card inside the visual */}
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow-xl flex items-center gap-4 hidden sm:flex">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-widest font-sans font-semibold">Retention</div>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-[10px] text-slate-300 uppercase tracking-widest font-sans font-semibold">Years Exp</div>
                </div>
              </div>
            </div>

            {/* Small floating Atlassian badge */}
            <div
              className="absolute -top-6 -right-4 z-20 glass-card rounded-xl px-4 py-2.5 animate-float hidden sm:block"
              style={{ animationDelay: "1.5s", background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)" }}
            >
              <div className="flex items-center gap-2">
                <img src="https://cdn.simpleicons.org/atlassian/0052CC" alt="Atlassian" className="w-5 h-5" />
                <div>
                  <p className="text-xs font-bold text-foreground leading-none">Top Rated</p>
                  <p className="text-[10px] text-muted-foreground">Atlassian Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Strip */}
        <div className="mt-20 pt-10 border-t border-border/50 hero-reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6 text">
            Trusted by leading companies
          </p>
          <div className="relative overflow-hidden -mx-4 px-4 lg:mx-0 lg:px-0">
            <div className="flex animate-marquee py-2">
              {[...trustedBy, ...trustedBy, ...trustedBy, ...trustedBy, ...trustedBy].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="mx-8 shrink-0 text-lg font-black text-foreground/40 hover:text-foreground transition-all cursor-default whitespace-nowrap tracking-widest uppercase"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
