"use client"

import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Mail, Github, Star, MapPin, Phone, ArrowRight } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Dedicated Teams", href: "/services#dedicated-teams" },
    { name: "Software Development", href: "/services#development" },
    { name: "Quality Assurance", href: "/services#qa" },
    { name: "Staff Augmentation", href: "/services#augmentation" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
}

const socialLinks = [
  { Icon: Linkedin, href: "https://linkedin.com/company/tecunique", label: "LinkedIn" },
  { Icon: Twitter, href: "https://twitter.com/tecunique", label: "Twitter" },
  { Icon: Github, href: "https://github.com/tecunique", label: "GitHub" },
  { Icon: Mail, href: "mailto:sales@tecunique.com", label: "Email" },
]

const reviewLinks = [
  // {
  //   name: "Google",
  //   rating: "4.9",
  //   href: "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TEkzLkjJKCg2YLRSNagwtjRNS7ZIsjA2MTVNTLQ0tQIKJZsnGxubJRsZWyYBSUMv6ZLU5NK8zMLSVIXi_LSS8sQiICO1qCwzObUYAPf2GiQ&q=tecunique+software+services&oq=tec&aqs=chrome.1.69i60j46i39i175i199j69i59j69i57j69i60l4.4886j0j7&sourceid=chrome&ie=UTF-8#lrd=0x395fc8b83455aa95:0x3c7c336c239b6c21,1,,,",
  //   color: "#ffffff"
  // },
  {
    name: "glassdoor",
    rating: "4.9",
    href: "https://www.glassdoor.co.in/Reviews/TecUnique-Reviews-E2503526.htm",
    color: "#0CAA41"
  },
  {
    name: "AmbitionBox",
    rating: "4.9",
    href: "https://www.ambitionbox.com/reviews/tecunique-reviews",
    color: "#ffffff"
  },
  {
    name: "Clutch",
    rating: "4.9",
    href: "https://clutch.co/profile/tecunique-private#highlights",
    color: "#ffffff"
  },
  {
    name: "GoodFirms",
    rating: "4.8",
    href: "https://www.goodfirms.co/company/tecunique-private-limited",
    color: "#1d66c1"
  },
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
              <Image
                src="/images/teclogo.png"
                alt="TecUnique Logo"
                width={180}
                height={50}
                className="h-10 w-auto  mb-4"
              />
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
                <span>1002 Neptune Edge, Alkapuri, Vadodara – 390007</span>
              </div>
            </div>

            {/* Social and Review icons */}
            <div className="space-y-4">
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
              <div className="pt-6 border-t border-slate-800/60 flex flex-wrap items-center gap-y-3">
                {reviewLinks.map((link, i) => (
                  <div key={link.name} className="flex items-center">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1.5"
                    >
                      <div className="flex items-center gap-0.5">
                        <span className="text-[12px] font-bold text-white leading-none">{link.rating}</span>
                        <Star className="h-2.5 w-2.5 fill-amber-500 text-amber-500" />
                      </div>
                      <div className="flex items-center">
                        {link.name === "Google" ? (
                          <span className="text-[11px] font-bold tracking-tight">
                            <span style={{ color: "#4285F4" }}>G</span>
                            <span style={{ color: "#EA4335" }}>o</span>
                            <span style={{ color: "#FBBC05" }}>o</span>
                            <span style={{ color: "#4285F4" }}>g</span>
                            <span style={{ color: "#34A853" }}>l</span>
                            <span style={{ color: "#EA4335" }}>e</span>
                          </span>
                        ) : (
                          <span
                            className="text-[11px] font-bold tracking-tight transition-colors group-hover:opacity-80"
                            style={{ color: link.color }}
                          >
                            {link.name}
                          </span>
                        )}
                      </div>
                    </a>
                    {i < reviewLinks.length - 1 && (
                      <span className="mx-3 text-slate-800 font-extralight text-sm">|</span>
                    )}
                  </div>
                ))}
              </div>
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
            {footerLinks.legal.map((item) => (
              <Link key={item.name} href={item.href} className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
