import GradientHeading from "@/components/GradientHeading";
import { Box, Typography } from "@mui/material";

const MainHeading = ({ heading, desc }) => {
  return (
    <>
      <GradientHeading text={heading} variant="h1" weight={700} />
      <Box mt={2} sx={{ mx: { lg: 14, md: 10, xs: 0 } }}>
        <Typography variant="body1" color="#00336B">
          {desc}
        </Typography>
      </Box>
    </>
  );
};
export default MainHeading;
