import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: "/nexahome",
  assetPrefix: "/nexahome",
  transpilePackages: ["@nexahome/ui", "@nexahome/types", "@nexahome/utils", "@nexahome/hooks"],
};

export default nextConfig;
