import GradientHeading from "@/components/GradientHeading";
import { Grid2 as Grid, Typography } from "@mui/material";
import Image from "next/image";

const RightGridSection = ({ img, title, desc, maxWidth }) => {
  return (
    <Grid container spacing={6}>
      <Grid
        item
        size={{ md: 6, xs: 12 }}
        sx={{ display: "flex", justifyContent: { md: "start", xs: "center" } }}
      >
        <Image
          src={img}
          alt="img"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", maxWidth: maxWidth, height: "auto" }}
        />
      </Grid>
      <Grid item size={{ md: 6, xs: 12 }}>
        <Image src="/images/services/W.webp" alt="W" width={161} height={102} />
        <GradientHeading text={title} variant="h2" weight={700} sx={{ mt: "-30px" }} />
        <Typography variant="body2" mt={2.5} color="#00336B" lineHeight="27px">
          {desc}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default RightGridSection;
