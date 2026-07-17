import { ContactForm } from "@/components/contact/contact-form"
import { SectionReveal } from "@/components/ui/section-reveal"
import { MapPin, Mail, Phone, Globe2 } from "lucide-react"

const offices = [
  {
    country: "INDIA",
    type: "Headquarters",
    flag: "in",
    address: "1002, Neptune Edge, Sarabhai Campus, Vadodara – 390 007, Gujarat, India",
    email: "info@tecunique.com",
    phone: "+91 982 544 6570"
  },
  {
    country: "USA",
    type: "Sales Office",
    flag: "us",
    address: "104 Bramble Bush Ln Victoria, Texas 77904",
    email: "sales@tecunique.com",
    phone: "+1 361 571 5589"
  },
  {
    country: "CANADA",
    type: "Sales Office",
    flag: "ca",
    address: "102-213 Willis Crescent, Saskatoon - S7T 0L9",
    email: "sales@tecunique.com",
    phone: "+1 306 891 4647"
  },
  {
    country: "AUSTRALIA",
    type: "Sales Office",
    flag: "au",
    address: "50 Grandeur Parade, Riverstone, NSW - 2765",
    email: "sales@tecunique.com",
    phone: "+61 421 826 596"
  }
]

export function ContactSection() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Soft Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-3xl -z-10 animate-blob delay-200" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Form */}
          <SectionReveal direction="right" className="w-full max-w-3xl mx-auto xl:max-w-none">
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Let's Build Something <span className="gradient-text">Great</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl">
                Whether you need a dedicated team, bespoke software, or just want to explore possibilities, we're here to help.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl shadow-primary/5 border border-border/60 p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />
              <ContactForm />
            </div>
          </SectionReveal>

          {/* Right: Global Presence */}
          <SectionReveal direction="left" className="w-full max-w-3xl mx-auto xl:max-w-none xl:pt-4">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center justify-center p-3 bg-primary/10 rounded-2xl text-primary">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground">
                  Our Global Presence
                </h2>
                <p className="text-muted-foreground mt-1">
                  Operating across multiple time zones for seamless support.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-5">
              {offices.map((office, idx) => {
                const isIndia = office.country === "INDIA";
                return (
                  <div 
                    key={office.country} 
                    className={`group relative rounded-2xl p-6 xl:p-5 transition-all duration-300 overflow-hidden flex flex-col xl:flex-row items-start xl:items-center gap-0 xl:gap-6 ${
                      isIndia 
                        ? 'bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border-2 border-primary/30 shadow-lg shadow-primary/10 xl:scale-[1.03] z-10' 
                        : 'bg-white border border-border/60 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1'
                    }`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {/* Subtle Gradient Glow on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br xl:bg-gradient-to-r from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Header: Flag and Title */}
                    <div className="relative flex flex-col gap-3 mb-5 xl:mb-0 w-full xl:w-36 shrink-0">
                      <div className="flex items-start justify-between w-full">
                        <div className="w-12 h-9 xl:w-14 xl:h-10 rounded-md overflow-hidden shadow-sm border border-border shrink-0">
                          <img 
                            src={`https://flagcdn.com/w80/${office.flag}.png`} 
                            alt={`${office.country} flag`} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <span className={`xl:hidden text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap ${isIndia ? 'text-primary bg-primary/20' : 'text-primary bg-primary/10'}`}>
                          {office.type}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground">{office.country}</h3>
                        <span className={`hidden xl:inline-block text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap mt-1 ${isIndia ? 'text-primary bg-primary/20' : 'text-primary bg-primary/10'}`}>
                          {office.type}
                        </span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="relative flex-1 flex flex-col gap-4 xl:gap-3 text-sm text-muted-foreground w-full xl:border-l xl:border-border/60 xl:pl-5">
                      <div className="flex gap-3 items-start group/item">
                        <div className={`p-2 xl:p-1.5 rounded-lg transition-colors duration-300 shrink-0 ${isIndia ? 'bg-primary text-white group-hover/item:bg-primary/90' : 'bg-secondary/10 text-secondary group-hover/item:bg-secondary group-hover/item:text-white'}`}>
                          <MapPin className="w-3.5 h-3.5" />
                        </div>
                        <p className={`leading-relaxed pt-0.5 pr-2 ${isIndia ? 'text-slate-700 font-medium' : ''}`}>{office.address}</p>
                      </div>
                      
                      <div className="flex gap-3 items-center group/item">
                        <div className={`p-2 xl:p-1.5 rounded-lg transition-colors duration-300 shrink-0 ${isIndia ? 'bg-primary text-white group-hover/item:bg-primary/90' : 'bg-secondary/10 text-secondary group-hover/item:bg-secondary group-hover/item:text-white'}`}>
                          <Mail className="w-3.5 h-3.5" />
                        </div>
                        <a href={`mailto:${office.email}`} className={`hover:text-foreground font-medium transition-colors truncate ${isIndia ? 'text-slate-700' : ''}`}>{office.email}</a>
                      </div>
                      
                      <div className="flex gap-3 items-center group/item">
                        <div className={`p-2 xl:p-1.5 rounded-lg transition-colors duration-300 shrink-0 ${isIndia ? 'bg-primary text-white group-hover/item:bg-primary/90' : 'bg-secondary/10 text-secondary group-hover/item:bg-secondary group-hover/item:text-white'}`}>
                          <Phone className="w-3.5 h-3.5" />
                        </div>
                        <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className={`hover:text-foreground font-medium transition-colors ${isIndia ? 'text-slate-700' : ''}`}>{office.phone}</a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
