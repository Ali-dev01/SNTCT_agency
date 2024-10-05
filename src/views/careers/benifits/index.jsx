import GradientHeading from "@/components/GradientHeading";
import ArrowDownSection from "@/icons/ArrowDownSection";
import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { benifitsData } from "./data";

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
        <Grid item size={{ xs: 12, md: 8 }}>
          <Box sx={{ ...styles.cardStyle, p: "40px", textAlign: "center" }}>
            <Typography variant="h1" sx={styles.letterStyle}>
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

const styles = {
  cardStyle: {
    background: "#fff",
    borderRadius: "40px",
    boxShadow: "0px 17px 17px 0px #00000008",
  },
  titleStyle: (active, index) => ({
    position: "relative",
    cursor: "pointer",
    background:
      index + 1 === active
        ? "linear-gradient(to right, #1938C8 0%, #0B9FE4 100%)"
        : "none",
    WebkitBackgroundClip: index + 1 === active ? "text" : "none",
    WebkitTextFillColor: index + 1 === active ? "transparent" : "#3E5F82",
    color: index + 1 !== active ? "#3E5F82" : "inherit", // Fallback color when not active
    fontWeight: 700,
    mb: index === benifitsData.length - 1 ? 0 : 1,
    p: "18px 16px",
    borderRadius: "40px",
    zIndex: 1,

    // Pseudo-element for gradient border
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "inherit", // Inherit border-radius from parent
      padding: "2px", // border width
      background:
        index + 1 === active ? "linear-gradient(to right, #1938C8, #0B9FE4)" : "none",
      "-webkit-mask": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: "destination-out",
      WebkitMaskComposite: "destination-out",
      zIndex: -1, // Ensure the pseudo-element is behind the text content
    },
  }),

  letterStyle: {
    fontSize: "200px !important",
    fontWeight: 700,
    color: "#3395FF",
  },
};
