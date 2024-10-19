"use client";

import Loader from "@/components/custom-loader/Loader";
import GradientHeading from "@/components/GradientHeading";
import useGetLoadingState from "@/hooks/useGetLoadingState";
import ArrowDownSection from "@/icons/ArrowDownSection";
import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import CustomBanner from "../../../components/CustomBanner";
import LeftGridSection from "../components/LeftGridSection";
import MainHeading from "../components/MainHeading";
import RightGridSection from "../components/RightGridSection";
import VerticalTabs from "../components/VerticalTabs";
import { processData } from "./data";

const AdsSection = () => {
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
              heading="Maximize Your ROI with Sntct’s Expert Google Ads Management"
              desc="Stop wasting money on ads that don’t convert. Let us help you create campaigns that actually work"
            />
          </Box>

          <Box mt={15}>
            <RightGridSection
              img="/images/services/google-ads/ads-img1.webp"
              title="What is Google Ads?"
              maxWidth="510px"
              desc="Google Ads: Your Business’s Digital Billboard
            Imagine your business having a billboard on the busiest highway of the internet. Google Ads is exactly that—a way to get your products and services seen by the right people at the right time. But instead of just any driver, you’re targeting those who are already looking for what you offer."
            />
          </Box>

          <Box mt={15}>
            <LeftGridSection
              img="/images/services/google-ads/ads-img2.webp"
              title="Why Google Ads?"
              maxWidth="357px"
              desc="Struggling to Reach the Right Customers? If you’ve ever felt like your marketing efforts are falling flat, you’re not alone. Many businesses struggle to reach the right audience online. With Google Ads, we help you zero in on potential customers who are actively searching for what you offer, ensuring your marketing dollars aren’t wasted."
            />
          </Box>

          <Box mt={15}>
            <RightGridSection
              img="/images/services/about-info.webp"
              title="Why Choose Sntct?"
              maxWidth="712px"
              desc="Why Partner with Us? At Sntct, we understand that every dollar counts. That’s why we treat your business like it’s our own. With years of experience and a team dedicated to your success, you can trust us to deliver the results you need."
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
                title="Ready to See Real Results?"
                desc="Don’t waste another dollar on ads that don’t work. Contact us today, and let’s start building a campaign that drives real growth for your business. "
              />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
export default AdsSection;
