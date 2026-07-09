import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function AtlassianCTA() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #f8f7ff 0%, #e0f2fe 40%, #f0f9ff 100%)" }}
    >
      <div className="absolute inset-0 -z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }} />
        <div className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #0284c7 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0284c7 1px, transparent 1px), linear-gradient(to right, #0284c7 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionReveal>
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
              Need a Dedicated Team for Your <br/>
              <span className="text-[#0052CC]">Atlassian App?</span>
            </h2>

            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Whether you need Jira app development, QA, automation, Forge/Connect support, integrations, or long-term product maintenance, TECUNIQUE can help you build a focused engineering team from India.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] group bg-[#0052CC] hover:bg-[#0047b3]"
              >
                Discuss Your Atlassian App Needs
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services/dedicated-teams"
                className="inline-flex items-center justify-center rounded-xl border border-[#0052CC]/20 bg-white/50 px-8 py-4 text-base font-semibold text-[#0052CC] shadow-sm transition-all duration-200 hover:border-[#0052CC]/40 hover:bg-white hover:shadow-md backdrop-blur-sm"
              >
                Explore Dedicated Teams
              </Link>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
