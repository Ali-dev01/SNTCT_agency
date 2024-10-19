import GradientHeading from '@/components/GradientHeading';
import ArrowDownSection from '@/icons/ArrowDownSection';
import theme from '@/theme';
import { Avatar, Box, Card, CardContent, Container, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const styles = {
  mainBg: {
    mt: { md: "80px", xs: "40px" },
    backgroundImage: 'url(/images/trusted-users-bg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  },
  heading: {
    lineHeight: "52.2px",
  },
  bodyText: {
    color: theme.palette.primary.dark,
    lineHeight: "30px",
    pt: "20px",
    pb: "30px",
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Enable stacking
    height: '384px',
  },
  cardWrapper: (isCenter, isLeft, isRight, smalldevice) => ({
    width: { sm: 384, xs: smalldevice ? 280 : 350 },
    transition: 'transform 500ms ease-in-out, opacity 500ms ease-in-out', // Smooth transition
    zIndex: isCenter ? 20 : (isLeft || isRight) ? 15 : 10,
    opacity: isCenter ? 1 : 0.5,
    position: 'absolute', // For overlapping cards
    transform: isCenter
      ? 'translateX(0) scale(1.1)'
      : isLeft
        ? 'translateX(-90%) scale(0.9)'
        : 'translateX(90%) scale(0.9)', // Move inactive cards to left/right
  }),
  card: {
    textAlign: 'center',
    bgcolor: 'white',
    borderRadius: '24px',
    height: 384,
    boxShadow: "0px 17px 17px 0px #00000008,0px 39px 23px 0px #00000005",
  },
  cardContent: {
    pt: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    mx: 'auto',
    mb: 2,
  },
  testimonialText: {
    color: theme.palette.primary.dark,
    mb: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
  },
  name: {
    fontWeight: 600,
    fontSize: '1.125rem',
    color: theme.palette.secondary.dark,
  },
  role: {
    color: theme.palette.secondary.dark,
    fontSize: '0.875rem',
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    mt: '65px',
    gap: 1,
  },
  dot: (isActive) => ({
    width: isActive ? 16 : 8,
    height: 8,
    borderRadius: 4,
    bgcolor: isActive ? theme.palette.primary.main : '#B6D9FF',
    transition: 'all 500ms',
    p: 0,
    border: 'none',
    cursor: 'pointer',
  }),
};

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const isMobile = useMediaQuery('(max-width:600px)');
  const smalldevice = useMediaQuery('(max-width:400px)');

  const testimonials = [
    {
      name: "Peter",
      role: "CEO, Sadapay",
      content: "SNTCT is one of the most powerful multi-vendor script available on CodeCanyon. Support Team behavior is excellent and impressive.",
      avatar: "/images/user-1.png",
    },
    {
      name: "Christopher",
      role: "CEO, Stripe",
      content: "SNTCT is one of the most powerful multi-vendor script available on CodeCanyon. Support Team behavior is excellent and impressive. Good Luck :-3 Guuys! You deserve much respect. :-)",
      avatar: "/images/user-1.png",
    },
    {
      name: "Jake",
      role: "CEO, Paypal",
      content: "SNTCT is one of the most powerful multi-vendor script available on CodeCanyon. Support Team behavior is excellent and impressive.",
      avatar: "/images/user-1.png",
    },
  ];

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
    onSwipedRight: () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    trackMouse: true,
  });

  return (
    <Box sx={styles.mainBg} {...handlers}>
      <Box sx={{ textAlign: "center", pt: { md: "40px", xs: "20px" }, pb: { md: "60px", xs: "40px" } }}>
        <GradientHeading text="Hear from Those" variant="h2" weight={700} sx={styles.heading} />
        <GradientHeading text="Who Trusted Us" variant="h2" weight={700} sx={styles.heading} />
        <Typography variant="body1" sx={styles.bodyText}>
          Our client’s success speaks for itself. Discover how we’ve helped<br />
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
                <Box key={itemIndex} sx={styles.cardWrapper(isCenter, isLeft, isRight, smalldevice)}>
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