"use client";

import Link from "next/link";
import Grid from "@mui/material/Grid2";
import GradientHeading from "@/components/GradientHeading";
import { Box, Container, MenuItem, Select, Typography } from "@mui/material";
import { InputLabel, TextField } from "@mui/material";

import { contactInfo } from "./data";
import CustomButton from "@/components/CustomButton";

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={7} textAlign="center">
        <GradientHeading text="Reach out to" variant="h1" weight={700} />
        <GradientHeading text="SNTCT" variant="h1" weight={700} />
        <Box mt={2} sx={{ mx: { lg: 24, md: 10, xs: 0 } }}>
          <Typography variant="body1" color="#00336B">
            We have flexible project models for organizations of all sizes. Tell us about
            your goals and we’ll tell you how we can help.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ my: { lg: 15, md: 12, xs: 8 } }}>
        <Grid container spacing={3}>
          <Grid item size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "column" },
                gap: 3.5,
                flexWrap: "wrap",
              }}
            >
              {contactInfo.map((data) => (
                <Box>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Box sx={styles.iconStyle}>{data.icon}</Box>
                    <Typography variant="h5" color="#3E5F82" fontWeight={700}>
                      {data.title}
                    </Typography>
                  </Box>
                  <Typography mt={3.2} mb={1.8} variant="body2" color="#00336B">
                    {data.desc}
                  </Typography>
                  <Link
                    href={data.link}
                    style={{
                      color: "#3395FF",
                      fontWeight: 500,
                      textDecoration: "underline",
                    }}
                  >
                    {data.linkTitle}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, md: 9 }}>
            <Box sx={styles.cardStyle}>
              <Grid container spacing={5}>
                <Grid item size={{ xs: 12, lg: 6 }}>
                  <Box mb={3} width="100%">
                    <InputLabel sx={styles.labelStyle}>Full Name</InputLabel>
                    <TextField
                      sx={styles.inputStyle}
                      variant="outlined"
                      fullWidth
                      placeholder="Your name"
                    />
                  </Box>
                  <Box mb={3} width="100%">
                    <InputLabel sx={styles.labelStyle}>Email</InputLabel>
                    <TextField
                      sx={styles.inputStyle}
                      variant="outlined"
                      fullWidth
                      placeholder="Your email"
                    />
                  </Box>
                  <Box width="100%">
                    <InputLabel sx={styles.labelStyle}>Service</InputLabel>
                    <Select
                      fullWidth
                      labelId="demo-simple-select-label"
                      sx={styles.selectStyle}
                      id="demo-simple-select"
                      displayEmpty
                      defaultValue=""
                    >
                      <MenuItem value="" disabled>
                        Select a service
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                    </Select>
                  </Box>
                </Grid>
                <Grid item size={{ xs: 12, lg: 6 }}>
                  <Box width="100%">
                    <InputLabel sx={styles.labelStyle}>Have an idea?</InputLabel>
                    <TextField
                      variant="outlined"
                      multiline
                      sx={{ "& .MuiInputBase-root": { borderRadius: "6px" } }}
                      rows={7}
                      fullWidth
                      placeholder="Write what you want... "
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box textAlign="center" mt={4}>
                <CustomButton text="Submit Now" variant="contained" showIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Contact;

const styles = {
  iconStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "56px",
    height: "56px",
    background: "#C7D7E9",
    borderRadius: "100%",
  },
  cardStyle: {
    background: "#fff",
    borderRadius: "24px",
    px: "24px",
    py: "74px",
  },
  labelStyle: {
    color: "#00336B",
    fontSize: "16px",
    fontWeight: 500,
    mb: "2px",
  },
  inputStyle: {
    "& .MuiInputBase-root": {
      height: "48px",
      borderRadius: "6px",
    },
  },
  selectStyle: {
    "&.MuiInputBase-root": {
      height: "48px",
      borderRadius: "6px",
    },
  },
};