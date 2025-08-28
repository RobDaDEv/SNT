/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['page.gensparksite.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'page.gensparksite.com',
      },
    ],
  },
  // Removed output: 'export' to enable API routes for Vercel deployment
  // trailingSlash: true,
  // skipTrailingSlashRedirect: true
}

module.exports = nextConfig