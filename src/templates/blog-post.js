import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function Template({ data }) {
  const post = data.mdx

  return (
    <Layout>
      <SEO title="Template Bolg Page" />
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

export default Template
