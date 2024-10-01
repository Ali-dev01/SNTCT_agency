import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";

import CustomButton from "@/components/CustomButton";
import CloseIcon from "@/icons/CloseIcon";
import SidebarLogo from "@/icons/SidebarLogo";
import { sidebarData } from "./data";

export default function Sidebar({ open, toggleDrawer }) {
  return (
    <>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        <Box sx={styles.drawerStyle}>
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
              <Box key={item.link} mb={{ lg: 5, md: 4.5, xs: 3.5 }}>
                <Link href={item.link}>
                  <Typography variant="h5" color="#3E5F82">
                    {item.title}
                  </Typography>
                </Link>
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
    width: { md: "550px", sm: "500px", xs: "350px" },
    padding: { lg: "60px", md: "50px", sm: "40px", xs: "30px" },
  },
};
