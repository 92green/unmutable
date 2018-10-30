/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({
 stage, getConfig, rules, loaders, actions
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.mdx?$/,
          use: [loaders.js(), 'mdx-loader']
        },
      ],
    },
  });
}
