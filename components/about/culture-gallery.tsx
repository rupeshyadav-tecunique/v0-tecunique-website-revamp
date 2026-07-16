"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const categories = [
  {
    id: "annual-meet",
    label: "Annual Meet",
    images: [
      "/images/events/AnnualMeet/annualmeet1.JPG",
      "/images/events/AnnualMeet/annualmeet2.JPG",
      "/images/events/AnnualMeet/annualmeet3.JPG",
      "/images/events/AnnualMeet/annualmeet4.JPG",
      "/images/events/AnnualMeet/annualmeet5.JPG",
    ],
    className: "col-span-2 row-span-2",
  },
  {
    id: "christmas",
    label: "Christmas Celebrations",
    images: [
      "/images/events/christmas/christmas2024.jpg",
      "/images/events/christmas/christmas2025.jpg",
      "/images/events/christmas/christmas6.jfif",
      "/images/events/christmas/christmas7.jfif",
      "/images/events/christmas/christmasgifts.jpeg",
    ],
    className: "col-span-1 row-span-1",
  },
  {
    id: "diwali",
    label: "Diwali Festivities",
    images: [
      "/images/events/diwali/Diwali2025.jpg",
      "/images/events/diwali/diwali2023.jfif",
      "/images/events/diwali/diwali20231.jpg",
      "/images/events/diwali/diwali20232.jfif",
    ],
    className: "col-span-1 row-span-1",
  },
  {
    id: "independence",
    label: "Independence Day",
    images: [
      "/images/events/independence/independence1.jpg",
      "/images/events/independence/independence2.JPG",
      "/images/events/independence/independence3.jfif",
    ],
    className: "col-span-1 row-span-1",
  },
  {
    id: "miscellaneous",
    label: "Special Moments",
    images: [
      "/images/events/miscellanious/mensday.jpg",
      "/images/events/miscellanious/funfriday.png",
      "/images/events/miscellanious/womensday.jpg",
    ],
    className: "col-span-1 row-span-1",
  },
]

function AutoCarouselSlot({ category, interval = 3000, className = "" }: { category: typeof categories[0], interval?: number, className?: string }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % category.images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [category.images.length, interval])

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-slate-100 group shadow-sm ${className}`}>
      {category.images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${i === index ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
            }`}
        >
          <Image
            src={img}
            alt={i === 0 ? `TECUNIQUE team during ${category.label}` : ""}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-4 lg:p-6">
        <p className="text-white font-semibold text-sm lg:text-base leading-tight">{category.label}</p>
      </div>
    </div>
  )
}

export default function CultureGallery() {
  const mainCategory = categories[0]
  const smallCategories = categories.slice(1)

  return (
    <div className="flex flex-col gap-3 lg:gap-4 h-auto lg:h-[750px]">
      {/* Top Row: Big Image */}
      <AutoCarouselSlot
        category={mainCategory}
        interval={5000}
        className="w-full h-64 sm:h-80 lg:h-[350px] shrink-0"
      />

      {/* Bottom Row: 2x2 Grid of Small Images */}
      <div className="grid grid-cols-2 grid-rows-2 gap-3 lg:gap-4 flex-1">
        {smallCategories.map((cat, i) => (
          <AutoCarouselSlot
            key={cat.id}
            category={cat}
            interval={5500 + i * 500}
            className="w-full h-full min-h-[160px] lg:min-h-0"
          />
        ))}
      </div>
    </div>
  )
}
