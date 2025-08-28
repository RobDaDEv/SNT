/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['page.gensparksite.com'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true
}

module.exports = nextConfig