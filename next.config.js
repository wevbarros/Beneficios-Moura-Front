const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['beneficiosmourastorage.blob.core.windows.net'],
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
