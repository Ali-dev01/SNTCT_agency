"use client";

import MenuIcon from "@/icons/MenuIcon";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../sidebar";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (newOpen) => () => {
    setIsDrawerOpen(newOpen);
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <Box sx={{ ...styles.wrapper, ...(showNavbar ? styles.show : styles.hide) }}>
        <Box sx={styles.headerStyle}>
          <Box sx={styles.headerContent}>
            <CustomButton text="Lets Talk" variant="contained" />
            <Link href="/" style={{ display: "flex" }}>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={isSm ? 100 : 140}
                height={isSm ? 27 : 40}
                priority
              />
            </Link>
            <Box sx={{ cursor: "pointer", display: "flex" }} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Sidebard Drawer */}
      <Sidebar open={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};
export default Header;

const styles = {
  wrapper: {
    position: "fixed",
    top: "5px",
    width: "100%",
    zIndex: "1000",
    transition: "top 0.6s ease",
  },
  show: {
    top: "5px",
  },
  hide: {
    top: "-95px", // Move it out of the viewport when hidden
  },
  headerStyle: {
    mt: 2,
    mx: { xs: 2, sm: 3, md: "auto" },
    maxWidth: "800px",
    // background: "#FFFFFFA3",
    background: "#f2f6fa",
    borderRadius: "60px",
    boxShadow: "0px 6px 4px 0px #15120E0A",
    zIndex: 2,
  },
  headerContent: {
    p: { sm: "12px 14px", xs: "8px 10px" },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
