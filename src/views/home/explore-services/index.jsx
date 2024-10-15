import GradientHeading from "@/components/GradientHeading";
import ServicesCard from "@/components/ServicesCard";
import ArrowDownSection from "@/icons/ArrowDownSection";
import theme from "@/theme";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"; // New Grid2 system
import { useEffect, useRef, useState } from "react";
import { services } from "./data";

export default function ExploreServices() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const scrollContainerRef = useRef(null);

  // Detect scroll direction to rotate the arrow
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const isScrolled = scrollContainerRef.current.scrollTop > 0;
        setIsScrolledDown(isScrolled);
      }
    };
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", py: { md: "40px", xs: "20px" } }}>
        <GradientHeading
          text="Explore Our Top Services"
          variant="h2"
          weight={700}
          sx={styles.heading}
        />
        <Typography variant="body1" sx={styles.bodyText}>
          We design and develop user centered digital products,
          <br />
          ecommerce and Web based best solutions.
        </Typography>
        <Box
          sx={{
            transform: isScrolledDown ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <ArrowDownSection />
        </Box>
      </Box>
      <Box ref={scrollContainerRef} sx={styles.scrollContainer}>
        <Box sx={{ ...styles.blurOverlay, ...styles.blurTop }} />
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6 }}>
              <ServicesCard
                iconSrc={service.iconSrc}
                iconWidth={service.iconWidth}
                title={service.title}
                subtitle={service.subtitle}
                mainImageSrc={service.mainImageSrc}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ ...styles.blurOverlay, ...styles.blurBottom }} />
      </Box>
    </Container>
  );
}

const styles = {
  heading: {
    lineHeight: "52.2px",
    pb: "20px",
  },
  bodyText: {
    color: theme.palette.primary.dark,
    lineHeight: "30px",
    pb: "30px",
  },
  scrollContainer: {
    position: "relative",
    flexGrow: 1,
    // height: "600px",
    overflow: "auto", // Ensure the scroll stays within bounds
  },
  blurOverlay: {
    position: "sticky",
    left: 0,
    right: 0,
    height: { md: "30px", xs: "20px" }, // Adjust height of the blur as needed
    pointerEvents: "none",
    zIndex: 3, // Ensure blur stays above the content
  },
  blurTop: {
    top: 0,
    background:
      "linear-gradient(180deg, rgba(230, 242, 255, 1) 0%, rgba(230, 242, 255, 0) 100%)",
  },
  blurBottom: {
    bottom: 0,
    background:
      "linear-gradient(0deg, rgba(230, 242, 255, 1) 0%, rgba(230, 242, 255, 0) 100%)",
  },
};
