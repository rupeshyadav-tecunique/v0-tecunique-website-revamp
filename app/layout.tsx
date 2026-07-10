import type { Metadata } from 'next'
import { Manrope, Sora, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: '--font-manrope'
})

const sora = Sora({
  subsets: ["latin"],
  variable: '--font-sora'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: {
    default: 'TECUNIQUE | Software Engineering & Dedicated Teams in India',
    template: '%s | TECUNIQUE',
  },
  description: 'TECUNIQUE helps software companies build dedicated development, QA, automation, and support teams in India, with experience across product engineering, cloud solutions, and Atlassian apps.',
  keywords: ['software development', 'Atlassian apps', 'IT outsourcing', 'dedicated teams', 'quality assurance', 'offshore development'],
  authors: [{ name: 'TECUNIQUE' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TECUNIQUE',
  },
  icons: {
    icon: '/images/logos/tecunique-icon-modern-refresh.svg',
    shortcut: '/images/logos/tecunique-icon-modern-refresh-favicon-512px.png',
    apple: '/images/logos/tecunique-icon-modern-refresh-favicon-512px.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
