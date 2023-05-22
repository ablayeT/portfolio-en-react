import React, { useState } from 'react';
import CardFormationExperience from '../utils/CardFormationExperience';
import { Box } from '@mui/joy';
import formationData from '../data/formationData.json'

function Formation() {
  const [formation, setFormation] = useState(formationData)

  // function displayFormation(){
  //   setFormation()
  // }
 
    return (<Box display='flex' justifyContent='center' flexWrap='wrap'  gap='20px' >
      {formation.map((formationItem, index)=> {
        return <CardFormationExperience key={index} efData={formationItem} />
})}
        </Box>
    );
}

export default Formation;
