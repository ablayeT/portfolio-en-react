import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Box, Slider, Typography } from '@mui/joy';

function Audio () {
    return <Box display='flex' alignItems='center' width='90%' gap='15px' >
        <PlayCircleIcon sx={{color:'#F55F24'}} opacity ={0.5} />
        <Typography level='body3' sx={{color:'#F55F24'}}>00:00</Typography>
        <Slider    sx={{width: '80%' }}  size="sm"  valueLabelDisplay="auto"/>
        <Typography level='body3'>02:10</Typography>
    </Box>
}
export default Audio 