import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import clientPromise from '@/lib/db'
import { signAdminToken } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("tecunique")
    const admin = await db.collection("admins").findOne({ username: String(username).trim() })

    if (!admin) {
      return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 })
    }

    let isPasswordValid = false
    const isHashed = typeof admin.password === 'string' && (admin.password.startsWith('$2a$') || admin.password.startsWith('$2b$'))

    if (isHashed) {
      isPasswordValid = await bcrypt.compare(password, admin.password)
    } else {
      // Legacy plaintext password check + automatic migration to bcrypt hash
      if (admin.password === password) {
        isPasswordValid = true
        try {
          const hashedPassword = await bcrypt.hash(password, 10)
          await db.collection("admins").updateOne(
            { _id: admin._id },
            { $set: { password: hashedPassword, updatedAt: new Date() } }
          )
        } catch (migrationError) {
          console.error("Password hash migration failed:", migrationError)
        }
      }
    }

    if (isPasswordValid) {
      const token = await signAdminToken({ username: admin.username, role: admin.role || 'admin' })
      const cookieStore = await cookies()

      // Set cryptographically signed admin session token cookie
      cookieStore.set('admin_token', token, {
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
