import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Coffee, Heart, GraduationCap, Globe } from "lucide-react"

const benefits = [
  {
    title: "Continuous Learning",
    description: "Access to latest courses, certifications, and mentorship to fuel your career growth.",
    icon: GraduationCap,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Modern Tech Stack",
    description: "Work on cutting-edge technologies and high-impact projects for global enterprises.",
    icon: Zap,
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Employee-Centric",
    description: "Flexible working hours, remote options, and a culture that values your voice.",
    icon: Heart,
    color: "bg-rose-500/10 text-rose-500"
  },
  {
    title: "Global Projects",
    description: "Collaborate with international clients and solve complex business challenges.",
    icon: Globe,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Vibrant Culture",
    description: "We celebrate festivals, birthdays, and milestones together as one big family.",
    icon: Coffee,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "Expert Mentors",
    description: "Work alongside veterans with 14+ years of industry-leading experience.",
    icon: Users,
    color: "bg-purple-500/10 text-purple-500"
  }
]

export function CareersBenefits() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Join the "Uniquens"?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide an environment where you can amplify your abilities and do your best work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="group border-border/40 bg-white/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 rounded-3xl overflow-hidden">
              <CardContent className="p-2 flex flex-col items-center text-center">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl mb-4 shadow-sm transition-transform duration-500 group-hover:scale-110 ${benefit.color}`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
