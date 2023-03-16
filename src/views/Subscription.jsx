import SectionTitle from '@/components/SectionTitle';
import navs from '@/utils/navigations';
import { Box, Container } from '@mui/material';
import React from 'react';
import SectionDescription from '../components/SectionDescription';

const Subscription = () => {
    return (
        <Container sx={{ pt: '150px' }} id={navs.subscription}>
            <SectionTitle>
                Subscription
            </SectionTitle>
            <SectionDescription>
                Multifunctional Amazon Relay refresher and auto booker. <br /> Unlike other auto bookers, SwiftRelay gives you more options,
            </SectionDescription>
        </Container>
    );
}

export default Subscription;
