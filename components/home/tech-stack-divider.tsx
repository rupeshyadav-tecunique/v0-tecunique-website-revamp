"use client"

import { useState, useEffect } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import {
  Brain, Database, Cpu, LayoutGrid, Layers, Webhook, Cog, Terminal, TestTube2, Cloud, Blocks, Plug
} from "lucide-react"

type TechItem = {
  name: string
  logo?: string
  icon?: React.ElementType
}

type TechCategory = {
  id: string
  label: string
  techs: TechItem[]
}

const techCategories: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    techs: [
      { name: "React JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
      { name: "Vue JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
      { name: "Next JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Gatsby JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gatsby/gatsby-original.svg" },
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
      { name: "Three JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
    ]
  },
  {
    id: "backend",
    label: "Backend",
    techs: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Spring", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" },
      { name: "Groovy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/groovy/groovy-original.svg" },
      { name: "Gradle", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg" },
    ]
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    techs: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
      { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg" },
      { name: "Elasticsearch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg" },
      { name: "ZooKeeper", logo: "/images/tech/zookeeper.png" },
    ]
  },
  {
    id: "data-ai",
    label: "Data & AI",
    techs: [
      { name: "OpenAI", logo: "/images/tech/openai.svg" },
      { name: "Anthropic Sonnet", logo: "/images/tech/anthropic.svg" },
      { name: "Pinecone", logo: "/images/tech/pinecone.png" },
      { name: "Amazon Bedrock", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    ]
  },
  {
    id: "qa",
    label: "QA Automation",
    techs: [
      { name: "Playwright", logo: "/images/tech/playwright.webp" },
      { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
      { name: "Pytest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg" },
      { name: "JUnit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg" },
    ]
  },
  {
    id: "atlassian",
    label: "Atlassian",
    techs: [
      { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
      { name: "Confluence", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg" },
      { name: "Forge", icon: Blocks },
      { name: "Connect", icon: Plug },
      { name: "Rovo", icon: Brain },
    ]
  }
]

export function TechStackDivider() {
  const sectionRef = useScrollReveal()
  const [activeTab, setActiveTab] = useState(techCategories[0].id)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = techCategories.findIndex((c) => c.id === currentTab)
        const nextIndex = (currentIndex + 1) % techCategories.length
        return techCategories[nextIndex].id
      })
    }, 5000)

    return () => clearInterval(timer)
  }, [isHovered])

  const activeCategory = techCategories.find(c => c.id === activeTab)

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-16 bg-slate-50/50 border-y border-border/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="reveal">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mb-3">Powered by Modern Technology</h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">We leverage best-in-class tools and frameworks to build scalable, secure, and high-performance software solutions.</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === category.id
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Active Category Techs */}
          <div className="flex flex-wrap justify-center content-start gap-4 sm:gap-8 min-h-[240px] sm:min-h-[280px] pt-4 mx-auto max-w-[800px]">
            {activeCategory?.techs.map((tech) => (
              <div
                key={`${activeTab}-${tech.name}`}
                className="flex flex-col items-center gap-3 animate-in fade-in zoom-in slide-in-from-bottom-4 duration-500 w-[80px] sm:w-[100px]"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  {tech.logo ? (
                    <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300" />
                  ) : tech.icon ? (
                    <tech.icon className="w-8 h-8 text-slate-400 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
                  ) : null}
                </div>
                <span className="text-xs font-bold text-slate-700 text-center leading-tight">{tech.name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
