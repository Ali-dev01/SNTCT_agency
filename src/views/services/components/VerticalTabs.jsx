import { Box, Divider, Grid2 as Grid, keyframes, Typography } from "@mui/material";
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

  return (
    <Grid container spacing={4}>
      <Grid item size={{ xs: 12, md: 4 }}>
        <Box sx={{ ...styles.cardStyle, p: "35px 20px", textAlign: "center" }}>
          {data.map((item, i) => (
            <Typography
              key={item.value}
              variant="body2"
              sx={styles.titleStyle(activeBtn, data, i)}
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
  },
  titleStyle: (active, data, index) => ({
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
    mb: index === data.length - 1 ? 0 : 2,
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
      webkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      maskComposite: "destination-out",
      WebkitMaskComposite: "destination-out",
      zIndex: -1, // Ensure the pseudo-element is behind the text content
    },
  }),

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
