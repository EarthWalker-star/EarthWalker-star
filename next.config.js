/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/EarthWalker-star',
  trailingSlash: true,
}

module.exports = nextConfig
