/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/bados' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bados' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
