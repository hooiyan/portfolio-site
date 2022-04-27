const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const projects = result.data.allMdx.edges;

  projects.forEach(({ node }, index) => {
    // const prev = projects[index - 1];
    // const next = projects[index + 1];

    createPage({
      path: `/portfolio/${node.slug}`,
      component: path.resolve(`./src/templates/ProjectLayout.jsx`),
      context: {
        id: node.id,
      },
    });
  });
};
