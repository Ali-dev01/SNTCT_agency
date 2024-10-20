import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import localFont from "next/font/local";

import Footer from "@/layout/footer";
import Header from "@/layout/header";
import theme from "@/theme";
import "animate.css";
import "./globals.css";

const ceraPro = localFont({
  src: [
    {
      path: "../../public/fonts/cera-pro-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/cera-pro-medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/cera-pro-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <body className={ceraPro.className}>
            <header>
              <Header />
            </header>
            <main style={{ minHeight: "100vh", paddingTop: "85px" }}>{children}</main>
            <footer>
              <Footer />
            </footer>
          </body>
        </StyledEngineProvider>
      </ThemeProvider>
    </html>
  );
}
