import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulArticle(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            body {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
      allContentfulCategory {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  const articles = data.allContentfulArticle.edges
  const categories = data.allContentfulCategory.edges

  return (
    <div className="wrapper mt-8 pb-24 pb-36">
      {/* ... Your existing code ... */}
      {articles.map(({ node }) => (
        <div key={node.slug}>
          {/* Use `Link` to navigate to the blog post using the `slug*/}
          <Link to={`/blog/${node.slug}`}>
            <h2>{node.title}</h2>
            <p>{node.publishDate}</p>
            <div dangerouslySetInnerHTML={{ __html: node.description.childMarkdownRemark.html }} />
          </Link>
        </div>
      ))}
      {/* ... Your existing code ... */}
    </div>
  )
}

export default BlogPage
