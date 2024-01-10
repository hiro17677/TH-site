import React from "react";
import { graphql, Link } from "gatsby";

const CategoryTemplate = ({ data }) => {
  const articles = data.allContentfulArticle.edges;

  return (
    <div>
      <h1>Category: {}</h1>
      {articles.map(({ node }) => (
        <div key={node.slug}>
          <Link to={`/article/${node.slug}`}>{node.title}</Link>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    allContentfulArticle(
      filter: { category: { slug: { eq: $slug } } }
    ) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export default CategoryTemplate;
