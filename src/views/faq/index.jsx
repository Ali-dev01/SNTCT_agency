"use client";

import GradientHeading from "@/components/GradientHeading";
import { Box, Container } from "@mui/material";

import Loader from "@/components/custom-loader/Loader";
import CustomAccordion from "@/components/CustomAccordion";
import useGetLoadingState from "@/hooks/useGetLoadingState";
import ArrowDownSection from "@/icons/ArrowDownSection";
import Image from "next/image";
import { useEffect } from "react";
import { accordionData } from "./data";

const FaqSection = ({ homePage }) => {
  const { loading } = useGetLoadingState();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth="lg">
          <Box mt={7} textAlign="center">
            <GradientHeading text="Frequently Asked" variant="h1" weight={700} />
            <GradientHeading text="Questions & Answers" variant="h1" weight={700} />
            {homePage && (
              <Box sx={{ pt: "30px" }}>
                <ArrowDownSection />
              </Box>
            )}
          </Box>

          <Box sx={{ position: "relative" }}>
            {homePage && (
              <Box sx={styles.iconWrapper}>
                <Image
                  src={"/images/FAQs.png"}
                  alt="service-icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", maxWidth: "345px", height: "auto" }}
                />
              </Box>
            )}
            <Box
              py={{ lg: homePage ? 7 : 13, md: homePage ? 5 : 10, xs: 6 }}
              sx={{ mx: { lg: 18, md: 10, xs: 0 } }}
            >
              <CustomAccordion data={accordionData} />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
export default FaqSection;

const styles = {
  iconWrapper: {
    pt: "5px",
    position: "absolute",
    top: 0,
    left: "-5px",
    display: { md: "block", xs: "none" },
  },
};
