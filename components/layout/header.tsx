"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "../ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Dedicated Software Teams", href: "/services/dedicated-teams" },
      { name: "Product Engineering", href: "/services/product-engineering" },
      { name: "QA & Automation", href: "/services/qa" },
      { name: "Atlassian App Engineering", href: "/services/atlassian" },
    ]
  },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  // { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Hide header on admin pages
  if (pathname?.startsWith("/admin")) return null

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
        : "bg-white/80 backdrop-blur-sm border-b border-border/50"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/logos/tecunique-logo-modern-refresh.svg"
            alt="TecUnique Logo"
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop navigation and CTA grouped on the right */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
          <div className="flex items-center gap-x-1">
            {navigation.map((item) => {
              const isActive = item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)

              if (item.children) {
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                        ? "text-primary bg-accent"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent/60"
                        }`}
                    >
                      {item.name}
                      <ChevronDown className="h-3 w-3 opacity-70 transition-transform group-hover:rotate-180" />
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-primary" />
                      )}
                    </Link>

                    {/* Dropdown menu */}
                    <div className="absolute right-0 lg:left-0 top-full pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="w-64 rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5 border border-slate-100">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive
                    ? "text-primary bg-accent"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent/60"
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-primary" />
                  )}
                </Link>
              )
            })}
          </div>

          <Button size="default" className="rounded-xl px-5 h-10 group" asChild>
            <Link href="/contact">
              Let's Talk
              <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-foreground hover:bg-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-border bg-white/95 backdrop-blur-md">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => {
              const isActive = item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)

              if (item.children) {
                return (
                  <div key={item.name} className="space-y-1">
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-3 px-3 rounded-xl text-base font-medium transition-colors ${isActive
                        ? "text-primary bg-accent"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent/60"
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${isChildActive
                              ? "text-primary bg-slate-50"
                              : "text-slate-500 hover:text-primary hover:bg-slate-50"
                              }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center py-3 px-3 rounded-xl text-base font-medium transition-colors ${isActive
                    ? "text-primary bg-accent"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent/60"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="pt-3 pb-1">
              <Button size="default" className="w-full rounded-xl h-12 group" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Let's Talk
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
