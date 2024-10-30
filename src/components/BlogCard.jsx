import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import GradientHeading from "./GradientHeading";

export default function BlogCard({ blog }) {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          borderRadius: "40px",
          overflow: "hidden",
        }}
      >
        <Image
          src={blog.img}
          height={0}
          width={0}
          alt="blog-img"
          sizes="100vw"
          style={{ width: "100%", height: "auto", borderRadius: "40px" }}
        />
        {blog.overlay && <Box sx={styles.overlay} />}
      </Box>

      <Typography sx={{ color: "#3E5F82", fontWeight: 700, pt: "24px", pb: "16px" }}>
        {blog.timeSpan}
      </Typography>
      <Link href={blog.link}>
        <GradientHeading text={blog.title} variant="h5" weight={700} />
      </Link>
      <Typography sx={{ color: "#00336B", pt: "10px" }}>{blog.desc}</Typography>
    </>
  );
}

const styles = {
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "98.5%",
    background:
      "linear-gradient(266deg, rgba(123, 211, 248, 0.4) 0%, rgba(77, 124, 194, 0.4) 100%)",
    borderRadius: "40px",
  },
};
