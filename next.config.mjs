/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: process.env.NODE_ENV == "development",
  },
};

export default nextConfig;
