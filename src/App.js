import { Stack, Box} from '@mui/material';
import './App.css';
import Infos from './components/Informations/GeneralProfilInfos';
import Presentation from './test';
import Footer from './components/Footer/Footer';
import Recommandations from './components/Recommandations/Recommandations';
import Formation from './components/Formations/Formation';
import Experience from './components/Experiences/Experience';


function App() {
  return (
    <Stack display='flex'   gap='20px' width='80%' margin='auto' > 
     <Presentation />
      <Box>
      < Infos />
      </Box>
      <Box>
          <Recommandations />
         </Box>
         <Box   width='100%' padding='20px'  >
          <Formation />
         </Box>
         <Box width='100%' padding='20px' >
          <Experience />
         </Box>
      <Box backgroundColor='white' width='100%' borderRadius='10px' marginTop='15px'>
      <Footer></Footer>
      </Box>
    </Stack>
  );
}

export default App;
