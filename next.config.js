/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.nanuko.de",
      },
      {
        protocol: "https",
        hostname: "www.myconbini.com",
      },
      {
        protocol: "https",
        hostname: "www.japan-guide.com",
      },
    ],
  },
};

export default config;
