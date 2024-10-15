"use client";

import BlogCard from "@/components/BlogCard";
import GradientHeading from "@/components/GradientHeading";
import { Box, Container, Grid2 as Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

import Loader from "@/components/custom-loader/Loader";
import useGetLoadingState from "@/hooks/useGetLoadingState";
import StackCard from "./StackCard";
import { blogsData, stackData } from "./data";

const BlogSection = () => {
  const { loading } = useGetLoadingState();
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth="lg">
          <Box mt={7} textAlign="center">
            <GradientHeading
              text="Up To Date With The Latest"
              variant="h1"
              weight={700}
            />
            <GradientHeading text="News And Technology." variant="h1" weight={700} />
          </Box>

          <Box mt={15}>
            <Grid container spacing={3}>
              <Grid item size={{ md: 7.5, xs: 12 }}>
                <Image
                  src="/images/blog/blog-main.webp"
                  alt="blog"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ maxWidth: "716px", width: "100%", height: "auto" }}
                />
                <Box sx={{ width: { md: "85%", xs: "100%" } }}>
                  <Typography
                    sx={{ color: "#3E5F82", fontWeight: 700, pt: "24px", pb: "16px" }}
                  >
                    13 Sep 2024 <b>• 5 min read</b>
                  </Typography>
                  <GradientHeading
                    text={`What's New In SNTCT 2.10?`}
                    variant="h5"
                    weight={700}
                  />
                  <Typography sx={{ color: "#00336B", pt: "10px" }}>
                    We are excited to announce the release of zCart version 2.11.0, packed
                    with new features, enhancements...
                  </Typography>
                </Box>
              </Grid>
              <Grid item size={{ md: 4.5, xs: 12 }}>
                <Stack
                  gap={{ md: 2, xs: "9px" }}
                  flexWrap="wrap"
                  direction={{ md: "column", xs: "row" }}
                >
                  {stackData.map((item, i) => (
                    <Box key={i} mb={stackData.length - 1 ? 0 : 2}>
                      <StackCard card={item} />
                    </Box>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box my={15}>
            <Grid container rowSpacing={{ md: 5, xs: 6 }} columnSpacing={2}>
              {blogsData.map((item, i) => (
                <Grid key={i} item size={{ md: 6, xs: 12 }}>
                  <BlogCard blog={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      )}
    </>
  );
};
export default BlogSection;
