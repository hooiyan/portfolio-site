module.exports = {
  siteMetadata: {
    title: `HooiYan - Frontend Developer`,
    siteUrl: `https://www.hooiyan.com`,
    author: `HooiYan`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'portfolio',
        path: './src/content/portfolio/',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'HooiYan',
        short_name: 'HooiYan',
        start_url: '/',
        background_color: '#203A4C',
        theme_color: '#203A4C',
        display: 'standalone',
        icon: 'src/images/icon.png',
        crossOrigin: `use-credentials`,
      },
    },
  ],
};
