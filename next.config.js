/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
      unoptimized: true,
  },
  basePath: '/formular',
}

module.exports = nextConfig