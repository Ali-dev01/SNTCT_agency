import GradientHeading from "@/components/GradientHeading";
import NewCustomTabs from "@/components/NewCustomTabs";
import ArrowDownSection from "@/icons/ArrowDownSection";
import { Box, Grid2 as Grid, Typography } from "@mui/material";
import Image from "next/image";
import { tabsArray, tabsData } from "./data";

const HiringProcess = () => {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <GradientHeading
          text="Our Hiring Process"
          variant="h2"
          weight={700}
          sx={{ pb: "20px" }}
        />
        <Box pb={2}>
          <ArrowDownSection />
        </Box>
      </Box>

      <NewCustomTabs tabsArray={tabsArray}>
        {tabsData.map((item, i) => (
          <Box mt={2} key={i} sx={styles.tabCard}>
            <Grid container spacing={{ xs: 6, md: 12 }}>
              <Grid item size={{ md: 6, xs: 12 }}>
                <Image src={item.letter} alt="W" width={item.width} height={102} />
                <GradientHeading
                  text={item.title}
                  variant="h2"
                  weight={700}
                  sx={{ mt: "-30px" }}
                />
                <Typography variant="body2" mt={2.5} color="#00336B" lineHeight="27px">
                  {item.desc}
                </Typography>
              </Grid>
              <Grid
                item
                size={{ md: 6, xs: 12 }}
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <Image
                  src={item.image}
                  alt="go"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", maxWidth: item.maxWidth, height: "auto" }}
                />
              </Grid>
            </Grid>
          </Box>
        ))}
      </NewCustomTabs>
    </>
  );
};
export default HiringProcess;

const styles = {
  tabCard: {
    background: "#fff",
    padding: { xs: "40px 30px", sm: "55px 50px" },
    borderRadius: "44px",
  },
};
