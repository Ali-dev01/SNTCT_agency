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

const SEOSection = () => {
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
              heading="Struggling to Get Found Online? We Can Help"
              desc="Don’t let your business be lost in the noise. With our SEO expertise, we’ll put you right where your customers are looking."
            />
          </Box>

          <Box mt={15}>
            <RightGridSection
              img="/images/services/seo/seo-img1.webp"
              title="What is SEO?"
              maxWidth="454px"
              desc="SEO: The Key to Unlocking Your Online Visibility Imagine having a store on a busy street, but no one can see your sign. SEO is like putting up a bright, eye-catching sign that leads customers straight to your door. It’s about making sure your website appears when people search for products or services like yours."
            />
          </Box>

          <Box mt={15}>
            <LeftGridSection
              img="/images/services/seo/seo-img2.webp"
              title="Why SEO Matters"
              maxWidth="444px"
              desc="Are You Invisible to Your Potential Customers? Many businesses struggle with being buried on page 10 of Google search results. Without proper SEO, you’re missing out on valuable traffic and potential customers. We’re here to change that, ensuring your business is seen by those who are actively searching for what you offer."
            />
          </Box>

          <Box mt={15}>
            <Box textAlign="center">
              <GradientHeading
                text="Our SEO Services"
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
              title="Why Choose Sntct for SEO?"
              maxWidth="712px"
              desc="At Sntct, we understand the frustration of being invisible online. Our team of SEO experts is dedicated to making sure your business gets the attention it deserves. With a proven track record of helping businesses like yours rank higher and grow faster, we’re the partner you can trust to deliver real results."
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
                title="Ready to Be Found?"
                desc="Don’t let your competitors take all the attention. Contact us today, and let’s start building a stronger online presence for your business."
              />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
export default SEOSection;
