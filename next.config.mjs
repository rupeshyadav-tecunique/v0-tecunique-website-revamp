/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Removed output: 'export' to enable server-side features like cookies, middleware, and API routes.
}

export default nextConfig
