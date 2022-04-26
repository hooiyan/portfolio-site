const portfolio = require('./src/content/portfolio.json');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  portfolio.forEach((project) => {
    createPage({
      path: `portfolio/${project.slug}`,
      component: require.resolve(`./src/templates/ProjectTemplate.jsx`),
      context: { project },
    });
  });
};
