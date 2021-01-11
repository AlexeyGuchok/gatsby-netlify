/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: "gatsby-transformer-remark" },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "sedat.by",
        protocol: "https",
        hostingWPCOM: false,
      },
    },
    { resolve: "gatsby-plugin-react-helmet" },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `My Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
      },
    },
    { resolve: "gatsby-plugin-offline" },
  ],
}
