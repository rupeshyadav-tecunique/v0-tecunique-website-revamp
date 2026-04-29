"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Mail, Github, MapPin, Phone, ArrowRight } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Dedicated Teams", href: "/services#dedicated-teams" },
    { name: "Software Development", href: "/services#development" },
    { name: "Quality Assurance", href: "/services#qa" },
    { name: "Staff Augmentation", href: "/services#augmentation" },
  ],
}

const socialLinks = [
  { Icon: Linkedin, href: "https://linkedin.com/company/tecunique", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com/tecunique", label: "Twitter" },
  { Icon: Github, href: "https://github.com/tecunique", label: "GitHub" },
  { Icon: Mail, href: "mailto:sales@tecunique.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#0f172a]">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/">
              {/* Logo on dark bg — use a simple text logo as fallback, but try image first */}
              <div className="flex items-center gap-2">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-white font-display text-sm font-extrabold"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                >
                  T
                </div>
                <span className="font-display text-lg font-bold text-white tracking-tight">
                  TECUNIQUE
                </span>
              </div>
            </Link>
            <p className="max-w-xs text-sm text-slate-400 leading-relaxed">
              Trusted Software Engineering & Atlassian Apps Expertise. Dedicated teams delivering high-quality software at speed since 2010.
            </p>

            {/* Contact quick info */}
            <div className="space-y-2">
              <a
                href="mailto:sales@tecunique.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Mail className="h-4 w-4 text-slate-500" />
                sales@tecunique.com
              </a>
              <a
                href="tel:+919157460525"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Phone className="h-4 w-4 text-slate-500" />
                +91 915 746 0525
              </a>
              <div className="flex items-start gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 text-slate-500 shrink-0" />
                <span>Neptune Edge, Alkapuri, Vadodara – 390007</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition-all hover:border-indigo-500/60 hover:bg-indigo-500/10 hover:text-indigo-400"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200">
                      <ArrowRight className="h-3 w-3 text-indigo-400" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-200">
                      <ArrowRight className="h-3 w-3 text-indigo-400" />
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">Stay Updated</h3>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              Get the latest insights on software engineering and tech outsourcing.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus:border-indigo-500/60 focus:outline-none focus:ring-1 focus:ring-indigo-500/40 transition-all"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} TECUNIQUE. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
