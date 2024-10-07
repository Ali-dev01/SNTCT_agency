import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import GradientHeading from './GradientHeading'

export default function BlogCard({ imgSrc }) {
    return (
        <Box>
            <Image src={imgSrc}
                height={377}
                width={531}
                alt='blog-img'
                objectFit="contain"
                layout="intrinsic"
            />
            <Typography sx={{ color: '#3E5F82', fontWeight: 700, pt: '24px', pb: '16px' }}>13 Sep 2024 • 5 min read</Typography>
            <GradientHeading text="What's New In SNTCT 2.10?" variant="h5" weight={700} />
            <Typography sx={{ color: '#00336B', pt: '10px' }}>We are excited to announce the release of zCart version<br /> 2.11.0, packed with new features, enhancements...</Typography>
        </Box>
    )
}
