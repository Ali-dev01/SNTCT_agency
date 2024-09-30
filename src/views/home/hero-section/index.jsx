import CustomButton from "@/components/CustomButton";
import GradientHeading from "@/components/GradientHeading";
import theme from "@/theme";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const headingTexts = ["We Design,", "Develop and Market", "Your Success"];
const bodyTexts = [
  "Let us do all tech-savvy dirty works for you so that you",
  "can only do what you love and grow. We're a team of",
  "experts always be there as a partner.",
];

export default function HeroSection() {
  const showImages = useMediaQuery("(min-width:1130px)");
  const lgResponsive = useMediaQuery("(max-width:1320px)");

  return (
    <Box sx={styles.container}>
      {showImages && (
        <>
          <Image
            src="/images/home-left-bg.png"
            alt="home-left-bg"
            width={0}
            height={0}
            sizes="100vw"
            style={styles.leftImage(lgResponsive)}
          />
          <Image
            src="/images/home-right-bg.png"
            alt="home-right-bg"
            width={0}
            height={0}
            sizes="100vw"
            style={styles.rightImage(lgResponsive)}
          />
        </>
      )}
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
      <Box pb="3rem">
        {bodyTexts.map((text, index) => (
          <Typography key={index} variant="body1" sx={styles.bodyText}>
            {text}
          </Typography>
        ))}
      </Box>
      <CustomButton text="Book a Meeting" variant="contained" showIcon />
    </Box>
  );
}

const styles = {
  container: {
    textAlign: "center",
    py: { xs: "2rem", sm: "3rem", md: "4rem" },
    position: "relative",
    px: "10px",
  },
  leftImage: (lgResponsive) => ({
    height: "auto",
    position: "absolute",
    left: 0,
    bottom: "3rem",
    zIndex: "-1",
    width: lgResponsive ? "278px" : "378px",
  }),
  rightImage: (lgResponsive) => ({
    height: "auto",
    position: "absolute",
    right: 0,
    width: lgResponsive ? "370px" : "570px",
    top: "-6rem",
    zIndex: "-1",
  }),
  heading: {
    lineHeight: "69.6px",
  },
  bodyText: {
    color: theme.palette.primary.dark,
    lineHeight: "30px",
  },
};
