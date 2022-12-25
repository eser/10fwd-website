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

  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = { async_hooks: false, fs: false };
    }

    return config;
  },
};

const withMiddlewares = withContentlayer(nextConfig);

export { withMiddlewares as default };
