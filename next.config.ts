/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Add this line for Docker deployment
  eslint: {
    ignoreDuringBuilds: true, // Add this to ignore ESLint errors during build
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "guidetopakistan.pk" },
      { protocol: "https", hostname: "media-cdn.tripadvisor.com" },
      { protocol: "https", hostname: "cdn.tripspoint.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "gbit.pk" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "cdn.pixabay.com" },
    ],
  },
};

module.exports = nextConfig;
