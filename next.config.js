/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: 'experimental-serverless-trace', // Ensure this is set for static export
  // Add other configurations as needed
}

module.exports = nextConfig;
