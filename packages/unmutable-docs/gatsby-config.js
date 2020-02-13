// @flow
const {gatsbyConfig} = require('dcme-gatsby/src/gatsby/gatsby-config');

module.exports = {
    siteMetadata: {
        title: 'Unmutable - An immutable, functional data collection library for plain old Javascript.'
    },
    pathPrefix: '/unmutable',
    ...gatsbyConfig({
        compileModules: [`dcme-gatsby`, `dcme-style`]
    })
};
