import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'
import { caseStudies } from '@/lib/data/case-studies'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    
    // Check if case studies already exist to prevent duplicate seeding
    const existingCount = await db.collection("case-studies").countDocuments()
    
    if (existingCount > 0) {
      return NextResponse.json({ message: "Case studies already seeded.", count: existingCount })
    }

    // Insert the case studies
    const result = await db.collection("case-studies").insertMany(caseStudies)

    return NextResponse.json({ 
      success: true, 
      message: "Successfully seeded case studies.", 
      insertedCount: result.insertedCount 
    })
  } catch (error) {
    console.error("Seed Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
