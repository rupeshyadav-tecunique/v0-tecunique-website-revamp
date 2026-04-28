"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Our top-selling and top-rated Jira app, JMWE, owes much of its success to our partnership with TECUNIQUE. Their dedicated engineers in both software development and QA seamlessly integrated into our company, playing a crucial role in our achievements.",
    author: "David Fischer",
    role: "Founder & CEO, Innovalog",
  },
  {
    quote: "TECUNIQUE has been an integral part of our journey for more than a decade, and we are committed to further expanding our collaborative efforts. Our association with TECUNIQUE is not merely driven by financial considerations; it's centered on the invaluable expertise and contributions that the team brings to the table.",
    author: "Gilles Andre",
    role: "Founder & CEO, OPPSCIENCE",
  },
  {
    quote: "TECUNIQUE has been a key partner for OPPSCIENCE over the years. As a CTO, I've collaborated with TECUNIQUE on various projects for an extended duration. They have consistently helped us deliver top-tier software, attributed not just to their excellent software testing but also their expertise in software engineering.",
    author: "Mickael Augello",
    role: "CTO, OPPSCIENCE",
  },
  {
    quote: "I am genuinely grateful for the dedication and involvement displayed by the TECUNIQUE team. Their consistent efforts to enhance our platform and deliver an exceptional experience to our customers have solidified our perception of TECUNIQUE not just as a service provider but as a true partner.",
    author: "Guillaume Brejaud",
    role: "COO, OPPSCIENCE",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What Our Clients are Saying
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="mx-auto max-w-3xl">
            <div className="relative rounded-2xl bg-card border border-border/50 p-8 lg:p-12 shadow-sm">
              <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/15" />
              <blockquote className="relative z-10">
                <p className="text-lg text-foreground leading-relaxed lg:text-xl">
                  {testimonials[current].quote}
                </p>
                <footer className="mt-8">
                  <p className="font-semibold text-foreground">{testimonials[current].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </footer>
              </blockquote>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === current ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
