import { Typography } from '@mui/material';
import React from 'react';

const SectionDescription = (props) => {
    return (
        <Typography
            component={'p'}
            sx={{
                mt: '20px',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '25px',
                textAlign: 'center',
                color: 'rgba(30, 30, 30, 0.5)',
            }}>
            {props.children}
        </Typography>
    );
}

export default SectionDescription;
