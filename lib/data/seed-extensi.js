require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const extensiData = {
  id: 'extensi',
  company: 'eXtensi',
  product: 'Team Hub for Confluence',
  logo: '/images/companies/extensi.png',
  industry: 'Atlassian / Confluence Apps',
  category: 'Dedicated QA Automation Engineering',
  partnership: 'October 2025 – June 2026',
  location: 'Poland / Global',
  initials: 'EX',
  color: '#0284c7',
  gradient: 'from-sky-500 to-blue-600',
  eyebrow: 'EXTENSI / TEAM HUB FOR CONFLUENCE',
  heroTitle: 'Scaling Confluence Test Automation with Playwright, TypeScript & AI-Assisted Engineering',
  tagline: 'Scaling Confluence Test Automation with Playwright, TypeScript & AI-Assisted Engineering',
  heroSubtitle: 'How TECUNIQUE embedded dedicated QA automation expertise into eXtensi’s engineering workflow—enhancing its existing automation framework, collaborating closely with developers and stakeholders, and scaling automated coverage for Team Hub for Confluence through Playwright, TypeScript and AI-assisted engineering.',
  seoTitle: 'Team Hub QA Automation Case Study | TECUNIQUE',
  metaDescription: 'See how TECUNIQUE helped eXtensi enhance and scale Team Hub QA automation using Playwright, TypeScript, AI-assisted test design, Claude Code and engineer-led validation.',
  atAGlance: {
    client: 'eXtensi',
    product: 'Team Hub for Confluence',
    ecosystem: 'Atlassian Marketplace / Confluence Cloud',
    engagement: 'Dedicated QA Automation Engineering',
    relationship: 'October 2025 – June 2026',
    coreAutomation: 'Playwright · TypeScript',
    aiAssisted: 'AI-assisted test design · Claude Code',
    workflow: 'Jira · Bitbucket · Bamboo',
    milestone: 'Close to 300 tests · 100% planned coverage'
  },
  description: 'eXtensi wanted to expand automated testing across Team Hub for Confluence without creating a disconnected parallel QA process, enhancing its existing Playwright + TypeScript framework and collaborating directly with its developers.',
  solution: 'TECUNIQUE embedded a dedicated QA automation engineer who worked within eXtensi’s existing framework and Bitbucket/Bamboo delivery pipeline, using AI-assisted test design and Claude Code to scale test coverage to close to 300 tests with 100% planned coverage.',
  sections: [
    {
      title: 'Product Context',
      subtitle: 'Team Hub for Confluence',
      content: 'Team Hub for Confluence is an eXtensi app for Confluence Cloud designed to bring company communications and employee-engagement activities into a centralized experience within Confluence.\n\nAs the product evolved, eXtensi wanted to expand automated testing across its growing functional scope and strengthen the automation foundation supporting continued development.'
    },
    {
      title: 'The QA Challenge',
      subtitle: 'Scaling Automated Coverage Without Creating a Parallel QA Process',
      content: 'Team Hub had a substantial and growing set of functional scenarios requiring reliable automated coverage.\n\nHowever, the objective was not simply to create standalone automation scripts. eXtensi already had an existing automation framework and established development workflow. TECUNIQUE needed to understand that environment, work within it, improve it where necessary, and expand automated coverage without introducing a disconnected QA process.\n\nThe dedicated QA automation engineer also needed to work closely with eXtensi’s developers and stakeholders, interpret Jira user stories, understand evolving product behaviour, and ensure that automation remained aligned with actual development changes.\n\nWith a defined project timeframe, productivity and a repeatable automation workflow were also important.'
    },
    {
      title: 'Understanding & Improving the Existing Framework',
      subtitle: 'Working with What Already Existed — Then Making It Better',
      content: 'The engagement began with a detailed understanding of eXtensi’s existing automation setup, Team Hub functionality, development practices and testing workflow.\n\nRather than introducing a separate TECUNIQUE-owned framework, the dedicated engineer worked within eXtensi’s existing Playwright + TypeScript environment.\n\nAs the project progressed, the automation framework was enhanced and improved to better support the expanding Team Hub test suite, broader functional coverage and ongoing maintainability.\n\nThis improved foundation then supported progressive automation across the product’s functional scenarios.'
    },
    {
      title: 'Embedded in eXtensi’s Engineering Workflow',
      subtitle: 'Day-to-Day Collaboration with Developers & Stakeholders',
      content: 'The dedicated TECUNIQUE engineer worked closely with eXtensi’s developers and stakeholders on a day-to-day basis rather than operating as a separate external testing function.\n\nThe collaboration included reviewing Jira user stories, clarifying requirements and expected behaviour, understanding implementation changes, discussing relevant test scenarios, reviewing automation results, investigating issues, and coordinating how new tests should fit into the existing framework and delivery pipeline.\n\nThis allowed QA automation to remain connected to the product-development process instead of becoming a separate script-development activity.'
    },
    {
      title: 'Dedicated Automation Team',
      subtitle: 'Dedicated Automation Engineering with Senior Support',
      content: 'The engagement centred on a dedicated TECUNIQUE QA automation engineer who worked closely with eXtensi’s development team and stakeholders throughout the project.\n\nAdditional senior automation expertise was available for framework guidance, mentoring, reviews and technical problem solving where required.\n\nThis model provided continuity in day-to-day implementation while allowing the dedicated engineer to draw on broader TECUNIQUE automation expertise as the framework and test suite evolved.'
    },
    {
      title: 'Productivity & Time-Bound Delivery',
      subtitle: 'Using AI to Increase Engineering Productivity',
      content: 'A defining aspect of the engagement was the extensive use of AI across both test design and automation implementation.\n\nAI helped the engineer transform Jira user stories into structured test scenarios more efficiently, while Claude Code accelerated implementation of the reviewed scenarios in Playwright + TypeScript.\n\nBecause engineers continued to validate the generated output throughout the process, the team was able to increase productivity and delivery speed without removing human engineering oversight.\n\nThis approach helped complete the required automation scope within the defined project timeframe.'
    }
  ],
  engagementPhases: [
    {
      phase: 'Phase 1',
      title: 'Understand & Strengthen',
      desc: 'The initial phase focused on understanding the application and existing automation architecture, validating the working approach, improving the Playwright + TypeScript framework, and establishing a strong foundation for larger-scale implementation.'
    },
    {
      phase: 'Phase 2',
      title: 'Expand & Integrate',
      desc: 'The subsequent phase focused on progressively expanding automated coverage across Team Hub while continuing to improve the framework. Tests were implemented in batches, reviewed, executed, committed into Bitbucket and integrated with Bamboo CI.'
    }
  ],
  aiWorkflowSteps: [
    {
      step: '01',
      title: 'Jira User Story',
      subtitle: 'Understand the requirement',
      desc: 'The engineer reviews the Jira user story, acceptance criteria and expected application behaviour.'
    },
    {
      step: '02',
      title: 'AI-Assisted Test Design',
      subtitle: 'Develop test coverage faster',
      desc: 'AI is used extensively to help analyse the requirement and generate relevant functional test scenarios and test cases.'
    },
    {
      step: '03',
      title: 'Engineer Review',
      subtitle: 'Validate and refine the tests',
      desc: 'The QA automation engineer reviews the AI-generated test cases, refines them where needed and confirms that they accurately represent the user story and expected behaviour.'
    },
    {
      step: '04',
      title: 'Claude Code Automation',
      subtitle: 'Accelerate implementation',
      desc: 'Claude Code assists the engineer in converting approved test cases into Playwright + TypeScript automation within eXtensi’s existing framework.'
    },
    {
      step: '05',
      title: 'Engineer Validation',
      subtitle: 'Review, execute and improve',
      desc: 'The engineer reviews the generated code, corrects or improves it where necessary, executes the automation and verifies that the result behaves correctly.'
    },
    {
      step: '06',
      title: 'Commit & Integrate',
      subtitle: 'Move validated automation into delivery',
      desc: 'Only reviewed and validated automation is committed to Bitbucket and incorporated into eXtensi’s Bamboo CI workflow.'
    }
  ],
  humanControlCallout: {
    title: 'AI Accelerated the Engineer — It Did Not Replace the Engineer',
    content: 'AI was used as an engineering accelerator throughout the project, but responsibility for quality remained with the QA automation engineer. The engineer remained responsible for understanding the requirement, evaluating generated test scenarios, reviewing automation code, correcting implementation issues, executing the tests, validating product behaviour and approving the code before it entered the client’s repository.'
  },
  workflowTools: [
    {
      name: 'Jira',
      role: 'Requirements & Collaboration',
      desc: 'User stories, acceptance criteria, requirement clarification and project progress.'
    },
    {
      name: 'Playwright + TypeScript',
      role: 'Automation Engineering',
      desc: 'Framework enhancement and implementation of Team Hub automated tests.'
    },
    {
      name: 'Claude Code',
      role: 'AI-Assisted Development',
      desc: 'Used extensively to accelerate automation implementation following test-case review.'
    },
    {
      name: 'Bitbucket',
      role: 'Source Control',
      desc: 'Reviewed and validated automation committed into eXtensi’s repository.'
    },
    {
      name: 'Bamboo',
      role: 'Continuous Integration',
      desc: 'Automation integrated into the client’s existing CI and engineering delivery process.'
    }
  ],
  outcomeMetric: {
    primaryMetric: '~300',
    primaryLabel: 'Automated Tests Built for Team Hub',
    secondaryMetric: '100%',
    secondaryLabel: 'Of Planned Test Coverage Achieved',
    timeframe: 'October 2025 – June 2026',
    desc: 'Over approximately nine months, the Team Hub automation suite grew to close to 300 tests, with 100% of the planned test coverage achieved by the end of June 2026. The combination of framework enhancement, Playwright + TypeScript automation, close collaboration with eXtensi’s engineering team and extensive AI-assisted engineering helped the project progress efficiently through a substantial functional testing scope.'
  },
  techStack: [
    {
      category: 'Test Automation',
      subtitle: 'Core Framework & Scripting',
      items: ['Playwright', 'TypeScript']
    },
    {
      category: 'AI-Assisted Engineering',
      subtitle: 'Productivity & Implementation',
      items: ['Claude Code', 'AI-Assisted Test Design']
    },
    {
      category: 'Engineering & Delivery',
      subtitle: 'Source, CI & Project Tracking',
      items: ['Jira', 'Bitbucket', 'Bamboo']
    },
    {
      category: 'Platform & Ecosystem',
      subtitle: 'Atlassian App Hosting',
      items: ['Confluence Cloud', 'Atlassian Marketplace']
    }
  ],
  milestones: [
    {
      title: 'October 2025 — Engagement Begins',
      description: 'Dedicated QA automation work starts around Team Hub for Confluence.'
    },
    {
      title: 'Understand & Improve',
      description: 'Existing framework, application and engineering workflow studied and enhanced.'
    },
    {
      title: 'Scale Automation',
      description: 'Functional scenarios progressively converted into Playwright + TypeScript tests.'
    },
    {
      title: 'AI-Assisted Engineering',
      description: 'AI used extensively for test design and Claude Code-assisted automation implementation.'
    },
    {
      title: 'June 2026 — ~300 Tests & 100% Coverage',
      description: 'Defined Team Hub testing scope completed with 100% planned coverage achieved.'
    }
  ],
  relatedServices: [
    { title: 'Software QA & Automation Testing', href: '/services/qa', primary: true },
    { title: 'Atlassian App Development & QA', href: '/services/atlassian' },
    { title: 'Dedicated Software Teams', href: '/services/dedicated-teams' }
  ],
  cta: {
    eyebrow: 'NEED TO SCALE YOUR TEST AUTOMATION?',
    title: 'Accelerate QA Automation with Playwright & AI-Assisted Engineering',
    description: 'Build reliable automated test coverage with experienced QA engineers who can work within your existing framework, collaborate with your development team, and use modern automation and AI-assisted engineering practices.',
    buttonText: 'Discuss Your QA Requirements',
    buttonHref: '/contact',
    secondaryText: 'Explore QA & Automation',
    secondaryHref: '/services/qa'
  },
  image: '/images/companies/extensi.png',
  client: 'eXtensi'
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const result = await db.collection('case-studies').updateOne(
    { id: 'extensi' },
    { $set: extensiData },
    { upsert: true }
  );
  console.log('MongoDB update successful for eXtensi:', result);
  await client.close();
}
main().catch(console.error);
