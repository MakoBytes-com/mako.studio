import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin tracing root to this project — silences the multi-lockfile warning
  // (a stray package-lock.json in %USERPROFILE% was being chosen otherwise).
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }]
  }
};

export default nextConfig;
