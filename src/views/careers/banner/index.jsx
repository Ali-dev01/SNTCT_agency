import GradientHeading from "@/components/GradientHeading";
import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <>
      <GradientHeading text="We Always Have" variant="h1" weight={700} />
      <GradientHeading text="Room For Talent" variant="h1" weight={700} />
      <Box mt={2} mx={"auto"} sx={{ width: { lg: "60%", md: "70%", xs: "100%" } }}>
        <Typography variant="body1" color="#00336B">
          {`We feel like we’ve got a lot to offer – like remote work, incredible benefits,
          and the most talented people we’ve ever met – but ultimately you’ll know best if
          we’re a good fit for you.`}
        </Typography>
      </Box>
    </>
  );
};
export default Banner;
