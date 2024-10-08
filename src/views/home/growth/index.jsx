import GradientHeading from "@/components/GradientHeading";
import GrowthCard from "@/components/GrowthCard";
import NewCustomTabs from "@/components/NewCustomTabs";
import ArrowDownSection from "@/icons/ArrowDownSection";
import CommunityIcon from "@/icons/CommunityIcon";
import ContentIcon from "@/icons/ContentIcon";
import DecisionIcon from "@/icons/DecisionIcon";
import IntegrationIcon from "@/icons/IntegrationIcon";
import MarketingIcon from "@/icons/MarketingIcon";
import theme from "@/theme";
import { Box, Container, Typography } from "@mui/material";

const tabsArray = [
  { icon: <DecisionIcon />, title: "Decision Making" },
  { icon: <ContentIcon />, title: "Content Creation" },
  { icon: <CommunityIcon />, title: "Community Cultivation" },
  { icon: <MarketingIcon />, title: "Marketing Campaigns" },
  { icon: <IntegrationIcon />, title: "Integration" },
];

const growthCardsData = [
  {
    iconSrc: "/images/D.png",
    title: "Data-Driven Decision Making – The Power of Analytics",
    subtitle1:
      "Let us do all tech-savvy dirty works for you so that you can only do what you love and grow. We're a team of experts always be there",
    subtitle2:
      "Let us do all tech-savvy dirty works for you so that you can only do what you",
    iconWidth: 108,
    mainImageSrc: "/images/decission-mail.png",
    mainImageWidth: "474px",
    mainImageHeight: "374px",
  },
  {
    iconSrc: "/images/E.png",
    title: "Engaging Content Creation – Captivate Your Audience",
    subtitle1:
      "Let us do all tech-savvy dirty works for you so that you can only do what you love and grow. We're a team of experts always be there",
    subtitle2:
      "Let us do all tech-savvy dirty works for you so that you can only do what you",
    iconWidth: 89,
    mainImageSrc: "/images/engagment-content.png",
    mainImageWidth: "484px",
    mainImageHeight: "225px",
  },
  {
    iconSrc: "/images/B.png",
    title: "Brand Community Cultivation – Building Loyalty",
    subtitle1:
      "Let us do all tech-savvy dirty works for you so that you can only do what you love and grow. We're a team of experts always be there",
    subtitle2:
      "Let us do all tech-savvy dirty works for you so that you can only do what you",
    iconWidth: 97,
    mainImageSrc: "/images/brand-community.png",
    mainImageWidth: "312px",
    mainImageHeight: "331px",
  },
  {
    iconSrc: "/images/C.png",
    title: "Customized Marketing Campaigns – Personalized for Impact",
    subtitle1:
      "Let us do all tech-savvy dirty works for you so that you can only do what you love and grow. We're a team of experts always be there",
    subtitle2:
      "Let us do all tech-savvy dirty works for you so that you can only do what you",
    iconWidth: 112,
    mainImageSrc: "/images/marketing-campaign.png",
    mainImageWidth: "351px",
    mainImageHeight: "378px",
  },
  {
    iconSrc: "/images/I.png",
    title: "Innovative Technological Integration – Future-Ready Solutions",
    subtitle1:
      "Let us do all tech-savvy dirty works for you so that you can only do what you love and grow. We're a team of experts always be there ",
    subtitle2:
      "Let us do all tech-savvy dirty works for you so that you can only do what you",
    iconWidth: 45,
    mainImageSrc: "/images/integration.png",
    mainImageWidth: "407px",
    mainImageHeight: "302px",
  },
];
export default function Growth() {
  return (
    <Box sx={styles.mainBg}>
      <Container maxWidth="lg" sx={{ pt: { md: "80px", xs: "40px" } }}>
        <Box sx={{ textAlign: "center", py: { md: "40px", xs: "20px" } }}>
          <GradientHeading
            text="Strategies for Sustainable Growth"
            variant="h2"
            weight={700}
            sx={styles.heading}
          />
          <Typography variant="body1" sx={styles.bodyText}>
            At our digital marketing agency, we offer a range of services to
            <br /> help businesses grow and succeed online.
          </Typography>
          <Box>
            <ArrowDownSection />
          </Box>
        </Box>
        <Box>
          <NewCustomTabs tabsArray={tabsArray}>
            {growthCardsData.map((item) => (
              <GrowthCard
                key={item.title}
                iconSrc={item.iconSrc}
                iconWidth={item.iconWidth}
                title={item.title}
                subtitle1={item.subtitle1}
                subtitle2={item.subtitle2}
                mainImageSrc={item.mainImageSrc}
                mainImageWidth={item.mainImageWidth}
                mainImageHeight={item.mainImageHeight}
              />
            ))}
          </NewCustomTabs>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  mainBg: {
    backgroundImage: 'url(/images/be-part-bg.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'left',
    backgroundPositionY: 'top',
    backgroundSize: 'contain',
  },
  heading: {
    lineHeight: "52.2px",
    pb: "20px",
  },
  bodyText: {
    color: theme.palette.primary.dark,
    lineHeight: "30px",
    pb: "30px",
  },
};
