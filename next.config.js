require('dotenv').config();

module.exports = {
  env: {
    accessToken: process.env.QIITA_ACCESS_TOKEN,
  },
  assetPrefix: process.env.GITHUB_PAGES ? './next-sample-qiita' : '',
};
