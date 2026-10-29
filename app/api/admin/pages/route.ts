import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { verifyAdminToken } from "@/lib/auth"
import { editablePagesList } from "@/lib/data/pages-content.data"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin_token")?.value
    const session = await verifyAdminToken(token)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    return NextResponse.json(editablePagesList)
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
