import { ServerCog, Network, DatabaseZap, LockKeyhole, Blocks } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const backendServices = [
  {
    title: "REST API Development",
    description: "Design and develop APIs for frontend, mobile, partner, and third-party integrations.",
    icon: ServerCog
  },
  {
    title: "Third-Party Integrations",
    description: "Connect with external platforms, business tools, payment systems, data services, and workflow platforms.",
    icon: Network
  },
  {
    title: "Data Processing & Reporting",
    description: "Support data handling, reporting logic, analytics workflows, and SQL-based development.",
    icon: DatabaseZap
  },
  {
    title: "Authentication & Access Control",
    description: "Implement secure user access, roles, permissions, and integration authentication flows.",
    icon: LockKeyhole
  }
]

export function IntegrationsBackend() {
  return (
    <section className="py-24 bg-[#0052CC] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <SectionReveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 ring-1 ring-inset ring-white/20 mb-6 text-sm font-medium backdrop-blur-sm">
              <Blocks className="h-4 w-4" />
              Core Infrastructure
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display mb-6">
              Backend Systems and Integrations That Connect Your Product
            </h2>
            <p className="text-lg leading-8 text-blue-100">
              We help product teams build and maintain the backend services and integrations that keep software products connected, reliable, and useful.
            </p>
          </SectionReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {backendServices.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 100}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors duration-300 h-full flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
