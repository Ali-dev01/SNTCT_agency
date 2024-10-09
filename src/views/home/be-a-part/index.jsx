import CustomBanner from '@/components/CustomBanner'
import { Box, Container } from '@mui/material'

export default function BeAPart() {
    return (
        <Box sx={styles.mainBg}>
            <Container maxWidth="lg">
                <CustomBanner
                    homePage
                    btnText="Join us"
                    title="Be a Part of Our Creative & Digital Evolution"
                    desc="At Sntct, we’re more than just a digital marketing agency – we’re innovators in graphic design, web development, and marketing strategy. Whether you’re a creative designer, a web development expert, or a digital marketing specialist, we offer an exciting environment to grow and make an impact. Ready to join a team that’s shaping the future of digital experiences?"
                />
            </Container>
        </Box>
    )
}

const styles = {
    mainBg: {
        backgroundImage: 'url(/images/be-part-bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundSize: 'contain',
        my: 15
    },
}