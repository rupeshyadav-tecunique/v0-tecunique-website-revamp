import { MetadataRoute } from 'next'
import clientPromise from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecunique.com'

  // 1. Static Routes — ordered by priority
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/dedicated-teams`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/product-engineering`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/qa`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/atlassian`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/case-studies`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  // 2. Dynamic Blog Routes
  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const blogs = await db.collection("blogs").find(
      { status: { $ne: 'draft' } },
      { projection: { slug: 1, date: 1 } }
    ).toArray()

    blogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.date || new Date()),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    }))
  } catch (e) {
    console.error("Sitemap Blog Error:", e)
  }

  // 3. Dynamic Job Routes
  let jobRoutes: MetadataRoute.Sitemap = []
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const jobs = await db.collection("jobs").find(
      { status: { $ne: 'closed' } },
      { projection: { slug: 1, postedDate: 1 } }
    ).toArray()

    jobRoutes = jobs.map((job) => ({
      url: `${baseUrl}/careers/${job.slug}`,
      lastModified: new Date(job.postedDate || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.65,
    }))
  } catch (e) {
    console.error("Sitemap Job Error:", e)
  }

  return [...staticRoutes, ...blogRoutes, ...jobRoutes]
}

