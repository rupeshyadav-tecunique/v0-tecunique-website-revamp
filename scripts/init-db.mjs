import { MongoClient } from 'mongodb';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

const blogs = [
  {
    id: "1",
    slug: "embracing-autonomous-self-organized-professionals",
    title: "Embracing Autonomous and Self-Organized Professionals",
    excerpt: "Autonomous professionals are more inclined to think outside the box, challenge existing norms, and explore unconventional solutions, leading to the development of cutting-edge technologies.",
    content: "Autonomous professionals are more inclined to think outside the box...",
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
    content: "In the dynamic world of software creation, it's crucial to be fast, deliver quality, and ensure reliability...",
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
    content: "Artificial intelligence is a buzzword for the current decade...",
    date: "2024-02-10",
    author: "TECUNIQUE Team",
    category: "Technology",
    readTime: "7 min read",
    image: "/images/blog/blog3.jpg",
    createdAt: new Date("2024-02-10")
  }
];

const jobs = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Vadodara, India",
    type: "Full-time",
    experience: "5+ Years",
    description: "We are looking for a highly skilled Senior Full Stack Developer to join our core engineering team.",
    requirements: ["Expertise in React, Next.js, and Node.js"],
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
    description: "Join our QA team to ensure the highest quality standards for our clients.",
    requirements: ["Strong experience in manual and automated testing"],
    postedDate: "2024-04-25",
    slug: "qa-engineer",
    createdAt: new Date("2024-04-25")
  }
];

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('tecunique');

    // 1. Create Admin User
    console.log('Creating Admin User...');
    await db.collection('admins').deleteMany({}); // Clear existing
    await db.collection('admins').insertOne({
      password: 'admintec12',
      createdAt: new Date()
    });
    console.log('Admin user created successfully!');

    // 2. Insert Blogs
    console.log('Inserting Blogs...');
    await db.collection('blogs').deleteMany({}); // Clear existing
    await db.collection('blogs').insertMany(blogs);
    console.log(`${blogs.length} blogs inserted successfully!`);

    // 3. Insert Jobs
    console.log('Inserting Jobs...');
    await db.collection('jobs').deleteMany({}); // Clear existing
    await db.collection('jobs').insertMany(jobs);
    console.log(`${jobs.length} jobs inserted successfully!`);

    console.log('Migration completed successfully!');
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    await client.close();
  }
}

run();
