/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx, Container, Flex, Link, useColorMode } from "theme-ui";
import ColorModeToggle from "@lekoarts/gatsby-theme-emilia/src/components/colormode-toggle";

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <Box
      as="footer"
      variant="layout.footer"
      sx={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${isDark ? `0.35` : `0.15`}) 100%)`,
      }}
    >
      <Container>
        <Flex
          sx={{
            textAlign: "center",
            flexDirection: `row`,
            justifyContent: `space-between`,
          }}
        >
          <div sx={{ mt: [4, 4, 4, 0] }}>
            <div sx={{ color: `textMuted` }}>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</div>
          </div>
          <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
