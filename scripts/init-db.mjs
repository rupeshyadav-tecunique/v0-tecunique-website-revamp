/**
 * TecUnique Database Initialization and Seeding Script
 * 
 * Usage:
 *   node scripts/init-db.mjs
 * 
 * Requirements:
 *   - MONGODB_URI in .env.local or environment
 *   - Optional: ADMIN_USERNAME, ADMIN_PASSWORD
 */

import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local first, fallback to .env
dotenv.config({ path: resolve(__dirname, '../.env.local') });
dotenv.config({ path: resolve(__dirname, '../.env') });

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('\x1b[31m[ERROR]\x1b[0m MONGODB_URI is not set in environment or .env.local.');
  console.error('Please configure your MongoDB connection string before running this script.');
  process.exit(1);
}

function loadJson(relativePath) {
  try {
    const fullPath = resolve(__dirname, relativePath);
    if (!fs.existsSync(fullPath)) return [];
    return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
  } catch (err) {
    console.warn(`[WARN] Failed to read ${relativePath}:`, err.message);
    return [];
  }
}

async function initDatabase() {
  console.log('\x1b[34m[INFO]\x1b[0m Connecting to MongoDB...');
  const client = new MongoClient(uri, { tls: true });

  try {
    await client.connect();
    const db = client.db('tecunique');
    console.log('\x1b[32m[SUCCESS]\x1b[0m Connected to database: \x1b[1mtecunique\x1b[0m\n');

    // ─── 1. Create Collections & Indexes ───────────────────────────────────────
    console.log('\x1b[34m[INFO]\x1b[0m Ensuring collections & indexes...');

    // Admins: unique username index
    await db.collection('admins').createIndex({ username: 1 }, { unique: true });
    console.log('  ✔ Index created: admins.username (unique)');

    // Blogs: unique slug index and created date index
    await db.collection('blogs').createIndex({ slug: 1 }, { unique: true, sparse: true });
    await db.collection('blogs').createIndex({ createdAt: -1 });
    console.log('  ✔ Indexes created: blogs.slug (unique), blogs.createdAt');

    // Jobs: unique slug index and active status index
    await db.collection('jobs').createIndex({ slug: 1 }, { unique: true, sparse: true });
    await db.collection('jobs').createIndex({ isActive: 1, createdAt: -1 });
    console.log('  ✔ Indexes created: jobs.slug (unique), jobs.isActive');

    // Case Studies: unique id index
    await db.collection('case-studies').createIndex({ id: 1 }, { unique: true, sparse: true });
    console.log('  ✔ Index created: case-studies.id (unique)');

    // Pages: unique slug index
    await db.collection('pages').createIndex({ slug: 1 }, { unique: true });
    console.log('  ✔ Index created: pages.slug (unique)\n');

    // ─── 2. Ensure Default Admin User ──────────────────────────────────────────
    console.log('\x1b[34m[INFO]\x1b[0m Checking admin account...');
    const adminCount = await db.collection('admins').countDocuments();

    if (adminCount === 0) {
      const defaultUser = process.env.ADMIN_USERNAME || 'admin';
      const defaultPass = process.env.ADMIN_PASSWORD || 'TecUnique@Admin2026!';
      const hashedPassword = await bcrypt.hash(defaultPass, 10);

      await db.collection('admins').insertOne({
        username: defaultUser,
        password: hashedPassword,
        role: 'superadmin',
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      console.log(`\x1b[32m[CREATED]\x1b[0m Default admin user created:`);
      console.log(`  Username: \x1b[1m${defaultUser}\x1b[0m`);
      console.log(`  Password: \x1b[1m${defaultPass}\x1b[0m (hashed with bcrypt)`);
      console.log(`  \x1b[33m[NOTE]\x1b[0m Change this password immediately in production!\n`);
    } else {
      console.log(`  ℹ Admins collection already has ${adminCount} user(s). Skipping creation.\n`);
    }

    // ─── 3. Seed Case Studies ──────────────────────────────────────────────────
    console.log('\x1b[34m[INFO]\x1b[0m Checking & seeding Case Studies...');
    const caseStudiesData = loadJson('../lib/data/case-studies.json');
    let seededCaseStudies = 0;

    for (const study of caseStudiesData) {
      const result = await db.collection('case-studies').updateOne(
        { id: study.id },
        {
          $setOnInsert: {
            ...study,
            company: study.company || study.client,
            title: study.title || study.heroTitle || study.client,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        },
        { upsert: true }
      );
      if (result.upsertedCount > 0) seededCaseStudies++;
    }

    const totalCaseStudies = await db.collection('case-studies').countDocuments();
    console.log(`  ✔ Case Studies: ${seededCaseStudies} newly seeded, ${totalCaseStudies} total in database.\n`);

    // ─── 4. Seed Blogs Collection ──────────────────────────────────────────────
    console.log('\x1b[34m[INFO]\x1b[0m Checking & seeding Blog posts...');
    const blogsData = loadJson('../lib/data/blogs.json');
    let seededBlogs = 0;

    for (const blog of blogsData) {
      const result = await db.collection('blogs').updateOne(
        { slug: blog.slug },
        {
          $setOnInsert: {
            ...blog,
            createdAt: new Date(blog.date || Date.now()),
            updatedAt: new Date(),
          },
        },
        { upsert: true }
      );
      if (result.upsertedCount > 0) seededBlogs++;
    }

    const totalBlogs = await db.collection('blogs').countDocuments();
    console.log(`  ✔ Blogs: ${seededBlogs} newly seeded, ${totalBlogs} total in database.\n`);

    // ─── 5. Seed Jobs Collection ───────────────────────────────────────────────
    console.log('\x1b[34m[INFO]\x1b[0m Checking & seeding Job openings...');
    const jobsData = loadJson('../lib/data/jobs.json');
    let seededJobs = 0;

    for (const job of jobsData) {
      const result = await db.collection('jobs').updateOne(
        { slug: job.slug },
        {
          $setOnInsert: {
            ...job,
            isActive: true,
            createdAt: new Date(job.postedDate || Date.now()),
            updatedAt: new Date(),
          },
        },
        { upsert: true }
      );
      if (result.upsertedCount > 0) seededJobs++;
    }

    const totalJobs = await db.collection('jobs').countDocuments();
    console.log(`  ✔ Jobs: ${seededJobs} newly seeded, ${totalJobs} total in database.\n`);

    console.log('\x1b[32m[DONE]\x1b[0m Database initialization complete. All collections, admin account, and seed data are ready!');
  } catch (error) {
    console.error('\x1b[31m[ERROR]\x1b[0m Database initialization failed:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

initDatabase();
