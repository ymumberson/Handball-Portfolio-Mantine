// import bundleAnalyzer from '@next/bundle-analyzer';

// // Setup bundle analyzer
// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

// // Next.js configuration
// const nextConfig = {
//   reactStrictMode: false,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   experimental: {
//     optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
//   },
//   output: 'export',
//   basePath: '/Handball-Portfolio-Mantine',
//   assetPrefix: '/Handball-Portfolio-Mantine/',
// };

// // Use ES module export syntax
// export default withBundleAnalyzer(nextConfig);


/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  basePath: '/Handball-Portfolio-Mantine',
  assetPrefix: '/Handball-Portfolio-Mantine/',
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
}
 
module.exports = nextConfig