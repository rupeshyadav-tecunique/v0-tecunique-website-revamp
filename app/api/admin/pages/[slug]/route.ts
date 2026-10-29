import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { verifyAdminToken } from "@/lib/auth"
import { getPageContent, savePageContent } from "@/lib/services/page-content.service"
import { defaultPagesContent } from "@/lib/data/pages-content.data"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin_token")?.value
    const session = await verifyAdminToken(token)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { slug } = await params
    const content = await getPageContent(slug)

    return NextResponse.json({
      slug,
      content,
      defaults: defaultPagesContent[slug] || {},
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin_token")?.value
    const session = await verifyAdminToken(token)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { slug } = await params
    const body = await req.json()

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid content payload" }, { status: 400 })
    }

    const result = await savePageContent(slug, body)

    if (!result.success) {
      return NextResponse.json({ error: result.error || "Failed to save" }, { status: 500 })
    }

    return NextResponse.json({ success: true, slug })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 })
  }
}
