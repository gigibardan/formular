/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
      unoptimized: true,
  },
  basePath: '/formular',
  trailingSlash: true,
}

module.exports = nextConfig