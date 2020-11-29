/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading, Flex, Container, useThemeUI } from "theme-ui";
import { animated, useSpring, config } from "react-spring";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Header = ({ className }: any) => {
  const { colorMode } = useThemeUI();
  console.log(colorMode);
  const { datoCmsLogo } = useStaticQuery<any>(graphql`
    query {
      datoCmsLogo {
        lightLogo {
          fixed(width: 150, height: 80) {
            ...GatsbyDatoCmsFixed            
          }
        }
        darkLogo {
          fixed(width: 150, height: 80) {
            ...GatsbyDatoCmsFixed
          }
        }
      }
    }
  `);

  console.log(datoCmsLogo)

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
  const fadeLongProps = useSpring({
    config: config.slow,
    delay: 600,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Flex
      sx={{ alignItems: "center" }}
      className={className}
      as="header"
      variant="layout.projectHead"
    >
      <Container>
        <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
          <Flex sx={{ flex: 1 }} />
          <Flex sx={{ flex: 1, justifyContent: "center" }}>
            <Link to="/">
              <Img
                critical
                fixed={
                  colorMode === "dark"
                    ? datoCmsLogo.lightLogo.fixed
                    : datoCmsLogo.darkLogo.fixed
                }
              />
            </Link>
          </Flex>
          <Flex sx={{ flex: 1, justifyContent: "flex-end" }}>
            <Link to="/about/" sx={{ variant: "links.nav" }}>
              About
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
