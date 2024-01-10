/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require('path');
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const result = await graphql(`
    {
      articles: allContentfulArticle {
        edges {
          node {
            slug
          }
        }
      }
      categories: allContentfulCategory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  // 为每篇文章创建页面
  result.data.articles.edges.forEach(({ node }) => {
    createPage({
      path: `/article/${node.slug}`,
      component: path.resolve('./src/templates/article.js'),
      context: {
        slug: node.slug,
      },
    });
  });

  // 为每个分类创建页面
  result.data.categories.edges.forEach(({ node }) => {
    createPage({
      path: `/category/${node.slug}`,
      component: path.resolve('./src/templates/category.js'),
      context: {
        slug: node.slug,
      },
    });
  });
};
