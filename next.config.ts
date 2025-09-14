/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export' as const,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;