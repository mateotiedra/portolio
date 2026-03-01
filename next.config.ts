import type { NextConfig } from 'next'

const isStandalone = process.env.STANDALONE === '1'

const nextConfig: NextConfig = {
  output: isStandalone ? 'standalone' : 'export',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
