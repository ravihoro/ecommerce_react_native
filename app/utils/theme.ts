const Palette = {
  lightPurple: "#e8e1fc",
  purple: "#8e6cf0",
  grey: "#f4f4f4",
  darkGrey: "#272727",
  white: "#ffffff",
  red: "#cd0e61",
};

export const Theme = {
  colors: {
    primary: Palette.purple,
    primaryLight: Palette.lightPurple,
    background: Palette.white,
    greyBackground: Palette.grey,
    failure: Palette.red,
    primaryIcon: Palette.purple,
    whiteIcon: Palette.white,
  },

  fontSize: {
    xs: 8,
    s: 12,
    m: 16,
    l: 20,
    xl: 24,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    headerBold: {
      fontSize: 24,
      fontWeight: "bold",
    },
    header: {
      fontSize: 24,
    },
    subHeader: {
      fontSize: 16,
    },
    subHeaderBold: {
      fontSize: 16,
      fontWeight: "bold",
    },
    body: {
      fontSize: 16,
    },
  },
};
