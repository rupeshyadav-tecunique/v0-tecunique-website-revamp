import { NextResponse } from 'next/server'
import clientPromise from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("tecunique")
    
    // Ping the database to check if the connection is alive
    await db.command({ ping: 1 })
    
    return NextResponse.json({ 
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString()
    }, { status: 200 })
  } catch (error) {
    console.error('Health Check Error:', error)
    return NextResponse.json({ 
      status: 'unhealthy',
      database: 'disconnected',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 503 })
  }
}
