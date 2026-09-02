require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const appfireData = {
  id: 'appfire',
  company: 'Appfire',
  product: 'JMWE & JMCF (Atlassian Marketplace Apps)',
  industry: 'Atlassian Ecosystem',
  category: 'Atlassian App Development & QA',
  partnership: 'November 2020 – April 2025',
  location: 'Boston, USA',
  initials: 'AF',
  color: '#f97316',
  gradient: 'from-amber-600 to-orange-600',
  eyebrow: 'APPFIRE / ATLASSIAN APPS',
  heroTitle: 'Extending a Long-Term Atlassian Engineering Partnership Across Development, QA & Automation',
  tagline: 'Extending a Long-Term Atlassian Engineering Partnership Across Development, QA & Automation',
  heroSubtitle: 'How TECUNIQUE continued an established engineering relationship after Appfire acquired Innovalog—supporting architecture, software development, specialized QA automation, Cloud and Forge evolution, L3 support and the recruitment of experienced QA talent across Appfire products.',
  seoTitle: 'Appfire Engineering & QA Case Study | TECUNIQUE',
  metaDescription: 'See how TECUNIQUE supported Appfire across Atlassian app architecture, development, specialized QA automation, Cloud and Forge evolution and L3 support.',
  atAGlance: {
    client: 'Appfire',
    ecosystem: 'Atlassian Marketplace',
    primaryProducts: 'JMWE · JMCF',
    additionalProducts: 'Rich Filters',
    relationship: 'November 2020 – April 2025',
    teamSize: '7 dedicated professionals at peak',
    capabilities: 'Architecture · Software Development · QA · Automation · L3 Support',
    cloudEvolution: 'Server/Data Center → Cloud · Connect → Forge',
    workingModel: 'Embedded Kanban Team'
  },
  description: 'Appfire is a leading provider of apps on the Atlassian Marketplace, offering enterprise workflow automation, data management, and reporting solutions used by millions of users worldwide.',
  solution: 'TECUNIQUE provided long-term engineering continuity following Appfire’s acquisition of Innovalog, delivering senior architecture, full-stack development, specialized Jira automation, Cloud/Forge migration, L3 support and niche QA talent recruitment.',
  sections: [
    {
      title: 'How the Appfire Relationship Began',
      subtitle: 'Continuity After the Innovalog Acquisition',
      content: 'TECUNIQUE had already been working closely with Innovalog around Jira Miscellaneous Workflow Extensions (JMWE) and Jira Miscellaneous Custom Fields (JMCF) when Appfire acquired the Innovalog products in 2020.\n\nRather than rebuilding the engineering team from scratch, Appfire retained the established TECUNIQUE resources and product knowledge around the apps. Most of the Innovalog-era TECUNIQUE team continued directly into the Appfire engagement, giving the new organization continuity across development, QA, automation and the underlying product architecture.\n\nThe Appfire engagement formally began in November 2020.'
    },
    {
      title: 'Preserving Product Knowledge Through the Transition',
      subtitle: 'Keeping an Experienced Team Around JMWE & JMCF',
      content: 'The transition to Appfire preserved years of accumulated knowledge around JMWE and JMCF rather than resetting the engineering relationship after the acquisition.\n\nTECUNIQUE developers and QA engineers already understood the products, their Cloud and Data Center variants, existing automation suites, release processes and complex Jira workflow behaviour.\n\nThat continuity allowed the team to continue contributing immediately while adapting to Appfire’s broader engineering processes and organizational structure.'
    }
  ],
  teamStructure: {
    title: 'A Focused Development & QA Team',
    subtitle: '7 Dedicated Professionals at Peak',
    description: 'The team remained relatively compact but highly specialized, combining senior software engineering with substantial QA and automation capability.',
    breakdown: [
      {
        discipline: 'Software Development',
        count: '2 Senior Engineers',
        roles: '2 Senior Software Engineers (1 later progressed to Senior Architect)',
        desc: 'Product feature development, architecture design, API services, frontend UI modules, bug fixing, performance optimization, and Forge evolution.'
      },
      {
        discipline: 'Quality Assurance & Automation',
        count: '5 QA Professionals',
        roles: '1 QA Lead · 3 QA Engineers · 1 Specialized Automation Engineer',
        desc: 'Test planning, functional & regression testing, Data Center to Cloud validation, specialized ACLI/GINT automation, and release sign-off.'
      }
    ]
  },
  devCapabilities: [
    { title: 'Feature Development', desc: 'Implementation of new product functionality and workflow extensions.' },
    { title: 'Architecture & Design', desc: 'Participation in architectural decisions, technical design, and system planning.' },
    { title: 'Backend & API Development', desc: 'Product services, API endpoints, and scalable backend functionality.' },
    { title: 'Frontend Development', desc: 'Development and continuous evolution of user-facing interfaces and configuration screens.' },
    { title: 'Bug Fixing', desc: 'In-depth investigation, root-cause analysis, and resolution of complex product defects.' },
    { title: 'Performance Improvements', desc: 'Optimization of application execution, indexing, and workflow response times.' },
    { title: 'Refactoring & Technical Debt', desc: 'Improvement of existing codebases for long-term maintainability and modularity.' },
    { title: 'Marketplace & Release Work', desc: 'Engineering delivery aligned with Atlassian Marketplace standards and release expectations.' }
  ],
  architectProgression: {
    title: 'From Senior Engineer to Senior Architect',
    subtitle: 'Expanding Technical Responsibility',
    content: 'As the engagement evolved, one of TECUNIQUE’s Senior Software Engineers progressed into a Senior Architect role. The role expanded beyond feature implementation into architecture decisions, technical design, code reviews, mentoring and planning around the product’s gradual Forge evolution. This progression reflected the level of product knowledge and engineering responsibility developed through the long-term engagement.'
  },
  cloudEvolution: {
    forgeTitle: 'Gradual Connect → Forge Evolution',
    forgeSubtitle: 'Modernizing the Cloud Architecture Incrementally',
    forgeDesc: 'The move toward Forge was gradual rather than a full rewrite of the existing product. New functionality increasingly used Forge where appropriate, while selected existing Connect-based features were progressively migrated. TECUNIQUE engineers contributed through technical planning, architecture discussions, development of new Forge functionality, and migration of selected capabilities.',
    migrationTitle: 'Server/Data Center → Cloud Migration',
    migrationSubtitle: 'Migrating Product Functionality to Cloud',
    migrationDesc: 'A separate engineering track involved moving selected functionality from the Server/Data Center versions of the products into Cloud. This required adapting existing functionality to the Cloud environment while considering platform behaviour, UX constraints, and API differences. TECUNIQUE developers contributed to the engineering implementation, while QA engineers provided detailed post-migration validation.'
  },
  qaCapabilities: [
    { title: 'Test Planning', desc: 'Definition and organization of comprehensive testing requirements across features.' },
    { title: 'Functional & Regression', desc: 'Validation across existing and newly introduced product behaviour.' },
    { title: 'Cloud & Data Center Validation', desc: 'Testing across both deployment models and variant codebases.' },
    { title: 'Version Validation', desc: 'Verification across multiple concurrent releases and product versions.' },
    { title: 'Fix Verification', desc: 'Confirmation that resolved defects behaved correctly without regressions.' },
    { title: 'Release Regression', desc: 'Broad regression coverage across complex Jira workflow operations prior to release.' },
    { title: 'Release Readiness', desc: 'Rigorous assessment of product stability and readiness for deployment.' },
    { title: 'Sign-Off Recommendation', desc: 'QA input and formal sign-off recommendations before customer rollout.' },
    { title: 'Marketplace Release Checks', desc: 'Validation of release requirements and compatibility with Marketplace expectations.' }
  ],
  postMigrationQa: {
    title: 'Post-Migration QA: Validating Data Center → Cloud Functionality',
    desc: 'When functionality was moved from Server/Data Center to Cloud, QA went beyond checking whether the feature simply existed in the new environment. The team compared behaviour across versions, validated usability and response differences, identified missing or inconsistent functionality, performed regression testing, and verified that migrated features behaved appropriately within the Cloud product.'
  },
  automationSection: {
    title: 'Building Automation Around Complex Jira Workflows',
    subtitle: 'Specialized JMWE Automation',
    desc: 'JMWE required a specialized automation approach because many scenarios involved complex Jira workflow behaviour and configuration rather than only straightforward UI interactions.\n\nTECUNIQUE’s QA automation engineers worked with ACLI, GINT, Gradle and Groovy, using Selenium where browser-level UI automation was required. The automation covered both Cloud and Server/Data Center environments and supported Regression, Sanity and End-to-End testing.',
    frameworkTitle: 'Designing, Extending & Maintaining the Framework',
    frameworkDesc: 'TECUNIQUE’s role went beyond executing scripts within an existing framework. QA automation engineers designed, extended, maintained and improved the automation framework and test scripts over time as product requirements became more complex. This involved learning the specialized tooling in depth, solving configuration challenges, refining test structures, and collaborating with relevant stakeholders and ACLI developers.'
  },
  automationStack: [
    { category: 'Jira Automation', tool: 'ACLI' },
    { category: 'Test Framework', tool: 'GINT' },
    { category: 'Automation Logic', tool: 'Groovy' },
    { category: 'Build / Execution', tool: 'Gradle' },
    { category: 'UI Automation', tool: 'Selenium' },
    { category: 'Test Management', tool: 'Xray' },
    { category: 'Project Management', tool: 'Jira' },
    { category: 'Documentation', tool: 'Confluence' }
  ],
  l3Support: {
    title: 'L3 Technical Support: Deep Product Knowledge Applied to Customer Issues',
    subtitle: 'Advanced Tier Technical Investigation',
    desc: 'As product knowledge deepened, one TECUNIQUE QA automation engineer moved into a dedicated L3 Support role. The role involved investigating complex product issues that required deeper technical and Jira-specific understanding.',
    responsibilities: [
      'Reproducing customer-reported issues in dedicated test environments',
      'Analysing application and server logs to trace failure points',
      'Investigating Jira configuration, permissions, and complex workflow behaviour',
      'Determining whether issues originated from Jira core, the Appfire app, or client configuration',
      'Coordinating with development engineers for root-cause resolution',
      'Validating bug fixes and communicating technical findings to customer-facing support teams'
    ],
    closing: 'This allowed detailed product and automation knowledge built within QA to be applied directly to complex support scenarios.'
  },
  workingModel: {
    title: 'Embedded in Appfire’s Engineering Organization',
    subtitle: 'Working as Part of the Product Team',
    desc: 'TECUNIQUE developers and QA engineers worked directly within Appfire’s engineering organization rather than operating as a separate external delivery unit. The team followed Kanban and participated in refinement, planning, product discussions, release meetings, architecture discussions, and code reviews.',
    processCards: [
      { title: 'Kanban', role: 'Engineering Flow', desc: 'Continuous delivery flow with agile backlog refinement and WIP management.' },
      { title: 'Jira', role: 'Work Management', desc: 'Issue tracking, sprint coordination, and cross-functional engineering management.' },
      { title: 'Confluence', role: 'Documentation', desc: 'Shared product specs, architecture diagrams, and release procedures.' },
      { title: 'Xray', role: 'Test Management', desc: 'Integrated test case repositories, test execution runs, and traceability.' }
    ]
  },
  recruitment: {
    title: 'Recruitment of Specialized QA Talent',
    subtitle: 'Finding the Right Engineers for Complex Products',
    desc: 'As Appfire’s QA requirements expanded, TECUNIQUE continued recruiting specialized QA professionals for products with complex Atlassian workflows and testing requirements. TECUNIQUE sourced and initially screened candidates, Appfire conducted technical evaluation and approval, and TECUNIQUE managed employment, payroll, HR, and ongoing people administration.'
  },
  richFiltersExpansion: {
    title: 'Relationship Expansion Through Rich Filters',
    subtitle: 'Expanding Collaboration After the Qotilabs Acquisition',
    desc: 'Appfire acquired Qotilabs in 2023, and the existing TECUNIQUE QA team supporting Rich Filters continued under Appfire.',
    linkText: 'Read the Qotilabs / Rich Filters Case Study →',
    linkHref: '/case-studies/qotilabs'
  },
  mainValues: [
    {
      title: 'Architecture & Development Capability',
      desc: 'Senior engineers contributing beyond feature implementation into architecture, Forge modernization, and technical direction.'
    },
    {
      title: 'Specialized QA Automation',
      desc: 'Deep automation expertise around complex Jira workflows, ACLI/GINT frameworks, and Cloud/Data Center variants.'
    },
    {
      title: 'Recruitment of Niche QA Talent',
      desc: 'Proven ability to identify, evaluate, and recruit specialized QA engineers suited to intricate Atlassian products.'
    },
    {
      title: 'Long-Term Product Knowledge',
      desc: 'Continuity of engineers familiar with products, workflows, architecture, automation test suites, and release processes.'
    }
  ],
  timeline: [
    {
      year: 'Nov 2020',
      title: 'Appfire Engagement Begins',
      desc: 'Existing Innovalog TECUNIQUE team continues immediately following Appfire’s acquisition.'
    },
    {
      year: '2021',
      title: 'Engineering Continuity & Team Expansion',
      desc: 'Development and QA continue across JMWE and JMCF; specialized QA and automation capacity grows.'
    },
    {
      year: '2022',
      title: 'Architecture Evolution & Senior Architect Progression',
      desc: 'Senior engineering responsibility expands into architectural design, mentoring, and Forge planning.'
    },
    {
      year: '2022–2023',
      title: 'Cloud Migration & Gradual Forge Work',
      desc: 'Server/Data Center functionality moves to Cloud while selected capabilities incrementally adopt Forge.'
    },
    {
      year: '2023',
      title: 'L3 Technical Support & Rich Filters Expansion',
      desc: 'L3 technical support capability established; existing Rich Filters QA team continues under Appfire.'
    },
    {
      year: '2025',
      title: 'Engagement Concludes',
      desc: 'The engagement concluded as Appfire evolved its internal engineering model.'
    }
  ],
  testimonial: {
    quote: 'Since 2020, Appfire and TECUNIQUE have been engaged in business, and throughout this period, the TECUNIQUE team has consistently impressed us with their exceptional services. Their expertise and dedication in architectural design, development, and quality assurance have been very valuable to our team. Additionally, their HR team has demonstrated a tried-and-true process for recruiting the ideal QA engineers for our intricate products.',
    author: 'Ajay Singh',
    role: 'Director – Product Engineering, Appfire'
  },
  relatedServices: [
    { title: 'Atlassian App Development & QA', href: '/services/atlassian', primary: true },
    { title: 'Software QA & Automation Testing', href: '/services/qa' },
    { title: 'Dedicated Software Teams', href: '/services/dedicated-teams' }
  ],
  cta: {
    eyebrow: 'BUILDING OR EVOLVING AN ATLASSIAN APP?',
    title: 'Add the Engineering & QA Capacity Your Product Needs',
    description: 'TECUNIQUE can support Atlassian app vendors with dedicated software engineers, QA specialists, automation expertise, Forge development and long-term product knowledge.',
    buttonText: 'Discuss Your Atlassian App Needs',
    buttonHref: '/contact',
    secondaryText: 'Explore Atlassian App Development & QA',
    secondaryHref: '/services/atlassian'
  },
  client: 'Appfire'
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const result = await db.collection('case-studies').updateOne(
    { id: 'appfire' },
    { 
      $set: appfireData,
      $unset: { logo: "", image: "" }
    },
    { upsert: true }
  );
  console.log('MongoDB update successful for Appfire:', result);
  await client.close();
}
main().catch(console.error);
