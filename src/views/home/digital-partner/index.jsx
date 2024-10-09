import GradientHeading from "@/components/GradientHeading";
import ArrowDownSection from "@/icons/ArrowDownSection";
import theme from "@/theme";
import { EmailOutlined, LocationOn, PhoneOutlined } from "@mui/icons-material";
import { Box, Container, Grid2, Typography } from "@mui/material";
import Link from "next/link";
import { InlineWidget } from "react-calendly";

export default function DigitalPartner() {
    return (
        <Box sx={styles.mainBg}>
            <Container maxWidth="lg" sx={{ pt: { md: "80px", xs: "40px" } }}>
                <Box sx={{ textAlign: "center", pb: { md: "40px", xs: "20px" } }}>
                    <GradientHeading
                        text="Your Perfect Digital Partner Awaits"
                        variant="h2"
                        weight={700}
                        sx={styles.heading}
                    />
                    <Typography variant="body1" sx={styles.bodyText}>
                        Looking for a team that delivers real results? Let’s make your vision a reality.
                        <br /> Book a time with us now, and let’s start building your success together.
                    </Typography>
                    <Box sx={{ pt: '30px' }}>
                        <ArrowDownSection />
                    </Box>
                </Box>
                <Grid2 container spacing='10px'>
                    <Grid2 size={{ xs: 12, md: 4, lg: 3 }}>
                        <Box sx={styles.contactSection}>
                            <Box>
                                <Box sx={styles.contactItem}>
                                    <Box sx={styles.icon}>
                                        <EmailOutlined />
                                    </Box>
                                    <Typography variant="h5" sx={{ color: theme.palette.secondary.dark, fontWeight: 700 }}>Email</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{ color: theme.palette.primary.dark, pb: '10px' }}>Hate contact forms?</Typography>
                                    <Link href="mailto:info@sntct.com" style={styles.contactLink}>
                                        info@sntct.com
                                    </Link>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={styles.contactItem}>
                                    <Box sx={styles.icon}>
                                        <PhoneOutlined />
                                    </Box>
                                    <Typography variant="h5" sx={{ color: theme.palette.secondary.dark, fontWeight: 700 }}>Phone</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{ color: theme.palette.primary.dark, pb: '10px' }}>Hate contact forms?</Typography>
                                    <Link href="tel:+9710000000" style={styles.contactLink}>
                                        +971 000 0000
                                    </Link>
                                </Box>
                            </Box>
                            <Box>
                                <Box sx={styles.contactItem}>
                                    <Box sx={styles.icon}>
                                        <LocationOn />
                                    </Box>
                                    <Typography variant="h5" sx={{ color: theme.palette.secondary.dark, fontWeight: 700 }}>Location</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" sx={{ color: theme.palette.primary.dark, pb: '10px', lineHeight: '27px' }}>
                                        House: A1154,<br /> Lane: 12 Gulshan-e-Hadeed,<br /> Karachi, Sindh
                                    </Typography>
                                    <Link href="https://maps.google.com" target="_blank" style={styles.contactLink}>
                                        View on Google Map
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 8, lg: 9 }}>
                        <Box sx={styles.calendlyContainer}>
                            <InlineWidget
                                url="https://calendly.com/sntct-info/30min?hide_gdpr_banner=1&hide_event_type_details=1&primary_color=006edc&text_color=000000"
                                styles={styles.calendlyWidget}
                                pageSettings={{
                                    hideEventTypeDetails: false,
                                    hideLandingPageDetails: true,
                                    hideGdprBanner: true, // Hides the cookie settings
                                    hideTimezone: true,   // Hides the timezone heading
                                }}
                            />
                            {/* <InlineWidget url="https://calendly.com/sntct-info/30min?hide_event_type_details=1&primary_color=006edc" styles={styles.calendlyWidget} /> */}
                        </Box>
                    </Grid2>
                </Grid2>
            </Container>
        </Box>
    )
}


const styles = {
    mainBg: {
        backgroundImage: 'url(/images/digital-partner-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'right',
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
    },
    contactSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        pb: '20px'
    },
    icon: {
        color: theme.palette.secondary.dark,
        background: theme.palette.secondary.light,
        height: '56px',
        width: '56px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        flexShrink: 0
    },
    contactLink: {
        color: theme.palette.primary.main,
        textDecoration: 'underline',
        fontWeight: 500,

    },
    contactText: {
        color: theme.palette.primary.dark,
    },
    calendlyContainer: {
        padding: { xs: '14px', lg: '14px 60px' },
        borderRadius: '24px',
        background: theme.palette.common.white
    },
    calendlyWidget: {
        minWidth: '100%',
        height: '700px', // adjust as per your design
        // height: '605px', // adjust as per your design
        margin: 0, // Ensure no margin is applied
        padding: 0, // Ensure no padding is applied
    },
};
