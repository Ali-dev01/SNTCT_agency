import theme from "@/theme";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import GradientHeading from "./GradientHeading";

const GrowthCard = ({
  whySntct = false,
  iconSrc,
  iconWidth,
  title,
  subtitle1,
  subtitle2,
  mainImageSrc,
  mainImageWidth,
  mainImageHeight,
}) => {
  return (
    <Box sx={styles.cardContainer(whySntct)}>
      <Box sx={styles.innerContainer}>
        <Box>
          <Box sx={styles.iconContainer}>
            <Box sx={styles.iconWrapper}>
              <Image src={iconSrc} alt="service-icon" width={iconWidth} height={102} />
            </Box>
            <Box sx={styles.headingWrapper}>
              <GradientHeading
                text={title}
                variant="h3"
                weight={700}
                sx={styles.heading}
              />
            </Box>
          </Box>
          <Typography variant="body1" sx={styles.bodyText}>
            {subtitle1}
          </Typography>
          <Typography variant="body1" sx={styles.bodyText}>
            {subtitle2}
          </Typography>
        </Box>
        <Box sx={styles.imageContainer(mainImageWidth, mainImageHeight)}>
          <Image
            src={mainImageSrc}
            alt="growth-img"
            layout="intrinsic"
            width={whySntct ? 538 : 474}
            height={whySntct ? 431 : 374}
            objectFit="contain"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GrowthCard;

const styles = {
  cardContainer: (whySntct) => ({
    borderRadius: "44px",
    mt: whySntct ? 0 : "20px",
    backgroundColor: whySntct ? "transparent" : "#fff",
    padding: whySntct ? 0 : { md: "50px", xs: "25px" },
  }),
  innerContainer: {
    display: "flex",
    gap: "19px",
    alignItems: "center",
    flexWrap: { xs: "wrap", md: "nowrap" },
  },
  iconContainer: {
    position: "relative",
  },
  iconWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  headingWrapper: {
    paddingTop: "60px",
  },
  heading: {
    paddingBottom: "20px",
    lineHeight: "52.2px",
  },
  bodyText: {
    color: theme.palette.primary.dark,
    lineHeight: "30px",
    paddingBottom: "30px",
  },
  imageContainer: (mainImageWidth, mainImageHeight) => ({
    flexShrink: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { md: mainImageWidth, xs: "100%" },
    height: { md: "378px    ", xs: "auto" },
    // height: { md: mainImageHeight, xs: "auto" },
  }),
};
