// import Container from '@mui/material/Container'
import profilImage  from '../assets/images/photo-profil.jpeg'
import '../assets/styles/imgBox.css'
import {  Box, Stack } from '@mui/material'
// import Image from 'mui-image'
function ImgBox () {
    return ( <Stack  sx={{ transform: 'rotate(7deg)' }} position='relative' backgroundColor='rgba(238, 95, 54, 0.1)'  borderRadius='1000px 909px 850px 1100px' width='220px' height='345px'display='flex'justifyContent='center'  margin='10px'>
         <Box  sx={{ transform: 'rotate(-7deg)' }} position='static' component='img'  borderRadius='859px 909px 850px 900px' width='200px' height='300px' src={profilImage} top='30px' left='0px' alt='cvImage'/> 
         </Stack> 
          ) 
}
export default ImgBox