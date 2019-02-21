// @flow
module.exports = {
    pathPrefix: '/unmutable',
    siteMetadata: {
        title: 'Unmutable'
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-offline',
        // 'gatsby-mdx'
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `images`,
        //         path: `${__dirname}/src/images`
        //     }
        // },
    ]
};
