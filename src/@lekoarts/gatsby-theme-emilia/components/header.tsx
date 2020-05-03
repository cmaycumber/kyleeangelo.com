/** @jsx jsx */
import { jsx, Heading, Flex, Container } from "theme-ui";
import { animated, useSpring, config } from "react-spring";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import useEmiliaConfig from "@lekoarts/gatsby-theme-emilia/src/hooks/use-emilia-config";
import HeaderBackground from "@lekoarts/gatsby-theme-emilia/src/components/header-background";
import Location from "@lekoarts/gatsby-theme-emilia/src/assets/location";
import SocialMediaList from "@lekoarts/gatsby-theme-emilia/src/components/social-media-list";

type AvatarStaticQuery = {
  file: {
    childImageSharp: any;
  };
};

const Header = ({ className }: any) => {
  const { name, location, assetsPath } = useEmiliaConfig();
  const avatar = useStaticQuery<AvatarStaticQuery>(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          fixed(width: 120, height: 40, quality: 100) {
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
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/">
            <Img fixed={avatar.file.childImageSharp.fixed} />
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
