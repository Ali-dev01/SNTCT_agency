"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#3395FF",
      dark: "#00336B",
      light: "#E6F2FF",
    },
    secondary: {
      main: "#ABC2DB",
      light: "#C7D7E9",
      dark: "#3E5F82",
    },
    gradient: {
      main: "linear-gradient(90deg, rgba(24,56,199,1) 0%, rgba(25,57,200,1) 1%, rgba(10,157,227,1) 100%)",
      light: "linear-gradient(90deg, rgba(80,128,199,1) 0%, rgba(112,207,255,1) 100%)",
    },
    grey: {
      100: "#f7f7f5",
      200: "#f5f5f3",
      300: "#f1f1ee",
      400: "#edede9",
      500: "#ebebe7",
      600: "#d3d3cf",
      700: "#757573",
      800: "#5e5e5c",
      900: "#464645",
    },
    background: {
      default: "#f7fafc",
    },
  },
  typography: {
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: "60px",
      lineHeight: "normal",
    },
    h2: {
      fontSize: "45px",
      lineHeight: "normal",
    },
    h3: {
      fontSize: "30px",
      lineHeight: "normal",
    },
    h4: {
      fontSize: "28px",
      lineHeight: "normal",
    },
    h5: {
      fontSize: "24px",
      lineHeight: "normal",
    },
    body1: {
      fontSize: "20px",
      lineHeight: "normal",
    },
    body2: {
      fontSize: "18px",
      lineHeight: "normal",
    },
    caption: {
      fontSize: "16px",
      lineHeight: "normal",
    },
  },
});

export default theme;
