/** @type {import('next').NextConfig} */
// const withExportImages = require("next-export-optimize-images");

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    domains: ["localhost", "api.myforexbuddy.com", "images.unsplash.com"],
    unoptimized:true
  },
  swcMinify: true,
  
};


module.exports = nextConfig

// module.exports = (_phase, { defaultConfig }) => {
//   const plugins = [withExportImages];
//   return plugins.reduce((acc, plugin) => plugin(acc), {
//     ...defaultConfig,
//     ...nextConfig,
//   });
// };
