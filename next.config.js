/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/EarthWalkerWeb',
  trailingSlash: true,
}

module.exports = nextConfig
