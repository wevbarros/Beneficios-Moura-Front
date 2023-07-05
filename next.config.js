const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['beneficiosmourastorage.blob.core.windows.net'],
  },
};

const withPWA  = require("next-pwa");
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig;
