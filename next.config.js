/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'www.thallesdaniel.com','sa-east-1.graphassets.com'],
  },

}

module.exports = nextConfig
