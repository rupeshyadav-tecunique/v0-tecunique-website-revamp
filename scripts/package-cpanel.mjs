/**
 * cPanel Deployment Packaging Script for TecUnique Next.js
 * 
 * Usage:
 *   node scripts/package-cpanel.mjs
 * 
 * This script:
 * 1. Verifies that the production build (.next) exists (or triggers npm run build)
 * 2. Prepares a clean `deploy-cpanel/` directory with all production runtime files:
 *    - .next/
 *    - public/
 *    - server.js
 *    - package.json
 *    - next.config.mjs
 * 3. Packages them into `deploy-cpanel.zip` ready to upload to cPanel File Manager.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outDir = path.resolve(rootDir, 'deploy-cpanel');
const zipFile = path.resolve(rootDir, 'deploy-cpanel.zip');

console.log('\x1b[34m[INFO]\x1b[0m Starting cPanel deployment packaging...');

// 1. Build if .next does not exist
if (!fs.existsSync(path.join(rootDir, '.next'))) {
  console.log('\x1b[33m[BUILD]\x1b[0m .next directory not found. Running npm run build...');
  execSync('npm run build', { stdio: 'inherit', cwd: rootDir });
} else {
  console.log('\x1b[32m[OK]\x1b[0m Production build (.next) found.');
}

// 2. Clean previous deploy folder
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
if (fs.existsSync(zipFile)) {
  fs.rmSync(zipFile, { force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// Helper to copy recursively, skipping cache, dev folders, and symlinks
function copyFolderSync(from, to, isNextFolder = false) {
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach((element) => {
    // Skip dev and cache folders inside .next to prevent bloat and symlink permission issues
    if (isNextFolder && (element === 'cache' || element === 'dev')) {
      return;
    }
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    const stat = fs.lstatSync(fromPath);
    if (stat.isSymbolicLink()) {
      return; // Skip symlinks to avoid Windows EPERM issues
    }
    if (stat.isDirectory()) {
      copyFolderSync(fromPath, toPath, false);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

console.log('\x1b[34m[INFO]\x1b[0m Copying required runtime files to deploy-cpanel/ ...');

// Copy .next (excluding cache and dev artifacts)
copyFolderSync(path.join(rootDir, '.next'), path.join(outDir, '.next'), true);

// Copy public
copyFolderSync(path.join(rootDir, 'public'), path.join(outDir, 'public'));

// Copy server.js
fs.copyFileSync(path.join(rootDir, 'server.js'), path.join(outDir, 'server.js'));

// Copy next.config.mjs
fs.copyFileSync(path.join(rootDir, 'next.config.mjs'), path.join(outDir, 'next.config.mjs'));

// Copy package.json (with production dependencies)
fs.copyFileSync(path.join(rootDir, 'package.json'), path.join(outDir, 'package.json'));

// Copy deployment automation & database initialization scripts
const outScriptsDir = path.join(outDir, 'scripts');
fs.mkdirSync(outScriptsDir, { recursive: true });
if (fs.existsSync(path.join(rootDir, 'scripts', 'init-db.mjs'))) {
  fs.copyFileSync(path.join(rootDir, 'scripts', 'init-db.mjs'), path.join(outScriptsDir, 'init-db.mjs'));
}
if (fs.existsSync(path.join(rootDir, 'scripts', 'deploy-server.sh'))) {
  fs.copyFileSync(path.join(rootDir, 'scripts', 'deploy-server.sh'), path.join(outScriptsDir, 'deploy-server.sh'));
}

// Create .htaccess for Apache / LiteSpeed in cPanel
const htaccessContent = `# cPanel Phusion Passenger / Reverse Proxy Routing for Next.js
DirectoryIndex disabled
RewriteEngine On

# ─── Optional Server-Level IP Whitelist for Admin ─────────────────────────
# Uncomment and replace 203.0.113.195 with your authorized static IP:
# RewriteCond %{REQUEST_URI} ^/(admin|api/admin)
# RewriteCond %{REMOTE_ADDR} !^203\.0\.113\.195$
# RewriteCond %{HTTP:CF-Connecting-IP} !^203\.0\.113\.195$
# RewriteCond %{HTTP:X-Forwarded-For} !^203\.0\.113\.195$
# RewriteRule ^ - [F,L]

RewriteRule ^$ http://127.0.0.1:3000/ [P,L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://127.0.0.1:3000/$1 [P,L]
`;
fs.writeFileSync(path.join(outDir, '.htaccess'), htaccessContent);

// Create sample .env.production template in deploy-cpanel
const envSample = fs.readFileSync(path.join(rootDir, '.env.example'), 'utf-8');
fs.writeFileSync(path.join(outDir, '.env.example'), envSample);

console.log('\x1b[32m[SUCCESS]\x1b[0m Files copied into deploy-cpanel/ folder:');
console.log('  ✔ .next/');
console.log('  ✔ public/');
console.log('  ✔ server.js (cPanel Passenger entry point)');
console.log('  ✔ package.json');
console.log('  ✔ next.config.mjs');
console.log('  ✔ .htaccess');
console.log('  ✔ .env.example');

// 3. Compress using PowerShell on Windows
try {
  console.log('\x1b[34m[INFO]\x1b[0m Compressing into deploy-cpanel.zip...');
  const psCmd = `powershell -command "Compress-Archive -Path '${outDir}\\*' -DestinationPath '${zipFile}' -Force"`;
  execSync(psCmd, { stdio: 'inherit', cwd: rootDir });
  console.log(`\x1b[32m[DONE]\x1b[0m Created ready-to-upload archive: \x1b[1mdeploy-cpanel.zip\x1b[0m`);
} catch (zipErr) {
  console.log('\x1b[33m[NOTE]\x1b[0m Could not create zip automatically. You can zip the contents of the deploy-cpanel/ directory manually.');
}
