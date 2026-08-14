// ─── Service Card ──────────────────────────────────────────────────────────────

export interface ServiceCard {
  id: string
  title: string
  text: string
  bestFor: string[]
  ctaText: string
  ctaHref: string
}

// ─── Office / Contact Location ─────────────────────────────────────────────────

export interface Office {
  country: string
  type: string
  flag: string
  address: string
  email: string
  phone: string
}
