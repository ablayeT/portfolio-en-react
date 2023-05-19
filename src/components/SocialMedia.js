import { Stack } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box} from '@mui/material'
import { IconButton } from "@mui/joy";
// import { createTheme } from '@mui/material/styles'


function SocialMedia () {
  
    return (<Stack display='flex' flexDirection='column'  alignItems='center'margin='10px' justifyContent='center'>
        <Box textAlign='center' marginBottom='20px'>Pour me donner plus de posibilité, n'hésitez pas à partager mon CV</Box>
      <Box display='flex' gap='40px'> 
     <IconButton color="danger"  ><InstagramIcon sx={{color : '#FFFFFF'}} /></IconButton>
     <IconButton color="danger"><FacebookIcon sx={{color : '#FFFFFF'}} /></IconButton>
     <IconButton color="danger"><TwitterIcon sx={{color : '#FFFFFF'}}  /></IconButton>
      </Box>
    </Stack>
    )
}
export default SocialMedia