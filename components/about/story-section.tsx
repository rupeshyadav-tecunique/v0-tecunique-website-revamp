import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  )
}

export function AboutStory() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10" />
              <Image src="/images/about/about-1.png" alt="Our Story" fill className="object-cover" />
              <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end text-white">
                <QuoteIcon className="w-12 h-12 text-white/30 mb-4" />
                <p className="text-2xl font-medium leading-snug">"Software companies need reliable engineering teams, not just temporary resources."</p>
              </div>
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
