const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['portalerp.com', 'www.eusemfronteiras.com.br'],
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
