import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Shield, Users, Lightbulb, Fingerprint, ArrowRight } from "lucide-react"
import CultureGallery from "@/components/about/culture-gallery"
import { SectionReveal } from "@/components/ui/section-reveal"
import { cn } from "@/lib/utils"
import { CTABanner } from "@/components/ui/cta-banner"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about TECUNIQUE - A trusted software services company delivering IT solutions worldwide since 2010.",
}

const stats = [
  { value: "95%", label: "Customer Retention" },
  { value: "92%", label: "Employee Retention" },
  { value: "15+", label: "Years in Business" },
]

const values = [
  {
    title: "Respect",
    description: "Our practice demands respect and openness towards each other, the communities around us, and society.",
    icon: Heart,
  },
  {
    title: "Exceptional Value",
    description: "Our offerings and proven solutions create a unique competitive advantage and value for our clients.",
    icon: Award,
  },
  {
    title: "Authenticity",
    description: "We take the trust placed in us seriously and work hard to earn it every day. We never make a promise that we cannot keep.",
    icon: Shield,
  },
  {
    title: "Responsible",
    description: "With our clients' and colleagues' best interest at heart, we act responsibly and communicate with clarity.",
    icon: Users,
  },
  {
    title: "Confident",
    description: "We meet every challenge with respect and confidence. We trust in our abilities and the difference we can make.",
    icon: Lightbulb,
  },
  {
    title: "Unique Approach",
    description: "We meticulously examine each client's case & depending on their needs, we engage the dedicated model and team.",
    icon: Fingerprint,
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32"
        style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
      >
        {/* Animated blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 animate-blob"
            style={{ background: "radial-gradient(circle, #a5b4fc 0%, #c4b5fd 50%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 animate-blob"
            style={{
              background: "radial-gradient(circle, #93c5fd 0%, #a5b4fc 50%, transparent 70%)",
              animationDelay: "4s",
              animationDuration: "16s",
            }}
          />
          <div
            className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full opacity-25 animate-blob"
            style={{
              background: "radial-gradient(circle, #67e8f9 0%, #a5b4fc 50%, transparent 70%)",
              animationDelay: "8s",
              animationDuration: "20s",
            }}
          />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <span className="section-pill mb-6">Our Story</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl text-balance leading-[1.1]">
              Driven by Passion, <br />
              <span className="gradient-text">Defined by Excellence</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Since 2010, TECUNIQUE has been at the forefront of digital transformation. We combine deep domain knowledge with technical mastery to create software that doesn't just work—it inspires.
            </p>
          </SectionReveal>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <SectionReveal
                key={stat.label}
                delay={i * 150}
                className="glass-card rounded-2xl p-10 text-center shadow-sm border-white/60"
              >
                <p className="text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            <SectionReveal direction="right">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                We are relentless in our pursuit of <span className="text-primary">customer success</span>
              </h2>
              <div className="mt-8 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are fast and flexible in our execution, consistently delivering above and beyond our customer expectations. We combine business domain knowledge, proven methodologies, and technical expertise.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our solutions yield high-quality outcomes that add value to businesses. Since 2010, we have been serving diverse development requirements of businesses of all sizes, from startups to established enterprises.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal direction="left" className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/10 p-12 flex items-center justify-center border border-primary/10 shadow-inner">
                <div className="text-center animate-float">
                  <p className="text-8xl font-black text-primary/80">15+</p>
                  <p className="mt-4 text-xl font-bold text-foreground">Years of Excellence</p>
                  <p className="mt-2 text-muted-foreground">Engineering the future since 2010</p>
                </div>
                {/* Decorative blobs */}
                <div className="absolute -top-6 -right-6 h-24 w-24 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-secondary/10 rounded-full blur-2xl" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-muted/30 py-24 lg:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">The principles that guide everything we do</p>
          </SectionReveal>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <SectionReveal key={value.title} delay={i * 100} className="h-full">
                <Card className="h-full border-border/40 bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="pt-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="team" className="py-24 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Leadership</h2>
            <p className="mt-4 text-lg text-muted-foreground">The strategic vision and wisdom behind TECUNIQUE</p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <SectionReveal key={i} direction={i === 1 ? "right" : "left"} className="h-full">
                <div className="flex flex-col md:flex-row gap-10 items-center bg-gradient-to-br from-white to-primary/5 p-10 rounded-[2.5rem] border border-primary/10 shadow-sm transition-all hover:shadow-md h-full">
                  <div className="relative h-56 w-56 shrink-0 overflow-hidden rounded-[2rem] bg-muted shadow-inner ring-8 ring-white/50">
                    <img src={`https://placehold.co/400x400/ede9fe/6366f1?text=Director+${i}`} alt={`Director ${i}`} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">Director Name {i}</h3>
                    <p className="text-primary font-bold uppercase tracking-widest text-xs mb-6">Managing Director</p>
                    <p className="text-muted-foreground italic text-lg leading-relaxed relative">
                      <span className="absolute -left-6 -top-2 text-4xl text-primary/20">"</span>
                      Leading with integrity and a commitment to excellence has always been our core philosophy. We take pride in the family we've built here.
                      <span className="absolute -bottom-6 text-4xl text-primary/20">"</span>
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Veterans Section - 15+ Years */}
      <section className="py-24 lg:py-32 bg-muted/20 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">The Core Pillars</h2>
            <p className="mt-4 text-lg text-muted-foreground">Celebrating our members with 15+ years of dedicated service</p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="flex flex-col sm:flex-row gap-8 bg-white p-8 rounded-3xl border border-border/40 shadow-sm transition-all hover:border-primary/40 group">
                  <div className="h-36 w-36 shrink-0 rounded-2xl bg-muted overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-500">
                    <img src={`https://placehold.co/200x200/f5f3ff/8b5cf6?text=Veteran+${i}`} alt={`Veteran ${i}`} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold text-foreground mb-1">Expert Name {i}</h4>
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4">15+ Years of Service</p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      "Watching us grow from a small group to a global engineering powerhouse while maintaining our unique culture has been the highlight of my career."
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Corner */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
            <div className="max-w-2xl">
              <span className="section-pill mb-6">Our Vibe</span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Cultural Corner</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Life at TECUNIQUE is more than just code. We celebrate every milestone, festival, and achievement as one big family.
              </p>
            </div>
            <div className="flex items-center gap-6 bg-primary/5 px-8 py-4 rounded-2xl border border-primary/10">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-xl shadow-inner">30+</div>
              <div>
                <div className="text-lg font-bold text-foreground leading-none mb-1">Uniquens</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Celebrating Together</div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <CultureGallery />
          </SectionReveal>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Join Our Unique Culture"
        description="We're always looking for passionate individuals to join our global team. Explore how you can make a difference with us and grow your career."
        primaryAction={{ label: "View Open Positions", href: "/careers" }}
        secondaryAction={{ label: "Meet the Team", href: "/about#team" }}
      />
    </div>
  )
}
