/**
 * Design tokens for JS/TS data (icons, charts, dynamic inline styles).
 * All values reference CSS custom properties from app/globals.css.
 * Change colors in globals.css :root — this file picks them up automatically.
 */
export const brand = {
  blue: "var(--brand-blue)",
  blueHover: "var(--brand-blue-hover)",
  indigo: "var(--brand-indigo)",
  indigoDeep: "var(--brand-indigo-deep)",
  violet: "var(--brand-violet)",
  purple: "var(--brand-purple)",
  cyan: "var(--brand-cyan)",
  teal: "var(--brand-teal)",
  sky: "var(--brand-sky)",
  rose: "var(--brand-rose)",
} as const

export type BrandColor = (typeof brand)[keyof typeof brand]

/** Curated palette for case studies, testimonials, and admin color pickers */
export const accentPalette: BrandColor[] = [
  brand.indigo,
  brand.violet,
  brand.purple,
  brand.cyan,
  brand.teal,
  brand.blue,
  brand.rose,
]

/** Default accent for new case studies */
export const defaultAccentColor = brand.indigo
