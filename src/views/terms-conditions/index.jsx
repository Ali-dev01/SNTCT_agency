import GradientHeading from "@/components/GradientHeading";
import { Box, Container, Typography } from "@mui/material";
import { termsConditionsData } from "./data";

const TermsConditions = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={7} textAlign="center">
        <GradientHeading text="Terms and Conditions" variant="h1" weight={700} />
        <Box mt={2} sx={{ mx: { lg: 16, md: 10, xs: 0 } }}>
          <Typography variant="body1" color="#00336B">
            Welcome to SNTCT. We are dedicated to providing you with exceptional digital
            services, tailored to elevate your brand in the digital world. Our Terms and
            Conditions outline the guidelines and legal agreements for using our website
            and services. By accessing SNTCT’s website and utilizing our services, you
            agree to be bound by these terms, ensuring a transparent and trustworthy
            partnership. Please read them carefully.
          </Typography>
        </Box>
      </Box>

      <Box my={{ lg: 13, md: 10, xs: 6 }}>
        {termsConditionsData.map((tc, i) => (
          <Box key={i} mb={5.5}>
            <Typography variant="h3" color="#3E5F82" fontWeight={700}>
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
  );
};
export default TermsConditions;
