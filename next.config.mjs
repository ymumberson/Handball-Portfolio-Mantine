
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/Handball-Portfolio-Mantine',
  // assetPrefix: '/Handball-Portfolio-Mantine/',
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  output: 'export',
}
 
export default nextConfig;