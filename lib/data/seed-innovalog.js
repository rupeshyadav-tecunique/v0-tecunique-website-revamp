require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const innovalogData = {
  id: 'innovalog',
  company: 'Innovalog',
  product: 'JMWE — Jira Misc Workflow Extensions',
  logo: '/images/companies/innovalog.png',
  industry: 'Atlassian Marketplace',
  category: 'Development, QA & Tier-3 Support',
  partnership: 'Long-Term Engagement',
  location: 'France',
  initials: 'IN',
  color: '#2563eb',
  gradient: 'from-blue-600 to-indigo-600',
  eyebrow: 'INNOVALOG / JMWE',
  heroTitle: 'Scaling Jira App Development with a Long-Term Development & QA Team',
  tagline: 'Scaling Jira App Development with a Long-Term Development & QA Team',
  heroSubtitle: 'How Innovalog expanded the engineering and QA capacity behind JMWE through a long-term collaboration with TECUNIQUE across JMWE Cloud development, Cloud and Data Center QA, automation, and advanced product support.',
  sourceAttribution: 'This case study is based on a profile of David Fischer and Innovalog written by Inna Gordin and originally published by apps4agile. It has been adapted here to focus on the Innovalog–TECUNIQUE engineering partnership.',
  atAGlance: {
    client: 'Innovalog',
    product: 'JMWE — Jira Misc Workflow Extensions',
    ecosystem: 'Atlassian Marketplace',
    engagement: 'JMWE Cloud Development, Cloud & Data Center QA, QA Automation & Tier-3 Support',
    location: 'France',
    milestone: 'Innovalog / JMWE acquired by Appfire — October 2020'
  },
  description: 'As demand for JMWE grew, Innovalog needed to expand its development capacity while continuing to support an increasingly established Jira Marketplace product.',
  solution: 'TECUNIQUE provided dedicated engineering and QA teams supporting ongoing JMWE Cloud development, Cloud and Data Center QA, Selenium test automation, and Tier-3 technical support.',
  sections: [
    {
      title: 'The Product & Founder',
      content: 'David Fischer created Jira Misc Workflow Extensions (JMWE) in 2008 after identifying limitations in Jira workflow automation while working with engineering teams. What began as a free plugin grew into a commercial Atlassian Marketplace product focused on extending and automating Jira workflows.'
    },
    {
      title: 'The Challenge',
      content: 'As demand for JMWE grew, Innovalog needed to expand its development capacity while continuing to support an increasingly established Jira Marketplace product.\n\nDavid was not simply looking for additional developers. He expected engineers to understand the product, communicate openly, question technical decisions when appropriate, and focus on solving the underlying customer problem. Quality assurance and advanced customer support were also important parts of the work.'
    },
    {
      title: 'Why TECUNIQUE',
      content: 'David already knew TECUNIQUE from work at a previous company. When Innovalog needed additional development and QA capacity for JMWE, that existing familiarity made TECUNIQUE a natural option.'
    },
    {
      title: 'The TECUNIQUE Engagement',
      content: 'TECUNIQUE partnered with Innovalog across four core capability areas:\n\n• JMWE Cloud Development: TECUNIQUE engineers supported the ongoing development and evolution of JMWE Cloud as Innovalog expanded the engineering capacity behind the product.\n\n• Cloud & Data Center Quality Assurance: TECUNIQUE provided QA support across both JMWE Cloud and JMWE Data Center, covering functional testing, regression testing, release validation, and ongoing product quality.\n\n• QA Automation: Automation testing formed an important part of the QA engagement, with Selenium and Java used to build and maintain repeatable automated test coverage.\n\n• Tier-3 Technical Support: TECUNIQUE also supported Tier-3 customer issues requiring deeper technical understanding of JMWE and its workflows.\n\nScope Summary: JMWE Cloud involved both Development and QA, while JMWE Data Center focused on Quality Assurance.'
    },
    {
      title: 'Building the Working Relationship',
      content: 'The collaboration did not become effective overnight. As described in the original profile, TECUNIQUE initially needed time to adapt to David\'s working style and expectations.\n\nDavid expected engineers to communicate openly, challenge his proposed solutions when appropriate, and help ensure the team was solving customer problems in the best possible way. TECUNIQUE\'s willingness to adapt and make the relationship work became an important part of the collaboration.'
    }
  ],
  engagementBlocks: [
    {
      title: 'JMWE Cloud Development',
      description: 'TECUNIQUE engineers supported the ongoing development and evolution of JMWE Cloud as Innovalog expanded the engineering capacity behind the product.',
      scope: 'Development & QA'
    },
    {
      title: 'Cloud & Data Center Quality Assurance',
      description: 'TECUNIQUE provided QA support across both JMWE Cloud and JMWE Data Center, covering functional testing, regression testing, release validation, and ongoing product quality.',
      scope: 'Cloud & Data Center QA'
    },
    {
      title: 'QA Automation',
      description: 'Automation testing formed an important part of the QA engagement, with Selenium and Java used to build and maintain repeatable automated test coverage.',
      scope: 'Selenium & Java'
    },
    {
      title: 'Tier-3 Technical Support',
      description: 'TECUNIQUE also supported Tier-3 customer issues requiring deeper technical understanding of JMWE and its workflows.',
      scope: 'Advanced Product Support'
    }
  ],
  techStack: [
    {
      category: 'Cloud Development',
      items: ['JMWE Cloud', 'TypeScript', 'React.js', 'Node.js']
    },
    {
      category: 'Atlassian Platform',
      items: ['Jira Cloud', 'Jira Data Center', 'Atlassian Marketplace', 'Jira Workflow Extensions']
    },
    {
      category: 'QA Automation',
      items: ['Selenium', 'Java', 'Functional Testing', 'Regression Testing', 'Automated Regression Coverage']
    }
  ],
  milestones: [
    {
      title: 'Long-Term Product Support',
      description: 'Development, QA and Tier-3 support around JMWE.'
    },
    {
      title: 'Product Growth',
      description: 'JMWE continued growing in popularity during the Innovalog–TECUNIQUE collaboration.'
    },
    {
      title: 'Appfire Acquisition — 2020',
      description: 'Innovalog / JMWE became part of Appfire in October 2020.'
    },
    {
      title: 'Product Continuity',
      description: 'Long-term involvement helped build and retain deeper product context over time.'
    }
  ],
  results: [
    {
      metric: 'Cloud Dev',
      label: 'JMWE Cloud Engineering'
    },
    {
      metric: 'Full QA',
      label: 'Cloud & Data Center'
    },
    {
      metric: 'Automated',
      label: 'Regression Coverage'
    },
    {
      metric: 'Tier-3',
      label: 'Advanced Support'
    }
  ],
  testimonials: [
    {
      quote: 'Our top-selling and top-rated Jira app, JMWE, owes much of its success to our partnership with TECUNIQUE. Their dedicated engineers in both software development and QA seamlessly integrated into our company, playing a crucial role in our achievements. As a founder and CEO of Innovalog, I highly recommend them to any agile software company looking for a reliable partner, and am thankful for their tech-savvy and comprehensive support.',
      author: 'David Fischer',
      role: 'Founder & CEO, Innovalog'
    }
  ],
  testimonial: {
    quote: 'Our top-selling and top-rated Jira app, JMWE, owes much of its success to our partnership with TECUNIQUE. Their dedicated engineers in both software development and QA seamlessly integrated into our company, playing a crucial role in our achievements. As a founder and CEO of Innovalog, I highly recommend them to any agile software company looking for a reliable partner, and am thankful for their tech-savvy and comprehensive support.',
    author: 'David Fischer',
    role: 'Founder & CEO, Innovalog'
  },
  ecosystemTags: [
    'Jira Cloud',
    'Jira Data Center',
    'Atlassian Marketplace',
    'JMWE',
    'Workflow Automation'
  ],
  serviceTags: [
    'JMWE Cloud Development',
    'Cloud & Data Center Quality Assurance',
    'QA Automation',
    'Tier-3 Technical Support'
  ],
  tags: [
    'Atlassian Marketplace',
    'Jira Cloud & Data Center',
    'JMWE',
    'Workflow Automation',
    'QA Automation',
    'Tier-3 Support'
  ],
  relatedServices: [
    { title: 'Dedicated Software Teams', href: '/services/dedicated-teams' },
    { title: 'Atlassian App Development & QA', href: '/services/atlassian' },
    { title: 'Software QA & Automation Testing', href: '/services/qa' }
  ],
  cta: {
    title: 'Need a Long-Term Team for Your Atlassian App?',
    description: 'Discuss your Jira app development, QA, automation, or long-term engineering requirements with TECUNIQUE.',
    buttonText: 'Discuss Your Atlassian App Needs',
    buttonHref: '/contact'
  },
  image: '/images/companies/innovalog.png',
  client: 'Innovalog'
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const result = await db.collection('case-studies').updateOne(
    { id: 'innovalog' },
    { $set: innovalogData },
    { upsert: true }
  );
  console.log('MongoDB update successful:', result);
  await client.close();
}
main().catch(console.error);
