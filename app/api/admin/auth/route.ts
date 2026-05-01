import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { password } = await req.json()
    
    const client = await clientPromise
    const db = client.db("tecunique")
    const admin = await db.collection("admins").findOne({ password })

    if (admin) {
      const cookieStore = await cookies()
      
      // Set the admin token cookie
      cookieStore.set('admin_token', password, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  } catch (error) {
    console.error("Auth Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
