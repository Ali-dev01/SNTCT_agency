import {
  Box,
  Divider,
  Grid2 as Grid,
  keyframes,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";

const moveBackground = keyframes`
  0% {
    background-position: -220px 0;
  }
  50% {
    background-position: 50px 0;
  }
  100% {
    background-position: -220px 0;
  }
`;

const VerticalTabs = ({ data }) => {
  const [activeBtn, setActiveBtn] = useState(1);

  const handleChange = (event, newValue) => {
    setActiveBtn(newValue);
  };

  return (
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
            {data.map((item, i) => (
              <Tab key={item.value} disableRipple label={item.title} value={item.value} />
            ))}
          </Tabs>
        </Box>
      </Grid>
      <Grid item size={{ md: 8, xs: 12 }}>
        <Box sx={{ ...styles.cardStyle, p: "40px", textAlign: "center" }}>
          <Typography variant="h1" sx={styles.letterStyle(data[activeBtn - 1].img)}>
            {data[activeBtn - 1].letter}
          </Typography>
          <Divider />
          <Typography variant="body2" color="#00336B" mt={2}>
            {data[activeBtn - 1].desc}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default VerticalTabs;

const styles = {
  cardStyle: {
    background: "#fff",
    borderRadius: "40px",
    minHeight: "390px",
    boxShadow: "0px 17px 17px 0px #00000008",
    "& .MuiTabs-indicator": {
      width: "100%",
      background: "transparent",
      borderRadius: "30px",
      border: "1px solid transparent",
      backgroundImage:
        "linear-gradient(white, white), linear-gradient(to right, #1938C8, #0B9FE4)",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
    },
    "& .MuiButtonBase-root": {
      fontWeight: 700,
      p: "18px 16px",
      fontSize: "16px",
      my: "15px",
      color: "#3E5F82",
      zIndex: 1,
    },
    "& .Mui-selected": {
      background: "linear-gradient(to right, #1938C8 0%, #0B9FE4 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },

  letterStyle: (img) => ({
    fontSize: "250px !important",
    fontWeight: 700,
    color: "rgba(0, 100, 196, 0.6)",
    marginTop: "-70px",
    backgroundImage: `url("/images/services/${img}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    "&:hover": {
      animation: `${moveBackground} 4s ease-in-out infinite`,
    },
  }),
};
