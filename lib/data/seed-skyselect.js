require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

const skyselectData = {
  id: 'skyselect',
  company: 'SkySelect',
  product: 'Aviation Procurement Platform & Operations',
  logo: '/images/companies/skyselect.svg',
  industry: 'Aviation Procurement Technology',
  category: 'Build · Operate · Transition',
  partnership: 'Approx. 2-Year Engagement (Planned Transition)',
  location: 'India & United States',
  initials: 'SS',
  color: '#0284c7',
  gradient: 'from-sky-500 to-blue-600',
  eyebrow: 'SKYSELECT / INDIA TEAM SETUP',
  heroTitle: 'From 7 to 60+: Building and Transitioning SkySelect’s India Team',
  tagline: 'From 7 to 60+: Building and Transitioning SkySelect’s India Team',
  heroSubtitle: 'How TECUNIQUE helped SkySelect establish and rapidly scale its India operation before its own local entity was ready—supporting recruitment, employment, HR, infrastructure, and operations through to the eventual team transition.',
  seoTitle: 'SkySelect India Team Build & Transition Case Study',
  metaDescription: 'See how TECUNIQUE helped SkySelect establish and rapidly scale its India technical and operations team from 7 to 60+ professionals before transitioning to SkySelect India.',
  atAGlance: {
    client: 'SkySelect',
    industry: 'Aviation Procurement Technology',
    engagement: 'Build · Operate · Transition',
    duration: 'Approximately 2 years',
    teamGrowth: '~7 → 60+ professionals',
    teamComposition: 'Software Engineering · QA · Operations',
    clientControl: 'SkySelect interviewed, selected members & managed delivery',
    tecuniqueScope: 'Recruitment · Employment · Payroll · HR · Benefits · Infrastructure · Local Operations · Transition Support',
    location: 'India operation supporting a US-led company',
    milestone: 'Successful transfer to SkySelect India'
  },
  description: 'SkySelect wanted to build a substantial technical and business operations team in India quickly, but had not yet established its own Indian corporate entity.',
  solution: 'TECUNIQUE provided a Build–Operate–Transition model, handling recruitment, employment, payroll, HR, benefits, infrastructure, and local administration while SkySelect selected talent and managed delivery.',
  sections: [
    {
      title: 'The Business Context',
      subtitle: 'Technology and Operations for Aviation Procurement',
      content: 'SkySelect provides procurement technology and services for airlines and Maintenance, Repair and Overhaul organisations (MROs), helping aviation purchasing teams manage sourcing, procurement, order tracking, and related supply-chain workflows.\n\nAs the business expanded, SkySelect wanted to establish a substantial team in India covering both software engineering and business operations.'
    },
    {
      title: 'How the Relationship Started',
      subtitle: 'An Introduction Built on Previous Experience',
      content: 'SkySelect had appointed Parag Mehta to establish and lead its India operation. Parag already knew TECUNIQUE well, having previously worked with the company as a Project Manager earlier in his career.\n\nWhen SkySelect began planning its India team, Parag introduced TECUNIQUE to SkySelect’s management in the USA. That existing familiarity opened the conversation around how TECUNIQUE could help SkySelect start recruiting and operating locally before its own Indian entity was ready.'
    },
    {
      title: 'The Challenge',
      subtitle: 'Build the Team Now. Establish the Entity Later.',
      content: 'SkySelect wanted to build its India operation quickly, but at that stage the company had not yet established its own Indian subsidiary.\n\nWaiting for the complete entity-formation process before recruiting would have delayed team building. At the same time, hiring without an established local employer created practical challenges around candidate attraction, employment contracts, payroll, statutory administration, employee benefits, HR, infrastructure, and day-to-day local operations.\n\nSkySelect therefore needed a local partner that could provide the recruitment and operating structure required to start immediately—while allowing SkySelect to retain control over who joined the team and how that team was managed.'
    },
    {
      title: 'A Planned Transition from the Start',
      content: 'The eventual move to SkySelect India was not an unexpected end to the engagement. It was aligned with the longer-term operating model from the beginning.\n\nTECUNIQUE helped SkySelect enter India quickly, build and stabilize the organization, and operate the local team while the client prepared its own Indian entity.\n\nAfter approximately two years, once SkySelect India was established and the operation was fully functional, the team members were transferred to the new entity.'
    },
    {
      title: 'What This Engagement Demonstrates',
      content: 'The SkySelect engagement demonstrates how TECUNIQUE can help an international company establish an India team before its own local entity is ready.\n\nSkySelect retained control over talent selection, team management, and delivery, while TECUNIQUE provided the recruitment, employment, and operational platform required to build, scale, and eventually transition the organization.'
    }
  ],
  engagementBlocks: [
    {
      title: 'Recruit & Build',
      description: 'TECUNIQUE sourced candidates, performed initial evaluation, coordinated recruitment, and helped SkySelect build the required technical and operations teams.',
      scope: 'Talent Sourcing'
    },
    {
      title: 'Client-Selected Talent',
      description: 'SkySelect interviewed and selected the professionals who would join its team, retaining control over candidate approval and team composition.',
      scope: 'Client Control'
    },
    {
      title: 'Employ & Operate',
      description: 'TECUNIQUE employed the selected professionals locally and managed payroll, HR administration, employee benefits, statutory requirements, infrastructure, and ongoing operational support.',
      scope: 'Local Operations'
    },
    {
      title: 'Transition Support',
      description: 'Once SkySelect’s own Indian entity was ready and the team had become established, TECUNIQUE supported the transition of employees and local operating responsibility to SkySelect India.',
      scope: 'Planned Transfer'
    }
  ],
  responsibilityCallout: {
    title: 'Clear Responsibility Boundary',
    content: 'SkySelect retained responsibility for candidate approval, team management, technical priorities, individual performance, and deliverables. TECUNIQUE was responsible for recruitment support, local employment, HR, payroll, infrastructure, and operational administration.'
  },
  teamGrowthMetric: {
    start: '~7',
    end: '60+',
    label: 'Team Growth in ~1 Year',
    description: 'From approximately 7 to more than 60 professionals across software engineering, quality assurance, and business operations.'
  },
  teamCategories: [
    {
      type: 'Technical Team',
      role: 'Software Engineers & QA Specialists',
      desc: 'Software engineers and QA specialists working on SkySelect’s in-house aviation procurement platform.',
      tech: 'Development (.NET · C#) | QA Automation (Selenium · .NET)',
      note: 'These technologies describe the SkySelect product environment in which the client-selected team worked. TECUNIQUE did not own the software roadmap or engineering-delivery outcomes.'
    },
    {
      type: 'Operations Team',
      role: 'Aviation Procurement & Delivery Specialists',
      desc: 'An India-based operations team supporting procurement, sourcing, and delivery activities for SkySelect’s airline and MRO customers.',
      tech: 'Aviation Sourcing · Order Tracking · Procurement Operations',
      note: 'The engagement went beyond building a software team: TECUNIQUE helped provide the local operating foundation for a broader SkySelect India organization.'
    }
  ],
  selectionFlow: [
    { step: '01', title: 'Define Requirements', desc: 'SkySelect identified the roles, domain skills, and capacity needed.' },
    { step: '02', title: 'Source & Evaluate', desc: 'TECUNIQUE sourced candidates and conducted initial technical screening.' },
    { step: '03', title: 'Client Interview', desc: 'SkySelect technical and operational leads interviewed candidates directly.' },
    { step: '04', title: 'Client Approval', desc: 'SkySelect selected the exact professionals they wanted on the team.' },
    { step: '05', title: 'Local Onboarding', desc: 'TECUNIQUE employed, equipped, and onboarded selected candidates in India.' }
  ],
  operationalLayer: [
    { title: 'Recruitment', desc: 'Candidate sourcing, initial evaluation, coordination, and onboarding.' },
    { title: 'Employment', desc: 'Local employment structure, offer letters, and contracts.' },
    { title: 'Payroll', desc: 'Salary processing, disbursements, and payroll administration.' },
    { title: 'HR Support', desc: 'Ongoing HR administration, employee support, and engagement.' },
    { title: 'Benefits', desc: 'Employee healthcare, benefits, and local arrangements.' },
    { title: 'Statutory Administration', desc: 'Taxation, statutory filings, and employment administrative requirements.' },
    { title: 'Infrastructure', desc: 'Workplace facilities, IT equipment, and operational setup.' },
    { title: 'Local Operations', desc: 'Day-to-day administration needed to keep the India organization functioning.' }
  ],
  lifecycleSteps: [
    {
      phase: '01',
      title: 'Introduction & Planning',
      desc: 'Parag connects TECUNIQUE with SkySelect’s US management and the India team requirements are defined.'
    },
    {
      phase: '02',
      title: 'Recruit & Select',
      desc: 'TECUNIQUE sources and evaluates candidates; SkySelect interviews and approves them.'
    },
    {
      phase: '03',
      title: 'Employ & Operate',
      desc: 'TECUNIQUE provides the local employment, payroll, HR, benefits, infrastructure, and operational framework.'
    },
    {
      phase: '04',
      title: 'Scale (7 → 60+)',
      desc: 'The India organization grows from approximately 7 to more than 60 professionals in roughly one year.'
    },
    {
      phase: '05',
      title: 'Establish SkySelect India',
      desc: 'Once the team is stable and operational, SkySelect establishes its own Indian subsidiary with TECUNIQUE transition support.'
    },
    {
      phase: '06',
      title: 'Transfer the Team',
      desc: 'Team members move from TECUNIQUE to SkySelect India, and the client assumes direct local employment and operating responsibility.'
    }
  ],
  milestones: [
    {
      title: 'Engagement Begins',
      description: 'SkySelect engages TECUNIQUE to help establish its initial India team.'
    },
    {
      title: 'Initial Team (~7 Professionals)',
      description: 'First cohort onboarded to start technical and operational workflows.'
    },
    {
      title: 'Rapid Scaling to 60+',
      description: 'Team expands to 60+ across engineering, QA, and operations in roughly one year.'
    },
    {
      title: 'Stable India Operation',
      description: 'Client-managed team becomes fully functional under TECUNIQUE’s local structure.'
    },
    {
      title: 'SkySelect India Established',
      description: 'SkySelect forms its own Indian corporate entity.'
    },
    {
      title: 'Team Transition',
      description: 'Employees and operating responsibility transferred to SkySelect India.'
    }
  ],
  relatedServices: [
    { title: 'Dedicated Software Teams', href: '/services/dedicated-teams', primary: true },
    { title: 'Product Engineering & Custom Software', href: '/services/product-engineering' },
    { title: 'Software QA & Automation Testing', href: '/services/qa' }
  ],
  cta: {
    eyebrow: 'BUILDING A TEAM IN INDIA?',
    title: 'Start Building Your India Team Before Your Local Entity Is Ready',
    description: 'TECUNIQUE can help you recruit, employ, and operate client-selected professionals in India while you retain control over the team, priorities, and delivery.',
    buttonText: 'Discuss Your India Team Requirements',
    buttonHref: '/contact',
    secondaryText: 'Explore Dedicated Teams',
    secondaryHref: '/services/dedicated-teams'
  },
  image: '/images/companies/skyselect.svg',
  client: 'SkySelect'
};

async function main() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const result = await db.collection('case-studies').updateOne(
    { id: 'skyselect' },
    { $set: skyselectData },
    { upsert: true }
  );
  console.log('MongoDB update successful for SkySelect final refinements:', result);
  await client.close();
}
main().catch(console.error);
