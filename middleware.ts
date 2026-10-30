import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAdminToken } from '@/lib/auth'

function getClientIp(request: NextRequest): string {
  let ip = ''

  // Check Cloudflare connecting IP header
  const cfIp = request.headers.get('cf-connecting-ip')
  if (cfIp) {
    ip = cfIp.trim()
  } else {
    // Check X-Forwarded-For header (first IP in chain is client IP)
    const forwardedFor = request.headers.get('x-forwarded-for')
    if (forwardedFor) {
      ip = forwardedFor.split(',')[0].trim()
    } else {
      // Check X-Real-IP header from Nginx/cPanel proxy
      const realIp = request.headers.get('x-real-ip')
      if (realIp) {
        ip = realIp.trim()
      } else {
        ip = (request as any).ip || ''
      }
    }
  }

  // Normalize IPv4-mapped IPv6 addresses (e.g. ::ffff:203.0.113.195 -> 203.0.113.195)
  if (ip.startsWith('::ffff:')) {
    ip = ip.substring(7)
  }

  return ip
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const isAdminRoute = pathname.startsWith('/admin') || pathname.startsWith('/api/admin')

  // ─── 1. Separate Domain / Subdomain Guard ─────────────────────────────────
  // If ADMIN_HOST is defined (e.g. "admin.tecunique.com"):
  // Only allow access to /admin and /api/admin on that specific host.
  const adminHost = process.env.ADMIN_HOST
  if (adminHost && isAdminRoute) {
    const requestHost = request.headers.get('host')?.split(':')[0]?.toLowerCase()
    if (requestHost && requestHost !== adminHost.toLowerCase()) {
      return new NextResponse('Not Found', { status: 404 })
    }
  }

  // ─── 2. IP Whitelist Guard ────────────────────────────────────────────────
  // If ALLOWED_ADMIN_IP is defined (e.g. "203.0.113.195" or comma-separated list):
  // Block any access to /admin and /api/admin from unauthorized IPs.
  const allowedAdminIp = process.env.ALLOWED_ADMIN_IP
  if (allowedAdminIp && isAdminRoute) {
    const clientIp = getClientIp(request)
    const allowedIps = allowedAdminIp
      .split(',')
      .map((ip) => ip.trim())
      .filter(Boolean)

    if (!allowedIps.includes(clientIp)) {
      console.warn(`[SECURITY] Blocked admin access from unauthorized IP: ${clientIp}`)
      return new NextResponse('Access Denied: Your IP is not authorized to access the management portal.', {
        status: 403,
        headers: { 'Content-Type': 'text/plain' },
      })
    }
  }

  // ─── 3. Admin Authentication Guard ────────────────────────────────────────
  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login') {
      // If already logged in with valid token, redirect to dashboard
      const token = request.cookies.get('admin_token')?.value
      const validPayload = await verifyAdminToken(token)
      if (validPayload) {
        const url = request.nextUrl.clone()
        url.pathname = '/admin'
        return NextResponse.redirect(url)
      }
      return NextResponse.next()
    }

    const token = request.cookies.get('admin_token')?.value
    const validPayload = await verifyAdminToken(token)

    if (!validPayload) {
      const url = request.nextUrl.clone()
      url.pathname = '/admin/login'
      const response = NextResponse.redirect(url)
      // Delete the invalid/forged/expired cookie
      response.cookies.delete('admin_token')
      return response
    }
  }

  if (pathname.startsWith('/api/admin')) {
    // Allow login endpoint
    if (pathname === '/api/admin/auth') {
      return NextResponse.next()
    }

    const token = request.cookies.get('admin_token')?.value
    const validPayload = await verifyAdminToken(token)

    if (!validPayload) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/:path*', '/api/admin/:path*'],
}
