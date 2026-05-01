"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  LogOut, 
  ChevronRight,
  Menu,
  X,
  User
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const menuItems = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Manage Blogs", href: "/admin/blog", icon: FileText },
  { name: "Manage Careers", href: "/admin/jobs", icon: Briefcase },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <>
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 border-r border-border/60 bg-white z-50 fixed md:sticky top-0 h-screen overflow-y-auto hidden md:block`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-6">
            {isSidebarOpen ? (
              <Image src="/images/teclogo.png" alt="Logo" width={120} height={30} className="h-6 w-auto" />
            ) : (
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">T</div>
            )}
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? "" : "text-muted-foreground"}`} />
                  {isSidebarOpen && <span>{item.name}</span>}
                  {isActive && isSidebarOpen && <ChevronRight className="ml-auto h-4 w-4 opacity-50" />}
                </Link>
              )
            })}
          </nav>

          <div className="border-t border-border/40 p-4">
            <Button 
              variant="ghost" 
              className={`w-full justify-start gap-3 text-rose-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl`}
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
              {isSidebarOpen && <span>Logout</span>}
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Header (simplified for now) */}
      <header className="md:hidden h-16 border-b border-border/60 bg-white sticky top-0 z-40 flex items-center justify-between px-6">
          <button className="p-2 -ml-2 rounded-lg hover:bg-muted" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-5 w-5" />
          </button>
          <Image src="/images/teclogo.png" alt="Logo" width={100} height={25} className="h-5 w-auto" />
          <div className="w-8" /> {/* Spacer */}
      </header>
    </>
  )
}
