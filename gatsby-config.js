module.exports = {
  siteMetadata: {
    title: "Sergejs Ivcenko Portfolio",
    description: "Gatsby and sass portfolio",
    author: "@sergejsivcenko",
    siteUrl: `https://www.gatsbyjs.com`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400, 500, 600"],
            },
            {
              family: "Roboto",
              variants: ["400"],
            },
          ],
        },
      },
    },
  ],
}
