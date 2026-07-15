import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"



export function AboutStory() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <Image src="/images/about/about-4.png" alt="Our Story" fill className="object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[url('/grid.svg')] bg-center opacity-30 z-0" />
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                TECUNIQUE started in 2010 with a simple belief: software companies need reliable engineering teams, not just temporary resources.
              </p>
              <p>
                Over the years, we have built dedicated development, QA, automation, and product support teams for international clients. Our work has grown through long-term relationships, referrals, and consistent delivery rather than aggressive marketing claims.
              </p>
              <p>
                Today, TECUNIQUE works with software product companies, Atlassian app vendors, data platforms, and technology businesses that need skilled teams who can integrate with their process and stay committed for the long term.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
