import { Button } from "@mui/material";

const CustomButton = () => {
  return (
    <>
      <Button variant="contained" color="primary" sx={styles.buttonStyle}>
        Book a Meeting
      </Button>
    </>
  );
};
export default CustomButton;

const styles = {
  buttonStyle: (theme) => ({
    py: "16px",
    px: "24px",
    boxShadow: "none",
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
    textTransform: "none",
    borderRadius: "32px",
    transition: "background 0.4s ease, transform 0.2s ease", // Smooth transition
    "&:hover": {
      background: theme.palette.gradient.main, // Full gradient on hover
      boxShadow: "none",
    },
  }),
};
