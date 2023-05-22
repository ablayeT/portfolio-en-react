import { Box} from '@mui/joy';
import React, { useState } from 'react';
import experienceData from '../data/experienceData.json'
import CardFormationExperience from '../utils/CardFormationExperience';
// import CardFormationExperience from '../utils/CardFormationExperience';
// import CompetenceCard from '../utils/CompetenceCard';

function Experience() {
  const [experience, setFormation] =useState(experienceData)
    return (
        <Box display='flex' flexWrap='wrap' justifyContent='center' gap='20px' >
          {experience.map((experienceItem, index)=> {
            return <CardFormationExperience key={index} efData={experienceItem}/>
          })}
        </Box>
    );
}

export default Experience;