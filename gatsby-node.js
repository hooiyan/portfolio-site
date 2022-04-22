exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  // pull in or use whatever data
  const dogData = [
    {
      name: 'Fido',
      breed: 'Sheltie',
    },
    {
      name: 'Sparky',
      breed: 'Corgi',
    },
  ];

  // loop through data and create pages
  dogData.forEach((dog) => {
    createPage({
      path: `portfolio/${dog.name}`,
      component: require.resolve(`./src/templates/ProjectTemplate.jsx`),
      context: { dog },
    });
  });
};
