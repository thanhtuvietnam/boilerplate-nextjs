/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: true, // defaults to true
    buildActivity: true, // defaults to true
    buildActivityPosition: 'bottom-right',
  },
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
