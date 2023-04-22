
/** @type {import('next').NextConfig} */
// const withExportImages = require("next-export-optimize-images");

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    domains: ["localhost","images.unsplash.com"],
    unoptimized:true
  },
  swcMinify: true,
  
};


module.exports = nextConfig





