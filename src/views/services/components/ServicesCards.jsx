import { Box, Typography } from "@mui/material";
import Image from "next/image";

const ServicesCards = ({ card }) => {
  return (
    <>
      <Box sx={styles.cardStyle}>
        <Image src={card.icon} alt="icon" width={110} height={110} />
        <Typography variant="h5" color="#00336B" mt={-3} mb={1.5}>
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
  cardStyle: {
    textAlign: "center",
    height: "313px",
    background: "#fff",
    borderRadius: "40px",
    padding: "30px 18px",
    boxShadow: "0px 17px 17px 0px #00000008",
  },
};
