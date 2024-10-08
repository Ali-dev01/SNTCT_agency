import { ThemeProvider } from "@mui/material";
import { Poppins } from "next/font/google";

import Footer from "@/layout/footer";
import Header from "@/layout/header";
import theme from "@/theme";
import "animate.css";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={poppins.className}>
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </ThemeProvider>
    </html>
  );
}
