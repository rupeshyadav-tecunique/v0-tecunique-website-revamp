import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { SectionReveal } from "./section-reveal"
import { cn } from "@/lib/utils"

interface CTABannerProps {
  title: string
  description: string
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}

export function CTABanner({
  title,
  description,
  primaryAction = { label: "Contact Us Today", href: "/contact" },
  secondaryAction = { label: "View open positions", href: "/careers" },
}: CTABannerProps) {
  return (
    <section className="pb-16 lg:pb-24 pt-10 lg:pt-14 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="relative isolate overflow-hidden bg-white/60 backdrop-blur-xl px-6 py-20 border border-white/60 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.05)] rounded-[3rem] sm:px-24 xl:py-28">
          {/* Subtle Mesh Gradient Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />

          <div className="mx-auto max-w-3xl text-center relative z-10">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl text-balance leading-[1.1] mb-8">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {description}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="default" className="rounded-xl px-10 h-12 text-sm" asChild>
                <Link href={primaryAction.href}>
                  {primaryAction.label}
                  <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Link
                href={secondaryAction.href}
                className="text-sm font-bold leading-6 text-slate-900 hover:text-primary transition-colors flex items-center group"
              >
                {secondaryAction.label}
                <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex flex-col items-center justify-center gap-4 relative z-10">
            <div className="flex -space-x-4">
              {[
                { bg: "bg-indigo-100", text: "text-indigo-600", label: "JD" },
                { bg: "bg-rose-100", text: "text-rose-600", label: "AS" },
                { bg: "bg-emerald-100", text: "text-emerald-600", label: "MK" },
                { bg: "bg-amber-100", text: "text-amber-600", label: "RL" },
                { bg: "bg-sky-100", text: "text-sky-600", label: "TW" },
              ].map((user, i) => (
                <div
                  key={i}
                  className={cn(
                    "inline-flex h-12 w-12 rounded-full ring-4 ring-white items-center justify-center overflow-hidden border border-slate-200/50 shadow-sm",
                    user.bg,
                    user.text
                  )}
                >
                  <span className="text-xs font-bold">{user.label}</span>
                </div>
              ))}
              <div className="inline-flex h-12 w-12 rounded-full ring-4 ring-white items-center justify-center bg-slate-900 text-white shadow-sm">
                <span className="text-[10px] font-bold">+15</span>
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Trusted by <span className="text-slate-900 font-bold">20+</span> companies worldwide
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
