import { Code2 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import Image from "next/image"

const techCategories = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
      { name: "Vue", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" }
    ]
  },
  {
    category: "Databases",
    technologies: [
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
      { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" }
    ]
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
      { name: "CI/CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" }
    ]
  },
  {
    category: "QA & Automation",
    technologies: [
      { name: "Playwright", logo: "/images/tech/playwright.webp" },
      { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
      { name: "JUnit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" },
      { name: "API Testing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" }
    ]
  },
  {
    category: "Atlassian",
    technologies: [
      { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
      { name: "Forge", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" },
      { name: "Connect", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg" },
      { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" }
    ]
  }
]

export function TechStack() {
  return (
    <section className="py-24 bg-white relative border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--neutral-slate-100)] border border-[var(--neutral-slate-200)] mb-6">
              <Code2 className="h-4 w-4 text-[var(--neutral-slate-700)]" />
              <span className="text-sm font-semibold text-foreground">Technology Stack</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-display mb-6">
              Technology Stack We Work With
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our teams work across a practical mix of frontend, backend, database, cloud, QA automation, and Atlassian technologies depending on the product and engagement.
            </p>
          </SectionReveal>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {techCategories.map((group, index) => (
            <SectionReveal key={group.category} delay={index * 50}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pb-10 border-b border-border/50 last:border-0 last:pb-0">
                <h3 className="text-xl font-bold font-display text-foreground shrink-0 md:w-48">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.technologies.map((tech) => (
                    <span 
                      key={tech.name} 
                      className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-border/60 rounded-xl text-sm font-medium text-foreground shadow-sm hover:border-[var(--brand-blue)]/30 hover:bg-[var(--brand-blue)]/5 hover:text-[var(--brand-blue)] hover:-translate-y-0.5 transition-all cursor-default group"
                    >
                      <img src={tech.logo} alt={tech.name} className="w-5 h-5 object-contain group-hover:scale-110 transition-transform" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
