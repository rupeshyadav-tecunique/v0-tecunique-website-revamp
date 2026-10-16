import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'
import { ObjectId } from 'mongodb'
import { verifyAdminToken } from '@/lib/auth'

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value
    const session = await verifyAdminToken(token)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const client = await clientPromise
    const db = client.db("tecunique")
    
    const isHexObjectId = ObjectId.isValid(id) && new ObjectId(id).toString() === id
    const filter = isHexObjectId ? { $or: [{ _id: new ObjectId(id) }, { id }] } : { id }

    const result = await db.collection("blogs").deleteOne(filter)

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Blog Delete Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value
    const session = await verifyAdminToken(token)
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const updateData = await req.json()
    delete updateData._id // Prevent modifying immutable MongoDB _id

    const client = await clientPromise
    const db = client.db("tecunique")
    
    const isHexObjectId = ObjectId.isValid(id) && new ObjectId(id).toString() === id
    const filter = isHexObjectId ? { $or: [{ _id: new ObjectId(id) }, { id }] } : { id }

    const result = await db.collection("blogs").updateOne(
      filter,
      { $set: updateData }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Blog Patch Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
