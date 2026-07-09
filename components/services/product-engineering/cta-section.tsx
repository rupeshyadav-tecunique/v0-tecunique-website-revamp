import Link from "next/link"
import { ArrowRight, Code2, Users, Blocks } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function ProductEngineeringCTA() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #f8f7ff 0%, #ede9fe 40%, #f0f9ff 100%)" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 left-1/4 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #67e8f9 0%, transparent 70%)" }}
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
          <SectionReveal>
            {/* Main heading */}
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
              Need a Product Engineering Team <br className="hidden sm:block" />
              <span className="gradient-text">That Stays With Your Product?</span>
            </h2>

            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Tell us about your product, technology stack, roadmap, and engineering capacity needs. TECUNIQUE can help you build a dedicated development team that works with your tools, process, and long-term goals.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] group w-full sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 8px 30px rgba(99,102,241,0.35)",
                }}
              >
                Discuss Your Development Needs
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services/dedicated-teams"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-8 py-4 text-base font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:border-indigo-200 hover:bg-white hover:shadow-md backdrop-blur-sm w-full sm:w-auto"
              >
                Explore Dedicated Teams
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              {[
                { icon: Code2, label: "Full-Stack Tech" },
                { icon: Users, label: "Dedicated Capacity" },
                { icon: Blocks, label: "Long-Term Continuity" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 backdrop-blur-sm shadow-sm"
                >
                  <badge.icon className="h-4 w-4 text-indigo-600" />
                  <span className="text-sm font-medium text-slate-700">{badge.label}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
