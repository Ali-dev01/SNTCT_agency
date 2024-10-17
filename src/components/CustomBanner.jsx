import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

import CustomButton from "@/components/CustomButton";

const CustomBanner = ({ title, desc, btnText = `Lets's Talk`, homePage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      sx={styles.bannerWraper(homePage)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box>
        <Box sx={{ width: { md: "70%", xs: "100%" } }}>
          <Box sx={{ mb: "40px", width: { lg: "90%", xs: "100%" } }}>
            <Typography sx={styles.heading}>{title}</Typography>
            <Typography variant="body2" color="#fff" lineHeight="27px" mt={2}>
              {desc}
            </Typography>
          </Box>
          <CustomButton variant="contained" text={btnText} showIcon />
        </Box>
        <Box sx={styles.bannerImg}>
          <Image
            src={
              isHovered
                ? "/images/custom-banner/banner-img2.png"
                : "/images/custom-banner/banner-img1.png"
            }
            alt="banner"
            width={325}
            height={325}
            style={{
              transition: "all 0.3s ease",
              transform: isHovered ? "rotate(-14deg)" : "rotate(0deg)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default CustomBanner;

const styles = {
  bannerWraper: (isHome) => ({
    position: "relative",
    background: "linear-gradient(90deg, #1938C8 0%, #0B9FE4 100%)",
    padding: { xs: '24px', sm: "35px 40px" },
    borderRadius: { xs: "33px", sm: "60px" },
    height: { sm: isHome ? "472px" : "415px", xs: isHome ? "auto" : "415px" },
    width: { lg: "92%", xs: "100%" },
    "&:hover": {
      background: "linear-gradient(90deg, #0B9FE4 0%, #1938C8 100%)",
    },
  }),
  heading: {
    color: "#fff",
    fontWeight: 700,
    lineHeight: { md: "58px", xs: "45px" },
    fontSize: { md: "50px", sm: "40px", xs: "25px" },
  },
  bannerImg: {
    position: "absolute",
    right: "-80px",
    top: "22px",
    display: { lg: "block", xs: "none" },
    mt: { lg: 2.5, md: 1, xs: 0 },
  },
};
