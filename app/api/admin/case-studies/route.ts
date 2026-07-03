import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'
import { nanoid } from 'nanoid'

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value
    
    // Auth check
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const caseStudyData = await req.json()
    
    const client = await clientPromise
    const db = client.db("tecunique")
    
    const newCaseStudy = {
      ...caseStudyData,
      id: caseStudyData.id || nanoid(),
      createdAt: new Date(),
    }

    await db.collection("case-studies").insertOne(newCaseStudy)

    return NextResponse.json({ success: true, caseStudy: newCaseStudy })
  } catch (error) {
    console.error("Case Study Save Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const caseStudies = await db.collection("case-studies").find({}).sort({ createdAt: -1 }).toArray()
    return NextResponse.json(caseStudies)
  } catch (error) {
    console.error("Case Study Fetch Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
