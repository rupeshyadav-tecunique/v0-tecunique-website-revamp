import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, TrendingUp, Star, Sparkles, Shield, FileCheck, Clock3 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real-world success stories from TECUNIQUE's partnerships — how we helped companies scale, deliver quality software, and achieve lasting results.",
}

const caseStudies = [
  {
    id: "appfire",
    company: "Appfire",
    logo: "",
    industry: "Atlassian Ecosystem",
    category: "Software Development & QA",
    partnership: "Since 2020",
    location: "Global",
    initials: "AF",
    color: "#6366f1",
    gradient: "from-indigo-500 to-violet-600",
    tagline: "A Dynamic Partnership for Innovation",
    challenge: "As a key collaborator with Appfire, a trailblazer in enterprise collaboration software since 2005, TECUNIQUE has been an instrumental force in shaping the narrative of cutting-edge solutions. Appfire needed a dedicated team to seamlessly fit within their collaborative efforts to deliver intricate solutions that meet the unique demands of their clients.",
    solution: "Since 2020, TECUNIQUE provided highly skilled software engineers who seamlessly integrate with Appfire's experts. Our specialized expertise in architectural design, development, and quality assurance was integral to the success of key products like JMWE and JMCF, navigating the intricate realm of real-time custom field calculations.",
    results: [
      { metric: "Since 2020", label: "Partnership" },
      { metric: "Top-Seller", label: "JMWE & JMCF" },
      { metric: "Seamless", label: "Integration" },
      { metric: "Strategic", label: "Talent Acquisition" },
    ],
    tags: ["Atlassian", "Jira Apps", "Dedicated Team", "QA Automation"],
    image: "https://tecunique.com/wp-content/uploads/2023/11/Appfire-Case-Study.jpg"
  },
  {
    id: "innovalog",
    company: "Innovalog",
    logo: "/images/companies/innovalog.png",
    industry: "Atlassian Ecosystem",
    category: "Software Development & QA",
    partnership: "Acquired 2020",
    location: "France",
    initials: "IN",
    color: "#3b82f6",
    gradient: "from-blue-500 to-cyan-600",
    tagline: "How one engineer and TECUNIQUE's dedicated workforce took JMWE to the top",
    challenge: "David Fischer started alone but had a big vision to automate Jira workflows. As demand for JMWE grew rapidly, he needed to scale his development team quickly with engineers who could challenge solutions, communicate openly, and ensure customers' problems were solved in the best possible way.",
    solution: "TECUNIQUE provided dedicated workforce teams for software development, quality assurance, and 3rd-tier customer support. Known as straight shooters, the TECUNIQUE engineers challenged solutions and ensured high quality, propelling JMWE to become one of the marketplace's top-selling apps.",
    results: [
      { metric: "Top Rated", label: "Atlassian Ecosystem" },
      { metric: "Acquired", label: "By Appfire in 2020" },
      { metric: "Perfect", label: "QA Score" },
      { metric: "Tier 3", label: "Support Provided" },
    ],
    testimonial: {
      quote: "David credits much of his success to his partnership with TECUNIQUE. Collaboration with TECUNIQUE has been crucial to Innovalog's success.",
      author: "David Fischer",
      role: "Founder & CEO, Innovalog",
    },
    tags: ["Atlassian", "Workflow Automation", "Agile", "Tier 3 Support"],
    image: "https://tecunique.com/wp-content/uploads/2023/11/Innovalog-Case-Study.jpg"
  },
  {
    id: "oppscience",
    company: "OPPSCIENCE",
    logo: "/images/companies/oppscience.svg",
    industry: "AI & Intelligence",
    category: "Software Engineering & Testing",
    partnership: "Long-term",
    location: "France",
    initials: "OS",
    color: "#8b5cf6",
    gradient: "from-violet-500 to-purple-600",
    tagline: "Empowering OPPSCIENCE through Strategic Collaboration",
    challenge: "OPPSCIENCE, a leading French platform editor specializing in Big Data and AI, sought a dedicated team that could seamlessly integrate into their workflow to augment their capabilities in development and testing for their sophisticated data platform and law enforcement solution.",
    solution: "TECUNIQUE assembled a bespoke dedicated team of developers, QA Engineers, and Automation experts. Utilizing a robust stack including Java 17, Kafka, Keycloak, Quarkus, and Kubernetes, the team actively participated in every phase of the software development lifecycle, ensuring reliable delivery.",
    results: [
      { metric: "Low", label: "Turnover Rate" },
      { metric: "Holistic", label: "Testing & Dev" },
      { metric: "Agile", label: "Methodologies" },
      { metric: "Java 17+", label: "Modern Stack" },
    ],
    tags: ["Big Data", "AI Platform", "Java 17", "Kubernetes"],
    image: "https://tecunique.com/wp-content/uploads/2023/11/Oppscience-Case-Study.jpg"
  },
  {
    id: "customermatrix",
    company: "CustomerMatrix",
    logo: "/images/companies/customer_matrix.webp",
    industry: "Enterprise AI",
    category: "Cognitive Computing",
    partnership: "Long-term",
    location: "USA / France",
    initials: "CM",
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-600",
    tagline: "Transforming Innovation with TECUNIQUE's Expertise",
    challenge: "Following acquisition by Medtech Group, CustomerMatrix needed to elevate its development and testing capabilities for its Cognitive Computing platform. They sought a reliable partner to contribute to the design, development, testing, and maintenance of their dynamic platform.",
    solution: "TECUNIQUE assembled a diverse dedicated team comprising software development engineers, QA Automation Engineers, DevOps Engineers, and a Technical Writer. The team showcased expertise across Java, Spring, Solr, AWS, and VueJs, executing rigorous testing methodologies to ensure product excellence.",
    results: [
      { metric: "Extension", label: "Of Internal Team" },
      { metric: "High", label: "Adaptability" },
      { metric: "Global", label: "Client Base" },
      { metric: "Automated", label: "QA Pipeline" },
    ],
    testimonial: {
      quote: "The Indian team's professionalism, commitment, and adaptability played a vital role in achieving R&D objectives in the dynamic startup landscape.",
      author: "Chief Technology Officer",
      role: "CustomerMatrix",
    },
    tags: ["Cognitive Computing", "AWS", "Automation", "DevOps"],
    image: "https://tecunique.com/wp-content/uploads/2023/11/CustomerMatrix-Case-Study.jpg"
  },
  {
    id: "qotilabs",
    company: "Qotilabs",
    logo: "/images/companies/quotilabs.png",
    industry: "Dev Tools",
    category: "QA Engineering",
    partnership: "Since 2021",
    location: "France",
    initials: "QL",
    color: "#f43f5e",
    gradient: "from-rose-500 to-pink-600",
    tagline: "Elevating Quality Excellence for Atlassian Jira Frameworks",
    challenge: "Qotilabs needed a dedicated Quality Assurance (QA) engineering team who not only excelled in software testing but were also self-organized, self-driven, and capable of providing valuable input to product development for high-profile clients like Amazon and Google.",
    solution: "TECUNIQUE provided a curated team with deep knowledge of testing complex Atlassian applications. The team actively participated in product evolution, test planning, design of test scenarios, and automation for products like Rich Filters for JIRA Dashboards.",
    results: [
      { metric: "Since 2021", label: "Partnership" },
      { metric: "High-Profile", label: "End Clients" },
      { metric: "Self-Driven", label: "QA Teams" },
      { metric: "Custom", label: "Automation" },
    ],
    testimonial: {
      quote: "All the Engineers working for Qotilabs as part of a dedicated team curated by TECUNIQUE are doing a great job, and their work has a very positive impact on the quality of our product.",
      author: "Dan Mihalache",
      role: "CEO, Qotilabs",
    },
    tags: ["Atlassian", "QA Engineering", "Test Automation", "Agile"],
    image: "https://tecunique.com/wp-content/uploads/2023/11/Qotilabs-Case-Study.jpg"
  },
  {
    id: "skyselect",
    company: "SkySelect",
    logo: "/images/companies/skyselect.svg",
    industry: "Aviation / Supply Chain",
    category: "Offshore Development",
    partnership: "Long-term",
    location: "USA / India",
    initials: "SS",
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    tagline: "Strategic Partnerships with TECUNIQUE's ODC Model",
    challenge: "Revolutionizing commercial aviation procurement, SkySelect recognized the need for a strategic partner to handle the complexities of establishing and managing an Offshore Development Center (ODC) in India to support rapid scalability.",
    solution: "TECUNIQUE successfully onboarded approximately 60 team members in a year, providing turnkey infrastructure, HR, and legal compliance. By managing payroll, taxation, and employee lifecycle, we allowed SkySelect to concentrate entirely on core business activities while scaling rapidly.",
    results: [
      { metric: "60+", label: "Team Members" },
      { metric: "1 Year", label: "Rapid Onboarding" },
      { metric: "Turnkey", label: "ODC Setup" },
      { metric: "Zero", label: "Admin Hassle" },
    ],
    tags: ["Aviation", "ODC Model", "HR & Legal", "Scale"],
    image: "https://tecunique.com/wp-content/uploads/2023/11/SkySelect-Case-Study.jpg"
  },
  {
    id: "polyspot",
    company: "PolySpot",
    logo: "/images/companies/polyspot.webp",
    industry: "Information Technology",
    category: "Advanced Search Solutions",
    partnership: "10+ Years",
    location: "France",
    initials: "PS",
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-600",
    tagline: "Transforming Challenges into Excellence",
    challenge: "PolySpot aimed to build an advanced search solution for businesses to extract actionable insights. They presented the challenge of building a dedicated team proficient in Java and GWT to develop and assure the quality of this highly scalable platform.",
    solution: "Over a 10+ year partnership, TECUNIQUE built a dynamic, self-organized team of engineers, UI designers, and QA. Transitioning to Agile Scrum, the team synchronized perfectly with the Paris team, leveraging technologies like Solr, ZooKeeper, and Spring to deliver robust architectures.",
    results: [
      { metric: "10+ Years", label: "Partnership" },
      { metric: "Integrated", label: "Global R&D" },
      { metric: "Agile", label: "Scrum Delivery" },
      { metric: "Enterprise", label: "Search Solution" },
    ],
    testimonial: {
      quote: "Initially skeptical about outsourcing to India, my reservations were dispelled as I witnessed TECUNIQUE's commitment and expertise. The integrated engineering team eventually bridged gaps across continents.",
      author: "David Fischer",
      role: "CTO, PolySpot",
    },
    tags: ["Java", "GWT", "Agile Scrum", "Enterprise Search"],
    image: "https://tecunique.com/wp-content/uploads/2023/11/PolySpot-Case-Study.jpg"
  }
]

const stats = [
  { value: "20+", label: "Clients Served" },
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Years of Expertise" },
  { value: "95%", label: "Client Retention" },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50">
      
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white"
        style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
      >
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }} />
          <div className="absolute top-1/2 -right-48 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle, #93c5fd 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
          <SectionReveal className="mx-auto max-w-4xl">
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1] text-balance mb-6">
              Proven Results & <br className="hidden sm:block"/>
              <span className="gradient-text">Success Stories</span>
            </h1>
            <p className="mt-4 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              How we help top-tier vendors and enterprise clients scale their engineering capabilities and achieve measurable business impact.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              id={study.id}
              className="group relative rounded-3xl border border-border/60 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 scroll-mt-24"
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${study.gradient}`} />

              <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">

                {/* Left panel — Company + Meta */}
                <div
                  className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-between"
                  style={{ background: `linear-gradient(160deg, ${study.color}08 0%, ${study.color}04 100%)` }}
                >
                  <div>
                    {/* Company avatar + name */}
                    <div className="flex items-center gap-4 mb-6">
                      {study.logo ? (
                        <div className="relative h-14 w-14 shrink-0 rounded-xl bg-white border border-border shadow-sm p-1.5 flex items-center justify-center overflow-hidden">
                          <Image src={study.logo} alt={study.company} fill className="object-contain p-1.5" sizes="56px" />
                        </div>
                      ) : (
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-xl text-white font-display text-lg font-extrabold shrink-0 shadow-sm"
                          style={{ background: `linear-gradient(135deg, ${study.color}, ${study.color}cc)` }}
                        >
                          {study.initials}
                        </div>
                      )}
                      <div>
                        <h2 className="font-display text-2xl font-bold text-foreground">
                          {study.company}
                        </h2>
                        <p className="text-sm text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-3 py-1 text-xs font-semibold border"
                          style={{
                            color: study.color,
                            borderColor: `${study.color}30`,
                            background: `${study.color}0a`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-base font-medium text-foreground leading-relaxed italic">
                      &ldquo;{study.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Meta info */}
                  <div className="mt-8 space-y-3 border-t border-border/50 pt-6">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 shrink-0" style={{ color: study.color }} />
                      <span>Partnership: <span className="font-semibold text-foreground">{study.partnership}</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Users className="h-4 w-4 shrink-0" style={{ color: study.color }} />
                      <span>Service: <span className="font-semibold text-foreground">{study.category}</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 shrink-0" style={{ color: study.color }} />
                      <span>Location: <span className="font-semibold text-foreground">{study.location}</span></span>
                    </div>
                  </div>
                </div>

                {/* Right panel — Details */}
                <div className="lg:col-span-3 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-border/50">

                  {/* Challenge & Solution */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
                        Our Solution
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results grid */}
                  <div className="grid grid-cols-2 gap-1.5 mb-8 sm:grid-cols-4">
                    {study.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-2xl py-6 px-4 flex flex-col items-center justify-center text-center border border-border/50 min-h-[120px] transition-colors hover:border-border"
                        style={{ background: `${study.color}06` }}
                      >
                        <p
                          className="font-display text-[18px] font-extrabold leading-[1.1] mb-2"
                          style={{ color: study.color }}
                        >
                          {result.metric}
                        </p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 leading-none">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  {study.testimonial && (
                    <div
                      className="rounded-2xl p-5 border"
                      style={{
                        borderColor: `${study.color}25`,
                        background: `${study.color}05`,
                      }}
                    >
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-sm text-foreground leading-relaxed italic">
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full text-white text-xs font-bold shrink-0"
                          style={{ background: `linear-gradient(135deg, ${study.color}, ${study.color}99)` }}
                        >
                          {study.testimonial.author.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground leading-none">
                            {study.testimonial.author}
                          </p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">
                            {study.testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
