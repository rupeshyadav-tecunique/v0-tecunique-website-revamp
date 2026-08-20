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
    teamSize: '12 dedicated engineers',
    productJourney: 'Bee4sense → SPECTRA',
    coreAreas: 'Product Engineering · QA & Automation · Release Management · Product Support',
    location: 'France',
    milestone: 'IDEMIA majority investment — 2022'
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
      content: 'TECUNIQUE’s relationship with the people behind OPPSCIENCE predates OPPSCIENCE itself. Gilles André and Guillaume already knew TECUNIQUE through earlier experience with PolySpot and CustomerMatrix.\n\nWhen OPPSCIENCE needed to expand its engineering capacity in 2018, Gilles approached TECUNIQUE for a dedicated team of software development and QA engineers.\n\nThe OPPSCIENCE–TECUNIQUE engagement began in February 2018 around Bee4sense and has continued as the company’s products, architecture, engineering organization, and technology stack evolved.'
    },
    {
      title: 'From Bee4sense to SPECTRA',
      subtitle: 'Supporting Product Evolution Across Generations',
      content: 'When the engagement began, TECUNIQUE engineers worked primarily around Bee4sense. The team contributed across successive product versions and releases as the platform continued to evolve.\n\nAs OPPSCIENCE moved toward the more specialised investigation and intelligence capabilities that became SPECTRA, TECUNIQUE engineers transitioned with the product—adapting to new architecture, technologies, workflows, and domain requirements.\n\nBee4sense did not simply disappear. Existing customer environments still require maintenance and product support. TECUNIQUE engineers retain much of the historical Bee4sense knowledge and support the consultants responsible for deployments by investigating technical issues, fixing product defects, and delivering minor releases where required.'
    },
    {
      title: 'The Engineering Challenge',
      subtitle: 'Building Capacity Around an Evolving Product Vision',
      content: 'This was never a static software-development engagement. OPPSCIENCE was refining a specialised product while simultaneously evolving its architecture, engineering organization, technology stack, deployment model, QA practices, and understanding of a highly specialised user domain.\n\nThe engineering teams therefore needed to do more than implement predefined tasks. They had to understand the product deeply, adapt to changing technical choices, develop domain knowledge, challenge requirements where appropriate, and contribute to solutions alongside OPPSCIENCE’s own engineers.'
    },
    {
      title: 'The TECUNIQUE Dedicated Team',
      subtitle: 'A 12-Member Development & QA Team Integrated into OPPSCIENCE',
      content: 'The engagement has grown into a 12-member dedicated TECUNIQUE team spanning software development and quality assurance. The engineers work within OPPSCIENCE’s product and engineering processes rather than functioning as a separate external delivery unit.'
    },
    {
      title: 'Embedded Engineering Leadership',
      subtitle: 'Working as One Engineering Organization',
      content: 'The depth of the relationship is visible in the way the teams are organized.\n\nOne of TECUNIQUE’s long-standing engineers works as a Squad/Team Lead within OPPSCIENCE and leads a cross-company engineering team comprising both TECUNIQUE engineers and OPPSCIENCE developers.\n\nTECUNIQUE engineers participate in the same squads, technical discussions, development processes, and product priorities as OPPSCIENCE’s internal team.'
    },
    {
      title: 'Owning Release Quality',
      subtitle: 'QA Responsibility Beyond Test Execution',
      content: 'OPPSCIENCE frequently manages multiple versions and releases moving through the delivery pipeline in parallel. Over time, the TECUNIQUE QA team has taken substantial responsibility for coordinating the validation required around these release cycles.\n\nThis includes release planning from a QA perspective, regression coverage, validation across versions, fix verification, defect assessment, and supporting release-readiness decisions.'
    },
    {
      title: 'Product Support & Issue Triage',
      subtitle: 'Supporting Teams Closest to Customer Deployments',
      content: 'TECUNIQUE does not directly manage customer deployments. OPPSCIENCE’s deployment and support consultants work with customer environments, while the TECUNIQUE team provides product-level technical support behind them.\n\nWhen bugs, questions, or unexpected product behaviour are reported, the QA team frequently provides first-level technical analysis—reproducing issues, reviewing logs and technical information, determining whether the behaviour represents a product defect, providing context to developers, and validating subsequent fixes. For existing Bee4sense environments, TECUNIQUE also supports defect resolution and minor product releases where required.'
    },
    {
      title: 'Long-Term Team Continuity',
      subtitle: 'Product Knowledge Built Over Years, Not Repeatedly Rebuilt',
      content: 'One of the strongest characteristics of the engagement is continuity. Several TECUNIQUE engineers have worked with OPPSCIENCE for many years, with key QA members and engineering leadership remaining involved from the early stages of the product journey.\n\nNewer engineers have joined over time, but much of the core product and technical knowledge has remained within the team across Bee4sense, SPECTRA, architecture changes, release history, customer contexts, and evolving QA practices.'
    },
    {
      title: 'More Than Additional Engineering Capacity',
      content: 'The OPPSCIENCE engagement demonstrates what a long-term dedicated-team relationship can become when continuity is maintained over time.\n\nThe collaboration began with engineers supporting Bee4sense and continued through successive releases, architectural changes, evolving technologies, deeper QA responsibility, and the move toward SPECTRA.\n\nToday, TECUNIQUE engineers work inside OPPSCIENCE’s engineering organization, retain knowledge across product generations, carry substantial responsibility for QA and release validation, and contribute leadership within mixed client/TECUNIQUE squads.'
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
  techStack: [
    {
      category: 'Backend & Platform Engineering',
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
  techStackNote: 'The exact stack has evolved over time. A central part of the engagement has been the team’s ability to learn, adapt, and continue delivering as OPPSCIENCE’s architecture changed.',
  qaLifecycleGrid: [
    { name: 'Sanity Testing', desc: 'Quick validation around new builds and code changes.' },
    { name: 'Functional Testing', desc: 'Detailed validation of complex product behaviour and business rules.' },
    { name: 'Regression Testing', desc: 'Protecting existing platform functionality as the product evolves.' },
    { name: 'Integration & E2E', desc: 'Validating interconnected workflows across services and modules.' },
    { name: 'API Testing', desc: 'Validating backend microservices and REST endpoints independently.' },
    { name: 'Automation Testing', desc: 'Repeatable automated test suites across workflows and APIs.' },
    { name: 'Performance Testing', desc: 'Evaluating platform behaviour under load using JMeter and Grafana.' },
    { name: 'Release Validation', desc: 'Coordinating multi-version QA activities and assessing release readiness.' }
  ],
  automationEvolution: [
    { phase: '01', title: 'Earlier Automation', tools: 'Java · Selenium · Cucumber', desc: 'Foundational UI test automation for web workflows' },
    { phase: '02', title: 'Angular UI Testing', tools: 'Jasmine', desc: 'Frontend unit & component level testing' },
    { phase: '03', title: 'API Automation', tools: 'REST Assured + Java', desc: 'Automated validation of core backend services' },
    { phase: '04', title: 'Subsequent Evolution', tools: 'Python + Selenium', desc: 'Scriptable test execution and data generation' },
    { phase: '05', title: 'Current Direction', tools: 'Playwright + TypeScript', desc: 'Modern end-to-end and API testing with fast execution' },
    { phase: '06', title: 'AI-Assisted QA', tools: 'Codex · Claude Code', desc: 'Assisting engineers in test-case generation (under human review)' }
  ],
  technicalCallouts: [
    {
      title: 'Performance & Observability',
      desc: 'The team has used JMeter extensively for performance and load-related testing. Grafana is now also used for visualising and analysing test results, logs, and operational information.'
    },
    {
      title: 'AI & NLP Quality Validation',
      desc: 'OPPSCIENCE products include NLP and AI-driven capabilities where validation involves evaluating outputs from NLP-related modules (e.g., relation extraction, image descriptions, Doccano, MLflow) to ensure extracted information behaves as expected within product context.'
    }
  ],
  milestones: [
    {
      title: '2018 — OPPSCIENCE Engagement Begins',
      description: 'Dedicated development and QA support starts around Bee4sense.'
    },
    {
      title: 'Bee4sense Evolves',
      description: 'TECUNIQUE engineers support successive versions and releases.'
    },
    {
      title: 'Product Direction Evolves',
      description: 'OPPSCIENCE increasingly focuses on specialised investigation and intelligence workflows.'
    },
    {
      title: 'SPECTRA Emerges',
      description: 'Engineering capacity, domain knowledge, and architecture evolve around the newer product direction.'
    },
    {
      title: '2022 — IDEMIA Majority Investment',
      description: 'IDEMIA takes a majority stake in OPPSCIENCE as part of the company’s evolution.'
    },
    {
      title: 'Dedicated Team Grows',
      description: 'TECUNIQUE engagement develops into a 12-member development and QA team.'
    },
    {
      title: 'Embedded Engineering Leadership',
      description: 'A TECUNIQUE engineer leads a mixed OPPSCIENCE/TECUNIQUE squad.'
    },
    {
      title: 'Today',
      description: 'SPECTRA continues to evolve while TECUNIQUE also retains substantial historical Bee4sense product knowledge and supports existing environments.'
    }
  ],
  testimonials: [
    {
      quote: 'TECUNIQUE has been a reliable partner for many years, supporting our evolution from PolySpot to OppScience via CustomerMatrix. Quite unique in this sector, we have actually the same contacts for over 10 years!\n\nI am genuinely grateful for the dedication and involvement displayed by the TECUNIQUE team. Their consistent efforts to enhance our platform and deliver an exceptional experience to our customers have solidified our perception of TECUNIQUE not just as a service provider but as a true partner.',
      author: 'Guillaume',
      role: 'OPPSCIENCE',
      highlighted: true
    },
    {
      quote: 'TecUnique has been a key partner for OPPSCIENCE over the years.\n\nAs a CTO, I\'ve collaborated with TecUnique on various projects for an extended duration.\n\nThey have consistently helped us delivering top-tier software, attributed not just to their excellent software testing but also their expertise in software engineering.',
      author: 'Mickaël',
      role: 'CTO, OPPSCIENCE'
    }
  ],
  testimonial: {
    quote: 'TECUNIQUE has been a reliable partner for many years, supporting our evolution from PolySpot to OppScience via CustomerMatrix. Quite unique in this sector, we have actually the same contacts for over 10 years!\n\nI am genuinely grateful for the dedication and involvement displayed by the TECUNIQUE team. Their consistent efforts to enhance our platform and deliver an exceptional experience to our customers have solidified our perception of TECUNIQUE not just as a service provider but as a true partner.',
    author: 'Guillaume',
    role: 'OPPSCIENCE'
  },
  secondaryTestimonial: {
    quote: 'TecUnique has been a key partner for OPPSCIENCE over the years.\n\nAs a CTO, I\'ve collaborated with TecUnique on various projects for an extended duration.\n\nThey have consistently helped us delivering top-tier software, attributed not just to their excellent software testing but also their expertise in software engineering.',
    author: 'Mickaël',
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
  console.log('MongoDB update successful for OPPSCIENCE:', result);
  await client.close();
}
main().catch(console.error);
