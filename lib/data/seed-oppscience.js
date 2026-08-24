require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const oppscienceData = {
  id: 'oppscience',
  company: 'OPPSCIENCE',
  product: 'Bee4sense & SPECTRA Intelligence Platforms',
  logo: '/images/companies/oppscience.svg',
  industry: 'Intelligence & Investigation Software',
  category: 'Dedicated Engineering & QA Team',
  partnership: 'Since February 2018 (Active)',
  location: 'France',
  initials: 'OS',
  color: '#0284c7',
  gradient: 'from-sky-600 to-blue-700',
  eyebrow: 'OPPSCIENCE / BEE4SENSE / SPECTRA',
  heroTitle: 'From Bee4sense to SPECTRA: Scaling a Long-Term Product Engineering & QA Team',
  tagline: 'From Bee4sense to SPECTRA: Scaling a Long-Term Product Engineering & QA Team',
  heroSubtitle: 'How TECUNIQUE has worked alongside OPPSCIENCE since 2018, supporting product evolution through dedicated software engineering, QA, automation, release management, and deeply integrated engineering teams.',
  seoTitle: 'OPPSCIENCE Product Engineering & QA Case Study',
  metaDescription: 'See how TECUNIQUE has partnered with OPPSCIENCE since 2018, providing a 12-member dedicated engineering and QA team across Bee4sense, SPECTRA, QA automation, and release management.',
  atAGlance: {
    client: 'OPPSCIENCE',
    relationship: 'Since February 2018',
    engagement: 'Dedicated Software Engineering & QA Team',
    teamSize: '12 dedicated development & QA professionals',
    productJourney: 'Bee4sense → SPECTRA',
    coreAreas: 'Product Engineering · QA & Automation · Release Management · Product Support',
    location: 'France',
    milestone: 'IDEMIA acquires 51% majority share — 2022'
  },
  description: 'OPPSCIENCE needed a long-term dedicated software engineering and QA team capable of deeply integrating into their engineering organization, evolving alongside their architecture from Bee4sense to SPECTRA, and driving release quality.',
  solution: 'TECUNIQUE provides a 12-member dedicated team spanning software engineering, full-lifecycle QA, multi-generation test automation, release management, and cross-company squad leadership.',
  sections: [
    {
      title: 'The Product Journey',
      subtitle: 'Turning Complex Data into Usable Knowledge',
      content: 'OPPSCIENCE develops software for transforming large volumes of structured and unstructured information into knowledge that users can search, analyse, and act upon.\n\nWhen OPPSCIENCE was created in 2018, Bee4sense was its core technology platform, bringing together search, Natural Language Processing, graph technologies, and knowledge-management capabilities. Over time, the platform evolved through multiple releases and customer environments.\n\nAs OPPSCIENCE’s product direction became increasingly focused on investigation and intelligence workflows, engineering progressively shifted toward SPECTRA—a platform designed to help investigators and analysts work with complex information through advanced search, NLP, knowledge enrichment, relationship discovery, visualisation, and case collaboration.'
    },
    {
      title: 'A Relationship Built on Previous Experience',
      content: 'TECUNIQUE’s relationship with the people behind OPPSCIENCE predates OPPSCIENCE itself. Gilles André and Guillaume Brejaud already knew TECUNIQUE through earlier experience with PolySpot and CustomerMatrix.\n\nWhen OPPSCIENCE needed to expand its engineering capacity in 2018, Gilles approached TECUNIQUE for a dedicated team of software development and QA engineers.\n\nThe OPPSCIENCE–TECUNIQUE engagement began in February 2018 around Bee4sense and has continued as the company’s products, architecture, engineering organization, and technology stack evolved.'
    },
    {
      title: 'From Bee4sense to SPECTRA: Supporting Product & Engineering Evolution',
      content: 'When the engagement began, TECUNIQUE engineers worked primarily around Bee4sense, contributing across successive product versions and releases as the platform evolved.\n\nAs OPPSCIENCE increasingly focused on specialised investigation and intelligence workflows, engineering progressively shifted toward SPECTRA. TECUNIQUE engineers evolved with that transition, adapting to changes in architecture, technologies, workflows, and domain requirements.\n\nThis required more than implementing predefined tasks. Engineers needed to develop deeper product and domain understanding, adapt to changing technical decisions, and contribute to solutions alongside OPPSCIENCE’s own engineering teams.\n\nExisting Bee4sense environments continue to require maintenance and product support. TECUNIQUE engineers support deployment consultants through technical investigation, defect resolution, and minor releases where required.'
    },
    {
      title: 'Long-Term Team Continuity',
      content: 'Several core TECUNIQUE engineers, including key QA members and engineering leadership, have remained involved for many years, preserving knowledge across Bee4sense, SPECTRA, architecture changes, release history, and evolving QA practices.'
    }
  ],
  engagementBlocks: [
    {
      title: 'Software Engineering',
      description: 'TECUNIQUE developers contribute to ongoing product development, enhancements, technical evolution, maintenance, and issue resolution across OPPSCIENCE’s platforms.',
      scope: 'Product Development'
    },
    {
      title: 'Quality Assurance',
      description: 'Dedicated QA engineers support manual testing, automation, API testing, performance testing, release validation, and broader product-quality responsibilities.',
      scope: 'Full Lifecycle QA'
    },
    {
      title: 'Product Support & Triage',
      description: 'The team provides technical investigation and engineering support around issues raised through deployment and customization activities.',
      scope: 'Engineering Support'
    },
    {
      title: 'Long-Term Product Knowledge',
      description: 'Years of continuity have created deep understanding of the product architecture, workflows, technical history, customer contexts, and domain.',
      scope: 'Continuous Context'
    }
  ],
  embeddedLeadership: {
    title: 'Embedded Engineering Leadership',
    description: 'One of TECUNIQUE’s long-standing engineers works as a Squad/Team Lead within OPPSCIENCE, leading a cross-company engineering team that includes both TECUNIQUE engineers and OPPSCIENCE developers.',
    tagline: 'An integrated product engineering organization—not separate client and offshore teams working in isolation.'
  },
  techStack: [
    {
      category: 'Backend & Platform',
      subtitle: 'Microservices, APIs & messaging',
      items: ['Java', 'Python', 'Spring Boot', 'Quarkus', 'Kafka', 'Artemis', 'Keycloak']
    },
    {
      category: 'Search & Data',
      subtitle: 'Indexing, NLP & graph engines',
      items: ['Elasticsearch', 'Solr', 'Graph & Indexing Technologies']
    },
    {
      category: 'Frontend',
      subtitle: 'UI frameworks across product versions',
      items: ['GWT', 'Angular', 'Vue.js']
    },
    {
      category: 'Cloud & Infrastructure',
      subtitle: 'Containerization & cloud operations',
      items: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Prometheus']
    },
    {
      category: 'Engineering Delivery',
      subtitle: 'Build, CI/CD & version control',
      items: ['Bitbucket', 'Bamboo', 'Jenkins', 'CI/CD Pipelines']
    }
  ],
  techStackNote: 'The exact stack has evolved over time. TECUNIQUE engineers have continuously adapted as OPPSCIENCE’s architecture and engineering practices changed.',
  qaLifecycleGrid: [
    { name: 'Sanity Testing', desc: 'Quick validation around new builds and code changes.' },
    { name: 'Functional Testing', desc: 'Detailed validation of complex product behaviour.' },
    { name: 'Regression Testing', desc: 'Protecting existing platform functionality as the product evolves.' },
    { name: 'Integration & E2E', desc: 'Validating interconnected workflows across services and modules.' },
    { name: 'API Testing', desc: 'Validating backend microservices and REST endpoints independently.' },
    { name: 'Automation Testing', desc: 'Repeatable automated test suites across workflows and APIs.' },
    { name: 'Performance Testing', desc: 'Performance and load testing using JMeter, with Grafana supporting results and log analysis.' },
    { name: 'Release Validation', desc: 'Coordinating multi-version QA activities and release readiness.' }
  ],
  automationEvolution: [
    { phase: '01', title: 'Earlier Automation', tools: 'Java · Selenium · Cucumber', desc: 'Foundational UI test automation for web workflows' },
    { phase: '02', title: 'Angular UI Testing', tools: 'Jasmine', desc: 'Automated testing around Angular-based UI behaviour.' },
    { phase: '03', title: 'API Automation', tools: 'REST Assured + Java', desc: 'Automated validation of core backend services' },
    { phase: '04', title: 'Python + Selenium', tools: 'Python · Selenium', desc: 'Evolution of browser-based regression automation.' },
    { phase: '05', title: 'Current Direction', tools: 'Playwright + TypeScript', desc: 'Current direction for end-to-end and API automation.' },
    { phase: '06', title: 'AI-Assisted QA Engineering', tools: 'Codex · Claude Code', desc: 'Assisting engineers with test-case generation and automation development.' }
  ],
  operationalCards: [
    {
      title: 'Owning Release Quality',
      subtitle: 'QA Responsibility Beyond Test Execution',
      desc: 'OPPSCIENCE frequently manages multiple versions and releases moving through the delivery pipeline in parallel. Over time, the TECUNIQUE QA team has taken substantial responsibility for coordinating the validation required around these release cycles, including release planning from a QA perspective, regression coverage, validation across versions, fix verification, defect assessment, and supporting release-readiness decisions.'
    },
    {
      title: 'Product Support & Issue Triage',
      subtitle: 'Supporting Teams Closest to Customer Deployments',
      desc: 'TECUNIQUE does not directly manage customer deployments. OPPSCIENCE’s deployment and support consultants work with customer environments, while the TECUNIQUE team provides product-level technical support behind them—reproducing issues, reviewing logs, determining whether behaviour represents a product defect, providing context to developers, and validating fixes, including defect resolution for existing Bee4sense environments.'
    },
    {
      title: 'Performance & Observability',
      subtitle: 'Load Testing & Result Visualization',
      desc: 'The team has used JMeter extensively for performance and load-related testing. Grafana is now also used for visualising and analysing test results, logs, and operational information.'
    },
    {
      title: 'AI & NLP Quality Validation',
      subtitle: 'Testing Product Capabilities Where Output Is Non-Binary',
      desc: 'TECUNIQUE QA engineers also validate outputs from NLP-related capabilities, including relation extraction and image-description workflows, with testing processes involving tools such as Doccano and MLflow. This type of testing requires engineers to evaluate whether extracted or generated information behaves as expected within the product context, rather than relying only on conventional UI or API assertions.'
    }
  ],
  milestones: [
    {
      title: '2018 — Engagement Begins',
      description: 'Dedicated development and QA support starts around Bee4sense.'
    },
    {
      title: 'Bee4sense Evolves',
      description: 'TECUNIQUE engineers support successive versions and releases.'
    },
    {
      title: 'Product Direction Evolves',
      description: 'Focus shifts to specialised investigation and intelligence workflows.'
    },
    {
      title: 'SPECTRA Emerges',
      description: 'Engineering capacity and architecture evolve around the newer product direction.'
    },
    {
      title: '2022 — IDEMIA Majority Share',
      description: 'IDEMIA acquires a 51% majority share in OPPSCIENCE.'
    },
    {
      title: 'Dedicated Team Grows',
      description: 'Engagement develops into a 12-member development and QA team.'
    },
    {
      title: 'Embedded Leadership',
      description: 'A TECUNIQUE engineer leads a mixed OPPSCIENCE/TECUNIQUE squad.'
    },
    {
      title: 'Today',
      description: 'Active engineering on SPECTRA + continued Bee4sense maintenance support.'
    }
  ],
  testimonials: [
    {
      quote: 'TECUNIQUE has been a reliable partner for many years, supporting our evolution from PolySpot to OppScience via CustomerMatrix. Quite unique in this sector, we have actually the same contacts for over 10 years!\n\nI am genuinely grateful for the dedication and involvement displayed by the TECUNIQUE team. Their consistent efforts to enhance our platform and deliver an exceptional experience to our customers have solidified our perception of TECUNIQUE not just as a service provider but as a true partner.',
      author: 'Guillaume Brejaud',
      role: 'OPPSCIENCE',
      highlighted: true
    },
    {
      quote: 'TecUnique has been a key partner for OPPSCIENCE over the years.\n\nAs a CTO, I\'ve collaborated with TecUnique on various projects for an extended duration.\n\nThey have consistently helped us delivering top-tier software, attributed not just to their excellent software testing but also their expertise in software engineering.',
      author: 'Mickael Augello',
      role: 'CTO, OPPSCIENCE'
    }
  ],
  testimonial: {
    quote: 'TECUNIQUE has been a reliable partner for many years, supporting our evolution from PolySpot to OppScience via CustomerMatrix. Quite unique in this sector, we have actually the same contacts for over 10 years!\n\nI am genuinely grateful for the dedication and involvement displayed by the TECUNIQUE team. Their consistent efforts to enhance our platform and deliver an exceptional experience to our customers have solidified our perception of TECUNIQUE not just as a service provider but as a true partner.',
    author: 'Guillaume Brejaud',
    role: 'OPPSCIENCE'
  },
  secondaryTestimonial: {
    quote: 'TecUnique has been a key partner for OPPSCIENCE over the years.\n\nAs a CTO, I\'ve collaborated with TecUnique on various projects for an extended duration.\n\nThey have consistently helped us delivering top-tier software, attributed not just to their excellent software testing but also their expertise in software engineering.',
    author: 'Mickael Augello',
    role: 'CTO, OPPSCIENCE'
  },
  relatedServices: [
    { title: 'Dedicated Software Teams', href: '/services/dedicated-teams' },
    { title: 'Product Engineering & Custom Software', href: '/services/product-engineering' },
    { title: 'Software QA & Automation Testing', href: '/services/qa' }
  ],
  cta: {
    eyebrow: 'NEED LONG-TERM ENGINEERING CAPACITY?',
    title: 'Build a Dedicated Engineering & QA Team Around Your Product',
    description: 'Whether you need developers, QA engineers, automation specialists, or a long-term team that can grow with your product, TECUNIQUE can help build and support the right engineering capacity in India.',
    buttonText: 'Discuss Your Team Requirements',
    buttonHref: '/contact',
    secondaryText: 'Explore Dedicated Teams',
    secondaryHref: '/services/dedicated-teams'
  },
  image: '/images/companies/oppscience.svg',
  client: 'OPPSCIENCE'
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const result = await db.collection('case-studies').updateOne(
    { id: 'oppscience' },
    { $set: oppscienceData },
    { upsert: true }
  );
  console.log('MongoDB update successful for refined OPPSCIENCE:', result);
  await client.close();
}
main().catch(console.error);
