/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['localhost', 'api.myforexbuddy.com'],
    unoptimized: true
  }
}

module.exports = nextConfig
