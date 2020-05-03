const projectTemplate = require.resolve(`./src/templates/project.tsx`);

exports.onCreateNode = async ({ node, actions, reporter }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    createNodeField({ node, name: `fields`, value: "placeholder" });
    createNodeField({ node, name: `colorThief`, value: "placeholder" });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allDatoCmsProject {
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
    const next = index === 0 ? null : projects[index - 1];
    const prev = index === projects.length - 1 ? null : projects[index + 1];

    createPage({
      path: project.slug,
      component: projectTemplate,
      context: {
        slug: project.slug,
        prev,
        next,
      },
    });
  });
};
