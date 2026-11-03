#!/usr/bin/env node
/**
 * TecUnique Website – Image Optimization & WebP Converter
 * 
 * Converts heavy raw PNGs, JPGs, and JFIF photos into modern, highly compressed WebP images.
 * Automatically resizes oversized camera photos (e.g. 4200px -> max 1920px).
 * 
 * Usage:
 *   node scripts/convert-images-to-webp.mjs [--delete-original]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicImagesDir = path.resolve(rootDir, 'public', 'images');

const deleteOriginal = process.argv.includes('--delete-original');

console.log('\x1b[1m\x1b[34m=====================================================\x1b[0m');
console.log('\x1b[1m   TecUnique Website – WebP Image Optimizer          \x1b[0m');
console.log('\x1b[1m\x1b[34m=====================================================\x1b[0m\n');

// Folders to optimize
const TARGET_DIRS = [
  path.join(publicImagesDir, 'about'),
  path.join(publicImagesDir, 'events'),
  path.join(publicImagesDir, 'services'),
  path.join(publicImagesDir, 'testimonial'),
];

// File extensions to convert
const CONVERT_EXTS = new Set(['.png', '.jpg', '.jpeg', '.jfif', '.JPG', '.JPEG']);

// Specific exclusions (e.g. OG image should remain PNG for older social crawlers)
const EXCLUDE_FILES = new Set(['tecunique-og.png']);

function getFilesToConvert(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = fs.lstatSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getFilesToConvert(fullPath));
    } else {
      const ext = path.extname(entry);
      if (CONVERT_EXTS.has(ext) && !EXCLUDE_FILES.has(entry)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

async function convertAll() {
  let files = [];
  for (const dir of TARGET_DIRS) {
    files = files.concat(getFilesToConvert(dir));
  }

  console.log(`\x1b[34m[INFO]\x1b[0m Found ${files.length} images to convert to WebP...\n`);

  let totalOriginalBytes = 0;
  let totalWebpBytes = 0;
  const converted = [];

  for (const file of files) {
    const ext = path.extname(file);
    const webpPath = file.slice(0, -ext.length) + '.webp';
    const originalStat = fs.statSync(file);
    totalOriginalBytes += originalStat.size;

    const relOriginal = path.relative(rootDir, file).replace(/\\/g, '/');
    const relWebp = path.relative(rootDir, webpPath).replace(/\\/g, '/');

    try {
      const pipeline = sharp(file);
      const metadata = await pipeline.metadata();

      // Resize photos with widths larger than 1920px (full HD limit)
      if (metadata.width && metadata.width > 1920) {
        pipeline.resize({ width: 1920, withoutEnlargement: true });
      }

      await pipeline.webp({ quality: 80, effort: 4 }).toFile(webpPath);
      const webpStat = fs.statSync(webpPath);
      totalWebpBytes += webpStat.size;

      const savingPercent = (((originalStat.size - webpStat.size) / originalStat.size) * 100).toFixed(1);
      const origMb = (originalStat.size / (1024 * 1024)).toFixed(2);
      const webpMb = (webpStat.size / (1024 * 1024)).toFixed(2);

      console.log(`  ✔ ${relOriginal} (${origMb} MB) ➔ ${relWebp} (${webpMb} MB) [-${savingPercent}%]`);

      converted.push({ original: file, webp: webpPath });

      if (deleteOriginal) {
        fs.unlinkSync(file);
      }
    } catch (err) {
      console.error(`  ✖ Failed to convert ${relOriginal}:`, err.message);
    }
  }

  const savedBytes = totalOriginalBytes - totalWebpBytes;
  const savedMb = (savedBytes / (1024 * 1024)).toFixed(2);
  const origTotalMb = (totalOriginalBytes / (1024 * 1024)).toFixed(2);
  const newTotalMb = (totalWebpBytes / (1024 * 1024)).toFixed(2);
  const totalPercent = (((totalOriginalBytes - totalWebpBytes) / totalOriginalBytes) * 100).toFixed(1);

  console.log('\n\x1b[1m\x1b[32m=====================================================\x1b[0m');
  console.log(`\x1b[1m   Conversion Summary:\x1b[0m`);
  console.log(`   Original Size:  \x1b[1m${origTotalMb} MB\x1b[0m`);
  console.log(`   New WebP Size:  \x1b[1m${newTotalMb} MB\x1b[0m`);
  console.log(`   Total Savings:  \x1b[1m\x1b[32m${savedMb} MB (-${totalPercent}%)\x1b[0m`);
  console.log('\x1b[1m\x1b[32m=====================================================\x1b[0m\n');

  if (!deleteOriginal) {
    console.log('\x1b[33m[NOTE]\x1b[0m Original files were kept. Run with --delete-original to remove old PNG/JPG files.');
  } else {
    console.log('\x1b[32m[DONE]\x1b[0m Old PNG/JPG files removed.');
  }
}

convertAll();

