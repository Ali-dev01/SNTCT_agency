import ArrowUp from "@/icons/ArrowUp";
import DarkArrowUp from "@/icons/DarkArrowUp";
import { Box, Button } from "@mui/material";

const CustomButton = (props) => {
  const { text, variant, showIcon, fullWidth, onClick } = props;

  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={(theme) => ({
        ...styles.buttonBase(showIcon), // Base styles for all buttons
        ...(variant === "contained" && styles.containedButton(theme)),
        ...(variant === "outlined" && styles.outlinedButton(theme)),
      })}
      endIcon={
        showIcon && (
          <Box
            sx={(theme) => ({
              ...styles.iconBase,
              ...(variant === "contained" && styles.containedIcon(theme)),
              ...(variant === "outlined" && styles.outlinedIcon(theme)),
            })}
          >
            {variant === "contained" ? <ArrowUp /> : <DarkArrowUp />}
          </Box>
        )
      }
    >
      {text}
    </Button>
  );
};

export default CustomButton;

const styles = {
  buttonBase: (showIcon) => ({
    p: { xs: "7px 16px", md: "10px 24px" },
    pr: showIcon ? "14px !important" : "24px",
    boxShadow: "none",
    textTransform: "none",
    borderRadius: "35px",
    fontSize: { xs: "16px", md: "18px" },
    fontWeight: { xs: 600, md: 700 },
    transition: "background 1s ease, transform 0.6s ease",
  }),

  containedButton: (theme) => ({
    position: "relative",
    background: "#3395ff",
    transition: "color 0.4s ease",
    zIndex: "1",
    overflow: "hidden",
    "&::before": {
      content: `""`,
      position: "absolute",
      top: 0,
      left: 0,
      width: 0,
      height: "100%",
      background:
        "linear-gradient(90deg, rgba(24,56,199,1) 0%, rgba(25,57,200,1) 1%, rgba(10,157,227,1) 100%)",
      zIndex: "-1",
      transition: "width 0.4s ease",
    },
    "&:hover": {
      boxShadow: "none",
      "& .MuiBox-root": {
        transform: "rotate(45deg)",
      },
    },
    "&:hover::before": {
      width: "100%",
    },
  }),

  outlinedButton: (theme) => ({
    background: "transparent",
    color: theme.palette.secondary.dark,
    border: `1.5px solid ${theme.palette.secondary.dark}`,
    "&:hover": {
      background: "#DEEAF6",
      boxShadow: "none",
      "& .MuiBox-root": {
        transform: "rotate(45deg)",
      },
    },
  }),

  iconBase: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s ease",
    width: "34px",
    height: "34px",
    borderRadius: "100%",
    marginLeft: "20px",
  },

  containedIcon: (theme) => ({
    background: theme.palette.common.white,
  }),

  outlinedIcon: (theme) => ({
    background: "transparent",
    border: `1.5px solid ${theme.palette.secondary.dark}`,
  }),
};
