module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'madebyrossi.com/client/uniquely',
        hostingWPCOM: false,
        protocol: 'https',
        useACF: false,
        auth: {},
        verboseOutput: false,
        excludedRoutes: [
          "**/wp/v2/users/me",
          "**/wp/v2/block-types",
          "**/wp/v2/settings",
          "**/wp/v2/themes",
          "**/wp/v2/plugins",
          "**/wp/v2/block-directory/search",
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve:'gatsby-plugin-purgecss',
      options: {
        develop: true,
        purgeOnly: ['/all.sass'],
      },
    },
    'gatsby-plugin-netlify',
  ],
}
