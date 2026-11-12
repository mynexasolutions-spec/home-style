/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Photos are self-hosted in /public/images; next/image's built-in optimiser
  // (sharp) resizes and compresses them per screen size.
};

export default nextConfig;
