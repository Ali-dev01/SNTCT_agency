import { keyframes } from "@emotion/react";

const moveBackground = keyframes`
  0% {
    background-position: -220px 0;
  }
  50% {
    background-position: 50px 0;
  }
  100% {
    background-position: -220px 0;
  }
`;

export const styles = {
  cardStyle: {
    background: "#fff",
    borderRadius: "40px",
    boxShadow: "0px 17px 17px 0px #00000008",
    overflow: "hidden",
    "&:hover $letterStyle": {
      animation: `${moveBackground} 4s ease-in-out infinite`,
    },
    "& .MuiTabs-indicator": {
      width: "100%",
      background: "transparent",
      borderRadius: "30px",
      border: "1px solid transparent",
      backgroundImage:
        "linear-gradient(white, white), linear-gradient(to right, #1938C8, #0B9FE4)",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
    },
    "& .MuiButtonBase-root": {
      fontWeight: 700,
      p: "18px 16px",
      fontSize: "16px",
      my: "6px",
      color: "#3E5F82",
      zIndex: 1,
    },
    "& .Mui-selected": {
      background: "linear-gradient(to right, #1938C8 0%, #0B9FE4 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  },

  letterStyle: (img) => ({
    fontSize: "250px !important",
    fontWeight: 700,
    color: "rgba(0, 100, 196, 0.6)",
    marginTop: "-70px",
    backgroundImage: `url("/images/careers/${img}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    "&:hover": {
      animation: `${moveBackground} 4s ease-in-out infinite`,
    },
  }),
};
