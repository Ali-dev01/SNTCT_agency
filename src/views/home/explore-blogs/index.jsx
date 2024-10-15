import BlogCard from "@/components/BlogCard";
import GradientHeading from "@/components/GradientHeading";
import ArrowDownSection from "@/icons/ArrowDownSection";
import theme from "@/theme";
import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import { blogsData } from "./data";

export default function ExploreBlogs() {
  return (
    <Container maxWidth="lg" sx={{ pt: { md: "80px", xs: "40px" } }}>
      <Box sx={{ textAlign: "center", py: { md: "40px", xs: "20px" } }}>
        <GradientHeading
          text="SNTCT Activity"
          variant="h2"
          weight={700}
          sx={styles.heading}
        />
        <GradientHeading
          text="- Explore Our Latest Blog"
          variant="h2"
          weight={700}
          sx={styles.heading}
        />
        <Typography variant="body1" sx={styles.bodyText}>
          We design and develop user centered digital products,<br />
          ecommerce and Web based best solutions.
        </Typography>
        <Box sx={{ pt: "30px" }}>
          <ArrowDownSection />
        </Box>
      </Box>

      <Grid container spacing={{ md: 2, xs: 6 }}>
        {blogsData.map((item, i) => (
          <Grid key={i} item size={{ md: 6, xs: 12 }}>
            <BlogCard blog={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const styles = {
  heading: {
    lineHeight: "52.2px",
  },
  bodyText: {
    color: theme.palette.primary.dark,
    lineHeight: "30px",
    pt: '12px'
  },
};
