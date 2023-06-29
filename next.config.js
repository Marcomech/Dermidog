/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    path: "",
    domains: ["marcomech.github.io/"],
    loader: "default"
  }
}

module.exports = nextConfig

