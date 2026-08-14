import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CareersLife() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50/50 relative overflow-hidden">
      {/* Background Pattern (dotted grid) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        {/* Main Card */}
        <div className="bg-white rounded-2xl lg:rounded-[2rem] p-4 lg:p-6 shadow-sm border border-slate-100/80 flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Left Column - Large Image */}
          <div className="lg:w-[60%] relative w-full min-h-[400px] lg:min-h-[500px] rounded-xl lg:rounded-[1.5rem] overflow-hidden">
            <Image
              src="/images/about/about-1.png"
              alt="Life at TECUNIQUE team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-[40%] flex flex-col justify-between py-2 lg:py-6 lg:pr-6">
            <div>
              <p className="text-[#3b58c7] font-bold tracking-[0.15em] text-xs uppercase mb-3">
                REAL TEAM • REAL CULTURE
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-[2.5rem] leading-tight font-display mb-4">
                Life at <span className="text-[#3b58c7]">TECUNIQUE</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-md">
                A collaborative workplace built around flexibility, ownership, respect, and long-term relationships.
              </p>
            </div>

            {/* Secondary Image */}
            <div className="relative w-full h-[180px] sm:h-[220px] rounded-xl lg:rounded-[1.25rem] overflow-hidden mb-8 shadow-sm">
              <Image
                src="/images/about/about-2.png"
                alt="Collaborative work at TECUNIQUE"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <Button size="lg" className="w-full sm:w-max rounded-md lg:rounded-md shadow-md hover:shadow-lg transition-all group bg-[#3b58c7] hover:bg-blue-700 h-10 lg:h-10 text-base font-semibold px-8" asChild>
              <Link href="/about#culture" className="flex items-center justify-center">
                Explore Our Culture
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
