/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimenttal: {
    images: { allowFutureImage: true },
  },
};

module.exports = nextConfig;
