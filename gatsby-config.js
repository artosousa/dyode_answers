module.exports = {
  siteMetadata: {
    title: 'Dyode Test',
    siteUrl: 'https://www.yourdomain.tld'
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Pacifico',
          'Lato\:300,400,400i,700'
        ],
        display: 'swap'
      }
    }
  ]
};