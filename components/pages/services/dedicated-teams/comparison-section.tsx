import { CheckCircle2, Building2, ArrowRight, Compass, Users } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function DedicatedTeamsComparison() {
  return (
    <section className="py-24 lg:py-32 bg-white text-slate-900 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 [mask-image:linear-gradient(to_bottom,white,transparent_80%)]" />
        <div className="absolute -left-[300px] top-[100px] w-[800px] h-[800px] rounded-full border-[60px] border-blue-50/50 blur-[2px]" />
        <div className="absolute -right-[300px] bottom-[100px] w-[800px] h-[800px] rounded-full border-[60px] border-indigo-50/50 blur-[2px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-50/30 rounded-full blur-[80px]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionReveal className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-slate-900">
            A Clear Operating Model for Dedicated Teams
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            You guide the product and delivery priorities. TECUNIQUE manages the operational responsibilities in India, so the team can work with stability and continuity.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Box 1: Client-Led Direction */}
          <SectionReveal delay={100} className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-2xl bg-indigo-50 flex items-center justify-center shrink-0">
                <Compass className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight">Client-Led <br/>Direction</h3>
            </div>
            
            <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100 min-h-[80px]">
              You stay in control of the product, priorities, and delivery expectations.
            </p>
            
            <ul className="space-y-4">
              {[
                "Product roadmap", 
                "Sprint priorities", 
                "Technical direction",
                "Task allocation", 
                "Performance feedback", 
                "Delivery expectations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          {/* Box 2: Shared Collaboration */}
          <SectionReveal delay={200} className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 transition-all duration-300 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                <Users className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight">Shared <br/>Collaboration</h3>
            </div>
            
            <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-100 min-h-[80px]">
              The dedicated team works directly with your tools, communication channels, and sprint process.
            </p>
            
            <ul className="space-y-4">
              {[
                "Daily communication",
                "Sprint participation",
                "Issue tracking",
                "Code collaboration & reviews",
                "Progress visibility",
                "Team alignment"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>

          {/* Box 3: TECUNIQUE-Managed Operations */}
          <SectionReveal delay={300} className="bg-neutral-slate-50 rounded-3xl p-8 lg:p-10 border border-blue-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-xl hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-300 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                  <Building2 className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">TECUNIQUE-Managed <br/>Operations</h3>
              </div>
              
              <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-200/60 min-h-[80px]">
                We manage the employment, administration, and team continuity responsibilities in India.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Recruitment and hiring", 
                  "Employment and payroll", 
                  "HR and employee engagement",
                  "NDA and contracts", 
                  "Infrastructure and work environment", 
                  "Attendance and administration",
                  "Retention and backfill support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-slate-800 font-medium text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
