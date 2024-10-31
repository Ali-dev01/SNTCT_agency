export const styles = {
  mainBg: {
    mt: { md: "80px", xs: "40px" },
    backgroundImage: "url(/images/trusted-users-bg.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  },
  heading: {
    lineHeight: "52.2px",
  },
  bodyText: (theme) => ({
    color: theme.palette.primary.dark,
    lineHeight: "30px",
    pt: "20px",
    pb: "30px",
  }),
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Enable stacking
    height: "384px",
  },
  cardWrapper: (isCenter, isLeft, isRight, smalldevice) => ({
    width: { sm: 384, xs: smalldevice ? 280 : 350 },
    transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out", // Smooth transition
    zIndex: isCenter ? 20 : isLeft || isRight ? 15 : 10,
    opacity: isCenter ? 1 : 0.5,
    position: "absolute", // For overlapping cards
    transform: isCenter
      ? "translateX(0) scale(1.1)"
      : isLeft
      ? "translateX(-90%) scale(0.9)"
      : "translateX(90%) scale(0.9)", // Move inactive cards to left/right
  }),
  card: {
    textAlign: "center",
    bgcolor: "white",
    borderRadius: "24px",
    height: 384,
    boxShadow: "0px 17px 17px 0px #00000008,0px 39px 23px 0px #00000005",
  },
  cardContent: {
    pt: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    mx: "auto",
    border: "4px solid #ABC2DB",
    mb: 2,
  },
  testimonialText: (theme) => ({
    color: theme.palette.primary.dark,
    mb: 2,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
  }),
  name: (theme) => ({
    fontWeight: 600,
    fontSize: "1.125rem",
    color: theme.palette.secondary.dark,
  }),
  role: (theme) => ({
    color: theme.palette.secondary.dark,
    fontSize: "0.875rem",
  }),
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    mt: "65px",
    gap: 1,
  },
  dot: (isActive) => ({
    width: isActive ? 16 : 8,
    height: 8,
    borderRadius: 4,
    bgcolor: isActive ? "#3395FF" : "#B6D9FF",
    transition: "all 500ms",
    p: 0,
    border: "none",
    cursor: "pointer",
  }),
};
