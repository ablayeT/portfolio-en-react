import { Box } from "@mui/material"
import CompetenceCard from "../../../Utils/Cards/CompetenceCard"
import { Stack, Typography } from "@mui/joy"
export function Competence () {
    return <Box>
               <CompetenceCard > 
                <Stack display='flex' flexDirection='row'  flexWrap='wrap' gap='25px' alignItems='center' justifyContent='left' marginBottom='15px'>
                <Typography level="body3" fontWeight='600'  lineHeight='19px' fontSize='14px' padding='4px' border='1px solid none'borderRadius='5px' textColor="#EE5F36" backgroundColor="rgba(238, 95, 54, 0.1);">Autonomone</Typography>
                <Typography level="body3" fontWeight='600' lineHeight='19px' fontSize='14px' padding='4px' border='1px solid none'borderRadius='5px' textColor="#EE5F36" backgroundColor="rgba(238, 95, 54, 0.1);">Consciencieux</Typography>
                <Typography level="body3" fontWeight='600' lineHeight='19px' fontSize='14px' padding='4px' border='1px solid none'borderRadius='5px' textColor="#EE5F36" backgroundColor="rgba(238, 95, 54, 0.1);">à l'écoute</Typography>
                <Typography level="body3" fontWeight='600' lineHeight='19px' fontSize='14px' padding='4px' border='1px solid none'borderRadius='5px' textColor="#EE5F36" backgroundColor="rgba(238, 95, 54, 0.1);">Ponctuel</Typography>
                <Typography level="body3" fontWeight='600' lineHeight='19px' fontSize='14px' padding='4px' border='1px solid none'borderRadius='5px' textColor="#EE5F36" backgroundColor="rgba(238, 95, 54, 0.1);">Calme</Typography>
                </Stack>
              </CompetenceCard> 
           </Box>
}
