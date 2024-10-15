"use client";

import AnimatedLogos from "@/components/AnimatedLogos";
import GradientHeading from "@/components/GradientHeading";
import Loader from "@/components/custom-loader/Loader";
import useGetLoadingState from "@/hooks/useGetLoadingState";
import ArrowDownSection from "@/icons/ArrowDownSection";
import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import Image from "next/image";
import DetailCard from "./DetailCard";
import { cardData } from "./data";

const AboutSection = () => {
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
            src="/images/about/left-bg-chip.webp"
            alt="chip"
            width={375}
            height={920}
            style={styles.leftChip}
          />
          <Box mt={7} textAlign="center">
            <Container maxWidth="lg">
              <GradientHeading text="At SNTCT, People Come" variant="h1" weight={700} />
              <GradientHeading
                text="First, and Success Follows"
                variant="h1"
                weight={700}
              />
              <Box mt={2} sx={{ mx: { lg: 16, md: 10, xs: 0 } }}>
                <Typography variant="body1" color="#00336B">
                  Let us do all tech-savvy dirty works for you so that you can only do
                  what you love and grow. We are a team of experts always be there as a
                  partner.
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box mt={15}>
            <Container maxWidth="lg">
              <Grid container spacing={5}>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Image src="/images/about/W.webp" alt="W" width={154} height={102} />
                  <GradientHeading
                    text="Who We Are?"
                    variant="h2"
                    weight={700}
                    sx={{ mt: "-30px" }}
                  />
                  <Typography variant="body2" mt={2.5} color="#00336B" lineHeight="27px">
                    Though our 100+ full-time team members, contractors, part-timers, and
                    interns defy generalization, it’s safe to say we’re people who
                    question assumptions and approach every challenge with humility.{" "}
                    <br /> We believe a collective vision gets built one person and one
                    conversation at a time—that only by combining our talents and passions
                    into one cooperative whole can we uncover the truest truths, sharpest
                    insights, and boldest strategies.
                  </Typography>
                </Grid>
                <Grid
                  item
                  size={{ xs: 12, md: 6 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Image
                    src="/images/about/about-info.webp"
                    alt="banner"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", maxWidth: "712px", height: "auto" }}
                  />
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box mt={12}>
            <Container maxWidth="lg">
              <Box sx={{ textAlign: "center" }}>
                <GradientHeading
                  text="Partnerships we’ve built"
                  variant="h2"
                  weight={700}
                />
                <Box mt={2.5}>
                  <ArrowDownSection />
                </Box>
                <Box sx={{ mt: "42px" }}>
                  <AnimatedLogos />
                </Box>
              </Box>
            </Container>
          </Box>

          <Box mt={15}>
            <Container maxWidth="lg">
              <Box sx={{ textAlign: "center" }}>
                <GradientHeading
                  text="Strategies for Sustainable Growth"
                  variant="h2"
                  weight={700}
                />
                <Typography variant="body1" color="#00336B" sx={styles.headingStyle}>
                  At our digital marketing agency, we offer a range of services to help
                  businesses grow and succeed online.
                </Typography>
                <Box mt={2.5}>
                  <ArrowDownSection />
                </Box>
              </Box>

              <Box mt={5} mb={15}>
                <Grid container spacing={4}>
                  {cardData.map((card, i) => (
                    <Grid key={i} item size={{ xs: 12, sm: 6, md: 4 }}>
                      <DetailCard card={card} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </Box>
        </>
      )}
    </>
  );
};
export default AboutSection;

const styles = {
  headingStyle: {
    mt: 2.5,
    mx: "auto",
    width: { lg: "60%", md: "40%", xs: "100%" },
  },
  rightChip: {
    position: "absolute",
    top: "80%",
    right: "0",
  },
  leftChip: {
    zIndex: "-1",
    position: "absolute",
    top: "340%",
    left: "0",
  },
};
