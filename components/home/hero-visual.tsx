"use client"

import { useState, useEffect } from "react"
import { HeroDashboard } from "./hero-dashboard"
import { HeroAtlassianVisual } from "./hero-atlassian-visual"
import { HeroTechVisual } from "./hero-tech-visual"

export function HeroVisual() {
  const [activeCard, setActiveCard] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-rotation every 7 seconds
  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3)
    }, 7000)

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <div 
      className="relative w-full max-w-[500px] h-[550px] mx-auto lg:ml-auto flex items-center justify-center mb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glowing effects */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[120%] h-[120%] bg-[var(--surface-blue-strong)]/30 rounded-full blur-3xl" />
        <div className="absolute w-[80%] h-[80%] bg-[var(--surface-violet-strong)]/40 rounded-full blur-2xl" />
      </div>

      <div className="relative w-full h-full p-2 sm:p-4">
        
        {/* Card 1: Dedicated Teams */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform ${
            activeCard === 0 ? "opacity-100 scale-100 z-30" : "opacity-0 scale-95 z-10 pointer-events-none"
          }`}
        >
          <HeroDashboard />
        </div>

        {/* Card 2: Atlassian Apps */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform ${
            activeCard === 1 ? "opacity-100 scale-100 z-30" : "opacity-0 scale-95 z-10 pointer-events-none"
          }`}
        >
          <HeroAtlassianVisual />
        </div>

        {/* Card 3: Tech Stack */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform ${
            activeCard === 2 ? "opacity-100 scale-100 z-30" : "opacity-0 scale-95 z-10 pointer-events-none"
          }`}
        >
          <HeroTechVisual />
        </div>

        {/* Tab Indicators */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeCard === idx ? "w-8 bg-[var(--brand-blue)]" : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Show card ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
