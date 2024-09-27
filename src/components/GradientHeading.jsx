import { Typography } from "@mui/material";

const GradientHeading = (props) => {
  const { text, variant, weight, sx } = props;
  return (
    <Typography
      variant={variant}
      fontWeight={weight}
      sx={{ ...styles.headingStyle, ...sx }}
    >
      {text}
    </Typography>
  );
};
export default GradientHeading;

const styles = {
  headingStyle: {
    background: "linear-gradient(to right, #1938C8 0%, #0B9FE4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};
