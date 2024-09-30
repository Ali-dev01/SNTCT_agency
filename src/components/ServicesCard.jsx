import theme from "@/theme";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CustomButton from "./CustomButton";
import GradientHeading from "./GradientHeading";

const ServicesCard = ({
  iconSrc,
  iconWidth,
  title,
  subtitle,
  buttonAction = () => {},
  mainImageSrc,
}) => {
  console.log(iconWidth, "iconWidth");
  return (
    <Box sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.textContent}>
          <Box sx={styles.iconWrapper}>
            <Image src={iconSrc} alt="service-icon" width={iconWidth} height={102} />
          </Box>

          <Box sx={styles.textWrapper}>
            <GradientHeading text={title} variant="h3" weight={700} sx={styles.heading} />
            <Typography variant="h3" sx={styles.subtitle}>
              {subtitle}
            </Typography>
            <CustomButton
              text="Learn More"
              variant="outlined"
              showIcon
              onClick={buttonAction}
            />
          </Box>
        </Box>
        <Box>
          <Image src={mainImageSrc} alt="service-main-image" width={241} height={207} />
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    background: "#FFFFFFA3",
    borderRadius: "44px",
    p: "34px",
    boxShadow:
      "0px 17px 17px 0px rgba(0, 0, 0, 0.03),0px 6px 4px 0px rgba(21, 18, 14, 0.04)",
    "&:hover": {
      borderImageSource: "linear-gradient(90deg, #1938C8 0%, #0B9FE4 100%)",
      background: theme.palette.common.white,
    },
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  textContent: {
    position: "relative",
  },
  iconWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  textWrapper: {
    paddingTop: "60px",
  },
  heading: {
    lineHeight: "37.71px",
  },
  subtitle: {
    lineHeight: "37.71px",
    color: theme.palette.primary.dark,
    fontWeight: 700,
    pb: "20px",
  },
};

export default ServicesCard;
