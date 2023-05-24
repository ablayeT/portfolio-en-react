// import Container from '@mui/material/Container'
import { Box } from '@mui/joy'
import profilImage  from '../../../assets/images/photo-profil.jpeg'
import { Stack } from '@mui/material'
// import Image from 'mui-image'
function ImgBox () {
    return ( <Stack  sx={{ transform: 'rotate(9deg)' }} position='relative' backgroundColor='rgba(238, 95, 54, 0.1)'  borderRadius='859px 909px 729px 659px' width='270px' height='370px'display='flex'justifyContent='center'  margin='10px'>
         <Box  sx={{ transform: 'rotate(-9deg)'}} position='static' borderRadius='859px 909px 729px 659px'  component='img' width='250px' height='310px' srcSet={profilImage}  top='30px' left='0px' alt='cvImage'/> 
         </Stack> 
          ) 
}
export default ImgBox