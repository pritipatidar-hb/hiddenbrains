import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-fdiob.nitrocdn.com",
      },
      {
        protocol: "https",
        hostname: "www.hiddenbrains.co.uk",
      },
    ],
  },
};

export default nextConfig;
