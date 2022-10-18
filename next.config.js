/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimenttal: {
    images: { allowFutureImage: true },
  },
  async redirects() {
    return [
      {
        source: '/events',
        destination: 'https://lu.ma/event-group/evgrp-MSZlmyEPurQp9zX',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
