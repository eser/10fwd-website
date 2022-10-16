/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: false,

  pageExtensions: [
    "page.tsx",
    "page.ts",
    "page.jsx",
    "page.js",
    "api.tsx",
    "api.ts",
    "api.jsx",
    "api.js",
  ],

  trailingSlash: true,
  productionBrowserSourceMaps: true,
  images: { unoptimized: true },

  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
