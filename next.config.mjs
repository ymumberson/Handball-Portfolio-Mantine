
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/Handball-Portfolio-Mantine',
  // assetPrefix: '/Handball-Portfolio-Mantine/',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // experimental: {
  //   optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  // },
  output: 'export',
}
 
module.exports = nextConfig