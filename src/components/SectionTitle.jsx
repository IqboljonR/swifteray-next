import { Typography } from '@mui/material';
import React from 'react';

const SectionTitle = (props) => {
    return (
        <Typography
            component={'h2'}
            sx={{
                fontWeight: '700',
                fontSize: '60px',
                lineHeight: '73px',
                textAlign: 'center',
                color: '#000000',
            }}>
            {props.children}
        </Typography>
    );
}

export default SectionTitle;
