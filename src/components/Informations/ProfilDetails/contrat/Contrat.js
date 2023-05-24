import { Box } from '@mui/joy';
import dataContrat  from '../../../../data/contratData.json'
import { useState } from "react"
import ContratCard from "../../../Utils/Cards/ContratCard";
export function Contrat () {
    const [contrat, setContrat] = useState(dataContrat)

    const newContrat=(newDataContrat) => {
        setContrat(newDataContrat)
       
    }

    return <Box flexWrap='wrap'>
        {contrat.map((contratElem, index)=>  {
            return <ContratCard key={index} callBack={newContrat} contratElement={contratElem} />
        })}
            
           </Box>
}