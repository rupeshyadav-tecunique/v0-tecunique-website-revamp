"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function WordRotate({
  words,
  duration = 2500,
  className,
}: {
  words: string[]
  duration?: number
  className?: string
}) {
  const [index, setIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length)
        setIsAnimating(false)
      }, 300)
    }, duration)

    return () => clearInterval(interval)
  }, [words, duration])

  return (
    <span className="inline-grid overflow-hidden">
      {words.map((word, i) => {
        const isActive = i === index
        return (
          <span
            key={word}
            aria-hidden={!isActive}
            className={cn(
              "col-start-1 row-start-1 transition-all duration-300",
              isActive
                ? isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
                : "opacity-0 pointer-events-none select-none -translate-y-4",
              className
            )}
          >
            {word}
          </span>
        )
      })}
    </span>
  )
}
