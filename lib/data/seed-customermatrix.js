require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const customermatrixData = {
  id: 'customermatrix',
  company: 'CustomerMatrix',
  product: 'Cognitive Computing & Data Enrichment Platform',
  logo: '/images/companies/customer_matrix.webp',
  industry: 'Cognitive Computing & Data Enrichment',
  category: 'Dedicated Product Engineering Team',
  partnership: 'June 2013 – December 2017',
  location: 'New York, USA · Paris, France',
  initials: 'CM',
  color: '#8b5cf6',
  gradient: 'from-violet-600 to-indigo-600',
  eyebrow: 'CUSTOMERMATRIX / COGNITIVE COMPUTING PLATFORM',
  heroTitle: 'Scaling a Multidisciplinary Product Engineering Team from 6 to 18 Professionals',
  tagline: 'Scaling a Multidisciplinary Product Engineering Team from 6 to 18 Professionals',
  heroSubtitle: 'How TECUNIQUE built and evolved an integrated development, QA, DevOps and data team for CustomerMatrix—working alongside its France-based R&D organization across product development, testing, releases, cloud infrastructure and ongoing support.',
  seoTitle: 'CustomerMatrix Dedicated Engineering Team Case Study | TECUNIQUE',
  metaDescription: 'See how TECUNIQUE built and scaled a dedicated CustomerMatrix product engineering team from 6 to 18 professionals across development, QA, AWS DevOps and data engineering.',
  atAGlance: {
    client: 'CustomerMatrix',
    product: 'Cognitive Computing & Data Enrichment',
    ecosystem: 'Enterprise CRM, KYC & Workflow Enrichment',
    engagement: 'Dedicated Product Engineering Team',
    relationship: 'June 2013 – December 2017',
    teamGrowth: '6 → 18 professionals',
    teamComposition: 'Development · QA · DevOps · Data Engineering · Data Analysis',
    clientControl: 'Integrated India–France Scrum Teams',
    location: 'New York, USA · Paris, France',
    milestone: 'CustomerMatrix acquired by Medtech Group — December 2017'
  },
  description: 'CustomerMatrix developed a cognitive computing and data-enrichment platform designed to help enterprises connect and enrich information across existing CRM, contact-centre and KYC workflows.',
  solution: 'TECUNIQUE built and evolved a dedicated multidisciplinary team around CustomerMatrix’s platform, growing from 6 to 18 professionals across software development, QA, AWS DevOps, data engineering and data analysis.',
  sections: [
    {
      title: 'CustomerMatrix & How the Partnership Began',
      subtitle: 'Cognitive Computing & Previous Collaboration',
      content: 'CustomerMatrix developed a cognitive computing and data-enrichment platform designed to help enterprises connect and enrich information across existing CRM, contact-centre and KYC workflows. The company was headquartered in New York, with its R&D organization in Paris, and worked with large enterprise customers across financial services, insurance and other industries.\n\nGilles André, Co-Founder and CTO of CustomerMatrix at the beginning of the engagement, already knew TECUNIQUE through previous collaboration around PolySpot. When CustomerMatrix needed to establish additional engineering capacity around its product, Gilles approached TECUNIQUE to build a dedicated team.\n\nThe engagement began in June 2013 with six professionals—2 Software Engineers working alongside CustomerMatrix developers and 4 QA Engineers providing testing capacity under the France-led QA organization—and subsequently expanded as product and architecture requirements evolved.'
    },
    {
      title: 'Across the Product Lifecycle',
      subtitle: 'Releases, Validation & Ongoing Technical Support',
      content: 'Across four-and-a-half years, the dedicated team contributed throughout the product and release lifecycle across multiple versions of CustomerMatrix.\n\nQA engineers conducted comprehensive functional, regression, API and load testing ahead of major rollouts, while also providing the first level of technical support after releases by reproducing reported customer issues, analysing system behaviour, and gathering diagnostic data.\n\nCases requiring deeper technical investigation were escalated directly to TECUNIQUE and France developers for root-cause resolution. This gave the team end-to-end responsibility across development, release validation and ongoing post-release stability.'
    },
    {
      title: 'Team & Relationship Continuity',
      subtitle: 'Knowledge Retention & Evolution into OPPSCIENCE',
      content: 'Most TECUNIQUE professionals who joined CustomerMatrix remained with the team throughout the engagement. This strong continuity allowed developers, QA engineers and DevOps specialists to build deep, retained knowledge of the platform architecture, data models and working practices.\n\nWhen the CustomerMatrix engagement concluded in December 2017 following its business acquisition by Medtech Group, the relationship did not end. Most of the established TECUNIQUE development and QA team continued directly into a new dedicated engineering team supporting OPPSCIENCE.\n\nThis carried established working relationships, domain knowledge and engineering experience seamlessly into the next chapter of collaboration.'
    }
  ],
  endClientsNote: 'CustomerMatrix publicly referenced organizations including BNP Paribas, Allianz and Schneider Electric among its customers.',
  selectionFlow: [
    { step: '01', title: 'Source & Screen', desc: 'TECUNIQUE identified suitable candidates, performed initial screening and conducted the first interview.' },
    { step: '02', title: 'Technical Evaluation', desc: 'CustomerMatrix’s France-based team conducted subsequent technical interviews.' },
    { step: '03', title: 'Practical Assessment', desc: 'Developers and automation engineers completed practical coding or technical tests where relevant.' },
    { step: '04', title: 'Final Selection', desc: 'CustomerMatrix approved candidates who successfully completed the evaluation process.' },
    { step: '05', title: 'Employment & Onboarding', desc: 'TECUNIQUE managed salary negotiation, joining, payroll, employment and ongoing HR administration.' }
  ],
  teamGrowthMetric: {
    start: '6',
    end: '18',
    label: 'Dedicated Professionals at Peak',
    description: 'As CustomerMatrix expanded its product and engineering requirements, the TECUNIQUE team grew from its initial development and QA structure into a broader multidisciplinary product organization covering application engineering, specialized QA, AWS DevOps, data engineering and data analysis.'
  },
  teamBreakdown: [
    {
      discipline: 'Development',
      count: '5',
      roles: 'Java · Angular · Full-stack · JavaScript/jQuery · GWT',
      desc: 'Backend services, frontend modules, search integration, APIs, administrative features, and data enrichment.'
    },
    {
      discipline: 'Quality Assurance',
      count: '7',
      roles: '4 Manual QA · 1 Automation · 1 Performance · 1 Team Lead',
      desc: 'Functional testing, Selenium/Cucumber automation, JMeter load testing, Postman API testing, and release validation.'
    },
    {
      discipline: 'AWS & DevOps',
      count: '2',
      roles: 'AWS · Terraform · Ansible · Jenkins CI/CD',
      desc: 'Cloud environment management, CI/CD pipelines, infrastructure as code, and operational monitoring.'
    },
    {
      discipline: 'Data Engineering',
      count: '2',
      roles: 'Transformation & Enrichment Modules',
      desc: 'Developing modules to ingest, standardize, and transform diverse multi-source enterprise data.'
    },
    {
      discipline: 'Data Analysis',
      count: '2',
      roles: 'Structured Collection & Output Validation',
      desc: 'Validating transformed outputs and verifying that processed data met quality requirements.'
    }
  ],
  managementModel: {
    franceLeadership: 'CustomerMatrix France Leadership (Product priorities · Engineering direction · Overall management)',
    indiaLeads: 'India Team Leads (Day-to-day coordination · Technical/QA leadership · Team responsibilities)',
    tecuniqueLeadership: 'TECUNIQUE Leadership & HR (Performance management · Employment · Appraisals · Team continuity · HR administration)',
    callout: 'Delivery and performance responsibility was shared rather than operating as a purely client-managed staff augmentation model.'
  },
  productEngineeringAreas: [
    { title: 'Backend Services', desc: 'Application and platform backend development using Java, Spring, and microservices architecture.' },
    { title: 'Frontend Modules', desc: 'Development across evolving frontend frameworks and intuitive product interfaces (GWT, Angular, Vue.js).' },
    { title: 'Search Modules', desc: 'Search functionality and related platform capabilities across customer data.' },
    { title: 'Search & Indexing', desc: 'High-performance indexing and query pipelines utilizing Solr, Lucene, and Elasticsearch.' },
    { title: 'APIs', desc: 'Comprehensive application and platform API development for third-party integrations.' },
    { title: 'Administration Features', desc: 'Administrative functionality supporting platform use, permissions, and tenant configuration.' },
    { title: 'Data Enrichment', desc: 'Product features designed to transform and enrich information from multiple enterprise sources.' }
  ],
  qaCapabilities: [
    { title: 'Functional & Regression Testing', desc: 'Test planning, functional validation, and regression coverage across product releases.' },
    { title: 'Test Automation', desc: 'Automated regression coverage using Selenium, Cucumber, TestNG, and Jasmine.' },
    { title: 'API Testing', desc: 'API validation and endpoint contract verification using Postman.' },
    { title: 'Performance Testing', desc: 'Performance, stress, and load testing using Apache JMeter.' },
    { title: 'Release Validation', desc: 'Comprehensive validation and regression activities around releases and product versions.' },
    { title: 'Defect Investigation', desc: 'First-level technical investigation, reproduction, and defect analysis.' },
    { title: 'Product Documentation', desc: 'Dedicated maintenance of product and release documentation across versions.' }
  ],
  qaTools: [
    { category: 'Functional / UI Automation', tools: 'Selenium · Cucumber · TestNG · Jasmine' },
    { category: 'API Testing', tools: 'Postman' },
    { category: 'Performance Testing', tools: 'Apache JMeter' },
    { category: 'Engineering Delivery', tools: 'Jenkins CI/CD' }
  ],
  devopsCapabilities: [
    { title: 'AWS Environments', desc: 'Management and support of cloud environments across development, staging, and production.' },
    { title: 'CI/CD Pipelines', desc: 'Build and deployment pipeline responsibilities ensuring continuous delivery.' },
    { title: 'Deployments', desc: 'Application and multi-environment deployment activities.' },
    { title: 'Infrastructure Automation', desc: 'Infrastructure as Code utilizing Terraform and Ansible.' },
    { title: 'Monitoring & Observability', desc: 'Monitoring, log aggregation, and operational visibility.' },
    { title: 'Environment Management', desc: 'Ongoing infrastructure, security, and environment administration.' }
  ],
  dataCapabilities: {
    engineeringTitle: 'Data Engineering',
    engineeringDesc: 'TECUNIQUE Data Engineers developed modules for transforming and integrating large volumes of diverse information arriving from different data sources into more uniform and standardized structures, alongside enrichment modules adding context and value.',
    analysisTitle: 'Data Analysis',
    analysisDesc: 'Data Analysts supported structured data collection based on defined guidelines and validated outputs produced by the transformation, integration, and enrichment modules to verify that processed information met quality and output requirements.'
  },
  techStack: [
    {
      category: 'Backend & Platform',
      subtitle: 'Core Architecture',
      items: ['Java', 'Spring', 'Spring Boot', 'Kafka', 'ZooKeeper']
    },
    {
      category: 'Search & Data',
      subtitle: 'Enterprise Indexing',
      items: ['Solr', 'Lucene', 'Elasticsearch']
    },
    {
      category: 'Frontend',
      subtitle: 'UI Frameworks',
      items: ['GWT', 'Angular', 'Vue.js', 'JavaScript', 'jQuery']
    },
    {
      category: 'Cloud & Infrastructure',
      subtitle: 'DevOps & Automation',
      items: ['AWS', 'Terraform', 'Ansible']
    },
    {
      category: 'Engineering & Delivery',
      subtitle: 'CI / CD Pipeline',
      items: ['Jenkins', 'CI/CD']
    }
  ],
  techStackNote: 'The technologies above evolved over time and should not be interpreted as one static stack used simultaneously throughout the engagement.',
  milestones: [
    {
      title: 'June 2013 — Dedicated Team Established',
      description: 'Engagement begins with 2 developers and 4 QA engineers integrated into R&D.'
    },
    {
      title: 'Integrated R&D Model',
      description: 'TECUNIQUE engineers work alongside CustomerMatrix France-based teams using Scrum.'
    },
    {
      title: 'Multidisciplinary Expansion',
      description: 'Additional development, QA automation, performance, DevOps, and data capabilities added.'
    },
    {
      title: '18 Professionals at Peak',
      description: 'Multidisciplinary team covering development, QA, DevOps, data engineering, and data analysis.'
    },
    {
      title: 'Continuous Product Evolution',
      description: 'Team supports multiple product releases across evolving architecture and frameworks.'
    },
    {
      title: 'December 2017 — Engagement Concludes',
      description: 'Following acquisition by Medtech Group, the CustomerMatrix engagement completes.'
    },
    {
      title: 'Next Chapter — OPPSCIENCE',
      description: 'Most of the established development and QA team continues into the new OPPSCIENCE dedicated team.'
    }
  ],
  testimonial: {
    quote: 'Along my time at CustomerMatrix as CTO, it has been a pleasure to work with TECUNIQUE as a contractor and even more as a partner. I always considered the TECUNIQUE consultants as a natural extension of my team. The Indian squad has been very professional, committed, and easy to work with in software development, QA, or data quality. The contribution and facility to adapt have been key to reaching the objectives of my R&D group in an ever-changing startup world. I want to thank all the people onboarded at that time for that. All the best to all of you.',
    author: 'Christopher Favart',
    role: 'Former CTO, CustomerMatrix'
  },
  relatedServices: [
    { title: 'Dedicated Software Teams', href: '/services/dedicated-teams', primary: true },
    { title: 'Product Engineering & Custom Software', href: '/services/product-engineering' },
    { title: 'Software QA & Automation Testing', href: '/services/qa' }
  ],
  cta: {
    eyebrow: 'NEED LONG-TERM ENGINEERING CAPACITY?',
    title: 'Build a Multidisciplinary Engineering Team Around Your Product',
    description: 'From developers and QA engineers to DevOps and specialized technical roles, TECUNIQUE can help build and support a dedicated India team that evolves with your product and engineering requirements.',
    buttonText: 'Discuss Your Team Requirements',
    buttonHref: '/contact',
    secondaryText: 'Explore Dedicated Teams',
    secondaryHref: '/services/dedicated-teams'
  },
  image: '/images/companies/customer_matrix.webp',
  client: 'CustomerMatrix'
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const result = await db.collection('case-studies').updateOne(
    { id: 'customermatrix' },
    { $set: customermatrixData },
    { upsert: true }
  );
  console.log('MongoDB update successful for CustomerMatrix:', result);
  await client.close();
}
main().catch(console.error);
