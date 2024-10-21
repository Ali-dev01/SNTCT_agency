import { Box, Typography } from "@mui/material";

const ServicesCards = ({ card, height }) => {
  return (
    <>
      <Box sx={styles.cardStyle(height)}>
        <Box display="flex" justifyContent="center">
          <Box sx={styles.iconStyle}>{card.icon}</Box>
        </Box>
        <Typography variant="h5" color="#00336B" mt={2} mb={1.5}>
          {card.title}
        </Typography>
        <Typography variant="caption" color="#3E5F82" fontWeight={500}>
          {card.desc}
        </Typography>
      </Box>
    </>
  );
};
export default ServicesCards;

const styles = {
  cardStyle: (height) => ({
    textAlign: "center",
    height: height,
    background: "#fff",
    borderRadius: "40px",
    padding: "30px 18px",
    boxShadow: "0px 17px 17px 0px #00000008",
  }),
  iconStyle: {
    background: "#E6F2FF",
    width: "76px",
    height: "76px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    boxShadow: "0px 6px 4px 0px #15120E0A",
  },
};
