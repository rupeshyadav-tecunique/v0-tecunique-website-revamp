import Link from "next/link"
import { Users, Code, TestTube, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Dedicated Teams",
    description: "Our dedicated team service offers a cost-effective solution for engaging different kinds of software workforce - for development, quality assurance, and technical support.",
    icon: Users,
  },
  {
    title: "Software Development",
    description: "Our product design and development services ensure iterative development using advanced technologies for faster time-to-market, robustness, and scalability.",
    icon: Code,
  },
  {
    title: "Quality Assurance",
    description: "TECUNIQUE offers a fully customized managed software testing service where we take responsibility for quality assurance and testing of your software products.",
    icon: TestTube,
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Offshore Software Development IT Outsourcing Services
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We can build a dedicated team of talented engineers to build reliable, scalable, and quality software solutions based on the technology stack of your preference.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group relative overflow-hidden border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
