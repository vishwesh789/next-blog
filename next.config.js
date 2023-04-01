/** @type {import('next').NextConfig} */
// const withExportImages = require("next-export-optimize-images");

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["localhost", "api.myforexbuddy.com", "images.unsplash.com"],
    unoptimized:true
  },
  swcMinify: true,
  staticPageGenerationTimeout: 1000,
};


module.exports = nextConfig

// module.exports = (_phase, { defaultConfig }) => {
//   const plugins = [withExportImages];
//   return plugins.reduce((acc, plugin) => plugin(acc), {
//     ...defaultConfig,
//     ...nextConfig,
//   });
// };
