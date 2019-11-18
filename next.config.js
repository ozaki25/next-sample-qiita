require('dotenv').config();
const withCSS = require('@zeit/next-css');

const basePath = process.env.GITHUB_PAGES ? '/next-sample-qiita' : '';

module.exports = withCSS({
  env: {
    accessToken: process.env.QIITA_ACCESS_TOKEN,
    basePath: basePath,
  },
  assetPrefix: basePath,
  webpack: function(config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
});
