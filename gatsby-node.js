const data = require('./src/content/data.json');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  // loop through data and create pages
  data.forEach((project) => {
    createPage({
      path: `portfolio/${project.slug}`,
      component: require.resolve(`./src/templates/ProjectTemplate.jsx`),
      context: { project },
    });
  });
};
