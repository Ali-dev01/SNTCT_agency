"use client";

import { Box, Container } from "@mui/material";
import Banner from "./banner";
import Benifits from "./benifits";
import HiringProcess from "./hiring-process";
import OpenPositions from "./open-positions";
import WhyJoinUs from "./why-join-us";

const CareerSection = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={7} textAlign="center">
        <Banner />
      </Box>
      <Box mt={{ xs: 10, md: 15 }}>
        <WhyJoinUs />
      </Box>
      <Box mt={{ xs: 10, md: 15 }}>
        <Benifits />
      </Box>
      <Box mt={{ xs: 10, md: 15 }}>
        <HiringProcess />
      </Box>
      <Box my={{ xs: 10, md: 15 }}>
        <OpenPositions />
      </Box>
    </Container>
  );
};
export default CareerSection;
