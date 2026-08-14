"use client"

import { useMemo } from "react"
import Image from "next/image"

const trustedBy = [
  { name: "CustomerMatrix", logo: "/images/companies/customer_matrix.webp", type: "logo" },
  { name: "Innovalog", logo: "/images/companies/innovalog.png", type: "logo" },
  { name: "OPPSCIENCE", logo: "/images/companies/oppscience.svg", type: "logo" },
  { name: "Appfire", logo: "", type: "text" },
  { name: "PolySpot", logo: "/images/companies/polyspot.webp", type: "logo" },
  { name: "Qotilabs", logo: "/images/companies/quotilabs.png", type: "logo" },
  { name: "SkySelect", logo: "/images/companies/skyselect.svg", type: "logo" },
  { name: "eXtensi", logo: "/images/companies/extensi.png", type: "logo" },
  { name: "Validat", logo: "/images/companies/Validat.png", type: "logo" },
]

export function ClientMarquee() {
  // Duplicate for seamless loop
  const list = useMemo(() => {
    return [...trustedBy, ...trustedBy, ...trustedBy, ...trustedBy]
  }, [])

  return (
    <section className="border-t border-border/40 bg-white py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">Trusted by innovative tech companies worldwide</p>
      </div>
      
      <div className="relative w-full overflow-hidden flex items-center [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max min-w-full animate-marquee-horizontal gap-16 pr-16 hover:[animation-play-state:paused]">
          {list.map((company, i) => (
            <div key={`client-${company.name}-${i}`} className="relative h-12 w-32 shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-105">
              {company.type === 'logo' ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              ) : (
                <span className="text-xl font-black text-slate-800 transition-colors cursor-default tracking-widest uppercase text-center break-words leading-none">
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
