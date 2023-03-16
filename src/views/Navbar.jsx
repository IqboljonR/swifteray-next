import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Button from '../components/Button';
import Image from 'next/image';
import navs from '@/utils/navigations';

const Navbar = () => {
    return (
        <Container>
            <Stack spacing={4} direction='row' justifyContent='space-between' alignItems={'center'}>
                <Link href="/">
                    <Image src={'/images/logo.png'} alt='SwiftRelay logo' width={152} height={29} />
                </Link>
                <Stack spacing={4} direction='row' justifyContent='space-between' alignItems={'center'}>
                    <Link href={`#${navs.faq}`}>FAQ</Link>
                    <Link href={`#${navs.reviews}`}>Reviews</Link>
                    <Link href={`#${navs.features}`}>Features</Link>
                    <Link target="_blank" rel="noopener noreferrer" href={navs.download}>
                        <Button color='primary' variant="contained" sx={{ textTransform: 'none' }}>Download</Button>
                    </Link>
                </Stack>
            </Stack>
        </Container>
    );
}

export default Navbar;
