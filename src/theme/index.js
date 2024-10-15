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
    background: {
      default: "#f7fafc",
    },
  },
  typography: {
    fontFamily: "inherit",
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: "60px",
      lineHeight: "normal",
      "@media (max-width:960px)": {
        fontSize: "45px",
      },
      "@media (max-width:600px)": {
        fontSize: "36px",
      },
    },
    h2: {
      fontSize: "45px",
      lineHeight: "normal",
      "@media (max-width:600px)": {
        fontSize: "30px",
      },
    },
    h3: {
      fontSize: "30px",
      lineHeight: "normal",
      "@media (max-width:600px)": {
        fontSize: "24px",
      },
    },
    h4: {
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "normal",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "normal",
      "@media (max-width:600px)": {
        fontSize: "20px",
      },
    },
    body1: {
      fontSize: "20px",
      lineHeight: "30px",
      "@media (max-width:600px)": {
        fontSize: "18px",
        lineHeight: "25px",
      },
    },
    body2: {
      fontSize: "18px",
      lineHeight: "normal",
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
    caption: {
      fontSize: "16px",
      lineHeight: "normal",
    },
  },
});

export default theme;
