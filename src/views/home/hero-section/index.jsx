import CustomButton from "@/components/CustomButton";
import GradientHeading from "@/components/GradientHeading";
import theme from "@/theme";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const headingTexts = ["We Design,", "Develop and Market", "Your Success"];

export default function HeroSection() {
  const showImages = useMediaQuery("(min-width:1130px)");
  const lgResponsive = useMediaQuery("(max-width:1320px)");
  const mobileResponsive = useMediaQuery("(max-width:600px)");
  const mdResponsive = useMediaQuery("(max-width:900px)");

  return (
    <Box sx={styles.container}>
      {/* {showImages && ( */}
      <>
        <Image
          src="/images/home-left-bg.png"
          alt="home-left-bg"
          width={0}
          height={0}
          sizes="100vw"
          layout="intrinsic"
          className="animate__animated animate__slideInLeft"
          style={{ ...styles.leftImage(lgResponsive, mobileResponsive, mdResponsive), animationDuration: "2s" }}
        />
        <Image
          src="/images/home-right-bg.png"
          alt="home-right-bg"
          width={0}
          height={0}
          sizes="100vw"
          layout="intrinsic"
          className="animate__animated animate__slideInRight"
          style={{ ...styles.rightImage(lgResponsive, mobileResponsive, mdResponsive), animationDuration: "2s" }}
        />
      </>
      {/* )} */}
      <Box pb="20px">
        {headingTexts.map((text, index) => (
          <GradientHeading
            key={index}
            variant="h1"
            text={text}
            weight={700}
            sx={styles.heading}
          />
        ))}
      </Box>
      <Box pb="3rem" mx="auto" width={{ lg: "50%", md: "60%", sm: "80%" }}>
        <Typography variant="body1" sx={styles.bodyText}>
          Let us do all tech-savvy dirty works for you so that you can only do what you
          love and grow. We are a team of experts always be there as a partner.
        </Typography>
      </Box>
      <CustomButton text="Book a Meeting" variant="contained" showIcon />
    </Box>
  );
}

const styles = {
  container: {
    textAlign: "center",
    // py: { xs: "2rem", sm: "3rem", md: "4rem" },
    py: "4rem",
    position: "relative",
    px: "10px",
  },
  leftImage: (lgResponsive, mobileResponsive, mdResponsive) => ({
    height: "auto",
    position: "absolute",
    left: 0,
    bottom: "3rem",
    zIndex: "-1",
    top: mobileResponsive ? "-3.1rem" : mdResponsive ? '-2rem' : 0,
    width: mobileResponsive ? '130px' : mdResponsive ? '200px' : lgResponsive ? "278px" : "378px",
  }),
  rightImage: (lgResponsive, mobileResponsive, mdResponsive) => ({
    height: "auto",
    position: "absolute",
    right: mobileResponsive ? '-40px' : mdResponsive ? '20px' : 0,
    width: mobileResponsive ? '200px' : mdResponsive ? "300px" : lgResponsive ? "370px" : "570px",
    top: "-6rem",
    zIndex: "-1",
  }),
  bodyText: {
    color: theme.palette.primary.dark,
  },
};
