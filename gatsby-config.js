require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitle: `Kylee Angelo Portfolio`,
    siteTitleAlt: `Kylee Angelo - Interior Design Portfolio`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Kylee Angelo - Interior Design Portfolio`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://www.kyleeangelo.com`,
    // Used for SEO
    siteDescription: `The personal design portfolio of Kylee Angelo`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/background.jpg`,
    // Twitter Handle
    author: `@chadwick_maycumber`,
  },
  plugins: [
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.DATOCMS_API_KEY,
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: process.env.NODE_ENV === "development",
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: process.env.NODE_ENV === "development",
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'gmb6zqr'
        }
      }
    },
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: "Kylee Angelo",
        location: "United States",
        showThemeAuthor: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kylee Angelo - A professional designer`,
        short_name: `Kylee Angelo`,
        description: `Kylee Angelo - Interior Design Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#cbd5e0`,
        display: `standalone`,
        icon: "static/favicon.jpg",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-typescript`,
  ],
};
