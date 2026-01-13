/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/WeddingWebSite",
  assetPrefix: "/WeddingWebSite/",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
