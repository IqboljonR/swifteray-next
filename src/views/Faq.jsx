import SectionDescription from '@/components/SectionDescription';
import SectionTitle from '@/components/SectionTitle';
import navs from '@/utils/navigations';
import { Container } from '@mui/material';
import React from 'react';

const Faq = () => {
    return (
        <Container sx={{ pt: '150px' }} id={navs.faq}>
            <SectionTitle>
                Frequently Asked Questions
            </SectionTitle>
            <SectionDescription>
                Multifunctional Amazon Relay refresher and auto booker. <br /> Unlike other auto bookers, SwiftRelay gives you more options,
            </SectionDescription>
        </Container>
    );
}

export default Faq;
