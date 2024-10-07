import GrowthCard from '@/components/GrowthCard'
import { Container } from '@mui/material'

export default function WhySntct() {
    return (
        <Container maxWidth="lg" sx={{ pt: { md: "80px", xs: "40px" } }}>
            <GrowthCard
                whySntct={true}
                iconSrc="/images/W.png"
                iconWidth={161}
                title="Why SNTCT?"
                subtitle1="Let us do all tech-savvy dirty works for you so that you can only do what you love and grow. We're a team of experts always be there "
                subtitle2="Let us do all tech-savvy dirty works for you so that you can only do what you"
                mainImageSrc='/images/why-sntct.png'
                mainImageWidth={538}
            />
        </Container>
    )
}
