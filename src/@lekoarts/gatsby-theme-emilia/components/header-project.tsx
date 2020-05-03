/** @jsx jsx */
import React from "react";
import { Flex, jsx, Container, Heading, Styled, Box } from "theme-ui";
import { animated, useSpring, config } from "react-spring";
import { useStaticQuery, graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import HeaderBackground from "@lekoarts/gatsby-theme-emilia/src/components/header-background";
import LeftArrow from "@lekoarts/gatsby-theme-emilia/src/assets/left-arrow";
import useEmiliaConfig from "@lekoarts/gatsby-theme-emilia/src/hooks/use-emilia-config";
import Header from "./header";

type HeaderProjectProps = {
  title: string;
  areas: string[];
  description?: string;
  date: string;
};

type AvatarStaticQuery = {
  file: {
    childImageSharp: any;
  };
};

const HeaderProject = ({ title, areas, description, date }: HeaderProjectProps) => {
  const { name } = useEmiliaConfig();
  const avatar = useStaticQuery<AvatarStaticQuery>(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          fixed(width: 40, height: 40, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, -30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  });
  const backButtonProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(-30px, 0, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  });
  const infoProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } });

  return (
    <Box>
      <Header sx={{ mb: 0 }} />
      <Flex variant="layout.header">
        <Container sx={{ textAlign: `center`, mb: 4, zIndex: 10 }}>
          <animated.div style={backButtonProps}>
            <Link
              to="/"
              aria-label={`${name} - Back to homepage`}
              sx={{
                display: `flex`,
                alignItems: `center`,
                color: `text`,
                textDecoration: `none`,

                svg: {
                  transition: `transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)`,
                },
                "&:hover, &:focus": { svg: { transform: `translateX(-6px)` } },
              }}
            >
              <LeftArrow />
              <span sx={{ fontWeight: `medium`, ml: 2 }}>{"Home"}</span>
            </Link>
          </animated.div>
          <div sx={{ mt: 4, mb: [6, 6, 7] }}>
            <animated.div style={titleProps}>
              <Heading as="h1" variant="styles.h1">
                {title}
              </Heading>
            </animated.div>
            <animated.div style={infoProps}>
              <Styled.p sx={{ mb: 0, mt: 4 }}>{date}</Styled.p>
              <div>
                {areas.map((area, index) => (
                  <React.Fragment key={area}>
                    {index > 0 && `, `}
                    {area}
                  </React.Fragment>
                ))}
              </div>
              {description && (
                <div sx={{ maxWidth: `900px`, mx: `auto`, mt: 5, p: { textAlign: `left` } }}>
                  <MDXRenderer>{description}</MDXRenderer>
                </div>
              )}
            </animated.div>
          </div>
        </Container>
      </Flex>
    </Box>
  );
};

export default HeaderProject;
