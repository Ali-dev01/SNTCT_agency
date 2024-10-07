import BlogCard from "@/components/BlogCard";
import GradientHeading from "@/components/GradientHeading";
import ArrowDownSection from "@/icons/ArrowDownSection";
import { Box, Container } from "@mui/material";


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
                <Box sx={{ pt: '30px' }}>
                    <ArrowDownSection />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                {["/images/blog1.png", "/images/blog2.png"].map((item, index) => <BlogCard key={index} imgSrc={item} />)}
            </Box>
        </Container>
    )
}


const styles = {
    heading: {
        lineHeight: "52.2px",
    },
};
