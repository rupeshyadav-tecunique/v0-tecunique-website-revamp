# TecUnique Website Revamp – Production Deployment Runbook

This runbook provides complete, step-by-step instructions for deploying the **TecUnique Website** to production.

---

## 1. Environment Variables Master Reference

The application requires the following environment variables. In production, configure these inside your hosting platform's dashboard (e.g., Vercel Project Settings > Environment Variables).

| Variable Name | Required | Default / Fallback | Description & Example |
| :--- | :---: | :--- | :--- |
| `NEXT_PUBLIC_BASE_URL` | **Yes** | `https://www.tecunique.com` | Canonical public URL without trailing slash. Used for sitemap, robots.txt, and OpenGraph meta tags. |
| `MONGODB_URI` | **Yes** | None | Full connection string to MongoDB Atlas database. Example: `mongodb+srv://<user>:<password>@cluster.mongodb.net/tecunique?appName=tecunique` |
| `ADMIN_JWT_SECRET` | **Yes** | None | Cryptographic secret for signing admin JWT sessions. Generate with `openssl rand -base64 32`. |
| `RESEND_API_KEY` | **Yes** | None | Resend API key for sending transactional form emails. Starts with `re_...`. |
| `EMAIL_FROM_ADDRESS` | **Yes** | `TecUnique <onboarding@resend.dev>` | Verified sender address in Resend. Example: `TecUnique <noreply@tecunique.com>`. |
| `CONTACT_RECEIVER_EMAILS` | **Yes** | `rupesh.yadav@tecunique.com` | Comma-separated list of email addresses that receive contact form submissions. Example: `sales@tecunique.com,info@tecunique.com`. |
| `HR_EMAIL_ADDRESS` | No | `CONTACT_RECEIVER_EMAILS` | Email address(es) that receive job applications. Defaults to `CONTACT_RECEIVER_EMAILS`. Example: `hr@tecunique.com,careers@tecunique.com`. |
| `NEXT_PUBLIC_GA_ID` | No | None | Google Analytics 4 Measurement ID (e.g., `G-XXXXXXXXXX`). If omitted, GA scripts are not injected. |
| `ADMIN_PASSWORD` | Optional | `TecUnique@Admin2026!` | Used only by `scripts/init-db.mjs` when seeding initial admin user. |
| `ADMIN_USERNAME` | Optional | `admin` | Used only by `scripts/init-db.mjs` when seeding initial admin user. |

---

## 2. Prerequisites & Third-Party Setup

### 2.1 MongoDB Atlas Setup
1. Log into [MongoDB Atlas](https://cloud.mongodb.com/).
2. Under **Database Access**:
   - Create a database user (e.g., `tecunique_prod_user`).
   - Grant `Read and write to any database` on the `tecunique` database.
3. Under **Network Access**:
   - Add an IP Access Entry: `0.0.0.0/0` (Allow access from anywhere).
   - *Why*: Vercel and cloud platforms utilize dynamic IP ranges. MongoDB user authentication and TLS encryption secure the database.
4. Obtain connection string:
   - Click **Connect** > **Drivers** > **Node.js**.
   - Copy connection string and replace `<password>` with user password.

### 2.2 Resend Email Setup
1. Log into [Resend Dashboard](https://resend.com/).
2. Under **Domains**:
   - Add `tecunique.com`.
   - Add the generated DNS records (DKIM, SPF, MX) to your DNS provider (e.g., Cloudflare, GoDaddy).
   - Wait for Resend to verify domain status.
3. Under **API Keys**:
   - Create an API key with `Full access` named `TecUnique Production Website`.
   - Copy the key (`re_...`).

---

## 3. Deployment Option A: Vercel (Recommended)

Next.js is engineered for deployment on Vercel.

### Step 1: Import Repository
1. Log into [Vercel](https://vercel.com/).
2. Click **Add New...** > **Project**.
3. Select your Git provider (GitHub) and choose `v0-tecunique-website-revamp`.
4. Framework Preset will automatically detect **Next.js**.

### Step 2: Configure Environment Variables
Expand the **Environment Variables** section and paste the following:
```env
NEXT_PUBLIC_BASE_URL=https://www.tecunique.com
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/tecunique?appName=tecunique
ADMIN_JWT_SECRET=<your-random-32-char-secret>
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
EMAIL_FROM_ADDRESS=TecUnique <noreply@tecunique.com>
CONTACT_RECEIVER_EMAILS=sales@tecunique.com
HR_EMAIL_ADDRESS=hr@tecunique.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Step 3: Deploy & Initialize Database
1. Click **Deploy**. Vercel will install dependencies, run `npm run build`, and deploy to a `*.vercel.app` domain.
2. Initialize the database and collections once by running the script from your local machine connected to the production database:
   ```bash
   node scripts/init-db.mjs
   ```

### Step 4: Configure Custom Domain
1. In Vercel Project Settings > **Domains**:
   - Add `www.tecunique.com` (Recommended as Primary).
   - Add `tecunique.com` (Configure to redirect to `www.tecunique.com`).
2. Add DNS records at your domain registrar:
   - **Type A**: `@` ➔ `76.76.21.21`
   - **Type CNAME**: `www` ➔ `cname.vercel-dns.com`

---

## 4. Deployment Option B: Self-Hosted VPS / Docker

If deploying to an Ubuntu VPS (DigitalOcean, AWS EC2, Linode):

### Using Docker
1. Create a `Dockerfile`:
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NEXT_PUBLIC_BASE_URL=https://www.tecunique.com
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "start"]
```

2. Build and run:
```bash
docker build -t tecunique-web .
docker run -d --name tecunique-web -p 3000:3000 --env-file .env.production tecunique-web
```

3. Configure **Nginx** reverse proxy to forward traffic from port 80/443 to `http://127.0.0.1:3000` with Let's Encrypt SSL (`certbot --nginx`).

---

## 5. Post-Deployment Verification Checklist (Smoke Tests)

Perform these quick manual checks immediately after deployment:

- [ ] **Homepage Loads**: Visit `https://www.tecunique.com/` — verify animations, images, and fonts render properly.
- [ ] **Blog Listing**: Visit `https://www.tecunique.com/blog` — ensure articles load from DB. Click an article to verify `/blog/[slug]`.
- [ ] **Careers Page**: Visit `https://www.tecunique.com/careers` — check that openings load. Click a role to verify `/careers/[slug]`.
- [ ] **Contact Form Submission**: Submit a test inquiry on `/contact`. Verify:
  - Form shows success toast.
  - Notification email arrives in `CONTACT_RECEIVER_EMAILS` inbox.
- [ ] **Job Application Modal**: Open application modal on any job, upload a small PDF resume, and submit. Verify:
  - Form shows success toast.
  - Email arrives in `HR_EMAIL_ADDRESS` with attached resume.
- [ ] **Admin Authentication**: Visit `https://www.tecunique.com/admin/login`:
  - Log in with admin credentials.
  - Ensure dashboard stats load at `/admin`.
  - Log out and ensure `/admin` redirects back to `/admin/login`.
- [ ] **Robots & Sitemap**:
  - Visit `https://www.tecunique.com/robots.txt`
  - Visit `https://www.tecunique.com/sitemap.xml`
- [ ] **Legacy Redirects**:
  - Visit `https://www.tecunique.com/jobs` ➔ Should 301/308 redirect to `/careers`.
  - Visit `https://www.tecunique.com/blogs` ➔ Should 301/308 redirect to `/blog`.

---

## 6. Rollback & Incident Response

* **Immediate Rollback (Vercel)**:
  - Open Vercel Dashboard > **Deployments**.
  - Locate the previously working deployment.
  - Click the **three dots (...)** > **Promote to Production**. Instant rollback takes ~5 seconds.
* **Database Outage Incident**:
  - The website features static fallback data for blogs and careers. Even if MongoDB Atlas goes offline, the marketing site will continue serving fallback content rather than crashing.
* **Email Delivery Failure**:
  - Check Resend logs at `https://resend.com/emails`. Common causes:
    - Attempting to send from an unverified domain.
    - Free tier sending limit exceeded.
    - Resend API key expired or invalidated.
