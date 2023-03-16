import { Button as MuiButton } from '@mui/material';
import React from 'react';

const Button = (props) => {
    return (
        <MuiButton
            {...props}
            sx={{
                borderRadius: '500px',
                height: props.size == 'xs' ? '50px' : props.size == 'sm' ? '50px' : props.size == 'lg' ? '60px' : '50px',
                textTransform: 'none',
                fontWeight: "500",
                fontSize: props.size == 'xs' ? '18px' : props.size == 'sm' ? '18px' : props.size == 'lg' ? '18px' : '18px',
                px: props.size == 'xs' ? '22px' : props.size == 'sm' ? '22px' : props.size == 'lg' ? '22px' : '22px',
                ...props.sx
            }}
        >

        </MuiButton >
    );
}

export default Button;
