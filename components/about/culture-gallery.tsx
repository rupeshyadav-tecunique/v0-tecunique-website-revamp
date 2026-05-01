"use client"

import { useState, useEffect } from "react"

const categories = [
  {
    id: "diwali",
    label: "Diwali Celebrations",
    images: [
      "https://placehold.co/800x800/png?text=Diwali+1",
      "https://placehold.co/800x800/png?text=Diwali+2",
      "https://placehold.co/800x800/png?text=Diwali+3",
      "https://placehold.co/800x800/png?text=Diwali+4",
    ],
    className: "col-span-2 row-span-2",
  },
  {
    id: "holi",
    label: "Holi Bash",
    images: [
      "https://placehold.co/800x800/png?text=Holi+1",
      "https://placehold.co/800x800/png?text=Holi+2",
      "https://placehold.co/800x800/png?text=Holi+3",
    ],
    className: "col-span-1 row-span-1",
  },
  {
    id: "outing",
    label: "Team Outing",
    images: [
      "https://placehold.co/800x800/png?text=Outing+1",
      "https://placehold.co/800x800/png?text=Outing+2",
      "https://placehold.co/800x800/png?text=Outing+3",
    ],
    className: "col-span-1 row-span-1",
  },
  {
    id: "office",
    label: "Office Vibes",
    images: [
      "https://placehold.co/800x800/png?text=Office+1",
      "https://placehold.co/800x800/png?text=Office+2",
    ],
    className: "col-span-1 row-span-1",
  },
  {
    id: "birthday",
    label: "Birthday Joy",
    images: [
      "https://placehold.co/800x800/png?text=Birthday+1",
      "https://placehold.co/800x800/png?text=Birthday+2",
      "https://placehold.co/800x800/png?text=Birthday+3",
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
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-110"
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
