import GradientHeading from "@/components/GradientHeading";
import { Box, Typography } from "@mui/material";

const MainHeading = ({ heading, desc }) => {
  return (
    <>
      <Box sx={{ mx: { lg: 10, md: 6, xs: 0 } }}>
        <GradientHeading text={heading} variant="h1" weight={700} />
      </Box>
      <Box mt={2} sx={{ mx: { lg: 10, md: 6, xs: 0 } }}>
        <Typography variant="body1" color="#00336B">
          {desc}
        </Typography>
      </Box>
    </>
  );
};
export default MainHeading;
