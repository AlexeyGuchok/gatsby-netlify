import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

const BlogPostLayout = ({ data }) => {
  const post = data.wordpressPost
  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="image" content={post.featured_media.source_url} />
      </Helmet>
      <Header />
      <div className="container">
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div>
          {post.categories.map(el => {
            return <span>{el.name}</span>
          })}
        </div>
        <img src={post.featured_media.source_url} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <Footer />
    </div>
  )
}

export default BlogPostLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      content
      title
      excerpt
      featured_media {
        source_url
      }
      categories {
        name
      }
    }
  }
`
