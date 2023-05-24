import { Box, Stack, Typography} from '@mui/joy';
import React, { useState } from 'react';
import experienceData from '../../data/experienceData.json'
import CardFormationExperience from '../Utils/Cards/CardFormationExperience';
// import CardFormationExperience from '../utils/CardFormationExperience';
// import CompetenceCard from '../utils/CompetenceCard';
  
function Experience() {
  const [experience] = useState(experienceData)
    return (
        <Box display='flex'  flexDirection='column' gap='20px'  borderRadius='10px'>
          <Typography marginLeft='50px' level='h4'>EXPERIENCES</Typography>
         <Stack display='flex' flexDirection='row' flexWrap='wrap' justifyContent='center' gap='60px' >
           {experience.map((experienceItem, index)=> {
            return <CardFormationExperience  key={index} efData={experienceItem}/>
          })}
          </Stack>
        </Box>
    );
}

export default Experience;