"use client"

import { useEffect, useRef } from "react"

/**
 * Attaches an IntersectionObserver to a container element and adds
 * the "visible" class to all child elements with the "reveal" or
 * "reveal-scale" class when they enter the viewport.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll(".reveal, .reveal-scale")
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return containerRef
}
