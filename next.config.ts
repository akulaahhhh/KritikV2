import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BACKEND_API: process.env.BACKEND_API, // Add this line to pass the environment variable
  },
};

export default nextConfig;
