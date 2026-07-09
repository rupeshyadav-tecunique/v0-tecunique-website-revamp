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
    category: "Atlassian Ecosystem",
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
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <SectionReveal>
            <span className="section-pill mb-6 mx-auto inline-flex">
              <Code2 className="h-4 w-4" />
              Technology Stack
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-display mb-6">
              Technology Stack We Work With
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              We leverage modern and reliable technologies to build scalable, secure, and high-performing products.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((group, index) => (
            <SectionReveal key={group.category} delay={index * 100}>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm h-full flex flex-col">
                <h3 className="text-lg font-bold font-display text-slate-900 mb-6 pb-4 border-b border-slate-200">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.technologies.map((tech) => (
                    <span 
                      key={tech.name} 
                      className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
                    >
                      <img src={tech.logo} alt={tech.name} className="w-4 h-4 object-contain" />
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
