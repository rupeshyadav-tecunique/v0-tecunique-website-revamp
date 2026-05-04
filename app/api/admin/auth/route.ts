import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    const client = await clientPromise
    const db = client.db("tecunique")
    const admin = await db.collection("admins").findOne({ username, password })

    if (admin) {
      const cookieStore = await cookies()

      // Set the admin token cookie
      cookieStore.set('admin_token', password, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 2, // 2 hours
        path: '/',
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 })
  } catch (error) {
    console.error("Auth Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
