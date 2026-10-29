---
name: modify-site-content
description: >-
  Use this skill when modifying website text, headings, taglines, company contact details,
  office addresses, phone numbers, stats, testimonials, or service descriptions across TecUnique website pages.
---

# Modifying Website Copy & Content

This skill is a fast reference for editing any visible text, contact info, testimonials, or statistics on the TecUnique website without needing deep technical knowledge.

---

## Method 1: Using the Admin CMS (No Code Required — Ideal for CEO & Marketing)

1. Log into the Admin Portal at [http://localhost:3001/admin/login](http://localhost:3001/admin/login) (or `https://www.tecunique.com/admin/login` on production).
2. In the sidebar, click **Edit Pages** (`/admin/pages`).
3. Select the page you wish to modify:
   - **Homepage**: Change hero headline, highlighted blue text, dynamic rotating keywords, subheadline, and trust metrics.
   - **About Us**: Change headline, tagline, full story narrative, and update the featured story image URL (`/images/about/about-4.png`).
   - **Services Hub**: Change the overview title, subtitle, and bottom call to action banner.
   - **Service Pages** (`Dedicated Teams`, `QA & Automation`, `Atlassian Apps`, `Product Engineering`): Change hero badges, headlines, subheadings, and bottom CTA buttons.
4. Click **Publish Page Changes** — updates go live immediately!
5. If you ever want to revert back to original website copy, click **Reset Defaults**.

---

## Method 2: Editing Directly in Code

### Quick File Map: Where does each piece of content live?

| What do you want to change? | File to edit |
| :--- | :--- |
| **Office Addresses & Phone Numbers** | [`lib/data/contact.data.ts`](../../../lib/data/contact.data.ts) |
| **Header Navbar & Footer Links** | [`lib/data/layout.data.ts`](../../../lib/data/layout.data.ts) |
| **Homepage Hero & Section Text** | [`components/pages/home/hero-section.tsx`](../../../components/pages/home/hero-section.tsx) |
| **Homepage Services Summary** | [`components/pages/home/services-section.tsx`](../../../components/pages/home/services-section.tsx) |
| **Homepage Dedicated Teams Feature** | [`components/pages/home/dedicated-teams-section.tsx`](../../../components/pages/home/dedicated-teams-section.tsx) |
| **Homepage "Why Choose Us" Pillars** | [`components/pages/home/why-us-section.tsx`](../../../components/pages/home/why-us-section.tsx) |
| **Homepage Testimonials / Client Quotes** | [`components/pages/home/testimonials-section.tsx`](../../../components/pages/home/testimonials-section.tsx) |
| **Homepage Call to Action (CTA)** | [`components/pages/home/cta-section.tsx`](../../../components/pages/home/cta-section.tsx) |
| **About Us Page Copy** | [`app/(site)/about/page.tsx`](../../../app/(site)/about/page.tsx) |
| **Services Pages Copy** | [`app/(site)/services/`](../../../app/(site)/services) subfolders (`dedicated-teams`, `qa`, `atlassian`, `product-engineering`) |
| **Contact Page Headings & Sidebar** | [`components/pages/contact/contact-section.tsx`](../../../components/pages/contact/contact-section.tsx) |
| **Footer Contact Info & Review Badges** | [`components/layout/footer.tsx`](../../../components/layout/footer.tsx) |
| **Global Meta Title & Description** | [`app/layout.tsx`](../../../app/layout.tsx) |

---

## 2. Common Content Editing Procedures

### A. Updating Office Address, Phone Number, or Sales Contact
Open [`lib/data/contact.data.ts`](../../../lib/data/contact.data.ts).
Locate the `offices` array. Edit the text inside the strings:
```typescript
export const offices = [
  {
    country: "INDIA",
    city: "Vadodara (Headquarters)",
    address: "1002, Neptune Edge, Sarabhai Campus, Vadodara – 390 007, Gujarat, India",
    phone: "+91 915 746 0525",
    email: "sales@tecunique.com",
    badge: "Headquarters & Delivery Center",
    details: "Engineering teams, QA labs, product delivery, and administrative operations."
  },
  // Add or update international offices below...
]
```

### B. Updating Client Testimonials
Open [`components/pages/home/testimonials-section.tsx`](../../../components/pages/home/testimonials-section.tsx).
Find the testimonials data list. You can safely update:
- `quote`: The text testimonial
- `author`: Person's name
- `role`: Their job title
- `company`: Client company name
- `avatar`: Image path (e.g. `/images/avatars/...`)

### C. Updating Homepage Numbers / Stats
Open [`components/pages/home/hero-section.tsx`](../../../components/pages/home/hero-section.tsx) or [`components/pages/careers/stats-section.tsx`](../../../components/pages/careers/stats-section.tsx).
Locate the stat items (e.g., `10+ Years`, `50+ Engineers`, `98% Retention`). Change the string values directly.

---

## 3. Safe Editing Rules
1. **Keep quotes matching**: Always maintain matching double quotes (`"..."`) or single quotes (`'...'`).
2. **Do not remove commas**: Lists of items in `.ts` files must be separated by commas (`,`).
3. **Preview your changes**: Run `npm run dev` in your terminal and check [http://localhost:3001](http://localhost:3001) to verify formatting.
4. **Run type-check**: Run `npx tsc --noEmit` before committing to make sure no syntax was broken.
