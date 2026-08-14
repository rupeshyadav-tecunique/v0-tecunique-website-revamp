import { Card, CardContent } from "@/components/ui/card"
import { benefits } from "@/lib/data/careers.data"

export function CareersBenefits() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-4">
            At TECUNIQUE, our team members are UNIQUENS.
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display">
            Why Join TECUNIQUE?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A stable and supportive work environment where people are trusted to contribute, learn, and take ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="group border-slate-200 bg-white hover:border-brand-blue/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 rounded-3xl overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl mb-6 shadow-sm transition-transform duration-500 group-hover:scale-110 ${benefit.color}`}>
                  <benefit.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
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
