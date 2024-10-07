"use client";

import GradientHeading from "@/components/GradientHeading";
import { Box, Container } from "@mui/material";

import CustomAccordion from "@/components/CustomAccordion";
import ArrowDownSection from "@/icons/ArrowDownSection";
import Image from "next/image";
import { accordionData } from "./data";

const FaqSection = ({ homePage }) => {
  return (
    <Container maxWidth="lg">
      <Box mt={7} textAlign="center">
        <GradientHeading text="Frequently Asked" variant="h1" weight={700} />
        <GradientHeading text="Questions & Answers" variant="h1" weight={700} />
        {homePage && <Box sx={{ pt: '30px' }}><ArrowDownSection /></Box>}
      </Box>

      <Box sx={{ position: 'relative' }}>
        {homePage && <Box sx={styles.iconWrapper}>
          <Image
            src={'/images/FAQs.png'}
            alt="service-icon"
            width={365}
            height={102}
          />
        </Box>}
        <Box py={{ lg: homePage ? 7 : 13, md: homePage ? 5 : 10, xs: homePage ? 5 : 6 }} sx={{ mx: { lg: 16, md: 10, xs: 0 } }}>
          <CustomAccordion data={accordionData} />
        </Box>
      </Box>
    </Container>
  );
};
export default FaqSection;

const styles = {
  iconWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
  },
}