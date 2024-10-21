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

const WebsiteDevelopment = () => {
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
              heading="Your Website Should Be Working for You, Not Against You"
              desc="We build fast, beautiful, and user-friendly websites that help your business grow and engage customers effortlessly."
            />
          </Box>

          <Box mt={15}>
            <RightGridSection
              img="/images/services/web-dev/web-dev1.webp"
              title="What is Web Development?"
              maxWidth="485px"
              desc="Think of web development as the foundation of your online business. From how fast your site loads to how easy it is for visitors to navigate, every element impacts how customers experience your brand. We handle the technical side, so you can focus on what matters—your business."
            />
          </Box>

          <Box mt={15}>
            <LeftGridSection
              img="/images/services/web-dev/web-dev2.webp"
              title="Why a Well-Built Website Matters?"
              maxWidth="442px"
              desc="Is Your Website Turning Away Customers? A slow or outdated website is like having a storefront that’s hard to find and unpleasant to visit. It can cause you to lose customers, frustrate users, and hurt your bottom line. At Sntct, we make sure your website is fast, easy to use, and optimized to convert visitors into loyal customers."
            />
          </Box>

          <Box mt={15}>
            <Box textAlign="center">
              <GradientHeading
                text="Our Web Development Services"
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
                  <ServicesCards card={card} height="400px" />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box mt={15}>
            <RightGridSection
              img="/images/services/about-info.webp"
              title="Why Choose Sntct for Web Development?"
              maxWidth="712px"
              desc="At Sntct, we understand that your website is more than just an online presence—it’s a crucial part of your business. With a team of experienced developers and designers, we’ve built websites for businesses of all sizes, always with a focus on creating fast, user-friendly, and impactful websites that drive results."
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
                title="Let’s Build Your Website Together"
                desc="Ready to create a website that works for your business? Contact us today for a free consultation!"
              />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
export default WebsiteDevelopment;
