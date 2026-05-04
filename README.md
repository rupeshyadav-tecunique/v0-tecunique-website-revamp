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

## 🗄️ Database Seeding

To initialize the database with default blogs, job openings, and the admin user, run:

```bash
node scripts/init-db.mjs
```

> **Note**: Ensure your `MONGODB_URI` is correctly set before running the script.

## 🔐 Administrative Access

Access the admin dashboard at `/admin`.

- **Username**: Managed via the `admins` collection.
- **Password**: Securely stored in the database.
- **Session Timeout**: Configured for 2 hours for enhanced security.

## 📈 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📄 License

Internal project for **TecUnique Private Limited**. All rights reserved.
