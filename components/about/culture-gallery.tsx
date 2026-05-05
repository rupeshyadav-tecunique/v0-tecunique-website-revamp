"use client"

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
      "/images/events/diwali/Diwali20231.png",
      "/images/events/diwali/Diwali20232.jfif",
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

function AutoCarouselSlot({ category, interval = 3000 }: { category: typeof categories[0], interval?: number }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % category.images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [category.images.length, interval])

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-muted aspect-square ${category.className} group shadow-sm`}>
      {category.images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={category.label}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-110"
            }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-6">
        <p className="text-white font-semibold text-sm md:text-base">{category.label}</p>
      </div>
    </div>
  )
}

export default function CultureGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((cat, i) => (
        <AutoCarouselSlot key={cat.id} category={cat} interval={3000 + i * 500} />
      ))}
    </div>
  )
}
