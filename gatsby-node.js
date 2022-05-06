const path = require('path')
// const rooms = require('./src/data/rooms.json')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        crypto: false,
      },
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve('./src/templates/room.tsx')

  const rooms = graphql(`
    {
      allRoomsJson {
        edges {
          node {
            name
            slug
            type
            price
            discountPrice
            capacity
            rules
            featured
            description
            extras
            images {
              url {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
              alt
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allRoomsJson.edges.forEach(({ node }) => {
      createPage({
        path: `rooms/${node.slug}`,
        slug: `${node.slug}`,
        component: template,
        context: {
          ...node,
        },
      })
    })
  })

  return rooms
}
