import { merge } from "theme-ui";
import { tailwind } from "@theme-ui/presets";

export default merge(tailwind, {
  initialColorModeName: `light`,
  useCustomProperties: true,
  useColorSchemeMediaQuery: true,
  colors: {
    text: tailwind.colors.gray[8],
    primary: tailwind.colors.blue[6],
    background: tailwind.colors.gray[1],
    backgroundPattern: `#F1F4F7`,
    iconPrimary: tailwind.colors.gray[8],
    iconSecondary: tailwind.colors.gray[6],
    textMuted: tailwind.colors.gray[7],
    heading: tailwind.colors.black,
    toggleIcon: tailwind.colors.black,
    muted: tailwind.colors.gray[3],
    modes: {
      dark: {
        primary: tailwind.colors.blue[4],
        text: tailwind.colors.gray[4],
        background: tailwind.colors.gray[9],
        backgroundPattern: `#1D2330`,
        iconPrimary: tailwind.colors.gray[4],
        iconSecondary: tailwind.colors.gray[1],
        textMuted: tailwind.colors.gray[6],
        heading: tailwind.colors.white,
        toggleIcon: tailwind.colors.white,
        muted: tailwind.colors.gray[8],
      },
    },
  },
  layout: {
    footer: {
      display: `block`,
      color: `text`,
      pt: 6,
      pb: 4,
    },
    main: {
      position: `relative`,
    },
    header: {
      position: `relative`,
      overflow: `hidden`,
      alignItems: "center",
    },
    projectHead: {
      position: `relative`,
      overflow: `hidden`,
      justifyContent: `center`,
      height: 72,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
    container: {
      px: [3, 4],
      py: [2, 3],
      maxWidth: 1024,
    },
  },
  links: {
    nav: {
      position: "relative",
      py: 1,
      px: 3,
      ml: 2,
      color: "primary",
      textDecoration: "none",
      "::before": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 1,
        backgroundColor: "muted",
        content: "''",
        transition: "top 0.3s",
      },
      "::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        backgroundColor: "muted",
        content: "''",
        transition: "height 0.3s",
      },
      ":hover": {
        "::after": {
          height: "100%",
        },
        "::before": {
          top: "100%",
          opacity: 1,
        },
      },
    },
  },
  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
    },
    a: {
      color: `primary`,
      textDecoration: `none`,
      transition: `all 0.3s ease-in-out`,
    },
    p: {
      fontSize: 1,
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    h1: {
      fontSize: [4, 5],
      mt: 2,
      color: `heading`,
    },
    h2: {
      fontSize: [3, 4],
      mt: 2,
      color: `heading`,
    },
    h3: {
      fontSize: [2, 3],
      mt: 3,
      color: `heading`,
    },
    h4: {
      fontSize: [1, 2],
      color: `heading`,
    },
    h5: {
      fontSize: 1,
      color: `heading`,
    },
    h6: {
      fontSize: 1,
      mb: 2,
      color: `heading`,
    },
  },
});