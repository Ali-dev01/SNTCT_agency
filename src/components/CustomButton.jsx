import ArrowUp from "@/icons/ArrowUp";
import { Box, Button } from "@mui/material";

const CustomButton = () => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        sx={styles.buttonStyle}
        endIcon={
          <Box sx={styles.iconStyle}>
            <ArrowUp />
          </Box>
        }
      >
        Book a Meeting
      </Button>
    </>
  );
};
export default CustomButton;

const styles = {
  buttonStyle: (theme) => ({
    p: "10px 24px",
    pr: "14px",
    boxShadow: "none",
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
    textTransform: "none",
    borderRadius: "35px",
    transition: "background 0.4s ease, transform 0.2s ease", // Smooth transition
    "&:hover": {
      background: theme.palette.gradient.main, // Full gradient on hover
      boxShadow: "none",
    },
  }),
  iconStyle: (theme) => ({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    background: theme.palette.common.white,
    width:"34px",
    height:"34px",
    borderRadius:"100%",
    marginLeft:"20px"
  }),
};
