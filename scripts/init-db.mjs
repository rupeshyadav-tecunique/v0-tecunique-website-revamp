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
    console.log('  ✔ Index created: case-studies.id (unique)\n');

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

    // ─── 3. Check Blogs Collection ─────────────────────────────────────────────
    const blogsCount = await db.collection('blogs').countDocuments();
    console.log(`\x1b[34m[INFO]\x1b[0m Blogs collection status: ${blogsCount} post(s) present.`);

    // ─── 4. Check Jobs Collection ──────────────────────────────────────────────
    const jobsCount = await db.collection('jobs').countDocuments();
    console.log(`\x1b[34m[INFO]\x1b[0m Jobs collection status: ${jobsCount} opening(s) present.`);

    // ─── 5. Check Case Studies Collection ──────────────────────────────────────
    const caseStudiesCount = await db.collection('case-studies').countDocuments();
    console.log(`\x1b[34m[INFO]\x1b[0m Case Studies status: ${caseStudiesCount} case study(ies) present.\n`);

    console.log('\x1b[32m[DONE]\x1b[0m Database initialization complete. All collections and indexes are ready.');
  } catch (error) {
    console.error('\x1b[31m[ERROR]\x1b[0m Database initialization failed:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

initDatabase();
