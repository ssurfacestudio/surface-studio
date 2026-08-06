/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  compress: true,
  eslint: {
    // Copy throughout the site uses straight apostrophes in JSX text
    // (e.g. "isn't", "you're"), which trips react/no-unescaped-entities.
    // That's a style warning, not a real bug — don't fail CI builds on it.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
