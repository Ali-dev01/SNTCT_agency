"use client";

import Loader from "@/components/custom-loader/Loader";
import GradientHeading from "@/components/GradientHeading";
import useGetLoadingState from "@/hooks/useGetLoadingState";
import { Box, Container, Typography } from "@mui/material";
import { privacyData } from "./data";

const PrivacyPolicy = () => {
  const { loading } = useGetLoadingState();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth="lg">
          <Box mt={7} textAlign="center">
            <GradientHeading text="Privacy Policy" variant="h1" weight={700} />
            <Box mt={2} sx={{ mx: { lg: 16, md: 10, xs: 0 } }}>
              <Typography variant="body1" color="#00336B">
                At Sntct, we are committed to protecting the privacy and security of our
                clients, partners, and visitors. This Privacy Policy outlines how we
                collect, use, and safeguard your personal information when you interact
                with our website and services.
              </Typography>
            </Box>
          </Box>

          <Box my={{ lg: 13, md: 10, xs: 6 }}>
            {privacyData.map((tc, i) => (
              <Box key={i} mb={5.5}>
                <Typography variant="h3" sx={styles.headingStyle}>
                  {tc.title}
                </Typography>
                {tc.descriptions.map((desc, index) => (
                  <Typography key={index} variant="body2" color="#00336B" mt={2.5}>
                    {desc}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
        </Container>
      )}
    </>
  );
};
export default PrivacyPolicy;

const styles = {
  headingStyle: {
    color: "#3E5F82",
    fontWeight: { xs: 600, md: 700 },
  },
};
