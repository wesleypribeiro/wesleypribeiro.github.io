/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: "/nextjs-github-pages",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
