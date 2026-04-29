"use client"

import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const stats = [
  { value: 95, suffix: "%", label: "Customer Retention", desc: "Clients who keep coming back" },
  { value: 92, suffix: "%", label: "Employee Retention", desc: "Team stability you can rely on" },
  { value: 15, suffix: "+", label: "Years in Business", desc: "A decade and a half of excellence" },
  { value: 50, suffix: "+", label: "Global Clients", desc: "Served across 20+ countries" },
  { value: 200, suffix: "+", label: "Projects Delivered", desc: "On time and on budget" },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const interval = duration / steps
          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            // easeOutQuart
            const eased = 1 - Math.pow(1 - progress, 4)
            setCount(Math.round(eased * target))
            if (step >= steps) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const sectionRef = useScrollReveal()

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #4f46e5 100%)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }} />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #67e8f9 0%, transparent 70%)" }} />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Top section */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 mb-16">
          <div className="reveal">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-white/60" />
              <span className="text-sm font-semibold uppercase tracking-widest text-white/60">Our Track Record</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              Trusted Software Services Since{" "}
              <span className="text-white/80">2010</span>
            </h2>
          </div>
          <div className="reveal">
            <p className="text-lg text-white/75 leading-relaxed">
              With 15+ years of engineering excellence, TECUNIQUE brings transparency, collaboration, and domain expertise to every project. Our business-domain knowledge and proven methodologies yield high-quality solutions that add real value.
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-white/15 border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/25 backdrop-blur-sm"
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal reveal-scale group relative rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="font-display text-4xl font-extrabold text-white lg:text-5xl">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-white/90 uppercase tracking-wide">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-white/55 leading-relaxed hidden lg:block">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
