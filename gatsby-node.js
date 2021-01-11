const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWordpressPost {
        nodes {
          slug
        }
      }
    }
  `).then(res => {
    res.data.allWordpressPost.nodes.forEach(node => {
      createPage({
        path: node.slug,
        component: path.resolve(
          __dirname,
          "src/layouts/BlogPostLayout/index.js"
        ),
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
