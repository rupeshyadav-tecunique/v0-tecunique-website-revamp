import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAdminToken } from '@/lib/auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

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

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
}
