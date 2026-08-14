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
  { name: "eXtensi", logo: "", type: "text" },
  { name: "Validat", logo: "", type: "text" },
]

export function HeroMarquee() {
  // We duplicate the list to ensure the marquee is long enough for a seamless loop
  const list = useMemo(() => {
    return [...trustedBy, ...trustedBy, ...trustedBy, ...trustedBy]
  }, [])

  return (
    <div className="relative h-[300px] w-full max-w-[550px] overflow-hidden rounded-2xl mx-auto lg:ml-auto">

      {/* Vertical Columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 items-start h-full gap-10 sm:gap-12 justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] group">

        {/* Column 1 - Scrolls Up */}
        <div className="flex flex-col gap-14 sm:gap-16 animate-marquee-vertical min-w-0 group-hover:[animation-play-state:paused]">
          {list.map((company, i) => (
            <div key={`col1-${company.name}-${i}`} className="relative h-12 w-full flex items-center justify-center transition-all duration-300 hover:scale-105">
              {company.type === 'logo' ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 150px"
                />
              ) : (
                <span className="text-base sm:text-lg font-black text-foreground/40 hover:text-primary/80 transition-colors cursor-default tracking-widest uppercase text-center break-words">
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Column 2 - Scrolls Down */}
        <div className="flex flex-col gap-14 sm:gap-16 animate-marquee-vertical-reverse min-w-0 pt-12 group-hover:[animation-play-state:paused]">
          {list.map((company, i) => (
            <div key={`col2-${company.name}-${i}`} className="relative h-12 w-full flex items-center justify-center transition-all duration-300 hover:scale-105">
              {company.type === 'logo' ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 150px"
                />
              ) : (
                <span className="text-base sm:text-lg font-black text-foreground/40 hover:text-primary/80 transition-colors cursor-default tracking-widest uppercase text-center break-words">
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Column 3 - Scrolls Up */}
        <div className="flex flex-col gap-14 sm:gap-16 animate-marquee-vertical min-w-0 pt-6 hidden sm:flex group-hover:[animation-play-state:paused]">
          {list.map((company, i) => (
            <div key={`col3-${company.name}-${i}`} className="relative h-12 w-full flex items-center justify-center transition-all duration-300 hover:scale-105">
              {company.type === 'logo' ? (
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 150px"
                />
              ) : (
                <span className="text-base sm:text-lg font-black text-foreground/40 hover:text-primary/80 transition-colors cursor-default tracking-widest uppercase text-center break-words">
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
