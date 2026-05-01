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

    const blogData = await req.json()
    
    const client = await clientPromise
    const db = client.db("tecunique")
    
    const newBlog = {
      ...blogData,
      id: nanoid(),
      createdAt: new Date(),
    }

    await db.collection("blogs").insertOne(newBlog)

    return NextResponse.json({ success: true, blog: newBlog })
  } catch (error) {
    console.error("Blog Save Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    const blogs = await db.collection("blogs").find({}).sort({ createdAt: -1 }).toArray()
    return NextResponse.json(blogs)
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
