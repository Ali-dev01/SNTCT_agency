import AlgoliaIcon from '@/icons/AlgoliaIcon';
import GoogleIcon from '@/icons/GoogleIcon';
import MicrosoftIcon from '@/icons/MicrosoftIcon';
import PaypalIcon from '@/icons/PaypalIcon';
import StripeIcon from '@/icons/StripeIcon';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

// Keyframes for infinite scroll animation
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export default function LogosScroller() {
    const logos = [StripeIcon, GoogleIcon, AlgoliaIcon, PaypalIcon, MicrosoftIcon];

    return (
        <Box sx={{ px: { md: '80px', sm: '40px', xs: '20px' }, py: { md: '40px', xs: '20px' } }}>
            <Box sx={styles.container}>
                <Box sx={{ ...styles.blurOverlay, ...styles.blurLeft }} />
                <Box sx={styles.logosWrapper}>
                    {logos.map((Logo, index) => (
                        <Logo key={`${index}`} />
                    ))}
                    {logos.map((Logo, index) => (
                        <Logo key={`${index}-duplicate`} />
                    ))}
                </Box>
                <Box sx={{ ...styles.blurOverlay, ...styles.blurRight }} />
            </Box>
        </Box>
    );
};

const styles = {
    container: {
        position: 'relative',
        display: 'flex',
        overflow: 'hidden',
        width: '100%',
        padding: '20px 80px',
    },
    logosWrapper: {
        display: 'flex',
        alignItems: 'center',
        animation: `${scroll} 60s linear infinite`,  // Slower speed (60s)
        whiteSpace: 'nowrap',
        gap: { md: '6rem', sm: '3rem', xs: '2rem' }
    },
    logo: {
        margin: { md: '0 4rem', sm: '0 2rem', xs: '0 1rem' },
        fontSize: '2rem',
        fontWeight: 600,
        color: '#2E3A59',
        textTransform: 'capitalize',
    },
    blurOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: { md: '80px', xs: '40px' }, // Adjust the width of the blur to 80px to match the padding
        pointerEvents: 'none',
        zIndex: 2, // Ensure the blur is over the logos
    },
    blurLeft: {
        left: 0,
        background: 'linear-gradient(90deg, rgba(230, 242, 255, 1) 0%, rgba(230, 242, 255, 0) 100%)',
    },
    blurRight: {
        right: 0,
        background: 'linear-gradient(270deg, rgba(230, 242, 255, 1) 0%, rgba(230, 242, 255, 0) 100%)', // 270deg for the right side gradient
    },
};