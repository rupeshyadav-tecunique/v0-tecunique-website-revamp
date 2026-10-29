import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { cookies } from "next/headers"
import { verifyAdminToken } from "@/lib/auth"
import { VisualEditProvider } from "@/components/admin/visual-editor/visual-edit-context"
import { VisualEditBar } from "@/components/admin/visual-editor/visual-edit-bar"

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_token")?.value
  const session = await verifyAdminToken(token)
  const isAdmin = !!session

  return (
    <VisualEditProvider isAdmin={isAdmin}>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      {isAdmin && <VisualEditBar />}
    </VisualEditProvider>
  )
}
