import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, Users, TrendingUp, Star, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real-world success stories from TECUNIQUE's partnerships — how we helped companies scale, deliver quality software, and achieve lasting results.",
}

const caseStudies = [
  {
    id: "appfire-1",
    company: "Appfire",
    industry: "Atlassian Ecosystem",
    category: "Software Development & QA",
    partnership: "3+ Years",
    location: "Global",
    initials: "AF",
    color: "#6366f1",
    gradient: "from-indigo-500 to-violet-600",
    tagline: "Fueling the growth of the world's leading Jira app provider",
    challenge: "Appfire needed to rapidly scale their engineering and QA capabilities to manage a massive portfolio of Atlassian apps. They required a partner who could seamlessly integrate into their culture and maintain high velocity across multiple product lines.",
    solution: "TECUNIQUE provided a dedicated team of engineers and QA specialists who became an extension of Appfire's core team. We focused on architectural design, feature development, and rigorous QA automation, helping them maintain their 'Top Rated' status on the Atlassian Marketplace.",
    results: [
      { metric: "3+ Years", label: "Partnership" },
      { metric: "Top Rated", label: "App Status" },
      { metric: "200+", label: "Apps Managed" },
      { metric: "Scalable", label: "Velocity" },
    ],
    testimonial: {
      quote: "Their expertise and dedication in architectural design, development, and QA have been very valuable to our team.",
      author: "Ajay Singh",
      role: "Appfire",
    },
    tags: ["Atlassian", "Jira Apps", "Dedicated Team", "QA Automation"],
    image: "https://tecunique.com/wp-content/uploads/2023/11/Appfire-Case-Study.jpg"
  },
  {
    id: "oppscience-1",
    company: "OPPSCIENCE",
    industry: "AI & Intelligence",
    category: "Software Engineering & Testing",
    partnership: "15+ Years",
    location: "France",
    initials: "OS",
    color: "#8b5cf6",
    gradient: "from-violet-500 to-purple-600",
    tagline: "Powering complex intelligence analysis platforms with engineering excellence",
    challenge: "OPPSCIENCE develops sophisticated intelligence analysis platforms that require extreme reliability and performance. They needed a partner capable of handling complex data structures and high-security requirements while maintaining rapid release cycles.",
    solution: "We deployed a specialized team that integrated deeply with OPPSCIENCE's CTO and product leads. Our involvement spanned from core backend engineering to end-to-end software testing, ensuring that every release met the stringent quality standards of intelligence agencies and enterprise clients.",
    results: [
      { metric: "15+ Years", label: "Collaboration" },
      { metric: "Zero", label: "Critical Bugs" },
      { metric: "High", label: "Security" },
      { metric: "AI-Ready", label: "Architecture" },
    ],
    testimonial: {
      quote: "TECUNIQUE has consistently helped us deliver top-tier software, attributed not just to their excellent software testing but also their expertise in software engineering.",
      author: "Mickael Augello",
      role: "CTO, OPPSCIENCE",
    },
    tags: ["AI Platform", "Intelligence", "Software Engineering", "QA"],
    image: "https://tecunique.com/wp-content/uploads/2023/11/Oppscience-Case-Study.jpg"
  },
  {
    id: "customermatrix",
    company: "CustomerMatrix",
    industry: "Enterprise AI",
    category: "Cognitive Computing",
    partnership: "2+ Years",
    location: "USA / Global",
    initials: "CM",
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-600",
    tagline: "Accelerating the delivery of cognitive computing solutions for global enterprises",
    challenge: "CustomerMatrix needed to accelerate the development of their cognitive computing platform which helps sales teams prioritize opportunities. They required high-level engineering skills and a proactive approach to quality assurance.",
    solution: "TECUNIQUE provided a dedicated engineering hub that worked across the platform's lifecycle. We implemented automated testing frameworks and contributed to core product features, allowing CustomerMatrix to scale their client base without compromising on platform stability.",
    results: [
      { metric: "2+ Years", label: "Partnership" },
      { metric: "Faster", label: "Time to Market" },
      { metric: "Robust", label: "QA Pipeline" },
      { metric: "Global", label: "Deployment" },
    ],
    testimonial: {
      quote: "The involvement displayed by the TECUNIQUE team has solidified our perception of them as a true partner, not just a service provider.",
      author: "Christophe Favart",
      role: "CEO, CustomerMatrix",
    },
    tags: ["Cognitive Computing", "Sales Tech", "Automation", "Engineering"],
    image: "https://tecunique.com/wp-content/uploads/2023/11/CustomerMatrix-Case-Study.jpg"
  },
  {
    id: "qotilabs",
    company: "Qotilabs",
    industry: "Dev Tools",
    category: "Plugin Development",
    partnership: "3+ Years",
    location: "Europe",
    initials: "QL",
    color: "#f43f5e",
    gradient: "from-rose-500 to-pink-600",
    tagline: "Enhancing developer productivity through high-quality Atlassian plugins",
    challenge: "Qotilabs focuses on niche, high-performance developer tools. They needed a partner who understood the intricacies of the Atlassian SDK and could provide high-coverage QA for complex plugin interactions.",
    solution: "We established a specialized QA and development unit for Qotilabs. Our team performed deep integration testing and helped optimize plugin performance, ensuring seamless experiences for developers using their tools globally.",
    results: [
      { metric: "3+ Years", label: "Continuous Work" },
      { metric: "100%", label: "User Trust" },
      { metric: "Smooth", label: "Integrations" },
      { metric: "Reliable", label: "Releases" },
    ],
    testimonial: {
      quote: "I am genuinely grateful for the dedication and involvement displayed by the TECUNIQUE team in enhancing our platform.",
      author: "Dan Mihalache",
      role: "Founder, Qotilabs",
    },
    tags: ["DevOps", "Atlassian SDK", "Plugin Testing", "Agile"],
    image: "https://tecunique.com/wp-content/uploads/2023/11/Qotilabs-Case-Study.jpg"
  },
  {
    id: "skyselect",
    company: "SkySelect",
    industry: "Aviation / Supply Chain",
    category: "Marketplace Platform",
    partnership: "2+ Years",
    location: "USA",
    initials: "SS",
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    tagline: "Digitizing aviation supply chains with a robust procurement marketplace",
    challenge: "SkySelect is revolutionizing aircraft parts procurement. They needed a scalable platform capable of handling millions of dollars in transactions with perfect accuracy and high availability.",
    solution: "TECUNIQUE's engineers and QA experts helped build and test the core marketplace engine. We focused on data integrity, transaction reliability, and user experience, enabling SkySelect to become a dominant player in aviation procurement.",
    results: [
      { metric: "2+ Years", label: "Partnership" },
      { metric: "Millions", label: "GMV Handled" },
      { metric: "99.9%", label: "Availability" },
      { metric: "Critical", label: "Systems" },
    ],
    tags: ["Aviation", "Marketplace", "Fintech", "Enterprise QA"],
    image: "https://tecunique.com/wp-content/uploads/2023/11/SkySelect-Case-Study.jpg"
  },
]

const stats = [
  { value: "20+", label: "Clients Served" },
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Years of Expertise" },
  { value: "95%", label: "Client Retention" },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(170deg, #ffffff 0%, #f4f3ff 18%, #ede9fe 45%, #f0f9ff 75%, #faf5ff 100%)" }}
      >
        {/* Blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/2 -right-32 h-80 w-80 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #67e8f9 0%, transparent 70%)" }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-pill mb-6 inline-flex">
              <Sparkles className="h-3 w-3" />
              Client Success Stories
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight text-balance">
              Real Results,{" "}
              <span className="gradient-text">Real Impact</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Explore how TECUNIQUE has partnered with industry leaders around the world to build scalable software, ship faster, and maintain uncompromising quality.
            </p>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <p className="font-display text-3xl font-extrabold" style={{ color: "#6366f1" }}>
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="group relative rounded-3xl border border-border/60 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl text-white font-display text-lg font-extrabold shrink-0"
                        style={{ background: `linear-gradient(135deg, ${study.color}, ${study.color}cc)` }}
                      >
                        {study.initials}
                      </div>
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

      {/* CTA */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg, #f8f7ff 0%, #ede9fe 40%, #f0f9ff 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Ready to Write Your{" "}
              <span className="gradient-text">Success Story?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {"Let's talk about how TECUNIQUE can help you build, scale, and deliver with confidence."}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  boxShadow: "0 8px 30px rgba(99,102,241,0.35)",
                }}
              >
                Start a Conversation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-white/80 px-8 py-4 text-base font-semibold text-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-white hover:shadow-md"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
