/** @jsx jsx */
/* eslint no-shadow: 0 */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Projects from "../@lekoarts/gatsby-theme-emilia/components/projects";

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
