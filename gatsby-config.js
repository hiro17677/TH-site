/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config()

module.exports = {
  pathPrefix: `/TH-site`,
  siteMetadata: {
    title: `太樺工業股份有限公司`,
    description: `太樺工業：自1989年以來，專精於提供高品質的塑膠射出成型服務。我們的專業團隊致力於為各行業提供精確的塑膠製品，包括專業的組裝和定制包裝解決方案。憑藉領先的技術和創新流程設計，我們為客戶創造最佳價值，堅守品質第一、誠信至上的承諾。選擇太樺工業，體驗尖端塑膠射出成型的專業服務。`,
    author: `HP`,
    siteUrl: `https://hiro17677.github.io/TH-site/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,  
    // `gatsby-source-contentful`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-remark`,
  ]
}
