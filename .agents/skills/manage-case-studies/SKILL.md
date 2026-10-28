---
name: manage-case-studies
description: >-
  Use this skill when adding a new client case study, editing existing client success stories,
  updating client logos in public/images/companies/, or modifying case study filters and highlights.
---

# Managing Case Studies & Success Stories

This skill guides you through updating or adding client case studies (e.g., OPPSCIENCE, SkySelect, Innovalog, Qotilabs, Appfire).

---

## Method 1: Using the Admin CMS (Recommended)

1. Navigate to **Manage Case Studies** in the Admin panel (`/admin/case-studies`).
2. Click **+ Add Case Study** (`/admin/case-studies/new`).
3. Fill out:
   - **ID (URL Slug)**: e.g. `oppscience` (auto-generated from client name).
   - **Client Name**: Company name.
   - **Brand Color**: Hex color code picker.
   - **Industry & Service Category**: e.g., `Fintech`, `Dedicated Teams`.
   - **Tagline & Challenge Description**.
   - **Key Results**: Add rows for metrics (e.g. `40+ engineers`, `98% retention`).
   - **Content Sections & Testimonials**.
4. Click **Save Case Study**. It will immediately be saved to the database.

---

## Method 2: Adding or Editing a Case Study in Code

Open [`components/pages/case-studies/case-studies-list.tsx`](../../../components/pages/case-studies/case-studies-list.tsx).
Find the `CASE_STUDIES` array:

```typescript
{
  id: "your-client-slug",                     // URL identifier: /case-studies/your-client-slug
  company: "Client Name",                    // e.g. "Acme Corp"
  logo: "/images/companies/client-logo.svg", // SVG or PNG logo
  initials: "AC",                            // 2-letter fallback initials if logo missing
  color: "#0284c7",                          // Brand accent hex color
  featured: true,                            // Displays with 'Featured' badge if true
  industry: "Fintech / Cloud Infrastructure",// Subtitle industry tag
  title: "Main Case Study Headline",         // e.g. "Scaling Engineering from 5 to 40 Developers"
  description: "2-3 sentence overview of the client partnership, challenges, and solutions.",
  primaryService: "Dedicated Teams & QA",    // Core service delivered
  highlight: "40+ engineers onboarded",      // High-impact metric shown on card
  filters: ["Dedicated Teams", "Product Engineering"], // Filter tags on the page
  href: "/case-studies/your-client-slug",
}
```

---

## 3. Client Logo Best Practices
1. Save logos in `public/images/companies/` in **SVG** format when possible (crisp at all screen resolutions).
2. If using PNG, ensure the background is transparent and dimensions are around `200x60px`.
3. Provide a fallback `initials` string (e.g. `OS` for Oppscience) in case the logo fails to load.

---

## 4. Verification
1. Visit [http://localhost:3001/case-studies](http://localhost:3001/case-studies).
2. Test the category filter buttons (All, Dedicated Teams, Product Engineering, QA & Automation) to ensure the study categorizes properly.
3. Click on the card to ensure the page opens at `/case-studies/[id]`.
4. Run `npx tsc --noEmit` to verify type safety.
