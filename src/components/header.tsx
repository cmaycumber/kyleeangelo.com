/** @jsx jsx */
import { jsx, Heading, Flex, Container, useThemeUI } from "theme-ui";
import { animated, useSpring, config } from "react-spring";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Header = ({ className }: any) => {
  const { colorMode } = useThemeUI();
  console.log(colorMode);
  const logo = useStaticQuery<any>(graphql`
    query {
      logoDark: file(name: { eq: "logo-light" }) {
        childImageSharp {
          fixed(height: 60, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      logoLight: file(name: { eq: "logo-dark" }) {
        childImageSharp {
          fixed(height: 60, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const fadeUpProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  });
  const fadeUpPropsDelay = useSpring({
    config: config.slow,
    delay: 250,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  });
  const fadeProps = useSpring({ config: config.slow, from: { opacity: 0 }, to: { opacity: 1 } });
  const fadeLongProps = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } });

  return (
    <Flex sx={{ mb: 7, alignItems: "center" }} className={className} as="header" variant="layout.projectHead">
      <Container>
        <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
          <Link to="/">
            <Img
              critical
              fixed={colorMode === "dark" ? logo.logoLight.childImageSharp.fixed : logo.logoDark.childImageSharp.fixed}
            />
          </Link>
          {/* <Link to="/about/" sx={{ variant: "links.nav" }}>
            About
          </Link> */}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
