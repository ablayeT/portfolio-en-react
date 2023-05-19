import { Box, Typography } from '@mui/joy';
import React from 'react';

function CompetenceCard({title,children}) {
    return (
        <Box>
            <Typography>{title}</Typography>
            {children}
        </Box>
    );
}

export default CompetenceCard;