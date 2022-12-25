import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

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
    // runtime: "experimental-edge",
    esmExternals: true,
  },
};

const withMiddlewares = withContentlayer(nextConfig);

export default withMiddlewares;
