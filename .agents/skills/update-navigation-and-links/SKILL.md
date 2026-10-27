---
name: update-navigation-and-links
description: >-
  Use this skill when adding, renaming, or reordering menu items in the top header navbar,
  updating dropdown menus, modifying footer link columns, or updating social media and external review links.
---

# Updating Navigation & Links

All global menus, headers, footers, external review profiles, and social links are centrally configured in a single file:
[`lib/data/layout.data.ts`](../../../lib/data/layout.data.ts).

---

## 1. Top Navigation Bar (Header)

In [`lib/data/layout.data.ts`](../../../lib/data/layout.data.ts), locate the `navigation` array:

### A. Adding a Standard Link
```typescript
{ name: "Pricing", href: "/pricing" },
```

### B. Adding a Link with a Dropdown Menu
```typescript
{
  name: "Services",
  href: "/services",
  children: [
    { name: "Dedicated Software Teams", href: "/services/dedicated-teams" },
    { name: "Product Engineering", href: "/services/product-engineering" },
    { name: "QA & Automation", href: "/services/qa" },
    { name: "Atlassian App Engineering", href: "/services/atlassian" },
  ],
},
```

---

## 2. Footer Links

In [`lib/data/layout.data.ts`](../../../lib/data/layout.data.ts), locate the `footerLinks` object:
* `company`: Links under the "Company" column (About, Services, Case Studies, Blog, Careers, Contact).
* `services`: Links under the "Services" column.
* `legal`: Links under the "Legal" column (Privacy Policy, Terms of Service, Cookie Policy).

To add a link:
```typescript
{ name: "Security & Compliance", href: "/security" },
```

---

## 3. External Review Links & Ratings

TecUnique showcases ratings on Glassdoor, AmbitionBox, Clutch, and GoodFirms.
Locate `reviewLinks` in [`lib/data/layout.data.ts`](../../../lib/data/layout.data.ts):
```typescript
export const reviewLinks: ReviewLink[] = [
  {
    name: "Glassdoor",
    href: "https://www.glassdoor.co.in/Reviews/TecUnique-Reviews-E2503526.htm",
    color: "#0CAA41",
  },
  {
    name: "Clutch",
    href: "https://clutch.co/profile/tecunique-private#highlights",
    color: "#334155",
  },
  // Add new review platforms here...
]
```

---

## 4. Social Links

Locate `socialLinks` in [`lib/data/layout.data.ts`](../../../lib/data/layout.data.ts):
```typescript
export const socialLinks: SocialLink[] = [
  { href: "https://linkedin.com/company/tecunique", label: "LinkedIn" },
  { href: "mailto:sales@tecunique.com", label: "Email" },
]
```

---

## 5. Important: Renaming an Existing URL?
If you change an existing page URL (e.g. from `/dedicated-teams` to `/services/dedicated-teams`), always add a **301 redirect** in [`next.config.mjs`](../../../next.config.mjs) under `redirects()` so users with bookmarks and Google search results don't encounter a 404.

---

## Verification
1. Visit [http://localhost:3001](http://localhost:3001).
2. Check desktop navbar links, hover over dropdowns, and check mobile hamburger menu.
3. Check footer columns to verify the links lead to the correct destination.
4. Run `npx tsc --noEmit`.
