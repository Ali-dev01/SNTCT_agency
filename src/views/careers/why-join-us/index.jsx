import GradientHeading from "@/components/GradientHeading";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

const WhyJoinUs = () => {
  return (
    <>
      <Grid container spacing={8.5}>
        <Grid item size={{ md: 6, xs: 12 }}>
          <Image
            src="/images/careers/Union.webp"
            alt="go"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", maxWidth: "535px", height: "auto" }}
          />
        </Grid>
        <Grid item size={{ md: 6, xs: 12 }}>
          <Image src="/images/careers/W.webp" alt="W" width={161} height={102} />
          <GradientHeading
            text="Why join Sntct? "
            variant="h2"
            weight={700}
            sx={{ mt: "-30px" }}
          />
          <Typography variant="body2" mt={2.5} color="#00336B" lineHeight="27px">
            At Sntct, we believe that true innovation happens when passionate people come
            together to create something extraordinary. <br /> Here, you are not just
            joining a team; you are becoming part of a family that celebrates creativity,
            supports growth, and values every voice. Together, we are not just building
            brands we are shaping the future, one idea at a time.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default WhyJoinUs;
