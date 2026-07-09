import { CheckCircle2, Building2, ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function DedicatedTeamsComparison() {
  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.05]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6">You Manage the Product. <span className="text-blue-400">We Manage the Operations.</span></h2>
          <p className="text-xl text-slate-400">This clear division of responsibility is the core of our successful model.</p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Client Controls */}
          <SectionReveal delay={100} className="bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-slate-700 hover:-translate-y-1 hover:border-slate-500 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700/50">
              <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Client Controls</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Product roadmap", "Sprint priorities", "Technical direction",
                "Daily collaboration", "Task allocation", "Performance feedback", "Delivery expectations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          {/* TECUNIQUE Handles */}
          <SectionReveal delay={200} className="bg-blue-600 rounded-3xl p-8 lg:p-10 border border-blue-500 shadow-2xl shadow-blue-900/50 hover:-translate-y-1 hover:border-blue-400 hover:shadow-blue-900/80 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-blue-500/50">
              <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">TECUNIQUE Handles</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Recruitment support", "Employment and payroll", "HR and employee engagement",
                "NDA and contracts", "Infrastructure and work environment", "Attendance and administration",
                "Retention support", "Replacement/backfill coordination where needed"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-200 shrink-0 mt-0.5" />
                  <span className="text-blue-50 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
