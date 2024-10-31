import GradientHeading from "@/components/GradientHeading";
import ArrowDownSection from "@/icons/ArrowDownSection";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { testimonials } from "./data";
import { styles } from "./styles";

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const isMobile = useMediaQuery("(max-width:600px)");
  const smalldevice = useMediaQuery("(max-width:400px)");

  const getVisibleIndexes = () => {
    const totalItems = testimonials.length;
    if (isMobile) {
      return [activeIndex]; // On mobile, only show the active card
    }
    const previousIndex = (activeIndex - 1 + totalItems) % totalItems;
    const nextIndex = (activeIndex + 1) % totalItems;
    return [previousIndex, activeIndex, nextIndex]; // Show the previous, current, and next cards
  };

  const visibleIndexes = getVisibleIndexes();

  // Swipe handler for changing active card
  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () =>
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    trackMouse: true,
  });

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(slideInterval); // Clean up the interval on component unmount
  }, [testimonials.length, 2000]);

  return (
    <Box sx={styles.mainBg} {...handlers}>
      <Box
        sx={{
          textAlign: "center",
          pt: { md: "40px", xs: "20px" },
          pb: { md: "60px", xs: "40px" },
        }}
      >
        <GradientHeading
          text="Hear from Those"
          variant="h2"
          weight={700}
          sx={styles.heading}
        />
        <GradientHeading
          text="Who Trusted Us"
          variant="h2"
          weight={700}
          sx={styles.heading}
        />
        <Typography variant="body1" sx={styles.bodyText}>
          Our client’s success speaks for itself. Discover how we’ve helped
          <br />
          businesses like yours grow, thrive, and achieve their goals.
        </Typography>
        <Box>
          <ArrowDownSection />
        </Box>
      </Box>
      <Container maxWidth="lg">
        <Box position="relative">
          <Box sx={styles.cardsContainer}>
            {visibleIndexes.map((itemIndex, displayIndex) => {
              const item = testimonials[itemIndex];
              const isCenter = displayIndex === 1 || isMobile;
              const isLeft = displayIndex === 0;
              const isRight = displayIndex === 2;

              return (
                <Box
                  key={itemIndex}
                  sx={styles.cardWrapper(isCenter, isLeft, isRight, smalldevice)}
                >
                  <Card sx={styles.card}>
                    <CardContent sx={styles.cardContent}>
                      <Avatar src={item.avatar} alt={item.name} sx={styles.avatar} />
                      <Typography sx={styles.testimonialText}>{item.content}</Typography>
                      <Typography sx={styles.name}>{item.name}</Typography>
                      <Typography sx={styles.role}>{item.role}</Typography>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Box>
          <Box sx={styles.dotsContainer}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                component="button"
                onClick={() => setActiveIndex(index)}
                sx={styles.dot(index === activeIndex)}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
