// import Box from '@mui/material/Box'
import Experience from './Experience'
import Formation from './Formation'
import ProfileDetails from './ProfileDetails'
import Recommandations from './Recommandations'
import SocialMedia from './SocialMedia'
import ImgBox from './imgBox'
import { Box, Stack} from '@mui/material'
function Infos () {
    return (
      <Box  display='flex' flexDirection='column' gap='30px'>
        <Box  display='flex' flexDirection ='row' flexWrap='wrap' alignItems='center' borderRadius='10px' alignSelf='center' backgroundColor='white' >
        <Stack flex='1'  alignItems='center'  padding='20px' display='flex'>
         <ImgBox flex='2' />
         <SocialMedia flex='1' />
         </Stack> 
        <Stack flex='2' padding='15px'>
         <ProfileDetails />     
        </Stack>
      </Box>
         <Box>
          <Recommandations />
         </Box>
         <Box  backgroundColor='white' borderRadius='10px'padding='10px' >
          <Formation />
         </Box>
         <Box backgroundColor='white' borderRadius='10px' padding='10px' >
          <Experience />
         </Box>
      </Box>
    )
}
export default Infos