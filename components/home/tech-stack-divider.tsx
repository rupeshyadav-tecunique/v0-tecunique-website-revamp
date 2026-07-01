"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const techStack = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "Java", "AWS", "Docker",
  "Kubernetes", "PostgreSQL", "GraphQL", "Atlassian SDK", "Jira", "Confluence",
  "React", "Next.js", "Node.js", "TypeScript", "Python", "Java", "AWS", "Docker",
  "Kubernetes", "PostgreSQL", "GraphQL", "Atlassian SDK", "Jira", "Confluence",
]

export function TechStackDivider() {
  const sectionRef = useScrollReveal()

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="py-12 bg-white border-y border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Technologies We Work With
          </p>
          <div className="relative overflow-hidden">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

            <div className="flex animate-marquee">
              {techStack.map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="mx-4 shrink-0 rounded-full border border-border/60 bg-muted/30 px-4 py-2 text-sm font-medium text-foreground/70 whitespace-nowrap shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
