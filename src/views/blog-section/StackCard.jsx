import { Box, Typography } from "@mui/material";
import Image from "next/image";

const StackCard = ({ card }) => {
  return (
    <Box sx={styles.stackCard}>
      <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <Image src={card.img} alt="stack" width={133} height={126} />
        <Box>
          <Typography variant="body2" mb={2} color="#00336B" fontWeight={700}>
            {card.title}
          </Typography>
          <Typography variant="caption" color="#3E5F82">
            {card.time}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default StackCard;

const styles = {
  stackCard: {
    cursor: "pointer",
    background: "#fff",
    padding: { md: "16px", xs: "12px" },
    borderRadius: "24px",
    boxShadow: "0px 2px 3px 0px #15120E17",
    boxShadow: "0px 6px 6px 0px #15120E14",
  },
};
