import { Heart } from "lucide-react"
import CultureGallery from "@/components/about/culture-gallery"
import { SectionReveal } from "@/components/ui/section-reveal"

export function AboutCulture() {
  return (
    <section className="pt-24 lg:pt-32 pb-20 lg:pb-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center mb-16">
          <div className="lg:w-1/2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-lavender)] text-brand-purple text-sm font-semibold mb-6 border border-[var(--surface-violet-strong)]">
              <Heart className="h-4 w-4" />
              <span>Our Culture</span>
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
              People, Stability, and Culture
            </h2>
            <div className="prose prose-lg text-muted-foreground mb-10">
              <p>
                At TECUNIQUE, we believe stable teams are built through trust, respect, flexibility, and ownership. Our culture is intentionally low on hierarchy and high on responsibility, helping people stay engaged and clients retain product knowledge over time.
              </p>
              <p className="font-medium text-foreground bg-[var(--neutral-slate-50)] p-4 rounded-xl border border-[var(--neutral-slate-200)] mt-6">
                We call our team members <strong className="text-brand-blue">UNIQUENS</strong> — people who bring their own uniqueness, discipline, and ownership to the work they do.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Respectful Work Culture", desc: "We encourage open communication, low politics, and practical problem-solving." },
                { title: "Ownership Mindset", desc: "Our teams are expected to understand the product, not just complete assigned tasks." },
                { title: "Work-Life Balance", desc: "We believe sustainable delivery comes from stable, motivated people." },
                { title: "Celebrating Together", desc: "Festivals, milestones, achievements, and team moments are part of how we build connection." },
              ].map((item) => (
                <div key={item.title} className="relative pl-4 border-l-2 border-[var(--surface-blue-strong)] hover:border-brand-blue transition-colors">
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-2xl mx-auto">
            <div className="relative">
              <div className="brand-orb-indigo absolute -inset-4 rounded-[3rem] transform -rotate-3 opacity-50 blur-lg" />
              <CultureGallery />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
