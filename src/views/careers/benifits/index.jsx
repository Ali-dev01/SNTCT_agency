import GradientHeading from "@/components/GradientHeading";
import ArrowDownSection from "@/icons/ArrowDownSection";
import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { benifitsData } from "./data";
import { styles } from "./styles";

const Benifits = () => {
  const [activeBtn, setActiveBtn] = useState(1);

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
        <Grid item size={{ xs: 12, md: 4 }}>
          <Box sx={{ ...styles.cardStyle, p: "25px 20px", textAlign: "center" }}>
            {benifitsData.map((item, i) => (
              <Typography
                key={item.value}
                variant="body2"
                sx={styles.titleStyle(activeBtn, i)}
                onClick={() => {
                  setActiveBtn(item.value);
                }}
              >
                {item.title}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, md: 8 }} zIndex="1">
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
