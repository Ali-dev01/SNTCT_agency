"use client";

import Loader from "@/components/custom-loader/Loader";
import useGetLoadingState from "@/hooks/useGetLoadingState";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import Banner from "./banner";
import Benifits from "./benifits";
import HiringProcess from "./hiring-process";
import OpenPositions from "./open-positions";
import WhyJoinUs from "./why-join-us";

const CareerSection = () => {
  const { loading } = useGetLoadingState();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Image
            src="/images/about/right-bg-chip.webp"
            alt="chip"
            width={375}
            height={920}
            style={styles.rightChip}
          />
          <Image
            src="/images/careers/left-bg-chip.webp"
            alt="chip"
            width={375}
            height={920}
            style={styles.leftChip}
          />
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
            <Box my={{ xs: 10, md: 15 }} position="relative">
              <OpenPositions />
            </Box>
          </Container>
        </>
      )}
    </>
  );
};
export default CareerSection;

const styles = {
  rightChip: {
    position: "absolute",
    top: "425%",
    right: "0",
  },
  leftChip: {
    zIndex: "-1",
    position: "absolute",
    top: "6%",
    left: "0",
  },
};
