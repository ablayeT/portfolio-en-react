import { Box } from "@mui/joy";
import Button from "@mui/material/Button";

function Buttons ({onChange}) {
  console.log(onChange)

    return (
      <Box>
        <Button sx={{ background: "#F55F24" }} onClick={onChange} variant="contained">
          CONTACT
        </Button>
      </Box>
    );
  }


export default Buttons;
