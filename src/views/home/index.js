"use client";
import AnimatedLogos from "@/components/AnimatedLogos";
import { Box } from "@mui/material";
import FaqSection from "../faq";
import ExploreServices from "./explore-services";
import Growth from "./growth";
import HeroSection from "./hero-section";

const HomeSection = () => {
  return (
    <>
      <HeroSection />
      <Box
        sx={{
          px: { md: "80px", sm: "40px", xs: "20px" },
          py: { md: "40px", xs: "20px" },
        }}
      >
        <AnimatedLogos />
      </Box>
      <ExploreServices />
      <Growth />
      <FaqSection />
    </>
  );
};
export default HomeSection;
