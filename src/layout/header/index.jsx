"use client";

import MenuIcon from "@/icons/MenuIcon";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../sidebar";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (newOpen) => () => {
    setIsDrawerOpen(newOpen);
  };

  return (
    <>
      <Box sx={styles.headerStyle}>
        <Box sx={styles.headerContent}>
          <CustomButton text="Lets Talk" variant="contained" />
          <Link href="/" style={{ display: "flex" }}>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={isSm ? 100 : 140}
              height={isSm ? 25 : 40}
            />
          </Link>
          <Box sx={{ cursor: "pointer", display: "flex" }} onClick={toggleDrawer(true)}>
            <MenuIcon />
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
  headerStyle: {
    mt: 2,
    mx: { xs: 2, sm: 3, md: "auto" },
    maxWidth: "800px",
    background: "#FFFFFFA3",
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
