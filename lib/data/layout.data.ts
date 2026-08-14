// ─── Navigation ────────────────────────────────────────────────────────────────

export type NavChild = { name: string; href: string }
export type NavItem = { name: string; href: string; children?: NavChild[] }

export const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
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
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  // { name: "Contact", href: "/contact" },
]

// ─── Footer ────────────────────────────────────────────────────────────────────

export type FooterLink = { name: string; href: string }

export const footerLinks: Record<"company" | "services" | "legal", FooterLink[]> = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Dedicated Teams", href: "/services/dedicated-teams" },
    { name: "Product Engineering", href: "/services/product-engineering" },
    { name: "QA & Automation", href: "/services/qa" },
    { name: "Atlassian App Engineering", href: "/services/atlassian" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
}

export type ReviewLink = { name: string; href: string; color: string }

export const reviewLinks: ReviewLink[] = [
  {
    name: "Glassdoor",
    href: "https://www.glassdoor.co.in/Reviews/TecUnique-Reviews-E2503526.htm",
    color: "#0CAA41",
  },
  {
    name: "AmbitionBox",
    href: "https://www.ambitionbox.com/reviews/tecunique-reviews",
    color: "#334155",
  },
  {
    name: "Clutch",
    href: "https://clutch.co/profile/tecunique-private#highlights",
    color: "#334155",
  },
  {
    name: "GoodFirms",
    href: "https://www.goodfirms.co/company/tecunique-private-limited",
    color: "#1d66c1",
  },
]

export type SocialLink = { href: string; label: string }

export const socialLinks: SocialLink[] = [
  { href: "https://linkedin.com/company/tecunique", label: "LinkedIn" },
  { href: "mailto:sales@tecunique.com", label: "Email" },
]
