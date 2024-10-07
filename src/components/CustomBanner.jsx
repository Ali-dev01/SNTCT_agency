import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

import CustomButton from "@/components/CustomButton";

const CustomBanner = ({ title, desc, btnText = `Lets's Talk`, homePage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position="relative"
      borderRadius="60px"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={
          isHovered
            ? "/images/custom-banner/banner-bg2.png"
            : "/images/custom-banner/banner-bg1.png"
        }
        alt="banner"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          maxWidth: "1060px",
          height: homePage ? "492px" : "411px",
          borderRadius: "60px",
          transition: "all 0.5s ease",
        }}
      />
      <Box sx={styles.contentStyle}>
        <Box sx={{ width: { md: "70%", xs: "100%" }, mt: 5 }}>
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
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              transition: "all 0.3s ease",
              maxWidth: isHovered ? "325px" : "364px",
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
  contentStyle: {
    position: "absolute",
    padding: "25px 45px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingRight: { md: "0", xs: "45px" },
    zIndex: "1",
    top: 0,
  },
  heading: {
    color: "#fff",
    fontWeight: { md: 700, xs: 500 },
    lineHeight: { md: "58px", xs: "45px" },
    fontSize: { md: "50px", sm: "40px", xs: "25px" },
  },
  bannerImg: {
    display: { md: "block", xs: "none" },
    width: { md: "30%", xs: "100%" },
    mt: { lg: 2.5, md: 1, xs: 0 },
    textAlign: { md: "end", xs: "center" },
  },
};
