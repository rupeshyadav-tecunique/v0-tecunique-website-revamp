export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string // e.g., Full-time, Remote, Hybrid
  experience: string
  description: string
  requirements: string[]
  postedDate: string
  slug: string
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Vadodara, India",
    type: "Full-time",
    experience: "5+ Years",
    description: "We are looking for a highly skilled Senior Full Stack Developer to join our core engineering team. You will be responsible for building scalable web applications and leading junior developers.",
    requirements: [
      "Expertise in React, Next.js, and Node.js",
      "Strong understanding of TypeScript and state management",
      "Experience with PostgreSQL and Prisma",
      "Ability to architect complex software systems",
      "Excellent communication and leadership skills"
    ],
    postedDate: "2024-04-20",
    slug: "senior-full-stack-developer"
  },
  {
    id: "2",
    title: "Quality Assurance Engineer",
    department: "QA",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "3+ Years",
    description: "Join our QA team to ensure the highest quality standards for our clients. You will be designing and executing automated test suites for large-scale enterprise applications.",
    requirements: [
      "Strong experience in manual and automated testing",
      "Proficiency in Selenium, Cypress, or Playwright",
      "Experience with API testing (Postman, REST-assured)",
      "Understanding of CI/CD pipelines",
      "Analytical mindset and attention to detail"
    ],
    postedDate: "2024-04-25",
    slug: "qa-engineer"
  },
  {
    id: "3",
    title: "Atlassian Consultant",
    department: "Consulting",
    location: "Vadodara, India",
    type: "Full-time",
    experience: "4+ Years",
    description: "We are seeking an Atlassian expert to help our clients optimize their Jira and Confluence environments and build custom Jira apps.",
    requirements: [
      "Deep knowledge of Jira, Confluence, and Bitbucket",
      "Experience in developing custom Jira apps (Forge/Connect)",
      "Strong JavaScript/TypeScript skills",
      "Excellent client-facing communication",
      "Experience in agile transformations"
    ],
    postedDate: "2024-05-01",
    slug: "atlassian-consultant"
  },
  {
    id: "4",
    title: "Lead Architect with Extensive Experience in Modern Web Technologies and Cloud Native Distributed Systems for Global Enterprise Scale Applications",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "12+ Years",
    description: "Testing long title truncation and UI stability with extreme cases.",
    requirements: ["Test Requirement 1"],
    postedDate: "2024-05-02",
    slug: "lead-architect-with-extensive-experience-in-modern-web-technologies-and-cloud-native-distributed-systems-for-global-enterprise-scale-applications"
  }
]

export function getJob(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug)
}
