import Link from "next/link"
import { Users, Code, TestTube, ArrowRight, LayoutDashboard, Puzzle, Cloud, Briefcase, Layers } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function ServicesCards() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Pillar 1 */}
          <SectionReveal direction="left" className="flex flex-col h-full bg-white rounded-[2rem] p-10 lg:p-14 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-600" />

            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shrink-0">
                <Code className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold font-display text-slate-900">Dedicated Software Teams</h2>
            </div>

            <p className="text-slate-600 leading-relaxed mb-12 text-lg">
              Scale your engineering capacity instantly with our specialized software teams. We build secure, robust, and custom digital products from the ground up.
            </p>

            <div className="space-y-8 flex-1">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-100 rounded-full p-1.5 text-blue-600 shrink-0"><Briefcase className="h-4 w-4" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Custom Software Development</h4>
                  <p className="text-slate-600">End-to-end product design and engineering using modern, scalable tech stacks.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-indigo-100 rounded-full p-1.5 text-indigo-600 shrink-0"><TestTube className="h-4 w-4" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">QA Engineering</h4>
                  <p className="text-slate-600">Rigorous manual and automated testing cycles to ensure flawless deployments.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-purple-100 rounded-full p-1.5 text-purple-600 shrink-0"><Users className="h-4 w-4" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">IT Staff Augmentation</h4>
                  <p className="text-slate-600">Embed our senior developers and QA specialists directly into your existing workflows.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <Link href="/services/dedicated-teams" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors group/link">
                Learn More About Dedicated Teams
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </SectionReveal>

          {/* Pillar 2 */}
          <SectionReveal direction="right" className="flex flex-col h-full bg-white rounded-[2rem] p-10 lg:p-14 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0052CC] to-[#2684FF]" />

            <div className="flex items-center gap-4 mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-[#0052CC] shrink-0">
                <Layers className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold font-display text-slate-900">Atlassian Enterprise Services</h2>
            </div>

            <p className="text-slate-600 leading-relaxed mb-12 text-lg">
              We help top-tier marketplace vendors and enterprises architect, build, and optimize high-performing Atlassian applications.
            </p>

            <div className="space-y-8 flex-1">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-cyan-100 rounded-full p-1.5 text-cyan-700 shrink-0"><Cloud className="h-4 w-4" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Cloud Migrations</h4>
                  <p className="text-slate-600">Seamlessly migrate your infrastructure and data to Atlassian Cloud securely.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-100 rounded-full p-1.5 text-blue-700 shrink-0"><Puzzle className="h-4 w-4" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Marketplace App Development</h4>
                  <p className="text-slate-600">Custom Jira and Confluence apps built on Forge and Connect frameworks.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-indigo-100 rounded-full p-1.5 text-indigo-700 shrink-0"><LayoutDashboard className="h-4 w-4" /></div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Jira/Confluence Customization</h4>
                  <p className="text-slate-600">Tailor Atlassian tools to perfectly match your specific enterprise workflows.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100">
              <Link href="/services/atlassian" className="inline-flex items-center gap-2 text-[#0052CC] font-bold hover:text-[#0047b3] transition-colors group/link">
                Learn More About Atlassian Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
