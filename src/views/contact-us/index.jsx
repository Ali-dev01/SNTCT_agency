import GradientHeading from "@/components/GradientHeading";
import Grid from "@mui/material/Grid2";
import { Box, Container, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={7} textAlign="center">
        <GradientHeading text="Reach out to" variant="h1" weight={700} />
        <GradientHeading text="SNTCT" variant="h1" weight={700} />
        <Box mt={2} sx={{ mx: { lg: 24, md: 10, xs: 0 } }}>
          <Typography variant="body1" color="#00336B">
            We have flexible project models for organizations of all sizes. Tell us about
            your goals and we’ll tell you how we can help.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ my: { lg: 15, md: 12, xs: 8 } }}>
        <Grid container spacing={3}>
          <Grid item size={{ xs: 12, lg: 3 }}>
            info
          </Grid>
          <Grid item size={{ xs: 12, lg: 9 }}>
            Form
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Contact;
