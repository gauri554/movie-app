import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    theme: {
    extend: {
      screens: {
        tablet: { min: "768px", max: "1024px" }, // custom breakpoint
      },
    },
  },
  plugins: [],
};

export default nextConfig;
