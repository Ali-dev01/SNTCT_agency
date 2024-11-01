"use client";

import GradientHeading from "@/components/GradientHeading";
import {
  Autocomplete,
  Box,
  Container,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

import Loader from "@/components/custom-loader/Loader";
import CustomButton from "@/components/CustomButton";
import useGetLoadingState from "@/hooks/useGetLoadingState";
import { useState } from "react";
import { contactInfo, options } from "./data";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [error, setError] = useState({ name: "", email: "", phoneNo: "" });

  const { loading } = useGetLoadingState();

  const calendlyUrl = `https://calendly.com/sntct-info/30min?hide_gdpr_banner=1&hide_event_type_details=1&primary_color=006edc&text_color=000000&name=${encodeURIComponent(
    name
  )}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(phoneNo)}`;

  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    const newErrors = {};

    if (name.trim().length < 3) {
      newErrors.name = "Minimum 3 characters required";
    }
    if (phoneNo.trim().length < 8) {
      newErrors.phoneNo = "Minimum 8 numbers required";
    }
    if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    // Set errors if any exist
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      // Clear errors and open Calendly URL if no validation issues
      setError({});
      window.open(calendlyUrl, "_blank");
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container maxWidth="lg">
          <Box mt={7} textAlign="center">
            <GradientHeading text="Reach out to" variant="h1" weight={700} />
            <GradientHeading text="SNTCT" variant="h1" weight={700} />
            <Box mt={2} sx={{ mx: { lg: 24, md: 10, xs: 0 } }}>
              <Typography variant="body1" color="#00336B">
                We have flexible project models for organizations of all sizes. Tell us
                about your goals and we’ll tell you how we can help.
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
                  {contactInfo.map((data, i) => (
                    <Box key={i}>
                      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <Box sx={styles.iconStyle}>{data.icon}</Box>
                        <Typography variant="h5" color="#3E5F82" fontWeight={700}>
                          {data.title}
                        </Typography>
                      </Box>
                      <Typography mt={3.2} mb={1.8} variant="body2" color="#00336B">
                        {data.desc}
                      </Typography>
                      {data.linkTitle && (
                        <Link
                          href={data.link}
                          target={data.title === "Email" ? "_blank" : "_self"}
                          style={{
                            color: "#3395FF",
                            fontWeight: 500,
                            fontFamily: "roboto",
                            textDecoration: "underline",
                          }}
                        >
                          {data.linkTitle}
                        </Link>
                      )}
                    </Box>
                  ))}
                </Box>
              </Grid>
              <Grid item size={{ xs: 12, md: 9 }}>
                <Box sx={styles.cardStyle}>
                  <Grid container spacing={5}>
                    <Grid item size={{ xs: 12, lg: 6 }}>
                      <Box mb={2} width="100%">
                        <InputLabel sx={styles.labelStyle}>Full Name</InputLabel>
                        <TextField
                          sx={styles.inputStyle}
                          variant="outlined"
                          fullWidth
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => {
                            setError({ ...error, name: "" });
                            setName(e.target.value);
                          }}
                        />
                        {error.name && (
                          <Typography fontSize="12px" color="#ff3333">
                            {error.name}
                          </Typography>
                        )}
                      </Box>
                      <Box mb={2} width="100%">
                        <InputLabel sx={styles.labelStyle}>Contact Number</InputLabel>
                        <TextField
                          sx={styles.inputStyle}
                          variant="outlined"
                          fullWidth
                          type="number"
                          placeholder="Your phone no"
                          value={phoneNo}
                          onChange={(e) => {
                            setError({ ...error, phoneNo: "" });
                            setPhoneNo(e.target.value);
                          }}
                        />
                        {error.phoneNo && (
                          <Typography fontSize="12px" color="#ff3333">
                            {error.phoneNo}
                          </Typography>
                        )}
                      </Box>
                      <Box mb={2} width="100%">
                        <InputLabel sx={styles.labelStyle}>Email</InputLabel>
                        <TextField
                          sx={styles.inputStyle}
                          variant="outlined"
                          fullWidth
                          placeholder="Your email"
                          value={email}
                          onChange={(e) => {
                            setError({ ...name, email: "" });
                            setEmail(e.target.value);
                          }}
                        />
                        {error.email && (
                          <Typography fontSize="12px" color="#ff3333">
                            {error.email}
                          </Typography>
                        )}
                      </Box>
                      <Box width="100%">
                        <InputLabel sx={styles.labelStyle}>Service</InputLabel>
                        <Autocomplete
                          id="multiple-limit-tags"
                          options={options}
                          getOptionLabel={(option) => option.label}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              sx={styles.inputStyle}
                              size="small"
                              placeholder="Select a service"
                            />
                          )}
                        />
                      </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, lg: 6 }}>
                      <Box width="100%">
                        <InputLabel sx={styles.labelStyle}>Have an idea?</InputLabel>
                        <TextField
                          variant="outlined"
                          multiline
                          sx={{ "& .MuiInputBase-root": { borderRadius: "6px" } }}
                          rows={9}
                          fullWidth
                          placeholder="Write what you want... "
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Box textAlign="center" mt={4}>
                    <CustomButton
                      text="Submit Now"
                      variant="contained"
                      showIcon
                      onClick={handleSubmit}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </>
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
      height: "43px",
      color: "#00336B",
      borderRadius: "6px",
      fontFamily: "roboto",
    },
  },
  selectStyle: {
    "&.MuiInputBase-root": {
      height: "48px",
      borderRadius: "6px",
    },
  },
};
