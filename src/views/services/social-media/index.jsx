"use client";

import Loader from "@/components/custom-loader/Loader";
import GradientHeading from "@/components/GradientHeading";
import useGetLoadingState from "@/hooks/useGetLoadingState";
import ArrowDownSection from "@/icons/ArrowDownSection";
import { Box, Container, Grid2 as Grid } from "@mui/material";
import CustomBanner from "../../../components/CustomBanner";
import LeftGridSection from "../components/LeftGridSection";
import MainHeading from "../components/MainHeading";
import RightGridSection from "../components/RightGridSection";
import ServicesCards from "../components/ServicesCards";
import VerticalTabs from "../components/VerticalTabs";
import { cardsData, processData } from "./data";

const SocialMedia = () => {
  const { loading } = useGetLoadingState();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth="lg">
          <Box mt={7} textAlign="center">
            <MainHeading
              heading="Struggling to Make Your Brand Heard Online? We’ve Got You Covered"
              desc="Turn your social media from a mystery into your most powerful marketing tool with our expert guidance"
            />
          </Box>

          <Box mt={15}>
            <RightGridSection
              img="/images/services/social-media/social-media1.webp"
              title="What is Social Media Marketing?"
              maxWidth="454px"
              desc="Social Media Marketing: The Modern Word-of-Mouth
            Think of social media marketing as the digital version of word-of-mouth. It’s about building a community around your brand, where your customers become your biggest advocates. We help you tell your story where your audience is already spending their time—on platforms like Facebook, Instagram, Twitter, and more."
            />
          </Box>

          <Box mt={15}>
            <LeftGridSection
              img="/images/services/social-media/social-media2.webp"
              title="Why Social Media Marketing Matters?"
              maxWidth="430px"
              desc="Many businesses struggle to make an impact on social media. It can feel overwhelming to keep up with trends, create content, and engage with followers. We’re here to change that. Our tailored strategies ensure your brand not only gets noticed but builds lasting connections with your audience."
            />
          </Box>

          <Box mt={15}>
            <Box textAlign="center">
              <GradientHeading
                text="Benefits built around you"
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
              title="Why Trust Us with Your Social Media?"
              maxWidth="712px"
              desc="At Sntct, we understand that social media isn’t just about posting—it’s about building relationships. With our team of experts, we take the guesswork out of social media marketing, delivering strategies that drive engagement, increase brand loyalty, and ultimately grow your business."
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
                title="Ready to Make Your Brand Stand Out?"
                desc="Contact us today to take the first step towards social media success. Let’s start building a community around your brand."
              />
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};
export default SocialMedia;
