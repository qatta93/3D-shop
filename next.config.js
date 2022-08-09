/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const optimizedImages = require('next-optimized-images');

module.exports = optimizedImages();
module.exports = nextConfig
