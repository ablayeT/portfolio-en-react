import { Stack, Box } from "@mui/material";
import "./App.css";
import Infos from "./components/Informations";
import Footer from "./components/Footer";
import Recommandations from "./components/Recommandations";
import Formation from "./components/Formations/index";
import Experience from "./components/Experiences/index";

function App() {
  return (
    <Stack display="flex" gap="20px" width="100%"  margin="auto">
      <Box  padding='20px' display='flex' justifyContent='center'>
        <Infos />
      </Box>
      <Box>
        <Recommandations />
      </Box>
      <Box display='flex' justifyContent='center' padding="20px" >
        <Formation />
      </Box>
      <Box display='flex' justifyContent='center' padding="20px" >
        <Experience />
      </Box>
      <Box
        backgroundColor="white"
        width="100%"
        borderRadius="10px"
        marginTop="15px"
      >
        <Footer></Footer>
      </Box>
    </Stack>
  );
}

export default App;
