// import Box from '@mui/material/Box'
import ProfileDetails from './ProfileDetails'
import SocialMedia from './SocialMedia'
import ImgBox from './imgBox'
import { Box, Stack} from '@mui/material'
function Infos () {
    return (
        <Box  display='flex' flexDirection ='row'alignItems='center' alignSelf='center' width='80%'   backgroundColor='rgba(255, 255, 255, 0.9)' >
        <Stack flex='1'  alignItems='center' boxSizing='border-box' padding='20px' display='flex' >
         <ImgBox flex='2' />
         <SocialMedia flex='1' />
         </Stack> 
        <Stack flex='2'>
         <ProfileDetails />     
        </Stack>
      </Box>
     
    )
}
export default Infos