import { Card, Typography, Stack, Box } from "@mui/joy"
import CompetenceCard from "./CompetenceCard"


function CardFormationExperience ({efData}) {

    return (
      <Box display='flex' flexWrap='wrap'>
        <Card variant="outlined"  sx={{ width: 400,border:'1px solid whitesmoke' }}  >
             <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          {efData.formationName} {efData.experienceName}
        </Typography>
        <Typography level="body2">{efData.ecole} {efData.enterprise}</Typography>
        <Typography  aria-label="bookmark Bahamas Islands"  sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
          <Typography>{efData.date} {efData.eDate}</Typography>
        </Typography>
        <Stack sx={{ my: 2 }}>
            <Typography>{efData.fDescription} {efData.eDescription}</Typography>
        </Stack>
        <CompetenceCard>
                <Stack display='flex' flexDirection='row' gap='15px' >
                <Typography level="body3" border='1px solid none' backgroundColor='rgba(238, 95, 54, 0.1)' padding='5px'  fontWeight='400' fontSize='14px'  textColor="#EE5F36" borderRadius='5px'>{efData.module1}{efData.competence1}</Typography>
                <Typography level="body3" border='1px solid none' backgroundColor='rgba(238, 95, 54, 0.1)' padding='5px'  fontWeight='400' fontSize='14px'  textColor="#EE5F36" borderRadius='5px'>{efData.module2}{efData.competence2}</Typography>
                <Typography level="body3" border='1px solid none' backgroundColor='rgba(238, 95, 54, 0.1)' padding='5px'  fontWeight='400' fontSize='14px'  textColor="#EE5F36" borderRadius='5px'>{efData.module3}{efData.competence3}</Typography>
                </Stack>
              </CompetenceCard>
      </Card>
      </Box>
    )
}
export  default CardFormationExperience