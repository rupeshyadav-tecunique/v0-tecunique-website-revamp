# TecUnique Website Revamp – Knowledge Transfer & Engineering Handover

Welcome to the **TecUnique Website** engineering handover guide. This document serves as the comprehensive technical reference for any engineer joining, maintaining, or extending the TecUnique marketing platform and CMS.

---

## 1. Executive & Project Overview

* **Primary Purpose**: Official corporate website for **TecUnique Private Limited**, presenting services (Dedicated Teams, Product Engineering, QA Automation, Atlassian Apps), client case studies, technical insights (Blog), careers portal, and lead capture forms.
* **Secondary Purpose**: Self-hosted lightweight administrative CMS at `/admin` for the non-technical team (Marketing, HR) to publish blogs, manage job openings, and review case studies.
* **Repository**: `tecunique/v0-tecunique-website-revamp`
* **Default Branch**: `main` (active test branch: `test`)
* **Framework**: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4

---

## 2. Technology Stack & Key Dependencies

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.2.4` | Full-stack React framework with App Router, server components, and edge middleware |
| **React** | `^19` | Frontend UI library |
| **TypeScript** | `5.7.3` | Type safety across entire codebase (`tsconfig.json`) |
| **Tailwind CSS** | `^4.2.0` | Utility-first styling with `@tailwindcss/postcss` and CSS design tokens |
| **MongoDB** | `^7.2.0` | Official Node.js driver with singleton connection pooling |
| **Resend** | `^6.12.2` | Transactional email delivery service for inquiries and job applications |
| **bcryptjs** | `^3.0.3` | Salted password hashing for CMS admin authentication |
| **Radix UI** | Various | Headless accessible UI primitives (`components/ui/*`) |
| **Lucide React** | `^0.564.0` | Consistent iconography across the application |
| **Sonner** | `^1.7.1` | Toast notifications for forms and admin actions |

---

## 3. Project Structure Blueprint

```text
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI for type-checking & build
├── app/
│   ├── (site)/                  # Public customer-facing marketing routes
│   │   ├── about/               # About page
│   │   ├── blog/                # Blog list and /blog/[slug] dynamic articles
│   │   ├── careers/             # Careers portal and /careers/[slug] job details
│   │   ├── case-studies/        # Case studies index and /case-studies/[id]
│   │   ├── contact/             # Contact page with lead capture form
│   │   ├── services/            # Service landing pages (dedicated-teams, qa, etc.)
│   │   ├── cookie-policy/       # Legal: Cookie policy
│   │   ├── privacy-policy/      # Legal: Privacy policy
│   │   ├── terms-of-service/    # Legal: Terms of service
│   │   ├── layout.tsx           # Site layout with Header and Footer
│   │   └── page.tsx             # Homepage
│   ├── admin/                   # Secure Admin CMS
│   │   ├── (dashboard)/         # Protected dashboard layout & routes
│   │   │   ├── blog/            # Admin blog management & editor
│   │   │   ├── jobs/            # Admin career management & editor
│   │   │   ├── case-studies/    # Admin case study management & editor
│   │   │   └── page.tsx         # Admin analytics & overview
│   │   └── login/               # Admin login screen
│   ├── api/                     # Next.js Route Handlers (Backend APIs)
│   │   ├── admin/               # Admin CRUD APIs (auth, blogs, jobs, stats, etc.)
│   │   ├── apply/               # Job application submission handler with resume upload
│   │   ├── health/              # Database health-check endpoint
│   │   └── send/                # Contact inquiry form submission handler
│   ├── globals.css              # Global styles, Tailwind imports & CSS custom properties
│   ├── layout.tsx               # Root HTML shell, fonts, analytics, toasts
│   ├── not-found.tsx            # Global 404 page
│   ├── robots.ts                # Dynamic robots.txt generation
│   └── sitemap.ts               # Dynamic sitemap.xml generation from DB & static routes
├── components/
│   ├── layout/                  # Header, Footer, and navigation components
│   ├── pages/                   # Feature-specific page components (home, contact, etc.)
│   └── ui/                      # Reusable UI primitives (buttons, inputs, modals)
├── docs/                        # Architecture, KT & Deployment documentation
├── lib/
│   ├── admin-stats.ts           # Admin dashboard statistical aggregation helpers
│   ├── auth.ts                  # Edge Web Crypto JWT signing, verifying & cookie handling
│   ├── blog-data.ts             # Static fallback blog articles
│   ├── db.ts                    # MongoDB connection pooling singleton
│   ├── jobs-data.ts             # Static fallback career openings
│   ├── security.ts              # HTML entity escaping & CRLF header injection sanitizer
│   └── utils.ts                 # Classname merge helper (clsx + tailwind-merge)
├── public/                      # Static assets (images, logos, icons, fonts)
├── scripts/
│   └── init-db.mjs              # Database initialization and indexing script
├── middleware.ts                # Next.js Edge middleware for admin route protection
├── next.config.mjs              # Security headers, legacy 301 redirects, Next.js config
└── package.json                 # Project dependencies & npm scripts
```

---

## 4. Database Architecture & Data Models

Database: **MongoDB Atlas** (`tecunique`)

### 4.1 Collection: `admins`
Stores CMS users authorized to access `/admin`.
```typescript
interface AdminDocument {
  _id: ObjectId;
  username: string;       // Unique index
  password: string;       // bcrypt hash ($2b$10$...)
  role?: string;          // e.g., 'superadmin' | 'editor'
  createdAt: Date;
  updatedAt: Date;
}
```
*Note: Plaintext passwords are automatically upgraded to bcrypt hashes on first login in `app/api/admin/auth/route.ts`.*

### 4.2 Collection: `blogs`
Stores technical articles published via CMS.
```typescript
interface BlogDocument {
  _id: ObjectId;
  id: string;             // Nanoid or numeric string
  slug: string;           // URL identifier, unique index
  title: string;
  excerpt: string;
  content: string;        // Markdown-formatted string with ## headings & bullet points
  author: string;
  category: string;       // e.g., 'Technology', 'Leadership', 'QA'
  readTime: string;       // e.g., '5 min read'
  image: string;          // Public path e.g. '/images/blog/blog1.jpg'
  date: string;           // ISO date string e.g. '2024-03-15'
  createdAt: Date;        // Index: { createdAt: -1 }
  updatedAt?: Date;
  isDraft: boolean;       // Filtered out from public /blog if true
}
```

### 4.3 Collection: `jobs`
Stores career openings published via CMS.
```typescript
interface JobDocument {
  _id: ObjectId;
  id: string;             // Nanoid or numeric string
  slug: string;           // URL identifier, unique index
  title: string;
  department: string;     // e.g., 'Engineering', 'QA', 'Consulting'
  location: string;       // e.g., 'Vadodara, India' | 'Remote / Hybrid'
  type: string;           // e.g., 'Full-time'
  experience: string;     // e.g., '5+ Years'
  description: string;
  requirements: string[]; // List of bullet points
  postedDate: string;
  createdAt: Date;
  isActive: boolean;      // Only active jobs are displayed on /careers
}
```

### 4.4 Collection: `case-studies`
Stores client case studies and success stories.
```typescript
interface CaseStudyDocument {
  _id: ObjectId;
  id: string;             // Slug identifier (e.g. 'oppscience', 'skyselect')
  company: string;
  title: string;
  description: string;
  industry: string;
  color?: string;
  tags?: string[];
  [key: string]: any;
}
```

---

## 5. Authentication, Sessions & Security Design

1. **Edge-Compatible Web Crypto JWT (`lib/auth.ts`)**:
   - Uses the native W3C Web Crypto API (`crypto.subtle`) rather than Node-only `jsonwebtoken`.
   - Generates compact HMAC-SHA256 tokens compatible with Next.js Edge Middleware and Route Handlers.
   - Session duration is **2 hours** (`7200` seconds).
2. **HTTP-Only Cookies**:
   - The token is stored in a cookie named `admin_token`.
   - Attributes: `httpOnly: true`, `sameSite: 'lax'`, `secure: process.env.NODE_ENV === 'production'`.
3. **Middleware Guard (`middleware.ts`)**:
   - Protects all `/admin` routes and all `/api/admin/*` routes.
   - Automatically permits the login handler at `/api/admin/auth`.
   - Rejects unauthenticated API calls with `401 Unauthorized` directly at the network edge.
4. **Form Sanitization (`lib/security.ts`)**:
   - `escapeHtml`: Escapes special characters (`& < > " '`) before inserting user input into Resend HTML emails.
   - `sanitizeHeader`: Strips newlines (`\r`, `\n`) from email subject lines and sender names to prevent **CRLF Email Header Injection**.
   - Server-side email format regex, phone regex, and resume file extension/MIME verification.

---

## 6. Email Delivery & Form Submissions

### Contact Inquiries (`app/api/send/route.ts`)
* **Triggered by**: Contact form on `/contact` and CTA sections.
* **Service**: Resend API (`RESEND_API_KEY`).
* **From Address**: `EMAIL_FROM_ADDRESS` (defaults to `TecUnique Contact <onboarding@resend.dev>`).
* **Receivers**: `CONTACT_RECEIVER_EMAILS` (comma-separated list, defaults to `rupesh.yadav@tecunique.com`).
* **Features**: Direct reply-to set to the submitter's email, sanitized HTML table template.

### Job Applications (`app/api/apply/route.ts`)
* **Triggered by**: "Apply for Role" modal on `/careers/[slug]`.
* **Payload**: `multipart/form-data` containing applicant details and resume file.
* **Constraints**: Max **10MB** file size, allowed extensions `.pdf`, `.doc`, `.docx`.
* **Delivery**: Converts file buffer and attaches directly to Resend email to `HR_EMAIL_ADDRESS` (falls back to `CONTACT_RECEIVER_EMAILS`).

---

## 7. Static Fallback & Offline Resilience Strategy

A key architectural feature of this codebase is **Graceful Degradation**:
1. **Blogs**:
   - Both `/blog` and `/blog/[slug]` first query MongoDB Atlas.
   - If MongoDB is unreachable, empty, or fails to connect, the application automatically falls back to curated static articles in [`lib/blog-data.ts`](file:///c:/Users/Rupesh%20Yadav/Desktop/projects/tecunique/v0-tecunique-website-revamp/lib/blog-data.ts).
   - Slugs support fuzzy variations (e.g. `with-and` vs `without-and`) and numeric ID lookups (`/blog/1`).
2. **Careers**:
   - Both `/careers` and `/careers/[slug]` first query MongoDB Atlas.
   - If offline or empty, they fall back to [`lib/jobs-data.ts`](file:///c:/Users/Rupesh%20Yadav/Desktop/projects/tecunique/v0-tecunique-website-revamp/lib/jobs-data.ts).
   - Slugs support aliases (e.g. `qa-engineer` vs `quality-assurance-engineer`).

**Benefit**: The marketing website never crashes or displays a blank page during database maintenance or network blips.

---

## 8. Common Maintenance Workflows

### 8.1 Adding or Modifying Navigation / Footer Links
* Edit [`lib/data/layout.data.ts`](file:///c:/Users/Rupesh%20Yadav/Desktop/projects/tecunique/v0-tecunique-website-revamp/lib/data/layout.data.ts):
  - `navigation`: Top navbar links, dropdown children, and labels.
  - `footerLinks`: Footer columns for Company, Services, and Legal.
  - `reviewLinks`: External review profiles (Glassdoor, AmbitionBox, Clutch, GoodFirms).
  - `socialLinks`: Social links (LinkedIn, sales email).

### 8.2 Seeding or Resetting the Database
```bash
# Initialize collections, unique indexes, and create initial admin
node scripts/init-db.mjs
```

### 8.3 Resetting the Admin Password
If an admin is locked out, you can run a one-line script:
```bash
node -e "
const { MongoClient } = require('mongodb');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });
async function reset() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const db = client.db('tecunique');
  const hash = await bcrypt.hash('NEW_STRONG_PASSWORD', 10);
  await db.collection('admins').updateOne({ username: 'admin' }, { \$set: { password: hash, updatedAt: new Date() } });
  console.log('Password reset successfully');
  await client.close();
}
reset();
"
```

### 8.4 Adding a Legacy Route 301 Redirect
Edit the `redirects()` array in [`next.config.mjs`](file:///c:/Users/Rupesh%20Yadav/Desktop/projects/tecunique/v0-tecunique-website-revamp/next.config.mjs):
```javascript
{ source: '/old-path', destination: '/new-path', permanent: true },
```

---

## 9. Critical Architectural Gotchas

1. **`images: { unoptimized: true }` in `next.config.mjs`**:
   - **DO NOT REMOVE**: This is intentionally set because image optimization creates runtime errors with specific custom domain asset hosts. Keep it enabled unless you have thoroughly validated an alternative image loader.
2. **Next.js 16 Asynchronous `params`**:
   - In Next.js 16, route parameters (`params`) in Page components and `generateMetadata` are Promises:
     ```typescript
     const resolvedParams = await params;
     const slug = resolvedParams?.slug;
     ```
   - Always await `params` before accessing `params.slug` or `params.id`.
3. **MongoDB `ObjectId` vs Nanoid**:
   - Articles and jobs use Nanoid string IDs (`id: '3'`, `id: 'xyz'`).
   - Do not pass arbitrary string IDs directly into `new ObjectId(id)` without validating `ObjectId.isValid(id) && new ObjectId(id).toString() === id`.
4. **Stripping Immutable `_id` on Updates**:
   - Before executing `db.collection(...).updateOne(filter, { $set: updateData })`, always `delete updateData._id` to prevent MongoDB immutable field modification crashes.
