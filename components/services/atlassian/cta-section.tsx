import Link from "next/link"
import { SectionReveal } from "@/components/ui/section-reveal"

export function AtlassianCTA() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionReveal>
          <div className="bg-[#0052CC] rounded-3xl p-12 lg:p-20 text-center text-white shadow-xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, #ffffff 2px, transparent 2px)", backgroundSize: "32px 32px" }} />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl font-bold font-display mb-6">
                Let's Build Something Great Together
              </h2>
              <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                Whether you need a dedicated team, custom engineering, or L2/L3/L4 app support, we have the experts ready to help you succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex h-14 items-center justify-center rounded-lg bg-white px-8 text-base font-bold text-[#0052CC] shadow-md transition-all hover:bg-slate-50 hover:scale-105"
                >
                  Schedule Your Free Consultation
                </Link>
                <Link 
                  href="/services/atlassian#capabilities" 
                  className="inline-flex h-14 items-center justify-center rounded-lg bg-transparent border border-white/30 px-8 text-base font-bold text-white transition-all hover:bg-white/10 hover:border-white/50"
                >
                  See What We Can Do
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
