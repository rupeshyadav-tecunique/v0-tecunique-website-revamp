import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CareersLife() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-4">
              REAL TEAM • REAL CULTURE
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display mb-6">
              Life at TECUNIQUE
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              A collaborative workplace built around flexibility, ownership, respect, and long-term relationships.
            </p>
            <Button size="lg" className="rounded-xl shadow-lg hover:shadow-xl transition-all group bg-brand-blue hover:bg-brand-blue-hover h-12 px-8 text-base" asChild>
              <Link href="/about#culture">
                Explore Our Culture
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-2xl">
              <Image 
                src="/images/about/about-1.png"
                alt="Life at TECUNIQUE team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -inset-4 border-2 border-brand-blue/10 rounded-3xl -z-10 translate-x-2 translate-y-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
