const projectTemplate = require.resolve(`./src/templates/project.tsx`);

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions;

  const { formatString } = withDefaults(themeOptions);

  const result = await graphql(`
    query {
      allDatoCmsProject(sort: { fields: date, order: DESC }) {
        nodes {
          title
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your projects or pages`, result.errors);
    return;
  }

  const projects = result.data.allDatoCmsProject.nodes;

  projects.forEach((project, index) => {
    const { fileAbsolutePath } = project.parent;

    const next = index === 0 ? null : projects[index - 1];
    const prev = index === projects.length - 1 ? null : projects[index + 1];

    createPage({
      path: project.slug,
      component: projectTemplate,
      context: {
        slug: project.slug,
        absolutePathRegex: `/^${path.dirname(fileAbsolutePath)}/`,
        prev,
        next,
        formatString,
      },
    });
  });
};
