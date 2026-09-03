import type { Metadata } from 'next'
import { Manrope, Sora, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.tecunique.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'TECUNIQUE | Software Engineering & Dedicated Teams in India',
    template: '%s | TECUNIQUE',
  },
  description: 'TECUNIQUE helps software companies build dedicated development, QA, automation, and support teams in India, with experience across product engineering, cloud solutions, and Atlassian apps.',
  keywords: [
    'software development India',
    'dedicated software teams',
    'Atlassian app development',
    'QA automation testing',
    'offshore development center',
    'product engineering',
    'IT outsourcing India',
    'Jira app development',
    'software support teams',
  ],
  authors: [{ name: 'TECUNIQUE', url: baseUrl }],
  creator: 'TECUNIQUE',
  publisher: 'TECUNIQUE Private Limited',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'TECUNIQUE',
    title: 'TECUNIQUE | Software Engineering & Dedicated Teams in India',
    description: 'TECUNIQUE helps software companies build dedicated development, QA, automation, and support teams in India.',
    images: [
      {
        url: '/images/og/tecunique-og.png',
        width: 1200,
        height: 630,
        alt: 'TECUNIQUE – Software Engineering & Dedicated Teams in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TECUNIQUE | Software Engineering & Dedicated Teams in India',
    description: 'TECUNIQUE helps software companies build dedicated development, QA, automation, and support teams in India.',
    images: ['/images/og/tecunique-og.png'],
    creator: '@tecunique',
  },
  icons: {
    icon: [
      { url: '/images/logos/tecunique-icon-modern-refresh.svg', type: 'image/svg+xml' },
      { url: '/images/logos/tecunique-icon-modern-refresh-favicon-512px.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/images/logos/tecunique-icon-modern-refresh-favicon-512px.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: baseUrl,
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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}
