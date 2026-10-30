# TecUnique Website – Production Deployment Guide & Runbook

This document serves as the operational guide and runbook for deploying the **TecUnique Website** to production environments, including Linux VPS (PM2 & Nginx), cPanel (CloudLinux / Phusion Passenger), and cloud platforms.

---

## 1. System Architecture & Runtime Specifications

| Attribute | Specification | Notes |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.2.4 (App Router) + React 19 | Turbopack build engine |
| **Language & Styling** | TypeScript 5.7.3 + Tailwind CSS v4 | Strict typing enforced |
| **Target Runtime** | Node.js v20.x LTS (minimum v18.17+) | Required on host system |
| **Application Server** | Custom Node.js HTTP server (`server.js`) | Compatible with Phusion Passenger, PM2, and direct reverse proxies |
| **Build Artifacts** | Standard `.next/` build output | Compiled via `npm run build` |
| **cPanel Package Target** | `deploy-cpanel.zip` | Generated via `npm run package:cpanel` (excludes dev cache and symlinks) |
| **Database** | MongoDB Atlas (`tecunique` database) | TLS enabled connection pooling via `lib/db.ts` |
| **Email Delivery** | Resend REST API | Transactional dispatch for contact and career submissions |

---

## 2. Admin Portal Security & IP Whitelisting (`/admin`)

Access to the Administrative CMS routes (`/admin`, `/admin/login`, `/admin/*`) and administrative backend API endpoints (`/api/admin/*`) is protected through a multi-layer defense architecture.

### 2.1 Layer 1: Application-Level IP Guard (`middleware.ts`)

The Next.js edge middleware enforces IP restrictions before route rendering or API execution occurs.

1. **Configuration**: Set the `ALLOWED_ADMIN_IP` environment variable in the production environment:
   ```env
   # Single static IP:
   ALLOWED_ADMIN_IP=203.0.113.195

   # Multiple authorized IPs (comma-separated):
   ALLOWED_ADMIN_IP=203.0.113.195,198.51.100.42
   ```

2. **Access Control Behavior**:
   - If `ALLOWED_ADMIN_IP` is defined, incoming requests to `/admin` or `/api/admin` originating from any unauthorized IP address are rejected immediately with **HTTP 403 Forbidden** (`Access Denied: Your IP is not authorized to access the management portal.`).
   - If `ALLOWED_ADMIN_IP` is empty or undefined, IP-level restriction is disabled and authentication relies solely on session token verification.

3. **Client IP Resolution Pipeline**:
   The middleware extracts the authentic client IP in the following priority order:
   - `cf-connecting-ip` (Cloudflare edge proxy)
   - `x-forwarded-for` (first IP entry in standard proxy chain)
   - `x-real-ip` (Nginx / Apache reverse proxy)
   - Node socket `request.ip`
   - IPv4-mapped IPv6 normalization (strips `::ffff:` prefix for consistent matching)

> [!WARNING]
> **Static vs. Dynamic IP Requirements**: Administrators must ensure the configured IP is a static public IP (e.g., office static IP, VPN gateway, or dedicated IP). If using an ISP connection with dynamic IP allocation, restarting the local network router will reassign the IP address and restrict portal access until the environment variable is updated.

### 2.2 Layer 2: Web Server-Level Guard (`.htaccess` / Apache)

For perimeter-level rejection before requests reach the Node.js application process, the generated `.htaccess` in `deploy-cpanel/` contains Apache rewrite rules:

```apache
# Restrict /admin and /api/admin to authorized IP addresses
RewriteCond %{REQUEST_URI} ^/(admin|api/admin)
RewriteCond %{REMOTE_ADDR} !^203\.0\.113\.195$
RewriteCond %{HTTP:CF-Connecting-IP} !^203\.0\.113\.195$
RewriteCond %{HTTP:X-Forwarded-For} !^203\.0\.113\.195$
RewriteRule ^ - [F,L]
```

### 2.3 Layer 3: Subdomain Isolation (`ADMIN_HOST`)

To completely separate administrative traffic from the primary public website, configure `ADMIN_HOST`:
```env
ADMIN_HOST=admin.tecunique.com
```
When configured, any request attempting to access `/admin` or `/api/admin` through `tecunique.com` returns **HTTP 404 Not Found**, ensuring the admin portal is only discoverable and accessible via the dedicated management subdomain.

---

## 3. Production Environment Variables Reference

All application secrets and environment configurations must be supplied through the production hosting platform (cPanel "Setup Node.js App" environment settings or a secure `.env.production` file).

| Variable Name | Required | Example Production Value | Purpose & Architectural Context |
| :--- | :---: | :--- | :--- |
| **`MONGODB_URI`** | **Yes** | `mongodb+srv://<db_user>:<password>@cluster.mongodb.net/tecunique?appName=tecunique` | Primary MongoDB Atlas connection string. Connects to the `tecunique` database for blogs, jobs, case studies, and admins. |
| **`RESEND_API_KEY`** | **Yes** | `re_prod_xxxxxxxxxxxxxxxxxxxx` | Production API key from Resend for transactional email delivery. |
| **`EMAIL_FROM_ADDRESS`** | **Yes** | `TecUnique <noreply@tecunique.com>` | Sender address using a verified corporate domain. Must match DNS records (DKIM/SPF) configured in Resend. |
| **`CONTACT_RECEIVER_EMAILS`** | **Yes** | `sales@tecunique.com,info@tecunique.com` | Comma-separated list of destination inboxes for website lead capture submissions (`/contact`). |
| **`HR_EMAIL_ADDRESS`** | **Yes** | `hr@tecunique.com` | Destination inbox for candidate career applications and uploaded resumes (`/careers`). |
| **`ADMIN_JWT_SECRET`** | **Yes** | `[64-character random hex string]` | Cryptographic secret used by `lib/auth.ts` for signing HS256 JWT tokens. Generate via `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`. |
| **`ALLOWED_ADMIN_IP`** | **Yes** | `203.0.113.195` | Static public IP address(es) authorized to access `/admin` and `/api/admin`. |
| **`NEXT_PUBLIC_BASE_URL`** | **Yes** | `https://www.tecunique.com` | Canonical public URL without trailing slash. Governs `sitemap.xml`, `robots.txt`, and OpenGraph metadata. |
| **`ADMIN_USERNAME`** | Optional | `superadmin` | Initial admin username used when executing `scripts/init-db.mjs`. |
| **`ADMIN_PASSWORD`** | Optional | `[StrongPassword]` | Initial admin password used when executing `scripts/init-db.mjs`. Automatically hashed with bcrypt (salt rounds = 10). |
| **`NEXT_PUBLIC_GA_ID`** | Optional | `G-XXXXXXXXXX` | Google Analytics 4 Measurement ID. If omitted, analytics scripts are not rendered. |
| **`ADMIN_HOST`** | Optional | `admin.tecunique.com` | Enforces subdomain-only routing for the administrative CMS. |
| **`PORT`** | Optional | `3000` | Port or socket path for the HTTP listener in `server.js`. |
| **`NODE_ENV`** | **Yes** | `production` | Enforces optimized React production builds and secure cookie flags (`Secure`, `HttpOnly`, `SameSite=Lax`). |

---

## 4. Deployment Automation Suite

The repository contains three purpose-built automation scripts designed to eliminate manual UI clicks on Linux servers:

```text
┌─────────────────────────────────┐
│     Local Operator Machine      │
│  npm run deploy:remote <target> ├───────┐ (1. Packages build & uploads via SCP)
└─────────────────────────────────┘       │
                                          ▼
┌────────────────────────────────────────────────────────┐
│               Linux Server / cPanel VPS                │
│                                                        │
│  scripts/deploy-server.sh                              │
│  ├── 1. Unzips deploy-cpanel.zip safely                │
│  ├── 2. Preserves existing .env.production             │
│  ├── 3. Runs: npm install --omit=dev                   │
│  ├── 4. Runs: node scripts/init-db.mjs (auto-seed)     │
│  ├── 5. Restarts: PM2 reload / touch tmp/restart.txt   │
│  └── 6. Probes: curl health check verification         │
└────────────────────────────────────────────────────────┘
```

### 4.1 Method A: One-Command Remote Deploy (`scripts/deploy-remote.mjs`)

From the local workstation or CI/CD runner, deploy to the remote server with a single terminal command:

```bash
# Syntax:
npm run deploy:remote <user@host:/remote/path> [-p <ssh-port>]

# Examples:
npm run deploy:remote cpaneluser@203.0.113.10:/home/cpaneluser/tecunique
npm run deploy:remote root@203.0.113.10:/var/www/tecunique -p 22
```

This single command automatically:
1. Runs `npm run package:cpanel` to compile `.next` and package `deploy-cpanel.zip`.
2. Securely transfers the bundle and server automation script via SCP.
3. Connects over SSH and executes `scripts/deploy-server.sh` on the server.
4. Streams the live remote installation and restart logs to the local terminal.

---

### 4.2 Method B: Server-Side Automated Script (`scripts/deploy-server.sh`)

If logged into the Linux server via SSH (or cPanel Terminal), execute the server deployment script directly inside the application root directory:

```bash
bash scripts/deploy-server.sh
```

What `scripts/deploy-server.sh` automates:
1. **Archive Extraction**: Detects `deploy-cpanel.zip` (if uploaded), creates a `.next.bak` backup, and extracts the new files without overwriting `.env` configuration.
2. **Dependency Management**: Runs `npm install --omit=dev --no-audit --prefer-offline` quietly and quickly.
3. **Database Initialization**: Executes `node scripts/init-db.mjs` to ensure collections, indexes, and administrative accounts are created.
4. **Zero-Downtime Application Reload**:
   - **For PM2**: Automatically reloads existing cluster (`pm2 reload tecunique-web --update-env`).
   - **For cPanel Phusion Passenger**: Executes `mkdir -p tmp && touch tmp/restart.txt` to trigger Passenger's built-in graceful reload without opening the cPanel UI.
   - **For Systemd**: Restarts `tecunique.service` if configured.
5. **Health Check Verification**: Probes `http://127.0.0.1:3000` via curl and outputs HTTP status confirmation.

---

### 4.3 Method C: Full VPS Provisioning Automation (`scripts/setup-vps.sh`)

For setting up a brand-new Ubuntu or Debian VPS from scratch, run the provisioning script as root or via sudo:

```bash
# Syntax:
sudo bash scripts/setup-vps.sh <DOMAIN> <ALLOWED_ADMIN_IP> [APP_DIR]

# Example:
sudo bash scripts/setup-vps.sh tecunique.com 203.0.113.195 /var/www/tecunique
```

This script automatically:
1. Updates package repositories (`apt-get update`).
2. Installs Node.js 20.x LTS from NodeSource, npm, git, unzip, curl, and UFW firewall.
3. Installs `pm2` globally.
4. Sets up Nginx reverse proxy with:
   - Perimeter `/admin` and `/api/admin` IP restriction (`allow <ALLOWED_IP>; deny all;`).
   - Upstream proxy to `http://127.0.0.1:3000`.
   - Next.js static asset caching headers (`/_next/static`).
   - WebSocket and proxy header forwarding (`X-Real-IP`, `X-Forwarded-For`, `X-Forwarded-Proto`).
5. Configures UFW firewall rules for SSH, HTTP, and HTTPS.
6. Prepares Certbot for one-command SSL installation:
   ```bash
   sudo certbot --nginx -d tecunique.com -d www.tecunique.com
   ```

---

## 5. cPanel Manual Setup Fallback (First-Time Initialization)

If automated SSH access is not available and cPanel UI must be used for initial application registration:

1. **Upload Archive**: In cPanel **File Manager**, upload `deploy-cpanel.zip` to the application directory (e.g., `/home/<user>/tecunique`) and extract.
2. **Register Node.js Application**:
   - Navigate to **Software** > **Setup Node.js App** in cPanel.
   - Click **Create Application**.
   - **Node.js version**: `v20.x` (or `v18.x`).
   - **Application mode**: `Production`.
   - **Application root**: `tecunique`.
   - **Application startup file**: `server.js`.
   - **Environment variables**: Add required variables from Section 3 (`MONGODB_URI`, `RESEND_API_KEY`, `ADMIN_JWT_SECRET`, `ALLOWED_ADMIN_IP`).
   - Click **Save**.
3. **Subsequent Updates**: Once registered, all future updates can be deployed in seconds simply by running `bash scripts/deploy-server.sh` or uploading `deploy-cpanel.zip` and executing `touch tmp/restart.txt`.

---

## 6. Pre-Flight Verification & Smoke Testing Checklist

Following deployment, the executing engineer must verify the following checkpoints:

- [ ] **Public Site Availability**: Navigate to `https://www.tecunique.com` — verify static assets, brand fonts, and interactive elements load without client-side console errors.
- [ ] **Dynamic Blog Index & Detail Pages**: Navigate to `/blog` and `/blog/[slug]` — confirm articles fetch from the database.
- [ ] **Career Openings**: Navigate to `/careers` and `/careers/[slug]` — verify active job listings display properly.
- [ ] **Contact Form Submission**: Submit a valid inquiry through `/contact` — verify success response and confirm email delivery in destination inboxes (`CONTACT_RECEIVER_EMAILS`).
- [ ] **Job Application Submission**: Submit a test application with resume attachment through `/careers` — confirm file size limits and email arrival in `HR_EMAIL_ADDRESS`.
- [ ] **Admin Portal IP Restriction**:
  - Access `/admin/login` from the whitelisted IP: Verify login screen renders.
  - Access `/admin/login` from an unauthorized IP (e.g., cellular data or external proxy): Verify **HTTP 403 Forbidden** response.
- [ ] **Admin Authentication & Dashboard**: Authenticate with admin credentials — verify session cookie (`admin_token`) is set and metrics dashboard loads.
- [ ] **SEO & Metadata**:
  - Inspect `/robots.txt`
  - Inspect `/sitemap.xml`
- [ ] **Legacy 301 Redirects**:
  - Test `/jobs` ➔ Redirects to `/careers` (HTTP 308/301).
  - Test `/blogs` ➔ Redirects to `/blog` (HTTP 308/301).

---

## 7. Rollback & Incident Response Procedures

### 7.1 Application Rollback
- Maintain a versioned backup directory of the prior deployment (e.g., `tecunique_previous/`).
- In cPanel **Setup Node.js App**, update the **Application Root** to the backup directory and click **Restart**.
- For PM2 deployments:
  ```bash
  pm2 reload tecunique-web --update-env
  ```

### 7.2 Database Incident Mitigation
- If the MongoDB Atlas cluster becomes unreachable, marketing pages automatically fall back to static data defined in `lib/blog-data.ts` and `lib/jobs-data.ts` rather than throwing uncaught runtime exceptions.

### 7.3 Email Service Troubleshooting
- Verify API key status and sending quotas at `https://resend.com/emails`.
- Ensure DNS verification (DKIM/SPF) is active for the sending domain (`tecunique.com`).
- Verify sender address matches verified domain format (`EMAIL_FROM_ADDRESS`).
