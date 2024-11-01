"use client";

import Loader from "@/components/custom-loader/Loader";
import GradientHeading from "@/components/GradientHeading";
import useGetLoadingState from "@/hooks/useGetLoadingState";
import ArrowDownSection from "@/icons/ArrowDownSection";
import { Box, Container, Grid2 as Grid } from "@mui/material";
import { useEffect } from "react";
import CustomBanner from "../../../components/CustomBanner";
import LeftGridSection from "../components/LeftGridSection";
import MainHeading from "../components/MainHeading";
import RightGridSection from "../components/RightGridSection";
import ServicesCards from "../components/ServicesCards";
import VerticalTabs from "../components/VerticalTabs";
import { cardsData, processData } from "./data";

const GraphicsDesign = () => {
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
            <MainHeading
              heading="Bring Your Ideas to Life with Beautiful Designs"
              desc="From logos to stunning visuals, we create designs that speak to your audience and make your brand unforgettable. Let’s work together to create something you’ll love."
            />
          </Box>

          <Box mt={15}>
            <RightGridSection
              img="/images/services/graphics/graphics-img1.webp"
              title="What is Graphic Design?"
              maxWidth="423px"
              desc="Graphic design isn’t just about pretty pictures—it’s about creating visuals that tell your brand’s story. Whether it’s your logo, website, or marketing materials, great design builds trust and grabs attention. We make sure your brand stands out."
            />
          </Box>

          <Box mt={15}>
            <LeftGridSection
              img="/images/services/graphics/graphics-img2.webp"
              title="Why Does Good Design Matter?"
              maxWidth="434px"
              desc="A poorly designed logo or confusing website can drive customers away before you even have a chance to engage them. Inconsistent branding leads to a lack of trust and recognition. We’re here to change that, helping you create visuals that are not only beautiful but also impactful, ensuring your business leaves a lasting mark."
            />
          </Box>

          <Box mt={15}>
            <Box textAlign="center">
              <GradientHeading
                text="Design Services That Make You Stand Out"
                variant="h2"
                weight={700}
                sx={{ pb: "20px" }}
              />
              <Box pb={4}>
                <ArrowDownSection />
              </Box>
            </Box>
            <Grid container spacing={3}>
              {cardsData.map((card, i) => (
                <Grid key={i} item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                  <ServicesCards card={card} height="313px" />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box mt={15}>
            <RightGridSection
              img="/images/services/about-info.webp"
              title="Why Choose Sntct for Graphic Design?"
              maxWidth="712px"
              desc="Why Trust Us with Your Brand’s Visual Identity?
            At Sntct, we know that great design isn’t just about aesthetics—it’s about communicating the essence of your brand. With our design expertise and dedication to crafting visuals that resonate, we’re committed to making your business stand out from the competition."
            />
          </Box>

          <Box mt={15}>
            <Box textAlign="center">
              <GradientHeading
                text="Our Process"
                variant="h2"
                weight={700}
                sx={{ pb: "20px" }}
              />
              <Box pb={4}>
                <ArrowDownSection />
              </Box>
            </Box>
            <Box mt={5}>
              <VerticalTabs data={processData} />
            </Box>

            <Box my={15}>
              <CustomBanner
                title={
                  <>
                    Ready to Bring Your <br /> Vision to Life?
                  </>
                }
                link="/contact-us"
                desc="Let’s start creating designs that captivate your audience and elevate your brand. Contact us today to get started."
              />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
export default GraphicsDesign;
