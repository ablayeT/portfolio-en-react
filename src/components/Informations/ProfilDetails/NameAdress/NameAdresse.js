import { Stack, Box, Typography } from "@mui/joy"; 
import Audio from "./Audio";
 
export function NameAdresse () {
    return (<Stack display='flex' flexDirection='row' flexWrap='wrap' gap='10px'>
                <Box flex='1'>
                    <Typography sx={{color: '#F55F24'}} level="h3">Abdoulaye Toure</Typography>
                    <Typography level="h5">Paris(75)</Typography>
                </Box>
                <Box flex='2'  padding='10px'> <Audio  /></Box>
          </Stack>)
}


