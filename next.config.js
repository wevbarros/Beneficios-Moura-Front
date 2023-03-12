const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.shutterstock.com', 'images.freeimages.com', 'www.eusemfronteiras.com.br',],
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.plugins.push(new BundleAnalyzerPlugin({
  //       analyzerMode: 'server',
  //       generateStatsFile: true,
  //       statsOptions: { source: false },
  //     }));
  //   }

  //   return config;
  // },
};

module.exports = nextConfig;
