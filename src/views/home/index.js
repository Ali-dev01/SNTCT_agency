"use client";

import AnimatedLogos from "@/components/AnimatedLogos";
import Loader from "@/components/custom-loader/Loader";
import useGetLoadingState from "@/hooks/useGetLoadingState";
import { Box } from "@mui/material";
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

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box>
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
          <TrustedUsers />
          <WhySntct />
          <DigitalPartner />
          <ExploreBlogs />
          <BeAPart />
          <FaqSection homePage />
        </Box>
      )}
    </>
  );
};
export default HomeSection;
