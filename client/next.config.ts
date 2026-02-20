import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 👈 this enables static export
  images: {
    unoptimized: true, // 👈 disable Next.js image optimization for static export
  },
};

export default nextConfig;
