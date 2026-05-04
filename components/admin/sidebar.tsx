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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin/login")
    router.refresh()
  }

  const NavContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center justify-between px-6">
        {isSidebarOpen || isMobileMenuOpen ? (
          <Image src="/images/teclogo.png" alt="Logo" width={120} height={30} className="h-6 w-auto" />
        ) : (
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">T</div>
        )}
        {isMobileMenuOpen && (
          <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden p-2 -mr-2 rounded-lg hover:bg-muted text-muted-foreground">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* User Info on Mobile */}
      {isMobileMenuOpen && (
        <div className="mx-4 mb-4 mt-2 p-4 rounded-2xl bg-muted/30 border border-border/40 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white border border-border/60 flex items-center justify-center overflow-hidden shrink-0">
            <User className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-semibold truncate">Admin User</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold truncate">TecUnique Admin</span>
          </div>
        </div>
      )}

      <nav className="flex-1 space-y-1 px-3 py-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? "" : "text-muted-foreground"}`} />
              {(isSidebarOpen || isMobileMenuOpen) && <span>{item.name}</span>}
              {isActive && (isSidebarOpen || isMobileMenuOpen) && <ChevronRight className="ml-auto h-4 w-4 opacity-50" />}
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
          {(isSidebarOpen || isMobileMenuOpen) && <span>Logout</span>}
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 border-r border-border/60 bg-white z-50 sticky top-0 h-screen overflow-y-auto hidden md:block`}
      >
        <NavContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      
      <aside 
        className={`fixed left-0 top-0 bottom-0 w-72 bg-white z-[70] md:hidden transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <NavContent />
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 border-b border-border/60 bg-white/80 backdrop-blur-md z-40 flex items-center justify-between px-6">
          <button 
            className="p-2 -ml-2 rounded-lg hover:bg-muted" 
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <Image src="/images/teclogo.png" alt="Logo" width={100} height={25} className="h-5 w-auto" />
          <div className="w-8" /> {/* Spacer for balance */}
      </header>
      
      {/* Mobile header spacer */}
      <div className="md:hidden h-16" />
    </>
  )
}
