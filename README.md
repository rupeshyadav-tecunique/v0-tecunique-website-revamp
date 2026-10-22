# TecUnique Website Revamp

A modern, high-performance web platform for **TecUnique**, a leading software engineering firm specializing in custom solutions and Atlassian ecosystem expertise.

## 🚀 Key Features

- **Admin CMS**: Robust dashboard to manage Blog posts and Career openings.
- **Dynamic Search**: Real-time searching and filtering for blogs and jobs across both admin and public interfaces.
- **Advanced SEO**: Automated `sitemap.xml` and `robots.txt` generation with SEO-friendly metadata for all pages.
- **Modern UI/UX**: Premium design with high-end animations using **Framer Motion** and **Tailwind CSS**.
- **Security**: 
  - Dual-credential Admin authentication (Username/Password).
  - Silent Honeypot spam protection on the Contact Form.
  - Secure, HTTP-only session cookies with configurable timeouts.
- **Responsiveness**: Fully optimized for mobile, tablet, and desktop views.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org) (App Router)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms & UI**: [Shadcn UI](https://ui.shadcn.com/)
- **Email**: [Resend](https://resend.com/)

## ⚙️ Configuration

Create a `.env.local` file in the root directory and add the following:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Base URL (for SEO)
NEXT_PUBLIC_BASE_URL=https://tecunique.com

# Email (Resend)
RESEND_API_KEY=your_resend_api_key
CONTACT_RECEIVER_EMAILS=info@tecunique.com

# Node Environment
NODE_ENV=development
```

## 📚 Documentation & Guides

For in-depth developer handover, architecture, and deployment procedures, refer to the documentation:

* **[Knowledge Transfer & Architecture Handover](docs/KNOWLEDGE_TRANSFER.md)**: Full architecture breakdown, database schemas, authentication flow, static fallback strategy, and code organization.
* **[Production Deployment Runbook](docs/DEPLOYMENT_GUIDE.md)**: Step-by-step production deployment on Vercel/VPS, DNS setup, Resend verification, smoke-test checklist, and rollback procedures.

---

## 🗄️ Database Initialization

To initialize the MongoDB database, create unique indexes on collections (`admins`, `blogs`, `jobs`, `case-studies`), and provision the initial administrator account, run:

```bash
node scripts/init-db.mjs
```

> **Note**: Ensure `MONGODB_URI` is set in your `.env.local` or environment before running.

---

## 🔐 Administrative Access

Access the CMS admin dashboard at `/admin`.

- **Login Route**: `/admin/login`
- **Default Username**: `admin`
- **Session Security**: Edge-compatible HMAC-SHA256 JWT, stored in an HTTP-only secure cookie with a 2-hour sliding window.
- **Password Storage**: Passwords are automatically hashed with bcrypt (`10` rounds).

---

## 📈 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment**:
   ```bash
   cp .env.example .env.local
   # Fill in MONGODB_URI and RESEND_API_KEY
   ```

3. **Initialize database**:
   ```bash
   node scripts/init-db.mjs
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3001](http://localhost:3001) in your browser.

5. **Type-check & build**:
   ```bash
   npx tsc --noEmit
   npm run build
   ```

---

## 📄 License

Internal project for **TecUnique Private Limited**. All rights reserved.
