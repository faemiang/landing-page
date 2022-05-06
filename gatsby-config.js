module.exports = {
  siteMetadata: {
    title: 'Fae-Miang Café | แฟ-เมี่ยงคาเฟ่',
    description: 'บริการห้องพัก อาหาร กาแฟ บรรยากาศล้อมรอบด้วยภูเขา',
    author: `@faemiang`,
    siteUrl: `https://example.com`,
    keywords: ['landing'],
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',

    // FONT LOADER
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        web: [
          {
            name: `Sriracha`,
            file: `https://fonts.googleapis.com/css2?family=Sriracha&display=swap`,
          },
        ],
      },
    },

    // MODULE RESOLVER
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          '@/components': './components',
          '@/styles': './styles',
          '@/pages': './pages',
          '@/images': './images',
          '@/utils': './utils',
          '@/types': './types',
          '@/constants': './constants',
          '@/hooks': './hooks',
          '@/data': './data',
          static: {
            root: './public',
            alias: './static',
          },
        },
      },
    },

    // CSS MODULES TYPESCRIPT
    'gatsby-plugin-sass',
    'gatsby-plugin-dts-css-modules',

    // Load JSON data
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },

    // Adds in Gatsby image handling
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `avif`, `webp`],
          placeholder: `none`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },

    // PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fae-Miang Café | แฟ-เมี่ยงคาเฟ่`,
        short_name: `Fae-Miang Café`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0A3C6E`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,

    // Compress file
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js'],
      },
    },
  ],
}
