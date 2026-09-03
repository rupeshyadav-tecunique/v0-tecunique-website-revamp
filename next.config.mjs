/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Prevent clickjacking
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Stop browsers from MIME-sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Referrer policy
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Force HTTPS for 2 years
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Permissions policy — disable unused browser features
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  // XSS protection for older browsers
  { key: 'X-XSS-Protection', value: '1; mode=block' },
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      // ─── Legacy Services ───
      { source: '/dedicated-teams', destination: '/services/dedicated-teams', permanent: true },
      { source: '/services/offshore-development-center', destination: '/services/dedicated-teams', permanent: true },
      { source: '/services/dedicated-development-team', destination: '/services/dedicated-teams', permanent: true },
      { source: '/product-engineering', destination: '/services/product-engineering', permanent: true },
      { source: '/services/custom-software-development', destination: '/services/product-engineering', permanent: true },
      { source: '/software-testing-qa', destination: '/services/qa', permanent: true },
      { source: '/services/qa-automation', destination: '/services/qa', permanent: true },
      { source: '/services/software-testing', destination: '/services/qa', permanent: true },
      { source: '/atlassian-development', destination: '/services/atlassian', permanent: true },
      { source: '/services/atlassian-apps', destination: '/services/atlassian', permanent: true },
      { source: '/services/jira-app-development', destination: '/services/atlassian', permanent: true },

      // ─── Legacy Singular Case Study Routes ───
      { source: '/case-study/oppscience', destination: '/case-studies/oppscience', permanent: true },
      { source: '/case-study/skyselect', destination: '/case-studies/skyselect', permanent: true },
      { source: '/case-study/innovalog', destination: '/case-studies/innovalog', permanent: true },
      { source: '/case-study/qotilabs', destination: '/case-studies/qotilabs', permanent: true },
      { source: '/case-study/extensi', destination: '/case-studies/extensi', permanent: true },
      { source: '/case-study/customermatrix', destination: '/case-studies/customermatrix', permanent: true },
      { source: '/case-study/polyspot', destination: '/case-studies/polyspot', permanent: true },
      { source: '/case-study/appfire', destination: '/case-studies/appfire', permanent: true },
      { source: '/case-studies/jmwe', destination: '/case-studies/innovalog', permanent: true },
      { source: '/case-studies/rich-filters', destination: '/case-studies/qotilabs', permanent: true },
      { source: '/case-studies/team-hub', destination: '/case-studies/extensi', permanent: true },

      // ─── Legacy Navigation & Contact ───
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/jobs', destination: '/careers', permanent: true },
      { source: '/careers/openings', destination: '/careers', permanent: true },
      { source: '/legal/privacy-policy', destination: '/privacy-policy', permanent: true },
      { source: '/legal/terms-of-service', destination: '/terms-of-service', permanent: true },
      { source: '/legal/cookie-policy', destination: '/cookie-policy', permanent: true },
    ]
  },
}

export default nextConfig
