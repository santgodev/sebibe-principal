import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nuevaversion", // Important for hosting at sebibe.org/nuevaversion
  assetPrefix: "/nuevaversion", // Ensures JS/CSS point to the subdirectory
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sebibe.org",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      }
    ],
  },
};

export default nextConfig;
