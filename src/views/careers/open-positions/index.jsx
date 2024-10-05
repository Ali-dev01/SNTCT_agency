import CustomButton from "@/components/CustomButton";
import GradientHeading from "@/components/GradientHeading";
import ArrowDownSection from "@/icons/ArrowDownSection";
import ClockIcon from "@/icons/careers-page/ClockIcon";
import LocationIcon from "@/icons/careers-page/LocationIcon";
import SidebarLogo from "@/icons/SidebarLogo";
import { Box, Button, Grid2 as Grid, Typography } from "@mui/material";

const OpenPositions = () => {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <GradientHeading
          text="Open Positions"
          variant="h2"
          weight={700}
          sx={{ pb: "20px" }}
        />
        <Typography
          variant="body1"
          color="#00336B"
          sx={{ mx: "auto", width: { xs: "100%", md: "80%", lg: "50%" } }}
        >
          If you can not see any position below then do not worry we are always looking
          for good talent, please email us at:
        </Typography>
        <Typography variant="body1" color="#00336B">
          career@sntct.com.
        </Typography>
        <Box mt={3}>
          <ArrowDownSection />
        </Box>
      </Box>

      <Box mt={3}>
        <Grid container spacing={4}>
          {[1, 2, 3].map((card) => (
            <Grid key={card} item size={{ xs: 12, sm: 6, md: 4 }}>
              <Box sx={styles.cardStyle}>
                <Box sx={{ display: "flex", gap: "20px" }}>
                  <Box sx={styles.logoStyle}>
                    <SidebarLogo />
                  </Box>
                  <Typography variant="h5" color="#3E5F82" mt={3.5}>
                    UI/UX Designer
                  </Typography>
                </Box>
                <Box mt={3} sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <Button sx={styles.btnStyle} startIcon={<ClockIcon />}>
                    Full-time
                  </Button>
                  <Button sx={styles.btnStyle} startIcon={<LocationIcon />}>
                    Karachi
                  </Button>
                </Box>
                <Box mt={3}>
                  <CustomButton text="Apply Now" variant="outlined" showIcon />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default OpenPositions;

const styles = {
  logoStyle: (theme) => ({
    display: "flex",
    background: theme.palette.primary.light,
    padding: "13px 19px",
    borderRadius: "12px",
    boxShadow: "0px 6px 4px 0px #15120E0A",
  }),
  cardStyle: {
    background: "#fff",
    borderRadius: "30px",
    padding: "30px 25px",
    boxShadow: "0px 17px 17px 0px #00000008",
    boxShadow: "0px 39px 23px 0px #00000005",
  },
  btnStyle: {
    background: "#ECF3FB",
    borderRadius: "45px",
    boxShadow: "none",
    padding: "8px 17px",
    color: "#00336B",
    textTransform: "none",
    fontWeight: 400,
    fontSize: "16px",
  },
};