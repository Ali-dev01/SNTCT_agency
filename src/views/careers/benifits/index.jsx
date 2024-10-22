import GradientHeading from "@/components/GradientHeading";
import ArrowDownSection from "@/icons/ArrowDownSection";
import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { benifitsData } from "./data";
import { styles } from "./styles";

const Benifits = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  const handleChange = (event, newValue) => {
    setActiveBtn(newValue);
  };

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <GradientHeading
          text="Benefits built around you"
          variant="h2"
          weight={700}
          sx={{ pb: "20px" }}
        />
        <Box pb={4}>
          <ArrowDownSection />
        </Box>
      </Box>

      <Grid container spacing={4}>
        <Grid item size={{ md: 4, xs: 12 }}>
          <Box
            sx={{
              ...styles.cardStyle,
              p: "25px 20px",
            }}
          >
            <Tabs
              value={activeBtn}
              onChange={handleChange}
              orientation="vertical"
              aria-label="basic tabs example"
            >
              {benifitsData.map((item, i) => (
                <Tab
                  key={item.value}
                  disableRipple
                  label={item.title}
                  value={item.value}
                />
              ))}
            </Tabs>
          </Box>
        </Grid>
        <Grid item size={{ md: 8, xs: 12 }}>
          <Box sx={{ ...styles.cardStyle, p: "40px", textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={styles.letterStyle(benifitsData[activeBtn - 1].img)}
            >
              {benifitsData[activeBtn - 1].letter}
            </Typography>
            <Divider />
            <Typography variant="body2" color="#00336B" mt={2}>
              {benifitsData[activeBtn - 1].desc}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Benifits;
