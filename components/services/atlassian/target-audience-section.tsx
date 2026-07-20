import { Store, Cloud, Users, RefreshCcw } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function AtlassianTargetAudience() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <SectionReveal>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-brand-blue mb-4">
              Built for Atlassian App Vendors
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Specialized support for teams who value technical rigor and marketplace success.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Marketplace App Vendors (White, 7 cols) */}
          <div className="md:col-span-7">
            <SectionReveal className="h-full">
              <div className="bg-white rounded-xl border border-slate-200 p-8 lg:p-10 h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <Store className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Marketplace App Vendors</h3>
                <p className="text-slate-600 leading-relaxed">
                  For teams building or maintaining complex apps targeting the Atlassian Marketplace. We handle the heavy lifting in engineering so you can focus on product vision.
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Card 2: SaaS / ISV Teams (Blue, 5 cols) */}
          <div className="md:col-span-5">
            <SectionReveal delay={100} className="h-full">
              <div className="bg-brand-blue rounded-xl p-8 lg:p-10 h-full flex flex-col text-white shadow-md hover:shadow-xl hover:bg-brand-blue-hover transition-all">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center bg-white/20 p-3 rounded-lg">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">SaaS / ISV Teams</h3>
                <p className="text-blue-100 leading-relaxed">
                  Software companies integrating their flagship products with Atlassian Cloud or Marketplace workflows.
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Card 3: Product Engineering Leaders (Dark Slate, 5 cols) */}
          <div className="md:col-span-5">
            <SectionReveal delay={200} className="h-full">
              <div className="bg-slate-900 rounded-xl p-8 lg:p-10 h-full flex flex-col text-white shadow-md hover:shadow-xl transition-all">
                <div className="mb-6">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Product Engineering Leaders</h3>
                <p className="text-slate-300 leading-relaxed">
                  Scaling capacity with dedicated developers, QA engineers, and automation specialists that map to your sprint cycles.
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* Card 4: App Modernization Teams (White with Blue Border, 7 cols) */}
          <div className="md:col-span-7">
            <SectionReveal delay={300} className="h-full">
              <div className="bg-white rounded-xl border-2 border-blue-100 p-8 lg:p-10 h-full flex flex-col hover:border-blue-300 hover:shadow-md transition-all">
                <div className="mb-6">
                  <RefreshCcw className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">App Modernization Teams</h3>
                <p className="text-slate-600 leading-relaxed">
                  Modernize legacy apps, move toward Forge or strengthen Cloud readiness with architectural guidance and robust tech support.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
