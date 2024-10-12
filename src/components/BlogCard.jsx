import { Box, Typography } from "@mui/material";
import Image from "next/image";
import GradientHeading from "./GradientHeading";

export default function BlogCard({ blog }) {
  return (
    <Box>
      <Image
        src={blog.img}
        height={0}
        width={0}
        alt="blog-img"
        sizes="100vw"
        style={{ maxWidth: "560px", width: "100%", height: "auto" }}
      />
      <Typography sx={{ color: "#3E5F82", fontWeight: 700, pt: "24px", pb: "16px" }}>
        {blog.timeSpan}
      </Typography>
      <GradientHeading text={blog.title} variant="h5" weight={700} />
      <Typography sx={{ color: "#00336B", pt: "10px" }}>{blog.desc}</Typography>
    </Box>
  );
}
