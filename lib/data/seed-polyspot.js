require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const polyspotData = {
  id: 'polyspot',
  company: 'PolySpot',
  product: 'Enterprise Search Platform',
  logo: '/images/companies/polyspot.webp',
  industry: 'Enterprise Search Technology',
  category: 'Dedicated Product Engineering Team',
  partnership: 'April 2010 – June 2013',
  location: 'Paris, France',
  initials: 'PS',
  color: '#0ea5e9',
  gradient: 'from-sky-600 to-blue-600',
  eyebrow: 'POLYSPOT / ENTERPRISE SEARCH',
  heroTitle: 'Building a Dedicated India R&D Team for PolySpot’s Enterprise Search Platform',
  tagline: 'Building a Dedicated India R&D Team for PolySpot’s Enterprise Search Platform',
  heroSubtitle: 'How TECUNIQUE built and scaled a cross-border development, QA and technical-documentation team for PolySpot—developing GWT expertise, rebuilding key product interfaces, supporting multiple releases and establishing engineering relationships that continued well beyond the original engagement.',
  seoTitle: 'PolySpot Dedicated Engineering Team Case Study | TECUNIQUE',
  metaDescription: 'See how TECUNIQUE built and scaled PolySpot’s India R&D team across GWT product development, QA automation, release management and technical documentation.',
  atAGlance: {
    client: 'PolySpot',
    industry: 'Enterprise Search Technology',
    product: 'Enterprise Search Platform',
    engagement: 'Dedicated Product Engineering Team',
    relationship: 'April 2010 – June 2013',
    teamGrowth: '5 → 13 professionals',
    teamComposition: 'Software Development · QA & Automation · Technical Writing · Product Support',
    clientControl: 'Integrated France–India Agile/Scrum Team',
    coreTechnologies: 'Java · GWT · JavaScript · jQuery · Angular',
    location: 'Paris, France'
  },
  description: 'PolySpot developed an enterprise search platform designed to index, structure and deliver unified search across disparate enterprise systems and content repositories.',
  solution: 'TECUNIQUE built and scaled an integrated India-based R&D team spanning GWT frontend development, Java backend engineering, QA automation, technical documentation and post-release support.',
  sections: [
    {
      title: 'How the Partnership Began',
      subtitle: 'A Relationship Built on Previous R&D Experience',
      content: 'Gilles André and Jaydeep Chhasatia had worked together since 2007 at Augure, where Jaydeep helped establish and lead the company’s India-based R&D organization.\n\nWhen Gilles later moved on from Augure and began working on a new technology venture, he approached Jaydeep again. The initial discussion in early 2010 concerned development around the new venture’s website and open-source community environment. It soon developed into a much broader requirement around PolySpot’s enterprise search product.\n\nPolySpot wanted to build an India-based R&D team that could work alongside its engineering organization in France, and Gilles approached Jaydeep to establish and manage that team. The dedicated PolySpot engagement began in April 2010.'
    },
    {
      title: 'Building Product Expertise Around an Emerging GWT Stack',
      subtitle: 'From Technology Evaluation to Product Delivery',
      content: 'One of PolySpot’s major early requirements was to redevelop significant parts of the product interface using Google Web Toolkit (GWT). At the time, engineers with strong hands-on GWT experience were relatively difficult to find.\n\nRather than wait for scarce ready-made specialists, TECUNIQUE recruited strong Java and JavaScript/jQuery engineers who could learn the technology and develop the required expertise.\n\nWorking together, the India and France engineering teams evaluated different GWT approaches, including SmartGWT and other available options. After technical evaluation, the teams decided to use standard GWT and develop customized widgets and framework components suited specifically to PolySpot’s product.'
    },
    {
      title: 'When PolySpot Reached the End of Its Product Lifecycle',
      subtitle: 'The End of PolySpot — Not the End of the Relationship',
      content: 'By June 2013, PolySpot reached the end of its product lifecycle after the business did not achieve the sales required to continue the product. The TECUNIQUE engagement therefore concluded.\n\nMost members of the established dedicated team subsequently continued into the CustomerMatrix engagement, preserving much of the engineering experience, product knowledge and working relationships developed through PolySpot.'
    }
  ],
  gwtChallenge: {
    title: 'Building Product Expertise Around an Emerging GWT Stack',
    subtitle: 'From Technology Evaluation to Product Delivery',
    content: 'One of PolySpot’s major early requirements was to redevelop significant parts of the product interface using Google Web Toolkit (GWT). At the time, engineers with strong hands-on GWT experience were relatively difficult to find.\n\nRather than wait for scarce ready-made specialists, TECUNIQUE recruited strong Java and JavaScript/jQuery engineers who could learn the technology and develop the required expertise.\n\nWorking together, the India and France engineering teams evaluated different GWT approaches, including SmartGWT and other available options. After technical evaluation, the teams decided to use standard GWT and develop customized widgets and framework components suited specifically to PolySpot’s product.',
    stackEvolutionNote: 'As the product evolved, the UI and Administration modules gradually moved toward a hybrid frontend stack incorporating GWT, JavaScript, jQuery, and later Angular. Angular was introduced later in the product lifecycle and should not be presented as part of the original 2010 implementation.'
  },
  productAreas: [
    { title: 'UI Development', desc: 'Development of the new product user interface using GWT and custom-built widgets.' },
    { title: 'Administration Interface', desc: 'Development of the Administration UI as product functionality and enterprise features expanded.' },
    { title: 'Custom GWT Components', desc: 'Creation of reusable widgets and framework components tailored to PolySpot’s requirements.' },
    { title: 'Product Installer', desc: 'Development and ongoing management of the multi-platform product installer.' },
    { title: 'Backend Contribution', desc: 'Participation in selected feature development and data pipelines within the backend search engine.' }
  ],
  teamGrowthMetric: {
    start: '5',
    end: '13',
    label: 'Dedicated Professionals at Peak',
    description: 'The engagement started with a small multidisciplinary team and expanded as PolySpot’s product scope, release requirements and engineering organization grew.'
  },
  teamBreakdown: [
    {
      discipline: 'Software Development',
      count: '6 Developers',
      roles: 'Java · GWT · JavaScript · jQuery · Angular',
      desc: 'UI development, custom GWT widgets, Administration modules, product installer, and backend search engine features.'
    },
    {
      discipline: 'QA & Automation',
      count: '5 QA Engineers',
      roles: 'Manual · Functional · Automation · Performance · Releases',
      desc: 'Functional testing, sanity checks, regression suites, Selenium/Java test automation, and release validation.'
    },
    {
      discipline: 'Technical Writing',
      count: '1 Technical Writer',
      roles: 'Product Docs · Release Notes · Installers · Upgrades',
      desc: 'Creating and maintaining product documentation, installation guides, and multi-version upgrade procedures.'
    },
    {
      discipline: 'Local Team Management',
      count: '1 Local Manager',
      roles: 'Day-to-day Coordination · Agile Delivery',
      desc: 'Local development management, sprint coordination, and alignment with France engineering leadership.'
    }
  ],
  teamEvolutionComparison: {
    initial: 'Initial Team: 3 Developers · 1 QA Engineer · 1 Technical Writer',
    peak: 'Peak Team: 6 Developers · 5 QA Engineers · 1 Technical Writer · 1 Local Manager'
  },
  selectionFlow: [
    { step: '01', title: 'Source & Screen', desc: 'TECUNIQUE identified suitable candidates and conducted the initial screening and interview process.' },
    { step: '02', title: 'Technical Evaluation', desc: 'PolySpot’s engineering team conducted subsequent technical interviews and practical assessments where relevant.' },
    { step: '03', title: 'Client Approval', desc: 'Candidates joined the dedicated team after completing the agreed evaluation process.' },
    { step: '04', title: 'Employment & Onboarding', desc: 'TECUNIQUE managed salary negotiation, onboarding, employment, payroll and ongoing HR administration.' }
  ],
  crossBorderModel: {
    title: 'One Cross-Border R&D Organization',
    subtitle: 'India and France Working as One Product Team',
    description: 'During the first year, much of the engineering capacity was based at TECUNIQUE in India, with Eric Beaute providing technical leadership from France. As PolySpot grew, engineering capacity expanded on both sides, with the combined team following Agile/Scrum and participating in the same product-development process.',
    squads: 'Initially operating as one unified team, the engineering organization later evolved into separate groups focused on UI & Administration and Backend Engine. During the second year, David Fischer joined PolySpot as CTO and worked directly with the TECUNIQUE team.',
    ceremonies: ['Daily stand-ups', 'Story-point estimation', 'Sprint planning', 'Story grooming', 'Sprint reviews', 'Retrospectives']
  },
  qaCapabilities: [
    { title: 'Manual & Functional Testing', desc: 'Functional validation across enterprise product features.' },
    { title: 'Sanity Testing', desc: 'Focused verification around individual builds and release candidates.' },
    { title: 'UI Testing', desc: 'Validation of frontend behavior, custom widgets, and user workflows.' },
    { title: 'Backend Testing', desc: 'Validation of search indexing, data extraction, and backend query functionality.' },
    { title: 'Integration Testing', desc: 'Validation across integrated product components and search modules.' },
    { title: 'End-to-End Testing', desc: 'Testing complete user and product discovery workflows.' },
    { title: 'Regression Testing', desc: 'Repeated validation across evolving releases and version branches.' },
    { title: 'Automation Testing', desc: 'Automated regression test suite built and maintained using Selenium and Java.' },
    { title: 'Release Testing', desc: 'Comprehensive validation and sign-off around major and minor releases.' }
  ],
  releaseManagement: {
    title: 'Release & Version Management',
    desc: 'The QA team participated directly in release and version management using Bamboo. Testing, release validation and version-related activities were integrated directly into the engineering delivery process rather than operating as a downstream check.',
    tools: ['Bamboo', 'Selenium', 'Java']
  },
  sideBySideCards: {
    docTitle: 'Technical Documentation',
    docSubtitle: 'Documentation Across Product Versions',
    docDesc: 'A dedicated Technical Writer formed part of the PolySpot team from the beginning, creating and maintaining documentation that evolved alongside engineering changes:',
    docItems: [
      'Product Documentation',
      'Release Documentation & Release Notes',
      'Installation Instructions',
      'Upgrade Procedures Across Versions'
    ],
    supportTitle: 'Product Support',
    supportSubtitle: 'Supporting the Product After Release',
    supportDesc: 'The dedicated team participated directly in post-release technical support, bridging QA investigation with development fix validation:',
    supportItems: [
      'Reproducing customer-reported issues',
      'Analyzing application behavior and logs',
      'Gathering relevant diagnostic data',
      'Escalating to developers for deep root-cause fixes'
    ],
    lifecycleTagline: 'Development → QA → Release → Documentation → Product Support'
  },
  techStack: [
    {
      category: 'Backend & Platform',
      subtitle: 'Core Architecture',
      items: ['Java', 'JEE']
    },
    {
      category: 'Frontend',
      subtitle: 'UI Frameworks',
      items: ['GWT', 'JavaScript', 'jQuery', 'Angular']
    },
    {
      category: 'UI Engineering',
      subtitle: 'Component Architecture',
      items: ['Custom GWT Widgets', 'Custom Framework Components']
    },
    {
      category: 'QA & Automation',
      subtitle: 'Test Automation',
      items: ['Selenium', 'Java']
    },
    {
      category: 'Engineering Delivery',
      subtitle: 'CI & Versioning',
      items: ['Bamboo', 'CI/CD']
    }
  ],
  techStackNote: 'The technology stack evolved over the course of the engagement. GWT formed the original frontend foundation, while JavaScript, jQuery and later Angular were introduced as the product evolved. Across the engagement, the team supported several major and minor releases as the product architecture, frontend technologies and testing practices evolved.',
  relationshipContinuity: {
    title: 'One Engagement. Multiple Long-Term Relationships.',
    subtitle: 'Relationship Continuity Across Companies',
    paths: [
      {
        person: 'Gilles André',
        role: 'Co-Founder & CEO, PolySpot',
        flow: ['PolySpot (2010–2013)', 'CustomerMatrix (2013–2017)', 'OPPSCIENCE (2017–Present)'],
        desc: 'Gilles André’s experience working with TECUNIQUE through PolySpot led directly into the subsequent CustomerMatrix engagement and later continued again through OPPSCIENCE.'
      },
      {
        person: 'David Fischer',
        role: 'CTO, PolySpot (Joined Year 2)',
        flow: ['PolySpot (2011–2013)', 'Innovalog / JMWE (2014–Present)'],
        desc: 'David Fischer joined PolySpot as CTO during the engagement and worked directly with the TECUNIQUE team. That experience later became the foundation for TECUNIQUE’s long-term collaboration with Innovalog around JMWE.'
      }
    ],
    note: 'These represent relationship-continuity paths established through shared engineering work, not corporate succession or ownership relationships.'
  },
  timeline: [
    {
      year: '2007',
      title: 'Gilles & Jaydeep Begin Working Together',
      desc: 'Previous R&D relationship established at Augure where Jaydeep led the India R&D center.'
    },
    {
      year: 'Early 2010',
      title: 'New Technology Venture',
      desc: 'Gilles approaches Jaydeep regarding his new venture and engineering requirements.'
    },
    {
      year: 'April 2010',
      title: 'PolySpot Dedicated Team Begins',
      desc: 'Initial team of 3 developers, 1 QA engineer and 1 technical writer established in India.'
    },
    {
      year: '2010–2011',
      title: 'GWT Redevelopment & Product Foundations',
      desc: 'New UI, Administration modules, custom widgets, and product installer developed.'
    },
    {
      year: '2011–2012',
      title: 'Team Expansion & Multidisciplinary Scale',
      desc: 'Team grows from 5 to 13 professionals across development, QA, automation, and tech docs.'
    },
    {
      year: '2012–2013',
      title: 'Continuous Product Evolution & Releases',
      desc: 'Multiple major and minor releases supported alongside post-release customer triage.'
    },
    {
      year: 'June 2013',
      title: 'June 2013 — PolySpot Engagement Concludes',
      desc: 'Most established TECUNIQUE team members continue into CustomerMatrix.'
    }
  ],
  testimonial: {
    quote: 'TECUNIQUE has been an integral part of our journey for PolySpot, and we are committed to further expanding our collaborative efforts. Our association with TECUNIQUE is not merely driven by financial considerations; it’s centered on the invaluable expertise and contributions that team brings to the table. We share the sentiment that, it’s not just about cost-effectiveness but about securing the right talent. I express my sincere appreciation for TECUNIQUE\'s relentless efforts over the years and emphasize their importance in continued partnership over the years.',
    author: 'Gilles André',
    role: 'Founder & CEO, PolySpot'
  },
  relatedServices: [
    { title: 'Dedicated Software Teams', href: '/services/dedicated-teams', primary: true },
    { title: 'Product Engineering & Custom Software', href: '/services/product-engineering' },
    { title: 'Software QA & Automation Testing', href: '/services/qa' }
  ],
  cta: {
    eyebrow: 'BUILDING A LONG-TERM PRODUCT TEAM?',
    title: 'Build the Engineering Capacity Your Product Needs',
    description: 'TECUNIQUE can help you recruit, build and support dedicated development and QA teams in India that work directly with your product organization and evolve as your engineering requirements change.',
    buttonText: 'Discuss Your Team Requirements',
    buttonHref: '/contact',
    secondaryText: 'Explore Dedicated Teams',
    secondaryHref: '/services/dedicated-teams'
  },
  image: '/images/companies/polyspot.webp',
  client: 'PolySpot'
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const result = await db.collection('case-studies').updateOne(
    { id: 'polyspot' },
    { $set: polyspotData },
    { upsert: true }
  );
  console.log('MongoDB update successful for PolySpot:', result);
  await client.close();
}
main().catch(console.error);
