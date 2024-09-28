import ArrowUp from "@/icons/ArrowUp";
import DarkArrowUp from "@/icons/DarkArrowUp";
import { Box, Button } from "@mui/material";

const CustomButton = (props) => {
  const { text, variant, showIcon } = props;

  return (
    <Button
      variant={variant}
      sx={(theme) => ({
        ...styles.buttonBase(showIcon), // Base styles for all buttons
        ...(variant === "contained" && styles.containedButton(theme)),
        ...(variant === "outlined" && styles.outlinedButton(theme)),
      })}
      endIcon={
        showIcon && (
          <Box
            sx={(theme) => ({
              ...styles.iconBase(theme),
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
    p: "10px 24px",
    pr: showIcon ? "14px" : "24px",
    boxShadow: "none",
    textTransform: "none",
    borderRadius: "35px",
    fontSize: "18px",
    fontWeight: 700,
    transition: "background 0.4s ease, transform 0.6s ease",
  }),

  containedButton: (theme) => ({
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
    "&:hover": {
      background: theme.palette.gradient.main,
      boxShadow: "none",
      "& .MuiBox-root": {
        transform: "rotate(45deg)",
      },
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

  iconBase: (theme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s ease",
    width: "34px",
    height: "34px",
    borderRadius: "100%",
    marginLeft: "20px",
  }),

  containedIcon: (theme) => ({
    background: theme.palette.common.white,
  }),

  outlinedIcon: (theme) => ({
    background: "transparent",
    border: `1.5px solid ${theme.palette.secondary.dark}`,
  }),
};
