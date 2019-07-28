/* eslint-disable */

const path = require('path');

exports.onCreateWebpackConfig = ({
 stage, getConfig, rules, loaders, actions
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.mdx?$/,
          use: [
            loaders.js(),
            'mdx-loader'
          ]
        }
      ]
    }
  });
}
