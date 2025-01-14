/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're using external images, add domains here
  // images: {
  //   domains: ['your-domain.com'],
  // },
}

export default nextConfig 