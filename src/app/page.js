"use client";

import CustomButton from "@/components/CustomButton";
import GradientHeading from "@/components/GradientHeading";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ m: 5 }}>
      <Typography variant="h2">Explore Our Top Services</Typography>
      <Box sx={styles.boxStyle}></Box>
      <Box mt={3}>
        <CustomButton />
        <GradientHeading
          text="Strategies for Sustainable Growth"
          variant="h2"
          weight={700}
        />
      </Box>
    </Box>
  );
};
export default Home;

const styles = {
  boxStyle: (theme) => ({
    mt: 2,
    width: "90px",
    height: "90px",
    background: theme.palette.gradient.main,
  }),
};
