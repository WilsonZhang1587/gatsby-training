import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Latest Posts</h1>
      {data.allMdx.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by {post.node.frontmatter.author} on{" "}
            {post.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMdx {
      edges {
        node {
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
`

export default BlogPage
