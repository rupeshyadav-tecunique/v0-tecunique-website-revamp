import clientPromise from "@/lib/db"
import { defaultPagesContent } from "@/lib/data/pages-content.data"

export async function getPageContent<T = any>(slug: string): Promise<T> {
  const defaults = defaultPagesContent[slug] || {}

  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const doc = await db.collection("pages").findOne({ slug })

    if (!doc || !doc.content) {
      return defaults as T
    }

    // Deep merge defaults with stored content so new fields are never missing
    return {
      ...defaults,
      ...doc.content,
    } as T
  } catch (error) {
    // Silent fallback to hardcoded defaults on network/db blips
    return defaults as T
  }
}

export async function savePageContent(slug: string, content: any): Promise<{ success: boolean; error?: string }> {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")

    await db.collection("pages").updateOne(
      { slug },
      {
        $set: {
          slug,
          content,
          updatedAt: new Date(),
        },
      },
      { upsert: true }
    )

    return { success: true }
  } catch (error: any) {
    console.error(`Failed to save page content for ${slug}:`, error)
    return { success: false, error: error.message || "Failed to save page content" }
  }
}
