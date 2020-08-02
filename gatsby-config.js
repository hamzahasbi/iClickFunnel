module.exports = {
  siteMetadata: {
    title: `Easy Animate`,
    description: `Eye Catching ,stunning and professional whiteboard animation and explainer videos.`,
    siteUrl: `https://easy-animate.com/`,
    author: `@hamzahasbi`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-env-variables`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `easy-animate`,
        short_name: `Easy animate`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#675CE2`,
        display: `standalone`,
        icon: `src/assets/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://easy-animate.com',
        sitemap: 'https://easy-animate.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}
