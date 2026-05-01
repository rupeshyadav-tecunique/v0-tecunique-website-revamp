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

    const jobData = await req.json()
    
    const client = await clientPromise
    const db = client.db("tecunique")
    
    const newJob = {
      ...jobData,
      id: nanoid(),
      createdAt: new Date(),
    }

    await db.collection("jobs").insertOne(newJob)

    return NextResponse.json({ success: true, job: newJob })
  } catch (error) {
    console.error("Job Save Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const jobs = await db.collection("jobs").find({}).sort({ createdAt: -1 }).toArray()
    return NextResponse.json(jobs)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
