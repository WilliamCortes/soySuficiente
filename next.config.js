/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    //TODO: delete fake domains
    domains: ["images.unsplash.com", "myimage.img"],
  },
};

module.exports = nextConfig;
