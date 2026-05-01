import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { AdminSidebar } from "@/components/admin/sidebar"
import { User } from "lucide-react"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_token")?.value

  // Server-side protection
  if (!token) {
    redirect("/admin/login")
  }

  return (
    <div className="flex min-h-screen bg-muted/20">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="hidden md:flex h-16 border-b border-border/60 bg-white sticky top-0 z-40 items-center justify-end px-10">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end mr-2">
              <span className="text-sm font-semibold">Admin User</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">TecUnique Admin</span>
            </div>
            <div className="h-10 w-10 rounded-full bg-muted border border-border/60 flex items-center justify-center overflow-hidden">
               <User className="h-6 w-6 text-muted-foreground" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 md:p-10 max-w-6xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
