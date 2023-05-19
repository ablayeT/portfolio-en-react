import { Box } from "@mui/material"
import Typography from '@mui/joy/Typography';
import { Sheet } from "@mui/joy";

export function PresentationText () {
    return( <Box display='flex' flexDirection='column' alignItems='center'  gap='20px'  >
    <Typography level='body2'justifyContent="center" fontWeight='bold' fontSize='12.5px' textAlign='left'>J'aimerais travailler en <Typography level="body1" textColor="#EE5F36" fontWeight='bold'> CDI </Typography>dans le commerce et la distribution comme conseiller en assurances ou dans l'assistanat et l'administratif comme <Typography textColor='#EE5F36'>agent administratif</Typography> </Typography>
     <Sheet level="body2"   border='1px solid orange'  >
<Typography marginBottom='5px' level="body2" paragraph='true'> enfant d'une famille de 8, je suis arrivé en France en 2018 dans le cadre de mon cursus dans une communauté religieuse où j'ai reçu une belle et riche formation humaine, intellectuelle et spirituelle.</Typography>
<Typography marginBottom='5px'  level="body2" paragraph='true'>Après un temps de réflexion, j'ai choisi de me réorienter et d'intégrer un parcours de formation qui puisse me permettre de retrouver rapidement une voie professionnelle.</Typography>
<Typography marginBottom='5px'  level="body2" paragraph='true'>Je me tourne donc vers LinkedOut pour bénéficier de son accompagnement dans ma recherche d'un emploi fiable, stable et durable afin de réaliser mes projets d'avenir.</Typography>
<Typography marginBottom='5px'  level="body2" paragraph='true'>Mon parcours atypique témoigne de ma grande polyvalence, de mon adaptabilité, d'une grande résilience et d'une détermination sans faille à atteindre mon but.</Typography>
</Sheet>
    </Box>)
}