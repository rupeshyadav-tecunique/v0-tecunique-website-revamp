#!/usr/bin/env node
/**
 * TecUnique Website – Automated Remote Deployment Script
 * 
 * Automates:
 * 1. Local production build & packaging (npm run package:cpanel)
 * 2. Upload of distribution archive to remote Linux VPS / cPanel via SCP/SFTP
 * 3. Remote execution of scripts/deploy-server.sh via SSH (extract, npm install, DB seed, restart)
 * 
 * Usage:
 *   node scripts/deploy-remote.mjs <user@host:/remote/path> [-p <ssh-port>]
 * 
 * Examples:
 *   node scripts/deploy-remote.mjs cpaneluser@203.0.113.10:/home/cpaneluser/tecunique
 *   node scripts/deploy-remote.mjs root@203.0.113.10:/var/www/tecunique -p 22022
 * 
 * Can also read from environment variables:
 *   DEPLOY_HOST=203.0.113.10
 *   DEPLOY_USER=cpaneluser
 *   DEPLOY_PATH=/home/cpaneluser/tecunique
 *   DEPLOY_PORT=22
 */

import { execSync, spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const zipFile = path.resolve(rootDir, 'deploy-cpanel.zip');
const deployServerScript = path.resolve(rootDir, 'scripts', 'deploy-server.sh');

console.log('\x1b[1m\x1b[34m=====================================================\x1b[0m');
console.log('\x1b[1m   TecUnique Website – Remote Deployment Automation  \x1b[0m');
console.log('\x1b[1m\x1b[34m=====================================================\x1b[0m\n');

// Parse CLI arguments
const args = process.argv.slice(2);
let target = args[0] || process.env.DEPLOY_TARGET;
let sshPort = '22';

for (let i = 0; i < args.length; i++) {
  if (args[i] === '-p' || args[i] === '--port') {
    sshPort = args[i + 1] || '22';
  }
}
if (process.env.DEPLOY_PORT) {
  sshPort = process.env.DEPLOY_PORT;
}

// Fallback to individual env vars
if (!target && process.env.DEPLOY_USER && process.env.DEPLOY_HOST && process.env.DEPLOY_PATH) {
  target = `${process.env.DEPLOY_USER}@${process.env.DEPLOY_HOST}:${process.env.DEPLOY_PATH}`;
}

if (!target || !target.includes('@') || !target.includes(':')) {
  console.log('\x1b[31m[ERROR]\x1b[0m Missing or invalid remote target.');
  console.log('Usage:');
  console.log('  node scripts/deploy-remote.mjs <user@host:/path/to/app> [-p <port>]\n');
  console.log('Example:');
  console.log('  node scripts/deploy-remote.mjs cpaneluser@203.0.113.10:/home/cpaneluser/tecunique\n');
  process.exit(1);
}

const [userHost, remotePath] = target.split(':');
const [remoteUser, remoteHost] = userHost.split('@');

console.log('\x1b[34m[INFO]\x1b[0m Deployment Target:');
console.log(`  User: \x1b[1m${remoteUser}\x1b[0m`);
console.log(`  Host: \x1b[1m${remoteHost}\x1b[0m`);
console.log(`  Path: \x1b[1m${remotePath}\x1b[0m`);
console.log(`  Port: \x1b[1m${sshPort}\x1b[0m\n`);

// ─── Step 1: Package Local Build ─────────────────────────────────────────────
console.log('\x1b[34m[STEP 1/3]\x1b[0m Preparing local production build & packaging...');
try {
  execSync('npm run package:cpanel', { stdio: 'inherit', cwd: rootDir });
  if (!fs.existsSync(zipFile)) {
    throw new Error('deploy-cpanel.zip was not found after packaging.');
  }
  console.log('\x1b[32m[SUCCESS]\x1b[0m Packaging verified.\n');
} catch (err) {
  console.error('\x1b[31m[ERROR]\x1b[0m Local packaging failed:', err.message);
  process.exit(1);
}

// ─── Step 2: Upload Artifacts to Server via SCP ──────────────────────────────
console.log('\x1b[34m[STEP 2/3]\x1b[0m Uploading deployment package to remote server via SCP...');
const scpCmd = `scp -P ${sshPort} "${zipFile}" "${deployServerScript}" "${target}/"`;
console.log(`> ${scpCmd}`);

try {
  execSync(scpCmd, { stdio: 'inherit', cwd: rootDir });
  console.log('\x1b[32m[SUCCESS]\x1b[0m Files uploaded to remote server.\n');
} catch (uploadErr) {
  console.error('\x1b[31m[ERROR]\x1b[0m SCP upload failed. Verify SSH credentials and network reachability.');
  process.exit(1);
}

// ─── Step 3: Execute deploy-server.sh Remotely via SSH ───────────────────────
console.log('\x1b[34m[STEP 3/3]\x1b[0m Executing remote deployment runbook on server...');
const remoteCmd = `cd "${remotePath}" && chmod +x deploy-server.sh && mkdir -p scripts && cp deploy-server.sh scripts/ 2>/dev/null || true && bash deploy-server.sh`;
const sshCmd = `ssh -p ${sshPort} -t ${userHost} "${remoteCmd}"`;
console.log(`> ${sshCmd}\n`);

try {
  execSync(sshCmd, { stdio: 'inherit', cwd: rootDir });
  console.log('\n\x1b[1m\x1b[32m✔ Automated remote deployment completed successfully!\x1b[0m\n');
} catch (sshErr) {
  console.error('\x1b[31m[ERROR]\x1b[0m Remote execution failed.');
  process.exit(1);
}

