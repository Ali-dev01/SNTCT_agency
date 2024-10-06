import { Box, Typography } from "@mui/material";
import Image from "next/image";

const DetailCard = ({ card }) => {
  return (
    <Box sx={styles.cardStyle}>
      <Box textAlign="center">
        <Image
          src={card.image}
          alt="person"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", maxWidth: "180px", height: "auto" }}
        />
        <Typography variant="h4" mt={2} mb={1} color="#00336B">
          {card.name}
        </Typography>
        <Typography variant="caption" fontWeight={500} color="#3E5F82">
          {card.role}
        </Typography>
        <Box mt={2.5}>
          <Typography variant="caption" color="#00336B">
            {card.desc}
          </Typography>
        </Box>
        <Box mt={2} sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {card.socialLinks.map((link, i) => (
            <Box key={i} sx={styles.iconStyle}>
              {link.icon}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default DetailCard;

const styles = {
  cardStyle: {
    zIndex: "1",
    background: "#fff",
    borderRadius: "24px",
    padding: { md: "40px 40px", xs: "30px 20px" },
    pb: "30px",
    boxShadow: "0px 17px 17px 0px #00000008",
    boxShadow: "0px 39px 23px 0px #00000005",
  },
  iconStyle: {
    cursor: "pointer",
    width: "80px",
    height: "56px",
    background: "transparent",
    border: "1px solid #D6E2F5",
    borderRadius: "8px",
    padding: "16px",
    transition: "all 0.5s ease",
    "&:hover": {
      background: "#DEEAF6",
    },
  },
};
