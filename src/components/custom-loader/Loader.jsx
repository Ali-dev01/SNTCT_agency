import { Box } from "@mui/material";
import "./loader.css";

const Loader = () => {
  return (
    <Box className="container">
      <Box className="loader">
        <Box className="crystal"></Box>
        <Box className="crystal"></Box>
        <Box className="crystal"></Box>
        <Box className="crystal"></Box>
        <Box className="crystal"></Box>
        <Box className="crystal"></Box>
      </Box>
    </Box>
  );
};
export default Loader;
