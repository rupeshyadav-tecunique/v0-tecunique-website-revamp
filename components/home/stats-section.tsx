import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const stats = [
  { value: "95%", label: "Customer Retention" },
  { value: "92%", label: "Employee Retention" },
  { value: "15+", label: "Years in Business" },
]

export function StatsSection() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Trusted Software Services Company Since 2010
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              With 15+ years of engineering excellence, TECUNIQUE brings transparency, collaboration, and domain expertise to every project.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We start with honesty, transparency, and a collaborative approach. Our business domain knowledge, proven methodologies, and technology expertise of skilled software professionals yield high-quality solutions that add value to businesses across the globe.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our cost-effective, professional, and proactive software service delivery makes us one of the best-in-class software services companies.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border/50 bg-card p-6 text-center lg:text-left"
              >
                <p className="text-4xl font-bold text-primary lg:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
