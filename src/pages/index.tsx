/** @jsxRuntime classic */
/** @jsx jsx */
/* eslint no-shadow: 0 */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Projects from "../components/projects";

const Home = ({ data }: any) => {
  return <Projects projects={data.allDatoCmsProject.nodes} />;
};

export default Home;

export const query = graphql`
  query {
    allDatoCmsProject {
      nodes {
        slug
        title
        position
        coverImage {
          colors {
            red
            green
            blue
          }
          fluid(maxWidth: 770) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`;
