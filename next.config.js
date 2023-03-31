/** @type {import('next').NextConfig} */
const withExportImages = require("next-export-optimize-images");

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["localhost", "api.myforexbuddy.com", "images.unsplash.com"],
  },
  swcMinify: true,
  
};



module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withExportImages];
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...defaultConfig,
    ...nextConfig,
  });
};
