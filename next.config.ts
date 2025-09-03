import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: {
    position: 'bottom-right',
  },
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['@/components/ui'],
  },
  // Enable static optimization
  output: 'standalone',
  // Optimize images
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
