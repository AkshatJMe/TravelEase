/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: false,
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.SBR_WS_ENDPOINT,
    NEXT_PUBLIC_APTIBLE_DOMAIN: process.env.PUBLIC,
  },
  images: {
    remotePatterns: [
      {
        hostname: "imgcld.yatra.com",
      },
      {
        hostname: "content.r9cdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
