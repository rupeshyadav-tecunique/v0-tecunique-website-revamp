"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const testimonialSlides = [
  {
    id: "atlassian-ecosystem",
    theme: "Atlassian App Ecosystem",
    featured: {
      quote: "Our top-selling and top-rated Jira app, JMWE, owes much of its success to our partnership with TECUNIQUE. Their dedicated engineers in both software development and QA seamlessly integrated into our company, playing a crucial role in our achievements.",
      name: "David Fischer",
      role: "Founder & CEO",
      company: "Innovalog",
      tags: ["Atlassian Apps", "Jira Workflows", "Long-Term QA"],
      image: "/images/testimonial/david.webp",
      color: "#6366f1"
    },
    shortTestimonials: [
      {
        quote: "Their expertise and dedication in architectural design, development, and QA have been very valuable. They demonstrated a tried-and-true process for recruiting the ideal engineers.",
        name: "Ajay Singh",
        company: "Appfire",
        category: "Development + QA",
        image: "/images/testimonial/ajay.webp",
        color: "#0891b2"
      },
      {
        quote: "The professionalism and expertise of TECUNIQUE's QA consultants have played a key role in improving our operational efficiency and delivering outstanding apps.",
        name: "Dan Mihalache",
        company: "Qotilabs",
        category: "Atlassian QA",
        image: "/images/testimonial/den.webp",
        color: "#f43f5e"
      },
    ]
  },
  {
    id: "product-engineering",
    theme: "Product Engineering & Dedicated Teams",
    featured: {
      quote: "TECUNIQUE has been a key partner for OPPSCIENCE over the years. As a CTO, I've collaborated with TECUNIQUE on various projects for an extended duration. They have consistently helped us deliver top-tier software.",
      name: "Mickael Augello",
      role: "CTO",
      company: "OPPSCIENCE",
      tags: ["Product Engineering", "Dedicated Teams", "Long-Term Support"],
      image: "/images/testimonial/mickael.webp",
      color: "#06b6d4"
    },
    shortTestimonials: [
      {
        quote: "Quite unique in this sector, we have actually the same contacts for over 10 years! I am genuinely grateful for the dedication and involvement displayed by the TECUNIQUE team.",
        name: "Guillaume Bréjaud",
        company: "OPPSCIENCE",
        category: "Long-Term Support",
        image: "/images/testimonial/guillaume.webp",
        color: "#7c3aed"
      },
      {
        quote: "TECUNIQUE has been an integral part of our journey for more than a decade. Our association is centered on the invaluable expertise and contributions that team brings to the table.",
        name: "Gilles Andre",
        company: "POLYSPOT",
        category: "ODC Setup",
        image: "/images/testimonial/gilles.jpg",
        color: "#8b5cf6"
      }
    ]
  }
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const sectionRef = useScrollReveal()

  const goTo = useCallback((index: number) => {
    if (isTransitioning || index === current) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setIsTransitioning(false)
    }, 300)
  }, [isTransitioning, current])

  const next = useCallback(() => goTo((current + 1) % testimonialSlides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + testimonialSlides.length) % testimonialSlides.length), [current, goTo])

  // Auto-advance
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [next, isHovered])

  const slide = testimonialSlides[current]

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 bg-[var(--neutral-slate-50)]/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center reveal mb-16">
          <span className="section-pill mb-6 inline-flex">
            <Star className="h-3 w-3 fill-current" />
            Client Success
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-6">
            Trusted Through <span className="gradient-text">Long-Term</span> Client Relationships
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our work has grown through stable engineering partnerships across Atlassian apps, product engineering, QA, data platforms, and offshore development teams.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mx-auto max-w-6xl reveal">

          {/* Slide Content */}
          <div className={`min-h-[850px] md:min-h-[550px] lg:min-h-[480px] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 transition-opacity duration-300 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`}>

            {/* Left: Featured Testimonial (58%) */}
            <div className="lg:col-span-7 flex">
              <div className="relative flex flex-col justify-between rounded-3xl border border-[var(--neutral-slate-200)] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full transition-transform hover:-translate-y-1 duration-300">
                <Quote className="absolute top-8 right-8 h-12 w-12 text-[var(--neutral-slate-100)]" aria-hidden />

                <div className="mb-8 relative z-10">
                  <blockquote className="text-xl sm:text-2xl font-medium text-[var(--neutral-slate-800)] leading-snug">
                    &ldquo;{slide.featured.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="mt-auto pt-6 border-t border-[var(--neutral-slate-100)] flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--neutral-slate-100)]">
                      <Image src={slide.featured.image} alt={slide.featured.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{slide.featured.name}</p>
                      <p className="text-sm text-[var(--neutral-slate-500)]">{slide.featured.role} <span className="font-semibold" style={{ color: slide.featured.color }}>@ {slide.featured.company}</span></p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {slide.featured.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-[var(--neutral-slate-50)] px-3 py-1 text-xs font-medium text-muted-foreground border border-[var(--neutral-slate-200)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Short Testimonials (42%) */}
            <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
              {slide.shortTestimonials.map((short, idx) => (
                <div key={idx} className="flex flex-col justify-between rounded-2xl border border-[var(--neutral-slate-200)] bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <blockquote className="text-sm sm:text-base text-[var(--neutral-slate-700)] italic mb-4">
                    &ldquo;{short.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center justify-between gap-4 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[var(--neutral-slate-100)]">
                        <Image src={short.image} alt={short.name} fill className="object-cover" sizes="40px" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{short.name}</p>
                        <p className="text-xs text-[var(--neutral-slate-500)]">{short.company}</p>
                      </div>
                    </div>
                    <span className="shrink-0 rounded bg-[var(--neutral-slate-50)] px-2 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[var(--neutral-slate-500)] border border-[var(--neutral-slate-100)]">
                      {short.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Controls */}
          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--neutral-slate-200)] bg-white shadow-sm transition-all hover:bg-[var(--neutral-slate-50)] hover:scale-105"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonialSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`rounded-full transition-all duration-300 ${index === current
                    ? "w-8 h-2.5 bg-brand-blue"
                    : "w-2.5 h-2.5 bg-[var(--neutral-slate-300)] hover:bg-[var(--brand-blue-hover)]"
                    }`}
                  aria-label={`Go to testimonial slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--neutral-slate-200)] bg-white shadow-sm transition-all hover:bg-[var(--neutral-slate-50)] hover:scale-105"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
