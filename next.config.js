/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  cache: {
    type: 'filesystem',
  },
  experimental: {
    adjustFontFallbacks: true,
    adjustFontFallbacksWithSizeAdjust: true,
    allowedRevalidateHeaderKeys: [],
    amp: {
      experimental: {
        optimizeFonts: true,
      },
    },
  }
}

module.exports = nextConfig
