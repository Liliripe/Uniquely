const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `)
  .then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pageTemplate = path.resolve(`./src/templates/page.js`)

    const allPages = result.data.allWordpressPage.edges
    const pages =
      process.env.NODE_ENV === 'production'
        ? getOnlyPublished(allPages)
        : allPages

    _.each(pages, ({ node: page }) => {
      createPage({
        path: `/${page.slug}/`,
        component: pageTemplate,
        context: {
          id: page.id,
        },
      })
    })
  })
  .then(() => {
    return graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              status
            }
          }
        }
      }
    `)
  })
  .then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const postTemplate = path.resolve(`./src/templates/post.js`)
    const blogTemplate = path.resolve(`./src/templates/index.js`)

    const allPosts = result.data.allWordpressPost.edges
    const posts =
      process.env.NODE_ENV === 'production'
        ? getOnlyPublished(allPosts)
        : allPosts

    _.each(posts, ({ node: post }) => {
      createPage({
        path: `/${post.slug}/`,
        component: postTemplate,
        context: {
          id: post.id,
        },
      })
    })

    paginate({
      createPage,
      items: posts,
      itemsPerPage: 10,
      pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? `/` : `/page`),
      component: blogTemplate,
    })
  })
  .then(() => {
    return graphql(`
      {
        allWordpressCategory(filter: { count: { gt: 0 } }) {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    `)
  })
  .then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const categoriesTemplate = path.resolve(`./src/templates/category.js`)

    _.each(result.data.allWordpressCategory.edges, ({ node: cat }) => {
      createPage({
        path: `/categories/${cat.slug}/`,
        component: categoriesTemplate,
        context: {
          name: cat.name,
          slug: cat.slug,
        },
      })
    })
  })
  .then(() => {
    return graphql(`
      {
        allWordpressTag(filter: { count: { gt: 0 } }) {
          edges {
            node {
              id
              name
              slug
            }
          }
        }
      }
    `)
  })
  .then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const tagsTemplate = path.resolve(`./src/templates/tag.js`)

    _.each(result.data.allWordpressTag.edges, ({ node: tag }) => {
      createPage({
        path: `/tags/${tag.slug}/`,
        component: tagsTemplate,
        context: {
          name: tag.name,
          slug: tag.slug,
        },
      })
    })
  })
  .then(() => {
    return graphql(`
      {
        allWcProducts {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)
  })
  .then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const productTemplate = path.resolve(`./src/templates/product.js`)

    const allProducts = result.data.allWcProducts.edges
    const products =
      process.env.NODE_ENV === 'production'
        ? getOnlyPublished(allProducts)
        : allProducts

    _.each(products, ({ node: product }) => {
      createPage({
        path: `/${product.slug}/`,
        component: productTemplate,
        context: {
          id: product.id,
        },
      })
    })
  })
  .then(() => {
    return graphql(`
      {
        allWordpressWpDestinations {
          edges {
            node {
              id
              slug
              status
            }
          }
        }
      }
    `)
  })
  .then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const destinationTemplate = path.resolve(`./src/templates/destination.js`)

    const allDestinations = result.data.allWordpressWpDestinations.edges
    const destinations =
      process.env.NODE_ENV === 'production'
        ? getOnlyPublished(allDestinations)
        : allDestinations

    _.each(destinations, ({ node: destination }) => {
      createPage({
        path: `/${destination.slug}/`,
        component: destinationTemplate,
        context: {
          id: destination.id,
        },
      })
    })
  })
  .then(() => {
    return graphql(`
      {
        allWordpressWpUsers {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)
  })
  .then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const authorTemplate = path.resolve(`./src/templates/author.js`)

    _.each(result.data.allWordpressWpUsers.edges, ({ node: author }) => {
      createPage({
        path: `/author/${author.slug}`,
        component: authorTemplate,
        context: {
          id: author.id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
