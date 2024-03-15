/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseURL: process.env.BASE_URL,
    Video_URL: process.env.Video_URL,
  },
};

export default nextConfig;
