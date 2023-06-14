/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    path: "",
    domains: ["marcomech.github.io/"],
    loader: 'Vercel'
  }
}

module.exports = nextConfig

