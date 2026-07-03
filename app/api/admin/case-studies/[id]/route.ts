import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    const updateData = await req.json()
    delete updateData._id // prevent updating the immutable _id

    const client = await clientPromise
    const db = client.db("tecunique")

    const result = await db.collection("case-studies").updateOne(
      { id },
      { $set: updateData }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Not Found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Case Study Update Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params

    const client = await clientPromise
    const db = client.db("tecunique")

    const result = await db.collection("case-studies").deleteOne({ id })

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Not Found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Case Study Delete Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
