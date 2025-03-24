import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // allow all domain for images
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allow images from all domains
      },
    ],
  },
};

export default nextConfig;
