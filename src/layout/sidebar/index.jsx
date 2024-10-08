"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Collapse, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import { useState } from "react";

import CustomButton from "@/components/CustomButton";
import CloseIcon from "@/icons/CloseIcon";
import SidebarLogo from "@/icons/SidebarLogo";
import { sidebarData } from "./data";

export default function Sidebar({ open, toggleDrawer }) {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (itemTitle) => {
    if (expandedItem === itemTitle) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemTitle);
    }
  };

  return (
    <>
      <Drawer
        open={open}
        anchor="right"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(30px) saturate(200%)",
            WebkitBackdropFilter: "blur(30px) saturate(200%)",
            width: { md: "550px", sm: "500px", xs: "350px" },
            padding: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={styles.logoStyle}>
            <SidebarLogo />
          </Box>
          <Box
            sx={{ display: "flex", mt: 2, cursor: "pointer" }}
            onClick={toggleDrawer(false)}
          >
            <CloseIcon />
          </Box>
        </Box>
        <Box mt={6}>
          {sidebarData.map((item) => (
            <Box key={item.link} mb={{ lg: 4, md: 3.5, xs: 2.5 }}>
              <Box onClick={() => handleToggle(item.title)} sx={styles.navItem}>
                <Link href={item.link} style={{ textDecoration: "none" }}>
                  <Typography variant="h5" color="#3E5F82">
                    {item.title}
                  </Typography>
                </Link>

                {/* Conditionally render the arrow icon if there are subItems */}
                {item.subItems && (
                  <ExpandMoreIcon
                    sx={{
                      transform:
                        expandedItem === item.title ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                )}
              </Box>

              {item.subItems && (
                <Collapse in={expandedItem === item.title} timeout="auto" unmountOnExit>
                  <Box mt={2} ml={2}>
                    {item.subItems?.map((subItem) => (
                      <Link href={subItem.link} key={subItem.link}>
                        <Typography variant="body1" my={1.5} color="#3E5F82">
                          {subItem.title}
                        </Typography>
                      </Link>
                    ))}
                  </Box>
                </Collapse>
              )}
            </Box>
          ))}

          <Box mt={7}>
            <Typography variant="caption" color="#00336B">
              Have a Question?
            </Typography>
            <Box mt={2.5}>
              <Link href="/FAQs">
                <Typography variant="h5" fontWeight={700} color="#3E5F82">
                  FAQ
                </Typography>
              </Link>
            </Box>

            <Box mt={3}>
              <Link href="/contact-us">
                <Typography
                  variant="h5"
                  fontWeight={700}
                  color="#3E5F82"
                  sx={{ borderBottom: "1px solid #3E5F82", display: "inline" }}
                >
                  Contact Us
                </Typography>
              </Link>
            </Box>

            <Box mt={7}>
              <Typography variant="caption" color="#00336B" display="block" mb={2}>
                Have any confusion?
              </Typography>
              <CustomButton text="Lets Talk" variant="contained" showIcon />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

const styles = {
  logoStyle: (theme) => ({
    display: "flex",
    background: theme.palette.primary.light,
    padding: "13px 19px",
    borderRadius: "12px",
    boxShadow: "0px 6px 4px 0px #15120E0A",
  }),
  drawerStyle: {
    background: "rgba(255, 255, 255, 0.8)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    width: { md: "550px", sm: "500px", xs: "350px" },
    padding: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
  },
  navItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
};
