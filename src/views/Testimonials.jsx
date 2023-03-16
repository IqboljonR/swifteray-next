import SectionDescription from '@/components/SectionDescription';
import SectionTitle from '@/components/SectionTitle';
import navs from '@/utils/navigations';
import { Container } from '@mui/material';
import React from 'react';

const Testimonials = () => {
    return (
        <Container sx={{ pt: '150px' }} id={navs.reviews}>
        <SectionTitle>
            Testimonials
        </SectionTitle>
        <SectionDescription>
            Multifunctional Amazon Relay refresher and auto booker. <br /> Unlike other auto bookers, SwiftRelay gives you more options,
        </SectionDescription>
    </Container>
        
    );
}

export default Testimonials;
