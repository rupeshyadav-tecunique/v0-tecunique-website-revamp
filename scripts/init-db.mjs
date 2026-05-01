import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

const blogPosts = [
  {
    id: "1",
    slug: "embracing-autonomous-self-organized-professionals",
    title: "Embracing Autonomous and Self-Organized Professionals",
    excerpt: "Autonomous professionals are more inclined to think outside the box, challenge existing norms, and explore unconventional solutions, leading to the development of cutting-edge technologies.",
    content: `Autonomous professionals are more inclined to think outside the box, challenge existing norms, and explore unconventional solutions, leading to the development of cutting-edge technologies and groundbreaking solutions that can disrupt and transform entire industries.

In today's rapidly evolving business landscape, the concept of autonomous and self-organized professionals has gained significant traction. These individuals possess a unique set of characteristics that make them invaluable assets to any organization.

## The Power of Autonomy

When professionals are given the freedom to make decisions and manage their own work, they tend to be more innovative and productive. This autonomy fosters a sense of ownership and responsibility that drives them to deliver exceptional results.

## Key Benefits

1. **Enhanced Innovation**: Without the constraints of micromanagement, autonomous professionals can explore creative solutions.
2. **Increased Productivity**: Self-organized teams often achieve more in less time.
3. **Better Problem Solving**: Independent thinking leads to unique approaches to challenges.
4. **Higher Job Satisfaction**: Autonomy contributes to employee happiness and retention.

## Building Self-Organized Teams

Creating an environment that supports autonomous professionals requires trust, clear communication, and the right tools. Organizations must be willing to let go of traditional hierarchical structures and embrace a more collaborative approach.`,
    date: "2024-03-15",
    author: "TECUNIQUE Team",
    category: "Leadership",
    readTime: "5 min read",
    image: "/images/blog/blog1.jpg",
    createdAt: new Date("2024-03-15")
  },
  {
    id: "2",
    slug: "test-automation-modern-software-development",
    title: "Test Automation in Modern Software Development",
    excerpt: "In the dynamic world of software creation, it's crucial to be fast, deliver quality, and ensure reliability. Test automation has emerged as a vital tool to help achieve these goals.",
    content: `In the dynamic world of software creation, it's crucial to be fast, deliver quality, and ensure reliability. In the realm of modern software development, organizations need to be at the cutting edge of innovation. Test automation has emerged as a vital tool to help achieve these goals.

## The Significance of Test Automation

Test automation is no longer a luxury but a necessity in modern software development. It allows teams to execute repetitive tests efficiently, freeing up valuable time for more complex testing scenarios.

## Benefits of Test Automation

1. **Speed**: Automated tests run significantly faster than manual tests.
2. **Consistency**: Every test is executed the same way, eliminating human error.
3. **Coverage**: More test cases can be covered in less time.
4. **Cost-Effective**: Long-term savings despite initial investment.

## Best Practices

- Start with a solid test automation strategy
- Choose the right tools for your tech stack
- Maintain your test suites regularly
- Integrate automation into your CI/CD pipeline
- Focus on high-value test cases first

## Implementation Tips

Successful test automation requires careful planning and execution. Teams should identify which tests to automate first, typically focusing on repetitive, high-risk, or time-consuming tests.`,
    date: "2024-02-28",
    author: "TECUNIQUE Team",
    category: "Quality Assurance",
    readTime: "6 min read",
    image: "/images/blog/blog2.jpg",
    createdAt: new Date("2024-02-28")
  },
  {
    id: "3",
    slug: "artificial-intelligence-threat-or-boon",
    title: "Artificial Intelligence - A Threat or Boon?",
    excerpt: "Artificial intelligence is a buzzword for the current decade. As in every field, from finance to education, AI is becoming an essential part of every aspect of our lives.",
    content: `Artificial intelligence is a buzzword for the current decade. It is often termed by the acronym AI. Most people are aware of it even if they don't belong to the technology industry. As in every field, from finance to education, Artificial Intelligence is becoming an essential part of every aspect.

## The AI Revolution

We are witnessing an unprecedented transformation in how businesses operate and how we live our daily lives. AI is at the forefront of this revolution, offering capabilities that were once thought impossible.

## The Boon Side

1. **Healthcare**: AI assists in early disease detection and drug discovery.
2. **Education**: Personalized learning experiences for students.
3. **Business**: Enhanced decision-making and process automation.
4. **Transportation**: Self-driving vehicles and traffic optimization.

## The Threat Perspective

1. **Job Displacement**: Automation may replace certain job roles.
2. **Privacy Concerns**: AI systems require vast amounts of data.
3. **Bias Issues**: AI can perpetuate existing biases in data.
4. **Security Risks**: AI can be used maliciously.

## Striking a Balance

The key lies in responsible AI development and deployment. Organizations must prioritize ethical considerations while harnessing the power of AI to drive innovation.`,
    date: "2024-02-10",
    author: "TECUNIQUE Team",
    category: "Technology",
    readTime: "7 min read",
    image: "/images/blog/blog3.jpg",
    createdAt: new Date("2024-02-10")
  },
  {
    id: "4",
    slug: "why-not-typescript",
    title: "WHY NOT TYPESCRIPT?",
    excerpt: "TypeScript, a programming language developed by Microsoft, is making waves in the software development community. It serves as an extension of JavaScript with static typing.",
    content: `TypeScript, a programming language developed by Microsoft, is making waves in the software development community. It serves as an extension of JavaScript, augmenting its capabilities with static typing and other valuable features.

## What is TypeScript?

TypeScript is a superset of JavaScript that adds optional static typing to the language. This means you can catch errors at compile time rather than at runtime, leading to more robust applications.

## Key Benefits

1. **Type Safety**: Catch errors before they reach production.
2. **Better IDE Support**: Enhanced autocomplete and refactoring tools.
3. **Improved Readability**: Types serve as documentation.
4. **Scalability**: Better suited for large codebases.

## When to Use TypeScript

- Large-scale applications
- Team projects with multiple developers
- Projects that require long-term maintenance
- Applications where reliability is critical

## Getting Started

Transitioning to TypeScript doesn't have to be all-or-nothing. You can gradually adopt TypeScript in existing JavaScript projects, converting files one at a time.`,
    date: "2024-01-25",
    author: "TECUNIQUE Team",
    category: "Development",
    readTime: "5 min read",
    image: "/images/blog/blog1.jpg",
    createdAt: new Date("2024-01-25")
  },
  {
    id: "5",
    slug: "rise-of-cyborg-developer",
    title: "Artificial Intelligence: The Rise of the Cyborg Developer",
    excerpt: "In the ever-evolving landscape of software development, artificial intelligence tools are emerging as essential allies for developers.",
    content: `In the ever-evolving landscape of software development, artificial intelligence (AI) tools are emerging as essential allies for developers. The modern developer is no longer working alone but in partnership with AI systems that enhance productivity and creativity.

## The Cyborg Developer Concept

The term "cyborg developer" refers to developers who seamlessly integrate AI tools into their workflow, creating a symbiotic relationship between human creativity and machine efficiency.

## AI Tools Transforming Development

1. **Code Completion**: AI suggests code as you type.
2. **Bug Detection**: Automated identification of potential issues.
3. **Code Review**: AI-assisted review processes.
4. **Documentation**: Automatic generation of code documentation.

## Benefits of AI-Assisted Development

- Faster development cycles
- Reduced bugs and technical debt
- More time for creative problem-solving
- Lower barrier to entry for new developers

## The Future

As AI continues to evolve, we can expect even more sophisticated tools that will further transform how we write and maintain software. The cyborg developer is not a future concept—it's happening now.`,
    date: "2024-01-10",
    author: "TECUNIQUE Team",
    category: "Technology",
    readTime: "6 min read",
    image: "/images/blog/blog2.jpg",
    createdAt: new Date("2024-01-10")
  },
  {
    id: "6",
    slug: "secret-to-happy-employees",
    title: "The Secret to Happy Employees: A Winning Recipe for Workplace Satisfaction",
    excerpt: "Happy employees are the lifeblood of any successful organization. When employees are content, motivated, and engaged, they tend to be more productive and creative.",
    content: `Happy employees are the lifeblood of any successful organization. When employees are content, motivated, and engaged, they tend to be more productive, creative, and loyal.

## Why Employee Happiness Matters

Organizations with happy employees consistently outperform their competitors. Employee satisfaction directly impacts customer satisfaction, innovation, and the bottom line.

## Key Ingredients for Happiness

1. **Work-Life Balance**: Flexible schedules and remote work options.
2. **Recognition**: Regular acknowledgment of achievements.
3. **Growth Opportunities**: Clear career paths and learning opportunities.
4. **Positive Culture**: A supportive and inclusive environment.

## Creating the Right Environment

- Foster open communication
- Provide meaningful work
- Offer competitive compensation
- Support mental health and wellbeing
- Encourage collaboration and teamwork

## The TECUNIQUE Approach

At TECUNIQUE, we believe work culture doesn't just help attract amazing people—it amplifies their abilities and allows them to do their best. We put our workforce on top priority.`,
    date: "2023-12-20",
    author: "TECUNIQUE Team",
    category: "Culture",
    readTime: "5 min read",
    image: "/images/blog/blog3.jpg",
    createdAt: new Date("2023-12-20")
  },
  {
    id: "7",
    slug: "embarking-quality-assurance-journey",
    title: "Embarking on a Quality Assurance Journey",
    excerpt: "In the fast-paced realm of software development, Quality Assurance takes center stage, ensuring not just bug-free code but an immersive user experience.",
    content: `In the fast-paced realm of software development, Quality Assurance (QA) takes center stage, ensuring not just bug-free code but an immersive user experience. As a QA Lead, I am delighted to share key insights into the pivotal role QA plays in delivering stellar software products.

## The Role of QA

Quality Assurance is not just about finding bugs—it's about ensuring the entire software development process produces a product that meets or exceeds customer expectations.

## Key QA Practices

1. **Test Planning**: Developing comprehensive test strategies.
2. **Test Execution**: Running tests systematically.
3. **Defect Management**: Tracking and resolving issues.
4. **Continuous Improvement**: Learning from each release.

## Types of Testing

- Unit Testing
- Integration Testing
- System Testing
- User Acceptance Testing
- Performance Testing
- Security Testing

## Building a QA Culture

Quality is everyone's responsibility. Building a QA culture means integrating quality practices throughout the development lifecycle, not just at the end.`,
    date: "2023-12-05",
    author: "TECUNIQUE Team",
    category: "Quality Assurance",
    readTime: "6 min read",
    image: "/images/blog/blog1.jpg",
    createdAt: new Date("2023-12-05")
  },
  {
    id: "8",
    slug: "india-dominance-global-it-industry",
    title: "Accelerating India's Dominance in the Global IT Industry",
    excerpt: "In recent years, India has emerged as a dominant player in the global IT industry, leveraging its skilled workforce and technological expertise.",
    content: `In recent years, India has emerged as a dominant player in the global Information Technology (IT) industry, leveraging its skilled workforce, technological expertise, and competitive advantage in software development and IT services.

## India's IT Landscape

As the world rapidly transitions towards a digital economy, there exists a significant opportunity for India to further strengthen its position and play a pivotal role in shaping the future of the IT landscape.

## Key Strengths

1. **Skilled Workforce**: Large pool of technical talent.
2. **Cost Advantage**: Competitive pricing for quality services.
3. **English Proficiency**: Easy communication with global clients.
4. **Time Zone Benefits**: Round-the-clock development capabilities.

## Areas for Growth

- Artificial Intelligence and Machine Learning
- Cloud Computing
- Cybersecurity
- Blockchain Technology
- Internet of Things

## The Future

To maintain and enhance its position, India must continue investing in education, infrastructure, and innovation. The future of the global IT industry will be significantly shaped by India's continued growth and evolution.`,
    date: "2023-11-15",
    author: "TECUNIQUE Team",
    category: "Industry",
    readTime: "7 min read",
    image: "/images/blog/blog2.jpg",
    createdAt: new Date("2023-11-15")
  },
];

const jobs = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Vadodara, India",
    type: "Full-time",
    experience: "5+ Years",
    description: "We are looking for a highly skilled Senior Full Stack Developer to join our core engineering team. You will be responsible for building scalable web applications and leading junior developers.",
    requirements: [
      "Expertise in React, Next.js, and Node.js",
      "Strong understanding of TypeScript and state management",
      "Experience with PostgreSQL and Prisma",
      "Ability to architect complex software systems",
      "Excellent communication and leadership skills"
    ],
    postedDate: "2024-04-20",
    slug: "senior-full-stack-developer",
    createdAt: new Date("2024-04-20")
  },
  {
    id: "2",
    title: "Quality Assurance Engineer",
    department: "QA",
    location: "Remote / Hybrid",
    type: "Full-time",
    experience: "3+ Years",
    description: "Join our QA team to ensure the highest quality standards for our clients. You will be designing and executing automated test suites for large-scale enterprise applications.",
    requirements: [
      "Strong experience in manual and automated testing",
      "Proficiency in Selenium, Cypress, or Playwright",
      "Experience with API testing (Postman, REST-assured)",
      "Understanding of CI/CD pipelines",
      "Analytical mindset and attention to detail"
    ],
    postedDate: "2024-04-25",
    slug: "qa-engineer",
    createdAt: new Date("2024-04-25")
  },
  {
    id: "3",
    title: "Atlassian Consultant",
    department: "Consulting",
    location: "Vadodara, India",
    type: "Full-time",
    experience: "4+ Years",
    description: "We are seeking an Atlassian expert to help our clients optimize their Jira and Confluence environments and build custom Jira apps.",
    requirements: [
      "Deep knowledge of Jira, Confluence, and Bitbucket",
      "Experience in developing custom Jira apps (Forge/Connect)",
      "Strong JavaScript/TypeScript skills",
      "Excellent client-facing communication",
      "Experience in agile transformations"
    ],
    postedDate: "2024-05-01",
    slug: "atlassian-consultant",
    createdAt: new Date("2024-05-01")
  },
  {
    id: "4",
    title: "Lead Architect with Extensive Experience in Modern Web Technologies and Cloud Native Distributed Systems for Global Enterprise Scale Applications",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "12+ Years",
    description: "Testing long title truncation and UI stability with extreme cases.",
    requirements: ["Test Requirement 1"],
    postedDate: "2024-05-02",
    slug: "lead-architect-with-extensive-experience-in-modern-web-technologies-and-cloud-native-distributed-systems-for-global-enterprise-scale-applications",
    createdAt: new Date("2024-05-02")
  }
];

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('tecunique');

    // 1. Create Admin User
    console.log('Ensuring Admin User exists...');
    // We don't want to delete admins every time, just ensure one exists
    const adminExists = await db.collection('admins').findOne({ password: 'admintec12' });
    if (!adminExists) {
      await db.collection('admins').insertOne({
        password: 'admintec12',
        createdAt: new Date()
      });
      console.log('Admin user created successfully!');
    } else {
      console.log('Admin user already exists.');
    }

    // 2. Insert Blogs
    console.log('Seeding Blogs...');
    await db.collection('blogs').deleteMany({}); // Clear existing to prevent duplicates during seed
    await db.collection('blogs').insertMany(blogPosts);
    console.log(`${blogPosts.length} blogs seeded successfully!`);

    // 3. Insert Jobs
    console.log('Seeding Jobs...');
    await db.collection('jobs').deleteMany({}); // Clear existing
    await db.collection('jobs').insertMany(jobs);
    console.log(`${jobs.length} jobs seeded successfully!`);

    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Seeding failed:', err);
  } finally {
    await client.close();
  }
}

run();
