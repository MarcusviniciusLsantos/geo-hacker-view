/** @type {import('next').NextConfig} */
const publicRuntimeConfig = {
  urls: {
    api: process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3000",
  }
}

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig
}

module.exports = nextConfig
