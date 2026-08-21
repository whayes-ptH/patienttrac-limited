import type { NextConfig } from "next";

const isNetlifyStaticExport =
  process.env.PATIENTTRAC_NETLIFY_STATIC_EXPORT === "true";

const nextConfig: NextConfig = isNetlifyStaticExport
  ? {
      output: "export",
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
