import { MetadataRoute } from 'next'
import clientPromise from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://tecunique.com'

  // 1. Static Routes
  const staticRoutes = [
    '',
    '/services',
    '/case-studies',
    '/blog',
    '/careers',
    '/contact',
    '/admin/login',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 2. Dynamic Blog Routes
  let blogRoutes: any[] = []
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const blogs = await db.collection("blogs").find({}, { projection: { slug: 1, date: 1 } }).toArray()
    
    blogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(blog.date || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  } catch (e) {
    console.error("Sitemap Blog Error:", e)
  }

  // 3. Dynamic Job Routes
  let jobRoutes: any[] = []
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const jobs = await db.collection("jobs").find({}, { projection: { slug: 1, postedDate: 1 } }).toArray()
    
    jobRoutes = jobs.map((job) => ({
      url: `${baseUrl}/careers/${job.slug}`,
      lastModified: new Date(job.postedDate || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }))
  } catch (e) {
    console.error("Sitemap Job Error:", e)
  }

  return [...staticRoutes, ...blogRoutes, ...jobRoutes]
}
