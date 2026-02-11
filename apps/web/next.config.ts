import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@bitwork/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
