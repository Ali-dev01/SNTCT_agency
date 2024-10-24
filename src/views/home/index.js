"use client";

import AnimatedLogos from "@/components/AnimatedLogos";
import Loader from "@/components/custom-loader/Loader";
import useGetLoadingState from "@/hooks/useGetLoadingState";
import { Box } from "@mui/material";
import { useEffect } from "react";
import FaqSection from "../faq";
import BeAPart from "./be-a-part";
import DigitalPartner from "./digital-partner";
import ExploreBlogs from "./explore-blogs";
import ExploreServices from "./explore-services";
import Growth from "./growth";
import HeroSection from "./hero-section";
import TrustedUsers from "./trusted-users";
import WhySntct from "./why-sntct";

const HomeSection = () => {
  const { loading } = useGetLoadingState();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
          <Box id="services">
            <ExploreServices />
          </Box>
          <Growth />
          <Box id="testimonials">
            <TrustedUsers />
          </Box>
          <WhySntct />
          <DigitalPartner />
          <ExploreBlogs />
          <BeAPart />
          <FaqSection homePage />
        </>
      )}
    </>
  );
};
export default HomeSection;
