require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const qotilabsData = {
  id: 'qotilabs',
  company: 'Qotilabs',
  product: 'Rich Filters for Jira Dashboards and related Atlassian apps',
  logo: '/images/companies/quotilabs.png',
  industry: 'Atlassian Marketplace',
  category: 'Dedicated QA Engineering & Automation',
  partnership: 'Since 2021 (Continuing Post-Acquisition)',
  location: 'France',
  initials: 'QL',
  color: '#f43f5e',
  gradient: 'from-rose-500 to-pink-600',
  eyebrow: 'QOTILABS / RICH FILTERS',
  heroTitle: 'Scaling Product Quality for Rich Filters with a Dedicated QA Team',
  tagline: 'Scaling Product Quality for Rich Filters with a Dedicated QA Team',
  heroSubtitle: 'How Qotilabs expanded its QA capacity with TECUNIQUE to support product releases, test automation, Cloud migration, and the continued evolution of its Atlassian Marketplace apps.',
  seoTitle: 'Rich Filters QA & Automation Case Study',
  metaDescription: 'See how TECUNIQUE supported Qotilabs with dedicated QA engineering, automation, release validation, and Data Center-to-Cloud migration for Rich Filters and related Atlassian apps.',
  atAGlance: {
    client: 'Qotilabs',
    product: 'Rich Filters for Jira Dashboards and related Atlassian apps',
    ecosystem: 'Atlassian Marketplace',
    engagement: 'Dedicated QA Engineering, QA Automation & Cloud Migration Validation',
    relationship: 'Started in early 2021',
    location: 'France',
    milestone: 'Qotilabs acquired by Appfire — 2023'
  },
  description: 'Qotilabs needed a dedicated Quality Assurance (QA) engineering team who not only excelled in software testing but were also self-organized, self-driven, and capable of providing valuable input to product development.',
  solution: 'TECUNIQUE provided dedicated QA engineers supporting functional testing, regression, Java-based snapshot automation, Data Center-to-Cloud migration validation, and release validation across Qotilabs’ Atlassian apps.',
  sections: [
    {
      title: 'The Product',
      content: 'Qotilabs, led by Dan Mihalache, developed Rich Filters for Jira Dashboards and other Atlassian Marketplace apps. Rich Filters evolved into an established Jira dashboard solution used by organizations across different industries and markets.\n\nProducts involved in the engagement included:\n• Rich Filters for Jira Dashboards\n• Shared Ownership for Dashboards / Filters\n• Collapsible Dashboard Sidebar'
    },
    {
      title: 'How the Relationship Started',
      content: 'By early 2021, Qotilabs wanted to strengthen the QA function supporting Rich Filters and its other Atlassian apps. Dan was looking for QA engineers who could work independently, understand the product deeply, and contribute useful feedback to the development team.\n\nDan knew David Fischer of Innovalog, who was already working successfully with TECUNIQUE. After discussing Qotilabs\' QA requirements with David, TECUNIQUE was referred based on David\'s experience of the existing collaboration.\n\nQotilabs initially engaged one TECUNIQUE QA engineer. As the working relationship developed, the engagement expanded to include additional engineers.'
    },
    {
      title: 'The QA Challenge',
      content: 'Qotilabs needed more than additional testing capacity. The engineers had to be self-organized, self-driven, able to understand complex product workflows, and comfortable contributing feedback as the products evolved.\n\nTheir responsibilities included test planning, designing test scenarios and test cases, functional and regression testing, defect management, release validation, test automation, and close collaboration with the product and development team.'
    },
    {
      title: 'The TECUNIQUE Engagement',
      content: 'TECUNIQUE partnered with Qotilabs across five core capability areas:\n\n• Dedicated QA Engineering: Qotilabs initially engaged one TECUNIQUE QA engineer, with additional engineers added as the collaboration expanded.\n\n• Product & Release Testing: The QA team supported test planning, functional testing, regression testing, defect management, and recurring release validation across Qotilabs\' Atlassian products.\n\n• QA Automation: Automation became an important part of the QA process, supporting repeatable sanity and regression validation as the products and release cycles evolved.\n\n• Cloud Migration QA: TECUNIQUE\'s QA engineers supported detailed validation as product capabilities were migrated from Jira Data Center to Cloud.\n\n• Embedded Product Collaboration: TECUNIQUE engineers worked closely with Qotilabs\' developers and product team, contributing product feedback and operating as an integrated part of the client\'s delivery process rather than as a separate external testing function.'
    },
    {
      title: 'Building Repeatable Automation',
      content: 'Rich Filters supported a large variety of dashboard configurations and widgets that needed to remain stable as the product evolved. Qotilabs used an in-house Java-based automation framework together with controlled test datasets and predefined dashboard configurations.\n\nThe automation generated dashboards and widgets using known datasets, captured snapshots of the resulting output, and automatically compared them against stored baseline snapshots. Differences could then be identified quickly following code changes.\n\nThis provided a practical way to perform recurring sanity validation and supported broader regression testing around frequent product updates.'
    },
    {
      title: 'Validating the Data Center to Cloud Migration',
      content: 'As Qotilabs migrated product capabilities from Jira Data Center to Cloud, QA required detailed validation of the migrated functionality. The team needed to confirm that features available in the established Data Center product were correctly represented and behaved as expected in the Cloud version.\n\nTECUNIQUE\'s QA engineers tested migrated features in detail, reviewing functionality, usability, user experience, expected behaviour, and response behaviour against the existing Data Center implementation.\n\nThe team also performed regression testing across migrated and existing workflows, helping identify gaps or defects as the Cloud product evolved through successive releases.'
    },
    {
      title: 'Working as Part of the Qotilabs Team',
      content: 'Over time, TECUNIQUE\'s QA engineers developed deeper knowledge of the products, customer workflows, release processes, and the expectations of the Qotilabs team.\n\nThe engineers worked closely with Qotilabs\' developers and product stakeholders, participating in the ongoing product cycle rather than operating as a disconnected testing vendor.\n\nThis continuity allowed the QA team to contribute context and feedback as new features, migration work, automation coverage, and release requirements evolved.'
    },
    {
      title: 'Supporting Frequent, Confident Releases',
      content: 'With dedicated QA embedded in the product cycle, Qotilabs could validate new features, regression coverage, and product updates through recurring release cycles.\n\nThe growing automation coverage provided quicker feedback following code changes, while the QA team\'s product knowledge supported detailed validation across ongoing development and Cloud migration work.'
    },
    {
      title: 'A New Chapter with Appfire',
      content: 'In 2023, Qotilabs and its portfolio of Atlassian apps became part of Appfire.\n\nThe TECUNIQUE engagement continued following the acquisition, providing continuity around the products and the established QA collaboration.'
    }
  ],
  engagementBlocks: [
    {
      title: 'Dedicated QA Engineering',
      description: 'Qotilabs initially engaged one TECUNIQUE QA engineer, with additional engineers added as the collaboration expanded.',
      scope: 'Dedicated Team'
    },
    {
      title: 'Product & Release Testing',
      description: 'The QA team supported test planning, functional testing, regression testing, defect management, and recurring release validation across Qotilabs\' Atlassian products.',
      scope: 'Functional & Regression'
    },
    {
      title: 'QA Automation',
      description: 'Automation became an important part of the QA process, supporting repeatable sanity and regression validation as the products and release cycles evolved.',
      scope: 'Java & Test Framework'
    },
    {
      title: 'Cloud Migration QA',
      description: 'TECUNIQUE\'s QA engineers supported detailed validation as product capabilities were migrated from Jira Data Center to Cloud.',
      scope: 'Data Center to Cloud'
    },
    {
      title: 'Embedded Product Collaboration',
      description: 'TECUNIQUE engineers worked closely with Qotilabs\' developers and product team, contributing product feedback and operating as an integrated part of delivery.',
      scope: 'Integrated Delivery'
    }
  ],
  automationWorkflow: [
    { step: '01', title: 'Fixed Test Dataset', desc: 'Predefined data & dashboard configurations' },
    { step: '02', title: 'Generate Dashboards & Widgets', desc: 'Automated rendering of complex widgets' },
    { step: '03', title: 'Capture Snapshots', desc: 'Visual & data state snapshot capture' },
    { step: '04', title: 'Compare Baseline', desc: 'Automated diff against stored goldens' },
    { step: '05', title: 'Identify Differences', desc: 'Rapid feedback following code changes' }
  ],
  migrationSteps: [
    { step: '01', title: 'Understand Existing Data Center Behaviour', desc: 'Identify existing functionality and workflows.' },
    { step: '02', title: 'Validate Migrated Cloud Features', desc: 'Test corresponding Cloud features in detail.' },
    { step: '03', title: 'Compare the Product Experience', desc: 'Review functionality, usability and expected behaviour.' },
    { step: '04', title: 'Regression & Release Validation', desc: 'Re-test migrated and existing workflows as subsequent releases evolve.' }
  ],
  techStack: [
    {
      category: 'Product / Application Stack',
      subtitle: 'Qotilabs technologies tested',
      items: ['TypeScript', 'React.js', 'Node.js']
    },
    {
      category: 'Atlassian & QA Collaboration',
      subtitle: 'Workflow & documentation tools',
      items: ['Jira Cloud & Data Center', 'Confluence Documentation', 'Atlassian Marketplace', 'Defects, Epics & User Stories']
    },
    {
      category: 'QA Automation',
      subtitle: 'In-house testing stack',
      items: ['Java', 'In-house Automation Framework', 'Fixed Test Datasets', 'Dashboard / Widget Generation', 'Snapshot & Baseline Comparison']
    }
  ],
  milestones: [
    {
      title: '2021 — Engagement Begins',
      description: 'Qotilabs starts working with TECUNIQUE with one dedicated QA engineer.'
    },
    {
      title: 'Team Expansion',
      description: 'Additional engineering capacity is added as the relationship develops.'
    },
    {
      title: 'Automation Coverage Evolves',
      description: 'Java-based repeatable automation becomes part of ongoing QA.'
    },
    {
      title: 'Cloud Migration Support',
      description: 'TECUNIQUE QA engineers validate functionality as Qotilabs moves product capabilities from Data Center to Cloud.'
    },
    {
      title: '2023 — Appfire Acquisition',
      description: 'Qotilabs and its product portfolio become part of Appfire.'
    },
    {
      title: 'Collaboration Continues',
      description: 'TECUNIQUE’s engagement continues after the acquisition.'
    }
  ],
  results: [
    {
      metric: 'Since 2021',
      label: 'Partnership Duration'
    },
    {
      metric: 'End-to-End',
      label: 'QA & Regression'
    },
    {
      metric: 'Java-Based',
      label: 'Snapshot Automation'
    },
    {
      metric: 'DC to Cloud',
      label: 'Migration QA'
    }
  ],
  testimonials: [
    {
      quote: 'The professionalism and expertise of TECUNIQUE’s QA consultants has played a key role in improving our operational efficiency and in delivering outstanding apps appreciated by thousands of customers.',
      author: 'Dan Mihalache',
      role: 'Founder & CEO, Qotilabs'
    }
  ],
  testimonial: {
    quote: 'The professionalism and expertise of TECUNIQUE’s QA consultants has played a key role in improving our operational efficiency and in delivering outstanding apps appreciated by thousands of customers.',
    author: 'Dan Mihalache',
    role: 'Founder & CEO, Qotilabs'
  },
  endClientsNote: 'Rich Filters is trusted and used by engineering teams across global organizations including Amazon, Cisco, Boeing, Google, Samsung, BMW, Microsoft, Visa, and Ubisoft.',
  relatedServices: [
    { title: 'Software QA & Automation Testing', href: '/services/qa' },
    { title: 'Dedicated Software Teams', href: '/services/dedicated-teams' },
    { title: 'Atlassian App Development & QA', href: '/services/atlassian' }
  ],
  cta: {
    eyebrow: 'SOFTWARE QA & AUTOMATION',
    title: 'Need a Dedicated QA Team for Your Software Product?',
    description: 'Discuss your product QA, automation, Cloud migration, or long-term testing requirements with TECUNIQUE.',
    buttonText: 'Discuss Your QA Requirements',
    buttonHref: '/contact',
    secondaryText: 'Explore QA & Automation',
    secondaryHref: '/services/qa'
  },
  image: '/images/companies/quotilabs.png',
  client: 'Qotilabs'
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const result = await db.collection('case-studies').updateOne(
    { id: 'qotilabs' },
    { $set: qotilabsData },
    { upsert: true }
  );
  console.log('MongoDB update successful for Qotilabs:', result);
  await client.close();
}
main().catch(console.error);
