import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
        allContentfulArticle(sort: {publishDate: DESC}) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
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
    <div>
      <h1>Blog</h1>
      <div>
        <h2>Latest Article</h2>
        {/* 显示最新文章 */}
        <Link to={`/article/${articles[0].node.slug}`}>{articles[0].node.title}</Link>
        
        <h2>More Articles</h2>
        {/* 显示其他文章 */}
        {articles.slice(1).map(({ node }) => (
          <div key={node.slug}>
            <Link to={`/article/${node.slug}`}>{node.title}</Link>
          </div>
        ))}

        <h2>Categories</h2>
        {/* 显示分类列表 */}
        {categories.map(({ node }) => (
          <div key={node.slug}>
            <Link to={`/category/${node.slug}`}>{node.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogPage
