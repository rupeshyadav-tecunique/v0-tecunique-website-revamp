export interface HomePageContent {
  heroBadge: string
  heroTitle: string
  heroHighlight: string
  rotatingWords: string[]
  heroSubtitle: string
  stats: Array<{ number: string; label: string }>
  whyUsBadge?: string
  whyUsTitle?: string
  whyUsHighlight?: string
  whyUsDescription?: string
  ctaTitle?: string
  ctaHighlight?: string
  ctaDescription?: string
  dedicatedStrengthBadge?: string
  dedicatedStrengthTitle?: string
}

export interface AboutPageContent {
  badge: string
  title: string
  titleHighlight: string
  tagline: string
  description: string
  storyTitle: string
  storyImage: string
  storyBadgeTitle: string
  storyBadgeSubtitle: string
  storyParagraphs: string[]
  storyParagraph_0?: string
  storyParagraph_1?: string
  storyParagraph_2?: string
  founderTitle?: string
  founderPara1?: string
  founderPara2?: string
  founderName?: string
  founderRole?: string
  founderQuote?: string
  ctaTitle?: string
  ctaDescription?: string
}

export interface ServicePageContent {
  badge: string
  title: string
  titleHighlight: string
  subtitle: string
  ctaEyebrow?: string
  ctaTitle: string
  ctaDescription: string
  primaryButtonText: string
  heroImage?: string
}

export interface ServicesHubContent {
  badge: string
  title: string
  titleHighlight: string
  subtitle: string
  ctaTitle: string
  ctaDescription: string
}

export type AnyPageContent = 
  | HomePageContent 
  | AboutPageContent 
  | ServicesHubContent 
  | ServicePageContent

export const defaultPagesContent: Record<string, any> = {
  home: {
    heroBadge: "Software Engineering & Global Teams",
    heroTitle: "Trusted Software Engineering",
    heroHighlight: "Dedicated Teams",
    rotatingWords: [
      "Dedicated Teams",
      "Product Engineering",
      "QA Automation",
      "Cloud Solutions",
      "Atlassian Apps",
    ],
    heroSubtitle:
      "Scale with confidence. TECUNIQUE helps software companies build dedicated development, QA, automation, and support teams in India — with proven experience across product engineering, cloud solutions, and Atlassian apps.",
    stats: [
      { number: "15+", label: "Years in Software Services" },
      { number: "50+", label: "Engineers & QA Pros" },
      { number: "98%", label: "Client Team Retention" },
    ],
    whyUsBadge: "Why Choose Us",
    whyUsTitle: "Trusted Software Services Since",
    whyUsHighlight: "2010",
    whyUsDescription:
      "Since 2010, TECUNIQUE has helped software companies build and extend engineering capacity in India across software development, QA, automation, and product support. We focus on practical execution, transparent collaboration, and long-term team continuity.",
    ctaTitle: "Ready to Strengthen Your",
    ctaHighlight: "Engineering",
    ctaDescription:
      "Looking to build a dedicated team or strengthen your product engineering capacity? Let's discuss how TECUNIQUE can support your development, QA, automation, or Atlassian app needs.",
    dedicatedStrengthBadge: "Our Strength",
    dedicatedStrengthTitle: "Built for Long-Term Dedicated Software Teams",
  },

  about: {
    badge: "Dedicated Engineering Partner",
    title: "About",
    titleHighlight: "TECUNIQUE",
    tagline: "Software engineering teams built for long-term product work.",
    description:
      "TECUNIQUE is a software engineering partner based in India, helping international software companies build dedicated development, QA, automation, support, and Atlassian app teams. Since 2010, we have focused on stable teams, practical execution, transparent collaboration, and long-term continuity.",
    storyTitle: "Our Story",
    storyImage: "/images/about/about-4.webp",
    storyBadgeTitle: "Built for Long-Term Product Work",
    storyBadgeSubtitle: "Stable engineering teams. Practical collaboration.",
    storyParagraphs: [
      "TECUNIQUE started in 2010 with a simple belief: software companies need reliable engineering teams, not just temporary resources.",
      "Over the years, we have built dedicated development, QA, automation, and product support teams for international clients. Our work has grown through long-term relationships, referrals, and consistent delivery.",
      "Today, TECUNIQUE works with software product companies, Atlassian app vendors, data platforms, and technology businesses that need skilled teams who can integrate with their workflows and stay committed for the long term.",
    ],
    storyParagraph_0:
      "TECUNIQUE started in 2010 with a simple belief: software companies need reliable engineering teams, not just temporary resources.",
    storyParagraph_1:
      "Over the years, we have built dedicated development, QA, automation, and product support teams for international clients. Our work has grown through long-term relationships, referrals, and consistent delivery.",
    storyParagraph_2:
      "Today, TECUNIQUE works with software product companies, Atlassian app vendors, data platforms, and technology businesses that need skilled teams who can integrate with their workflows and stay committed for the long term.",
    founderTitle: "Founder-Led, Relationship-Driven",
    founderPara1:
      "TECUNIQUE has been built with a long-term view: create stable engineering teams, keep communication transparent, and focus on meaningful client relationships.",
    founderPara2:
      "Our goal is to be a dependable engineering partner for software companies that value continuity, practical execution, and people who stay with the product long enough to understand it deeply.",
    founderName: "Jaydeep Chhasatia",
    founderRole: "Founder / CEO, TECUNIQUE",
    founderQuote:
      "For me, a good client relationship means clear accountability, straightforward communication, and being accessible when an important decision or issue needs attention.",
    ctaTitle: "Looking for a long-term engineering partner?",
    ctaDescription:
      "Whether you need a dedicated team, QA & automation, Atlassian app engineering, or additional product engineering capacity, TECUNIQUE can help you build a stable team in India.",
  },

  services: {
    badge: "Software Services",
    title: "Build, Scale, and Support",
    titleHighlight: "Your Software Products",
    subtitle:
      "Extend your engineering capacity with dedicated teams in India across product engineering, QA & automation, software support, and Atlassian app development.",
    ctaTitle: "Find the Right Engineering Support for Your Product",
    ctaDescription:
      "Whether you need a dedicated team, product engineering capacity, QA & automation, or Atlassian app expertise, we can help structure an engagement around your product and team requirements.",
  },

  "services-dedicated-teams": {
    badge: "Dedicated Teams",
    title: "Build a Dedicated Software Team That",
    titleHighlight: "Works Like Your Own",
    subtitle:
      "Scale your engineering, QA, automation, and support capacity with a dedicated, full-time team in India. You select the talent and guide the work; TECUNIQUE manages the operational responsibilities in India.",
    ctaTitle: "Ready to Build Your Dedicated Software Team?",
    ctaDescription:
      "Tell us the roles, skills, and team structure you need. We can help identify suitable professionals and manage the employment and operational setup in India.",
    primaryButtonText: "Discuss Your Team Requirements",
    heroImage: "",
  },

  "services-qa": {
    badge: "QA & AUTOMATION",
    title: "Strengthen Product Quality with",
    titleHighlight: "QA & Automation Teams",
    subtitle:
      "Support product quality with experienced manual QA and automation engineers covering functional testing, regression, API testing, test automation, and release validation.",
    ctaEyebrow: "NEED QA OR AUTOMATION CAPACITY?",
    ctaTitle: "Strengthen Your Product Quality with the Right QA Team",
    ctaDescription:
      "Whether you need manual testing, regression coverage, automation QA, API testing, release validation, or long-term QA support, we can help structure the right engagement for your product.",
    primaryButtonText: "Discuss Your QA Requirements",
    heroImage: "",
  },

  "services-atlassian": {
    badge: "Atlassian App Engineering",
    title: "End-to-End Jira & Confluence",
    titleHighlight: "App Engineering & QA",
    subtitle:
      "Dedicated teams building, testing, and modernizing Cloud (Forge & Connect) and Data Center apps for Atlassian Marketplace vendors and enterprise customers.",
    ctaEyebrow: "NEED ATLASSIAN APP ENGINEERING SUPPORT?",
    ctaTitle: "Build, Test, and Evolve Your Jira App with the Right Team",
    ctaDescription:
      "Whether you need Forge development, QA automation, Connect modernization, integrations, release support, or a long-term Jira app engineering team, TECUNIQUE can support your product.",
    primaryButtonText: "Discuss Your Atlassian App Needs",
    heroImage: "",
  },

  "services-product-engineering": {
    badge: "Product Engineering",
    title: "Scale Your Roadmap with",
    titleHighlight: "Full-Lifecycle Engineering",
    subtitle:
      "From architecture to deployment, full-lifecycle product development teams tailored to your roadmap, modernizing legacy systems, and shipping features faster.",
    ctaTitle: "Need Product Engineering Support?",
    ctaDescription:
      "Whether you're developing new functionality, improving an existing platform, or adding long-term engineering capacity, TECUNIQUE can support development, integrations, QA, and ongoing maintenance.",
    primaryButtonText: "Discuss Your Product Requirements",
    heroImage: "",
  },
}

export const editablePagesList = [
  {
    slug: "home",
    name: "Homepage",
    href: "/",
    description: "Hero headline, rotating expertise words, subheadline, and trust metrics.",
    category: "Main Pages",
  },
  {
    slug: "about",
    name: "About Us",
    href: "/about",
    description: "Company tagline, overview narrative, story paragraphs, and about image.",
    category: "Main Pages",
  },
  {
    slug: "services",
    name: "Services Hub",
    href: "/services",
    description: "Overview title, subtitle, and bottom call to action banner.",
    category: "Main Pages",
  },
  {
    slug: "services-dedicated-teams",
    name: "Dedicated Software Teams",
    href: "/services/dedicated-teams",
    description: "Hero headline, team scale proposition, and call to action.",
    category: "Services",
  },
  {
    slug: "services-qa",
    name: "QA & Automation Testing",
    href: "/services/qa",
    description: "Quality assurance hero copy, testing highlights, and consultation CTA.",
    category: "Services",
  },
  {
    slug: "services-atlassian",
    name: "Atlassian App Engineering",
    href: "/services/atlassian",
    description: "Jira & Forge engineering hero copy, marketplace support, and CTA.",
    category: "Services",
  },
  {
    slug: "services-product-engineering",
    name: "Product Engineering",
    href: "/services/product-engineering",
    description: "Full lifecycle engineering copy, architecture & modernization text.",
    category: "Services",
  },
]
