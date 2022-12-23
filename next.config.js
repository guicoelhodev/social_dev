/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.tenor.com'],
  },
  env: {
    URL_APP: process.env.URL_APP
  }
};

module.exports = nextConfig;
