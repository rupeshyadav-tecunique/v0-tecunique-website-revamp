import { CheckCircle, Layers, Clock, Shield, Lock } from "lucide-react"

const expertise = [
  { title: "100% Client Satisfaction", icon: CheckCircle },
  { title: "No Box Approach", icon: Layers },
  { title: "Shorter Time to Market", icon: Clock },
  { title: "Data Privacy", icon: Shield },
  { title: "Guaranteed Security", icon: Lock },
]

export function ExpertiseSection() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Outsource Software Development and Quality Assurance to TECUNIQUE
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
            As a trusted software outsourcing company, we stay on schedule, scale the teams and ensure top-notch product quality in our deliveries.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-center text-xl font-semibold text-primary-foreground mb-10">Our Expertise</h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-lg bg-primary-foreground/10 p-6 text-center backdrop-blur-sm transition-colors hover:bg-primary-foreground/15"
              >
                <item.icon className="h-8 w-8 text-primary-foreground" />
                <p className="mt-4 text-sm font-medium text-primary-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
