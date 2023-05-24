import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Box, Typography } from '@mui/joy';
import  DynamicCSSVariables  from '../../../Utils/DynamicCSSVariables';

function Audio () {
    return( <Box display='flex' alignItems='center' width='90%' gap='15px' >
        <PlayCircleIcon sx={{color:'#F55F24'}} opacity ={0.5} />
        <Typography level='body3' sx={{color:'#F55F24'}}>00:00</Typography>
            <DynamicCSSVariables />
        <Typography level='body3'>02:10</Typography>
    </Box>
    )
}
export default Audio 