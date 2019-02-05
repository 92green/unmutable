/* eslint-disable */

const path = require('path');
const rehypePrism = require('@mapbox/rehype-prism');

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
            {
              loader: '@mdx-js/loader',
              options: {
                hastPlugins: [rehypePrism]
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        'unmutable': path.resolve(__dirname, "../")
      }
    }
  });
}
