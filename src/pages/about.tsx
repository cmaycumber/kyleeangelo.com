/** @jsx jsx */
import Header from "../components/header";
import Layout from "@lekoarts/gatsby-theme-emilia/src/components/layout";
import { graphql } from "gatsby";
import { Heading, Flex } from "@theme-ui/components";
import { Styled, Container, Divider, jsx } from "theme-ui";
import Img from "gatsby-image";

const About = ({ data }: any) => {
  const { description, headshot } = data.datoCmsAboutPage;
  return (
    <Layout>
      <Header />
      <Container>
        <Flex
          sx={{ justifyContent: "center", alignItems: "center", py: 3, flexDirection: "column" }}
        >
          <Styled.h1 sx={{ mb: 4 }}>About Me</Styled.h1>
          <Img sx={{ width: "100%", maxWidth: 400, mb: 4 }} fluid={headshot.fluid} />
          <Styled.p>{description}</Styled.p>
        </Flex>
      </Container>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query {
    datoCmsAboutPage {
      description
      headshot {
        fluid(maxWidth: 770) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`;
