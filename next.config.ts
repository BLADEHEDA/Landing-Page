/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Replace with any external image domains you use
      },
    ],
  },
};  

module.exports = nextConfig;