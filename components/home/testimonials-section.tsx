"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote, Star, StarHalf } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const testimonials = [
  {
    quote: "Our top-selling and top-rated Jira app, JMWE, owes much of its success to our partnership with TECUNIQUE. Their dedicated engineers in both software development and QA seamlessly integrated into our company, playing a crucial role in our achievements.",
    author: "David Fischer",
    role: "Founder & CEO",
    company: "Innovalog",
    image: "/images/testimonial/david.webp",
    color: "#6366f1",
    rating: 5,
  },
  {
    quote: "TECUNIQUE has been an integral part of our journey for more than a decade, and we are committed to further expanding our collaborative efforts. Our association with TECUNIQUE is not merely driven by financial considerations; it's centered on the invaluable expertise and contributions that the team brings to the table.",
    author: "Gilles Andre",
    role: "Founder & CEO",
    company: "OPPSCIENCE",
    image: "/images/testimonial/gilles.jpg",
    color: "#8b5cf6",
    rating: 5,
  },
  {
    quote: "TECUNIQUE has been a key partner for OPPSCIENCE over the years. As a CTO, I've collaborated with TECUNIQUE on various projects for an extended duration. They have consistently helped us deliver top-tier software, attributed not just to their excellent software testing but also their expertise in software engineering.",
    author: "Mickael Augello",
    role: "CTO",
    company: "OPPSCIENCE",
    image: "/images/testimonial/mickael.webp",
    color: "#06b6d4",
    rating: 4.5,
  },
  {
    quote: "I am genuinely grateful for the dedication and involvement displayed by the TECUNIQUE team. Their consistent efforts to enhance our platform and deliver an exceptional experience to our customers have solidified our perception of TECUNIQUE not just as a service provider but as a true partner.",
    author: "Guillaume Brejaud",
    role: "COO",
    company: "OPPSCIENCE",
    image: "/images/testimonial/guillaume.webp",
    color: "#7c3aed",
    rating: 5,
  },
  {
    quote: "Their expertise and dedication in architectural design, development, and QA have been very valuable to our team.",
    author: "Ajay Singh",
    role: "Client",
    company: "",
    image: "/images/testimonial/ajay.webp",
    color: "#0891b2",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionRef = useScrollReveal()

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(index)
      setIsTransitioning(false)
    }, 200)
  }, [isTransitioning])

  const next = useCallback(() => goTo((current + 1) % testimonials.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + testimonials.length) % testimonials.length), [current, goTo])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center reveal">
          <span className="section-pill">
            <Star className="h-3 w-3 fill-current" />
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trusted by industry leaders across the globe for over 15 years.
          </p>
        </div>

        {/* Testimonial card */}
        <div className="mt-14 mx-auto max-w-4xl reveal">
          <div
            className="relative flex flex-col justify-between rounded-3xl border border-border/60 bg-white p-8 lg:p-12 shadow-lg transition-all duration-300 min-h-[420px] md:min-h-[380px]"
            style={{ boxShadow: `0 20px 60px ${t.color}18, 0 4px 16px rgba(0,0,0,0.06)` }}
          >
            {/* Large decorative quote */}
            <Quote
              className="absolute top-8 right-8 h-16 w-16 opacity-[0.06]"
              aria-hidden
            />

            <div>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => {
                  const starValue = i + 1;
                  if (t.rating >= starValue) {
                    return <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />;
                  } else if (t.rating >= starValue - 0.5) {
                    return <StarHalf key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />;
                  } else {
                    return <Star key={i} className="h-4 w-4 text-border" />;
                  }
                })}
              </div>

              {/* Quote */}
              <blockquote
                className={`text-lg text-foreground leading-relaxed lg:text-xl transition-opacity duration-200 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author */}
            <footer
              className={`mt-8 flex items-center gap-4 transition-opacity duration-200 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* Avatar — real photo in circle */}
              <div
                className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2"
                style={{ ringColor: t.color, boxShadow: `0 0 0 2px white, 0 0 0 4px ${t.color}40` }}
              >
                <Image
                  src={t.image}
                  alt={t.author}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>

              <div>
                <p className="font-semibold text-foreground">{t.author}</p>
                <p className="text-sm text-muted-foreground">
                  {t.role}
                  {t.company && (
                    <>
                      ,{" "}
                      <span className="font-semibold" style={{ color: t.color }}>
                        {t.company}
                      </span>
                    </>
                  )}
                </p>
              </div>

              {/* Company badge */}
              {t.company && (
                <div className="ml-auto hidden sm:flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5">
                  <div className="h-2 w-2 rounded-full" style={{ background: t.color }} />
                  <span className="text-xs font-semibold text-muted-foreground">{t.company}</span>
                </div>
              )}
            </footer>

            {/* Accent line */}
            <div
              className="absolute bottom-0 left-8 right-8 h-0.5 rounded-full"
              style={{ background: `linear-gradient(to right, ${t.color}, ${t.color}40, transparent)` }}
            />
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4 text-foreground/70" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-6 h-2.5 bg-primary"
                      : "w-2.5 h-2.5 bg-border hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4 text-foreground/70" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
