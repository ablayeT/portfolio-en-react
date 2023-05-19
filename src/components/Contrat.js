import { Box } from '@mui/joy';
import dataContrat  from '../data/contratData.json'
import { useState } from "react"
import ContratCard from "../utils/ContratCard";
export function Contrat () {
    const [contrat, setContrat] = useState(dataContrat)

    const newContrat=(newDataContrat) => {
        setContrat(newDataContrat)
       
    }

    return <Box>
        {contrat.map(contratElem=>  {
            return <ContratCard  callBack={newContrat} contratElement={contratElem} />
        })}
            
           </Box>
}