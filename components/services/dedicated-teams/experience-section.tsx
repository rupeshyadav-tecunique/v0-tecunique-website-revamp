import Image from "next/image"
import { SectionReveal } from "@/components/ui/section-reveal"

export function DedicatedTeamsExperience() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Built Through Long-Term Client Relationships</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              TECUNIQUE has supported international software companies across Atlassian apps, product engineering, QA, data platforms, and offshore development teams. Our dedicated team model has been used for long-term development, QA, automation, support, and product maintenance engagements.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Atlassian App Vendors", companies: ["Appfire", "Innovalog", "Qotilabs"] },
              { category: "Product Engineering & Data Platforms", companies: ["OPPSCIENCE", "CustomerMatrix", "PolySpot"] },
              { category: "ODC / Offshore Team Setup", companies: ["SkySelect"] },
              { category: "Product Development & Support", companies: ["eXtensi", "Validat"] }
            ].map((block, i) => (
              <SectionReveal key={block.category} delay={i * 100} className="bg-white p-8 rounded-3xl border border-slate-200 text-center flex flex-col justify-center">
                <h4 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-6">{block.category}</h4>
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
                  {block.companies.map((company) => {
                    const companyLogos: Record<string, string> = {
                      "Innovalog": "/images/companies/innovalog.png",
                      "Qotilabs": "/images/companies/quotilabs.png",
                      "OPPSCIENCE": "/images/companies/oppscience.svg",
                      "CustomerMatrix": "/images/companies/customer_matrix.webp",
                      "PolySpot": "/images/companies/polyspot.webp",
                      "SkySelect": "/images/companies/skyselect.svg"
                    };

                    return (
                      <div key={company} className="flex flex-col items-center group">
                        {companyLogos[company] ? (
                          <div className="relative h-10 w-28">
                            <Image 
                              src={companyLogos[company]} 
                              alt={company} 
                              fill 
                              className="object-contain transition-transform duration-300 group-hover:scale-110" 
                            />
                          </div>
                        ) : (
                          <div className="h-10 w-auto min-w-[80px] bg-slate-100 border border-slate-200 rounded flex items-center justify-center px-3 group-hover:border-blue-300 transition-colors">
                            <span className="text-sm font-bold text-slate-400 group-hover:text-blue-500 transition-colors">{company}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial (David Fischer / Innovalog highlight) */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-200/50 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center">
            <div className="flex flex-col items-center mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
                Client Relationship Highlight
              </span>
            </div>
            <p className="text-2xl font-medium leading-relaxed text-slate-900 mb-8 max-w-3xl mx-auto">
              TECUNIQUE’s long-term collaboration with Innovalog included dedicated development and QA support for Atlassian Marketplace products, helping preserve product knowledge and engineering continuity over time.
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="h-14 w-14 rounded-full mb-4 border-2 border-white shadow-md overflow-hidden relative">
                <Image src="/images/companies/innovalog.png" alt="Innovalog" fill className="object-contain p-2" />
              </div>
              <div className="font-bold text-slate-900">Innovalog</div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
