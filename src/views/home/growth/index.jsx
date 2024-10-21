import NewCustomTabs from "@/components/CustomTabs";
import GradientHeading from "@/components/GradientHeading";
import ArrowDownSection from "@/icons/ArrowDownSection";
import CommunityIcon from "@/icons/CommunityIcon";
import ContentIcon from "@/icons/ContentIcon";
import DecisionIcon from "@/icons/DecisionIcon";
import IntegrationIcon from "@/icons/IntegrationIcon";
import MarketingIcon from "@/icons/MarketingIcon";
import theme from "@/theme";
import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import Image from "next/image";
import { tabsData } from "./data";

const tabsArray = [
  { icon: <DecisionIcon />, title: "Decision Making" },
  { icon: <ContentIcon />, title: "Content Creation" },
  { icon: <CommunityIcon />, title: "Community Cultivation" },
  { icon: <MarketingIcon />, title: "Marketing Campaigns" },
  { icon: <IntegrationIcon />, title: "Integration" },
];

export default function Growth() {
  return (
    <Box sx={styles.mainBg}>
      <Container maxWidth="lg" sx={{ pt: { md: "80px", xs: "40px" } }}>
        <Box sx={{ textAlign: "center", py: { md: "40px", xs: "20px" } }}>
          <GradientHeading
            text="Strategies for Sustainable Growth"
            variant="h2"
            weight={700}
            sx={styles.heading}
          />
          <Typography variant="body1" sx={styles.bodyText}>
            At our digital marketing agency, we offer a range of services to
            <br /> help businesses grow and succeed online.
          </Typography>
          <Box>
            <ArrowDownSection />
          </Box>
        </Box>
        <Box>
          <NewCustomTabs tabsArray={tabsArray}>
            {tabsData.map((item) => (
              <Box mt={2} key={item.letter} sx={styles.tabCard}>
                <Grid container spacing={{ xs: 6, md: 12 }}>
                  <Grid item size={{ md: 6, xs: 12 }}>
                    <Image src={item.letter} alt="W" width={item.width} height={102} />
                    <GradientHeading
                      text={item.title}
                      variant="h2"
                      weight={700}
                      sx={{ mt: "-30px" }}
                    />
                    <Typography
                      variant="body2"
                      mt={2.5}
                      color="#00336B"
                      lineHeight="27px"
                    >
                      {item.desc}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    size={{ md: 6, xs: 12 }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt="go"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{
                        width: "100%",
                        maxWidth: item.maxWidth,
                        maxHeight: item.maxHeight,
                        height: "auto",
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            ))}
          </NewCustomTabs>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  mainBg: {
    backgroundImage: "url(/images/be-part-bg.png)",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "left",
    backgroundPositionY: "top",
    backgroundSize: "contain",
  },
  heading: {
    lineHeight: "52.2px",
    pb: "20px",
  },
  bodyText: {
    color: theme.palette.primary.dark,
    lineHeight: "30px",
    pb: "30px",
  },
  tabCard: {
    background: "#fff",
    padding: { xs: "40px 30px", sm: "55px 50px" },
    borderRadius: "44px",
  },
};
