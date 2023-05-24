// import Box from '@mui/material/Box'
import ProfileDetails from './ProfilDetails/ProfileDetails'
import SocialMedia from './ImageSocialMedia/SocialMedia'
import ImgBox from './ImageSocialMedia/ImgBox'
import { Box, Stack} from '@mui/material'
function GeneralProfilInfos () {
    return (
      <Box  display='flex' flexDirection='column'  >
        <Box  display='flex' flexDirection ='row' padding='38px' flexWrap='wrap' alignItems='center'  borderRadius='10px' alignSelf='center' backgroundColor='white' >
        <Stack flex='1'  alignItems='center' gap='22px'  padding='20px' display='flex'>
         <ImgBox flex='2' />
         <SocialMedia flex='1' />
         </Stack> 
        <Stack flex='2' padding='15px'>
         <ProfileDetails />     
        </Stack>
      </Box>
        
      </Box>
    )
}
export default GeneralProfilInfos