require('dotenv').config();
const path = require('path');
const withCSS = require('@zeit/next-css');

const basePath = process.env.GITHUB_PAGES ? '/next-sample-qiita' : '';

module.exports = withCSS({
  distDir: '../.next',
  env: {
    accessToken: process.env.QIITA_ACCESS_TOKEN,
    basePath,
  },
  exportPathMap() {
    return {
      '/': { page: '/comments' },
      '/items': { page: '/items' },
      '/comments': { page: '/comments' },
      '/comments/new': { page: '/comments/new' },
      '/comments/edit': { page: '/comments/edit' },
    };
  },
  assetPrefix: basePath,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, 'src'),
    };
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
