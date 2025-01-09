import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/graphql',
        destination: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string
      }
    ]
  },
  images: {
    unoptimized: true
  }
}

export default nextConfig
