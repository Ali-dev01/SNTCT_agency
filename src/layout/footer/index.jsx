"use client";

import InputIcon from "@/icons/InputIcon";
import { Box, Container, InputAdornment, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { keyframes } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

import { aboutOutLinks, socialLinks, usefullLinks } from "./data";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  };

  return (
    <Box position="relative" minHeight="590px">
      <Box sx={styles.scrollTop} onClick={handleScrollToTop}>
        <Image
          src="/images/footer/line-arrow-up.png"
          alt="footer"
          width={48}
          height={115}
        />
      </Box>
      <Container maxWidth="lg">
        <Image
          src="/images/footer/footer-img.png"
          alt="footer"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <Box sx={styles.footerContent}>
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <Typography variant="h5" color="#3E5F82">
                  Newsletter
                </Typography>
                <Typography mt={3.5} fontSize="14px" color="#00336B">
                  Stay Updated, No Hassle, Just SNTCT’s Best!
                </Typography>
                <Box mt={2} sx={styles.inputStyles}>
                  <TextField
                    fullWidth
                    placeholder="Email here"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <InputIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box mt={6} sx={{ display: "flex", gap: "24px" }}>
                  {socialLinks.map((item, i) => (
                    <Link target="_blank" href={item.link} key={i}>
                      <Box sx={styles.iconStyle}>{item.icon}</Box>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              size={{ xs: 12, sm: 6, md: 4 }}
              display="flex"
              sx={{ justifyContent: { sm: "center", xs: "start" } }}
            >
              <Box>
                <Typography variant="h5" color="#3E5F82" mb={3.5}>
                  What We Do
                </Typography>
                {aboutOutLinks.map((item, i) => (
                  <Box key={i} mb={3.5}>
                    <Link href={item.link}>
                      <Typography variant="body2" color="#00336B">
                        {item.title}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid
              item
              size={{ xs: 12, sm: 6, md: 4 }}
              display="flex"
              sx={{ justifyContent: { md: "center", xs: "start" } }}
            >
              <Box>
                <Typography variant="h5" color="#3E5F82" mb={3.5}>
                  Usefull Links
                </Typography>
                {usefullLinks.map((item, i) => (
                  <Box key={i} mb={3.5}>
                    <Link href={item.link}>
                      <Typography variant="body2" color="#00336B">
                        {item.title}
                      </Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 6,
              display: "flex",
              gap: "12px",
              justifyContent: "space-between",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="#3E5F82">
              © SNTCT 2024. All Rights Reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Link href="/terms-and-conditions">
                <Typography variant="caption" color="#00336B">
                  Terms of Services
                </Typography>
              </Link>
              <span style={{ color: "#C7D7E9" }}>|</span>
              <Link href="/privacy-policy">
                <Typography variant="caption" color="#00336B">
                  Privacy Policy
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const styles = {
  footerContent: {
    mt: { md: "-65px", sm: "-30px", xs: "-5px" },
    pb: 4,
  },
  scrollTop: {
    cursor: "pointer",
    position: "absolute",
    right: { md: "60px", sm: "40px", xs: "30px" },
    top: { md: "210px", sm: "470px", xs: "660px" },
    animation: `${bounce} 2s infinite`,
  },
  inputStyles: (theme) => ({
    "& .MuiFormControl-root": {
      background: theme.palette.common.white,
      border: `1px solid ${theme.palette.primary.main}`,
      padding: "0px 10px",
      borderRadius: "40px",
      boxShadow: "0px 6px 21.3px 0px #A8D2FFA1",
    },
    "& .MuiInputBase-root": {
      paddingRight: "0",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  }),
  iconStyle: (theme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    background: theme.palette.common.white,
    transition: "0.6s",
    borderRadius: "100%",
    "&:hover": {
      background: "#C7D7E9",
      transform: "scale(1.2)",
    },
  }),
};
