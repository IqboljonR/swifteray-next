import SectionTitle from '@/components/SectionTitle';
import { Container } from '@mui/material';
import React from 'react';
import SectionDescription from '../components/SectionDescription';

const UiDesign = () => {
    return (
        <Container sx={{ pt: '150px' }}>
            <SectionTitle>
                Clean and Simple
            </SectionTitle>
            <SectionDescription>
                Multifunctional Amazon Relay refresher and auto booker. <br /> Unlike other auto bookers, SwiftRelay gives you more options,
            </SectionDescription>
        </Container>
    );
}

export default UiDesign;
