const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blog-post.js")

  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            body
            id
            frontmatter {
              title
              path
              date
              author
            }
            excerpt
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return console.error(res.errors)
    }

    res.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}
