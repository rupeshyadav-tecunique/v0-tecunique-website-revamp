import clientPromise from '@/lib/db'

export async function getDashboardStats() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    
    // Get stats in parallel
    const [blogCount, activeJobsCount] = await Promise.all([
      db.collection("blogs").countDocuments({}),
      db.collection("jobs").countDocuments({ isActive: true })
    ])

    return {
      blogs: blogCount,
      activeJobs: activeJobsCount,
      applications: 42, // Mock for now
      siteViews: "1.2k" // Mock for now
    }
  } catch (error) {
    console.error("getDashboardStats Error:", error)
    throw error
  }
}
