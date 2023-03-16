import Button from '@/components/Button';
import navs from '@/utils/navigations';
import { Avatar, Box, Container, Paper, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <Container>
            <Stack sx={{ borderRadius: '40px', background: 'rgba(0, 0, 0, 0.03)', pt: '80px' }} alignItems={'center'}>
                <Typography component={'h1'} className='header_title'>
                    Advanced Amazon Relay <br />
                    Auto Booker & Refresher
                </Typography>
                <Typography component={'p'} className='header_desc'>
                    Multifunctional Amazon Relay refresher and auto booker. Unlike other auto bookers,
                    <br /> SwiftRelay gives you more options, more control, and accuracy to book loads
                </Typography>
                <Stack spacing={2} direction="row" justifyContent={'center'} sx={{ my: '30px' }}>
                    <Link href={`#${navs.subscription}`}>
                        <Button size='lg' variant="contained" sx={{ width: '200px' }}>Purchase</Button>
                    </Link>
                    <Button size='lg' variant="outlined" >Try 7 days for Free</Button>
                </Stack>
                <Stack spacing={2} direction="row" justifyContent={'space-between'} alignItems={'center'} sx={{ my: '30px', width: '80%' }}>
                    <Stack direction="row">
                        <Paper elevation={0} sx={{ padding: '10px 20px', borderRadius: '300px' }}>
                            <Image
                                src='/images/star-5.svg'
                                width='16'
                                height='15'
                                alt='star'
                            />4.3
                        </Paper>
                        <Paper variant="outlined" sx={{ borderColor: '#808080', background: 'transparent', padding: '10px 20px', borderRadius: '300px', ml: '-18px', zIndex: -1 }}>39 reviews</Paper>
                    </Stack>
                    <Stack spacing={2} direction="row" alignItems={'center'}>
                        <Typography>Available on</Typography>
                        <Image
                            src='/images/chrome-storage.png'
                            width='33'
                            height='30'
                            alt='Chrome storage logo'
                        />
                    </Stack>
                    <Stack spacing={-2.5} direction="row" alignItems={'center'}>
                        <Avatar />
                        <Avatar />
                        <Avatar />
                        <Avatar />
                        <Paper elevation={0} sx={{ padding: '10px', borderRadius: '300px', zIndex: 10, display: 'flex', alignItems: 'center' }}>
                            <Image
                                src='/images/dw.svg'
                                width='16'
                                height='20'
                                alt='star'
                            />
                            <Typography fontWeight={600} lineHeight={'20px'} sx={{ ml: '10px' }}>
                                1K+ users
                            </Typography>
                        </Paper>
                    </Stack>
                </Stack>
                <Box sx={{ borderTopLeftRadius: '40px', borderTopRightRadius: '40px', overflow: 'hidden' }}>
                    <video controls
                        alt='SwiftRelay Intro'
                        width='1020'
                        height='570' autoplay="autoplay" muted loop>
                        <source src='/images/intro.mp4' type="video/mp4" />
                        Sorry, your browser doesn&apos;t support videos.
                    </video>
                </Box>
            </Stack>
        </Container>
    );
}

export default Header;
