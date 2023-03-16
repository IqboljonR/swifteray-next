import SectionTitle from '@/components/SectionTitle';
import { Container, Typography } from '@mui/material';
import React from 'react';
import SectionDescription from '../components/SectionDescription';

const HowItWorks = () => {
    return (
        <Container sx={{ pt: '150px' }}>
            <SectionTitle>
                How It Works
            </SectionTitle>
            <SectionDescription>
                Multifunctional Amazon Relay refresher and auto booker. <br /> Unlike other auto bookers, SwiftRelay gives you more options,
            </SectionDescription>
        </Container>
    );
}

export default HowItWorks;
