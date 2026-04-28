import type { Metadata } from 'next'
import { Inter, Geist_Mono, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

const dmSerif = DM_Serif_Display({ 
  weight: "400",
  subsets: ["latin"],
  variable: '--font-display'
})

export const metadata: Metadata = {
  title: {
    default: 'TECUNIQUE - Trusted Software Engineering & Atlassian Apps Expertise',
    template: '%s | TECUNIQUE',
  },
  description: 'Scale with confidence. Dedicated teams delivering Atlassian apps and high-quality software at speed. Offshore software development and IT outsourcing services since 2010.',
  keywords: ['software development', 'Atlassian apps', 'IT outsourcing', 'dedicated teams', 'quality assurance', 'offshore development'],
  authors: [{ name: 'TECUNIQUE' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TECUNIQUE',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} ${dmSerif.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
