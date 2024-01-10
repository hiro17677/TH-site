import React from "react";
import { graphql } from "gatsby";

const ArticleTemplate = ({ data }) => {
  const article = data.contentfulArticle;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.publishDate}</p>
      <div dangerouslySetInnerHTML={{ __html: article.body.childMarkdownRemark.html }} />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        childMarkdownRemark {
            html
        }
      }
    }
  }
`;

export default ArticleTemplate;
