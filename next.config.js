/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Important: GitHub Pages serves from a subdirectory if not using custom domain
  // Since you have CNAME file, we'll use root path
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig
