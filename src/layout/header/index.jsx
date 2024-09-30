"use client";

import MenuIcon from "@/icons/MenuIcon";
import { Box } from "@mui/material";
import { useState } from "react";

import CustomButton from "@/components/CustomButton";
import Logo from "@/icons/Logo";
import Sidebar from "../sidebar";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setIsDrawerOpen(newOpen);
  };

  return (
    <>
      <Box sx={styles.headerStyle}>
        <Box sx={styles.headerContent}>
          <CustomButton text="Lets Talk" variant="contained" />
          <Logo />
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
    p: "14px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
