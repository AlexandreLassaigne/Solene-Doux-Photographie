/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress : true,
  images: {
    domains: [],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
