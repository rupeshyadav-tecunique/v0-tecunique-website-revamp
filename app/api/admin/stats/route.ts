import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getDashboardStats } from "@/lib/admin-stats"
import { verifyAdminToken } from '@/lib/auth'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')?.value
    const session = await verifyAdminToken(token)
    
    // Auth check
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const stats = await getDashboardStats()
    return NextResponse.json(stats)
  } catch (error) {
    console.error("Dashboard Stats API Error:", error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
