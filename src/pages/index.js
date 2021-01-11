import React from "react"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  console.log(data)
  return (
    <PrimaryLayout addClass="justify-content-md-center">
      <Helmet>
        <title>Main Page title</title>
        <meta name="description" content="This is main page description" />
        <html lang="en" />
      </Helmet>
      {data.allWordpressPost.edges.map((el, idx) => {
        const node = el.node
        const { title, date, excerpt, categories, slug, featured_media } = node
        return (
          <Post
            key={idx}
            title={title}
            shortDescription={excerpt}
            date={date}
            tags={categories}
            link={slug}
            image={(featured_media && featured_media.source_url) || null}
          />
        )
      })}
    </PrimaryLayout>
  )
}

export const query = graphql`
  {
    allWordpressPost {
      edges {
        node {
          id
          date
          slug
          title
          content
          excerpt
          featured_media {
            source_url
            slug
          }
        }
      }
    }
  }
`
