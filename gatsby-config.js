module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://54.236.22.95/graphql`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        // Path to the directory
        name: `slides`,
        path: `${__dirname}/src/images/slides`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        // Path to the directory
        name: `fireplace-cards`,
        path: `${__dirname}/src/images/cards/fireplaces`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        // Path to the directory
        name: `patio-cards`,
        path: `${__dirname}/src/images/cards/Patios`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        // Path to the directory
        name: `pool-cards`,
        path: `${__dirname}/src/images/cards/pool-coping`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
