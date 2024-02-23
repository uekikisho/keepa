/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.keepa.com"]
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'cdn.keepa.com',
    //     port: '',
    //     pathname: '/img',
    //   },
    // ],
  },
  async rewrites() {
    return [
      {
        source: '/keepa/:path*',
        destination: 'https://api.keepa.com/:path*',
      },
    ]
  },
};

export default nextConfig;
