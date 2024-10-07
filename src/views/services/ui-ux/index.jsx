"use client";

import GradientHeading from "@/components/GradientHeading";
import ArrowDownSection from "@/icons/ArrowDownSection";
import { Box, Container, Grid2 as Grid } from "@mui/material";
import CustomBanner from "../../../components/CustomBanner";
import LeftGridSection from "../components/LeftGridSection";
import MainHeading from "../components/MainHeading";
import RightGridSection from "../components/RightGridSection";
import ServicesCards from "../components/ServicesCards";
import VerticalTabs from "../components/VerticalTabs";
import { cardsData, processData } from "./data";

const UiUxSection = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box mt={7} textAlign="center">
          <MainHeading
            heading="Designing Digital Experiences That Feel Effortless"
            desc="We don’t just design for looks – we design for connection. Our UI/UX design services make sure every interaction your users have with your brand is simple, smooth, and meaningful."
          />
        </Box>

        <Box mt={15}>
          <RightGridSection
            img="/images/services/ui-design/ui-img1.png"
            title="What is UI/UX Design?"
            maxWidth="443px"
            desc="UI (User Interface) is how your website or app looks, while UX (User Experience) is how it feels to use. Together, they create an experience that leaves your audience satisfied and engaged. Good UI/UX design is all about making things easy, enjoyable, and intuitive for your users."
          />
        </Box>

        <Box mt={15}>
          <LeftGridSection
            img="/images/services/ui-design/ui-img2.png"
            title="Why Does UI/UX Design Matter?"
            maxWidth="398px"
            desc="Imagine visiting a website that’s hard to navigate or an app that’s confusing – frustrating, right? Great UI/UX design fixes that. It keeps users engaged, encourages them to stay longer, and helps them find exactly what they need without frustration. When your design works for your users, it works for your business."
          />
        </Box>

        <Box mt={15}>
          <Box textAlign="center">
            <GradientHeading
              text="Our UI/UX Design Services"
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
            img="/images/services/about-info.png"
            title="Why Choose Sntct for UI/UX Design?"
            maxWidth="712px"
            desc="At Sntct, we don’t just design for looks – we design for how it makes people feel. We put ourselves in your users’ shoes, understanding their needs and frustrations, and crafting experiences that make things easier and more enjoyable. Our goal is simple: to create digital spaces that your users love to come back to."
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
              title="Ready to Bring Your Vision to Life?"
              desc="Let’s start creating designs that captivate your audience and elevate your brand. Contact us today to get started."
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default UiUxSection;
