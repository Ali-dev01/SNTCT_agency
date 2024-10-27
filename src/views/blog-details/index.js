"use client";

import BlogCard from "@/components/BlogCard";
import Loader from "@/components/custom-loader/Loader";
import GradientHeading from "@/components/GradientHeading";
import useGetLoadingState from "@/hooks/useGetLoadingState";
import { Box, Container, Grid2 as Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { blogsDetail, relatedBlogs, socialLinks } from "./data";
import StatusBar from "./StatusBar";

const BlogDetails = () => {
  const { title } = useParams();
  const { loading } = useGetLoadingState();

  const blog = blogsDetail.find((item) => item.title === title);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth="lg">
          <Box sx={styles.blogHeading}>
            <Box sx={{ display: "flex", gap: { md: "60px", xs: "20px" } }}>
              <Box sx={styles.iconWraper}>
                <Stack gap={2}>
                  {socialLinks.map((icon, i) => (
                    <Link key={i} href={icon.link}>
                      {icon.icon}
                    </Link>
                  ))}
                </Stack>
              </Box>
              <Box>
                <GradientHeading text={blog.heading} variant="h1" weight={700} />
                <Box
                  mt={{ md: 3, xs: 1.5 }}
                  sx={{ display: "flex", gap: "16px", alignItems: "center" }}
                >
                  <Image src={blog.author.img} alt="author" width={50} height={50} />
                  <Stack gap={0.3}>
                    <Typography variant="body1" color="#00336B" fontWeight={700}>
                      {blog.author.name}
                    </Typography>
                    <Typography color="#3E5F82" fontSize="14px">
                      {blog.author.timeStamp}
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={styles.blogDetails}>
            <Image
              src={blog.mainImg}
              alt="main"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <Box mt="24px">
              <StatusBar />
            </Box>
            <Box mt="40px">
              {blog.blogDetails.map((detail, i) => (
                <Box key={i} mt="40px">
                  <Typography variant="h3" color="#00336B" fontWeight={700}>
                    {detail.title}
                  </Typography>
                  <Typography variant="body1" color="#00336B" mt="16px" mb="30px">
                    {detail.desc}
                  </Typography>
                  {detail.img && (
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        borderRadius: "40px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={detail.img}
                        alt="blog-img"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto", borderRadius: "40px" }}
                      />
                      {(blog.title !== "graphics-designing" ||
                        detail.title === "Introduction") && <Box sx={styles.overlay} />}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
            <Box mt="40px">
              <StatusBar />
            </Box>
          </Box>

          <Box my={15}>
            <Typography color="#00336B" mb="40px" fontWeight={700} fontSize="36px">
              Suggested for You
            </Typography>
            <Grid container rowSpacing={{ md: 5, xs: 6 }} columnSpacing={2}>
              {relatedBlogs.map((item, i) => (
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
export default BlogDetails;

const styles = {
  blogHeading: {
    mt: "74px",
    ml: { md: 10, xs: 0 },
    mr: { md: 20, xs: 0 },
  },
  iconWraper: {
    background: "#fff",
    height: "240px",
    borderRadius: "8px",
    padding: "16px 12px",
    pb: "8px",
    boxShadow: "0px 17px 17px 0px #00000008",
  },
  blogDetails: {
    mx: { md: 20, xs: 0 },
    mt: "40px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 100, 150, 0.4)", // Light blue with 50% opacity
    borderRadius: "40px",
  },
};
