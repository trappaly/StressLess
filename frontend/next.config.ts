import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [process.env.DEV_IP_ORIGIN || 'localhost:3000'],
};

export default nextConfig;
