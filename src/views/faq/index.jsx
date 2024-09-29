"use client";

import { Box, Container } from "@mui/material";
import GradientHeading from "@/components/GradientHeading";

import { accordionData } from "./data";
import CustomAccordion from "@/components/CustomAccordion";

const FaqSection = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={7} textAlign="center">
        <GradientHeading text="Frequently Asked" variant="h1" weight={700} />
        <GradientHeading text="Questions & Answers" variant="h1" weight={700} />
      </Box>

      <Box my={{ lg: 13, md: 10, xs: 6 }} sx={{ mx: { lg: 16, md: 10, xs: 0 } }}>
        <CustomAccordion data={accordionData} />
      </Box>
    </Container>
  );
};
export default FaqSection;
