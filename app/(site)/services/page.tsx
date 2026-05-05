import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Code, TestTube, Building, Laptop, Globe, ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { CTABanner } from "@/components/ui/cta-banner"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore TECUNIQUE's comprehensive software services - Dedicated teams, software development, quality assurance, and IT staff augmentation.",
}

const mainServices = [
  {
    id: "dedicated-teams",
    title: "Dedicated Development",
    description: "Custom-made software development teams of experienced, skilled, reliable, & professional resources, built specific to your requirements, enables building scalable, secure, and robust software solutions.",
    details: "In the past 15 years, we have developed custom dedicated software development and quality assurance teams for a diverse array of industry verticals, including ISVs, start-ups, and enterprises.",
    icon: Users,
    image: "/images/services/bespoke-dev.png",
    href: "/services/dedicated-teams",
  },
  {
    id: "qa",
    title: "Software QA Teams",
    description: "Custom-made software QA teams of experienced, skilled, reliable, & professional resources, built specific to your requirements, enables delivering scalable, secure, and robust software solutions.",
    details: "In the past 15 years, we have built custom dedicated software quality assurance teams for a diverse array of industry verticals, including ISVs, start-ups, and enterprises.",
    icon: TestTube,
    image: "/images/services/qa-testing.png",
    href: "/services/qa",
  },
  {
    id: "augmentation",
    title: "IT Staff Augmentation",
    description: "Overcome the gap between demand and supply for skilled teams through an innovative and best recruiting model backed by a dedicated client-centric software team.",
    details: "We offer staff augmentation services, which help to revamp your team and boost the development process.",
    icon: Building,
    image: "/images/services/team-aug.png",
    href: "/services/augmentation",
  },
  {
    id: "offshore",
    title: "Offshore Development",
    description: "Ramp up your software development and scale up quickly. With 15+ years of expertise in the software industry, we can help set up offshore teams while ensuring quick turn-around and high quality development.",
    details: "You can set up offshore development centers in India with TECUNIQUE for developing, testing, and deploying software solutions.",
    icon: Globe,
    image: "/images/services/offshore.png",
    href: "/services/offshore",
  },
]
const additionalServices = [
  {
    title: "Product Development",
    description: "Our product design and development services ensure iterative development using advanced technologies for faster time-to-market, robustness, and scalability.",
    icon: Laptop,
    image: "/images/services/bespoke-dev.png",
  },
  {
    title: "Atlassian Consulting",
    description: "Certified expertise in Jira, Confluence, and the Atlassian ecosystem to optimize your team's workflow and agile processes.",
    icon: Code,
    image: "/images/services/atlassian.png",
  },
  {
    title: "Software QA & Testing",
    description: "Leveraging our potential and expertise to deliver quality tested applications through rigorous manual and automated testing cycles.",
    icon: TestTube,
    image: "/images/services/qa-testing.png",
  },
]

const benefits = [
  "Dedicated project managers",
  "Flexible engagement models",
  "Transparent communication",
  "Agile development methodology",
  "24/7 support availability",
  "Cost-effective solutions",
  "Skilled resource pool",
  "Quick team scaling",
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
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

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <SectionReveal className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8">
              <Sparkles className="h-3 w-3" />
              Our Expertise
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1] mb-8">
              Empower Your Business with <br />
              <span className="gradient-text">Self-Organizing Teams.</span>
            </h1>
            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We build custom dedicated teams specifically for your needs, holding deep expertise in the technologies that drive your business forward.
            </p>
            <div className="mt-12 flex items-center justify-center gap-6">
              <Button size="lg" className="rounded-xl px-10 h-12 text-lg group" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 lg:py-32 bg-slate-50/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Core Services</h2>
            <p className="mt-6 text-lg text-slate-600">Expertise honed over 15 years of delivering digital excellence.</p>
          </SectionReveal>

          <div className="space-y-32">
            {mainServices.map((service, index) => (
              <SectionReveal
                key={service.id}
                direction={index % 2 === 0 ? "right" : "left"}
                className={cn(
                  "grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center",
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div className={cn("space-y-8", index % 2 === 1 ? "lg:order-2" : "")}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-sm border border-slate-100">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{service.title}</h3>
                  <div className="space-y-6">
                    <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                    <p className="text-slate-500 leading-relaxed italic border-l-4 border-primary/20 pl-6 py-2 bg-white/50 rounded-r-xl">
                      {service.details}
                    </p>
                    {service.href && (
                      <div className="pt-4">
                        <Button variant="outline" className="rounded-xl group/btn" asChild>
                          <Link href={service.href}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                <div className={cn("relative group", index % 2 === 1 ? "lg:order-1" : "")}>
                  <div className="aspect-[4/3] rounded-[3rem] bg-white border border-slate-100 flex items-center justify-center shadow-xl group-hover:scale-[1.02] transition-all duration-700 overflow-hidden relative isolate">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Floating icon on hover */}
                    <div className="absolute bottom-8 left-8 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 lg:py-32 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center mb-24">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Additional Capabilities</h2>
            <p className="mt-6 text-lg text-slate-600">
              Comprehensive software solutions to meet every business challenge.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {additionalServices.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 100}>
                <Card className="h-full border-border/40 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group rounded-[2.5rem] premium-card overflow-hidden flex flex-col items-center text-center">
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  </div>
                  <CardHeader className="p-6 pt-0 w-full relative z-10 flex flex-col items-center -mt-8">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary mb-6 shadow-xl border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 relative z-10">
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-slate-900 overflow-hidden relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,theme(colors.primary.500/0.1),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 items-center">
            <SectionReveal direction="right">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-6xl text-balance leading-tight">
                Why Partner with <span className="text-primary">TECUNIQUE?</span>
              </h2>
              <p className="mt-10 text-xl text-slate-400 leading-relaxed">
                As a trusted software outsourcing partner, we stay on schedule, scale teams rapidly, and ensure top-notch quality in every delivery.
              </p>
            </SectionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <SectionReveal key={benefit} delay={i * 100} direction="left">
                  <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20 shadow-sm group-hover:scale-110 transition-transform">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-bold text-white text-sm tracking-wide">{benefit}</span>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Vision?"
        description="Whether you need a dedicated development team or specialized QA expertise, we're ready to help you scale your business with confidence and technical excellence."
        primaryAction={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryAction={{ label: "Browse Case Studies", href: "/case-studies" }}
      />
    </div>
  )
}
