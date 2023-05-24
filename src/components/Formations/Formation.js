import React, { useState } from 'react';
import CardFormationExperience from '../Utils/Cards/CardFormationExperience';
import { Box, Stack, Typography} from '@mui/joy';
import formationData from '../../data/formationData.json'

function Formation() {

  const [formation] = useState(formationData)

    return (
    <Box backgroundColor='white' borderRadius='10px' display='flex' width='100%' padding='20px 0 20px 0' flexDirection='column' gap='20px' >  
    <Typography marginLeft='50px' level='h4'> FORMATIONS</Typography>
      <Stack display='flex' flexDirection='row'  flexWrap='wrap' gap='60px'>
      {formation.map((formationItem, index)=> {
        return <CardFormationExperience key={index} efData={formationItem} />
        })}
   </Stack>
        </Box>  
    );
}

export default Formation;
