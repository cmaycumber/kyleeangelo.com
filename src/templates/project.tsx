/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import ProjectComponent from "../components/project";

const Project = ({ data, pageContext }: any) => {
  return <ProjectComponent project={data.datoCmsProject} pageContext={pageContext} />;
};

export default Project;

export const query = graphql`
  query($slug: String!) {
    datoCmsProject(slug: { eq: $slug }) {
      slug
      title
      description
      logo {
        fixed(width: 120) {
          ...GatsbyDatoCmsFixed
        }
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      descriptionNode {
        childMdx {
          body
        }
      }
      coverImage {
        url
      }
      images {
        fluid(maxWidth: 1600) {
          ...GatsbyDatoCmsFluid
        }
        alt
        basename
      }
    }
  }
`;
