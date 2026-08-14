// ─── Job ───────────────────────────────────────────────────────────────────────

export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string[]
  postedDate: string
  slug: string
}
