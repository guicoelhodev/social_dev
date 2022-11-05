/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.tenor.com"],
  },
};

module.exports = nextConfig;
